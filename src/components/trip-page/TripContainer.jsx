import React from "react";
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle } from "reactstrap";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";


const TripContainer = (props) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    const tripName = props.tripName
    const tripId = props.tripId
    const date = props.date
    const locations = props.locations
    return (

        <div className="d-flex justify-content-center align-items-center ">
            <Card className="my-2">
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/900/180"
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {tripName}
                    </CardTitle>
                    <CardText className="cardTextInTripContainer">
                        {
                            locations?.map((loc, i) => {
                                let x = ","
                                if (i === locations.length - 1) {
                                    x = "."
                                }

                                return (
                                    <span>{loc.name}{x} </span>
                                )
                            })
                        }
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                            Created at {date.slice(0, 10)}
                        </small>
                    </CardText>
                    <CardFooter className="d-flex w-100 justify-content-end">
                        <Button onClick={() => navigate(`${tripId}`)}>{t("trips-container.go-to-trip-button")}</Button>
                    </CardFooter>
                </CardBody>
            </Card>
        </div>
    )
}


export default TripContainer
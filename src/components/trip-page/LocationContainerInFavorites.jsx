import React from "react";
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle } from "reactstrap";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";


const LocationContainerInFavorites = (props) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    const name = props.name
    const desc = props.desc
    const photo = props.photo
    const id = props.id
    return (

        <div className="d-flex justify-content-center align-items-center  m-3">
            <Card className="my-2">
                <CardImg
                    alt="Card image cap"
                    src={photo}
                    style={{
                        height: 350
                    }}
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {name}
                    </CardTitle>
                    <CardText className="cardTextInTripContainer">
                        {desc.slice(0, 280)}...
                    </CardText>
                    <CardFooter className="d-flex w-100 justify-content-end">
                        <Button onClick={() => navigate(`/location/${id}`)}>Go to location</Button>
                    </CardFooter>
                </CardBody>
            </Card>
        </div>
    )
}


export default LocationContainerInFavorites
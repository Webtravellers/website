import React from "react";
import { useNavigate } from "react-router";
import { Button, Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from "reactstrap";

const LocationContainer = (props) => {
    const navigate = useNavigate()
    const name = props.name
    const photo = props.photo
    const desc = props.desc
    const id = props.id
    console.log(id);
    return (
        <Card className="m-1 p-2"
            style={{
                width: '18rem',
            }}
        >
            <CardBody>
                <CardTitle tag="h5">
                    {name}
                </CardTitle>
            </CardBody>
            <img
                alt="Card cap"
                src={photo}
                width="100%"
                height="200px"
            />
            <CardBody>
                <CardText>
                    {desc.slice(0, 70)}...
                </CardText>
                <Button onClick={() => navigate(`/location/${id}`)}> See location</Button>
            </CardBody>
        </Card>
    )
}

export default LocationContainer
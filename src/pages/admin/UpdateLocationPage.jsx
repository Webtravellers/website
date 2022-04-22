import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import useService from '../../hooks/useService'
import CityService from '../../services/cityService'
import LocationService from '../../services/locationService'
import LocationTypeService from '../../services/locationTypeService'

const UpdateLocationPage = () => {
    const { id } = useParams()
    const [cities] = useService(new CityService().getCities.bind(null))
    const [types] = useService(new LocationTypeService().getTypes.bind(null))
    const [location] = useService(new LocationService().getById.bind(null, id))

    const handleAddLocationSubmit = (values) => {
        const data = {
            _id: id,
            ...values,
            location: {
                coordinates: values.coordX && values.coordY ? [values.coordX, values.coordY] : location.location.coordinates,
                type: "Point"
            }
        }

        console.log(data)
        const locationService = new LocationService()
        locationService.updateLocation(id, data).then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <h1>Update Location</h1>
            <div className='my-5'>
                <Row className='justify-content-center'>
                    <Col xs={6}>
                        <Formik
                            initialValues={{}}
                            onSubmit={handleAddLocationSubmit}
                        >
                            {props => (
                                <Form>
                                    <FormGroup>
                                        <Label>Location Name</Label>
                                        <Input
                                            defaultValue={location?.name}
                                            id="name"
                                            placeholder="Location name"
                                            type="text"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="city">City</Label>
                                        <Input
                                            defaultValue={location?.city._id}
                                            className='form-control'
                                            id="city"
                                            name="city"
                                            type="select"
                                            onChange={props.handleChange}
                                        >
                                            <option>Select City</option>
                                            {cities?.map(city => (
                                                <option selected={city._id === location?.city} key={city.cityName} value={city._id}>{city.cityName}</option>
                                            ))}
                                        </Input>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="location">Location Types</Label>
                                        <Input
                                            defaultValue={location?.type._id}
                                            className='form-control'
                                            id="location"
                                            name="locationType"
                                            type="select"
                                            onChange={props.handleChange}
                                        >
                                            <option>Select Type</option>
                                            {types?.map(type => (
                                                <option key={type.name} value={type._id}>{type.name}</option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Coordinates</Label>
                                        <div className='d-flex'>
                                            <Input
                                                defaultValue={location?.location.coordinates[0]}
                                                id="coordX"
                                                placeholder="x"
                                                type="number"
                                                onChange={props.handleChange}
                                            />
                                            <Input
                                                defaultValue={location?.location.coordinates[1]}
                                                id="coordY"
                                                placeholder="y"
                                                type="number"
                                                onChange={props.handleChange}
                                            />
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Description</Label>
                                        <div className='d-flex'>
                                            <Input
                                                defaultValue={location?.desc}
                                                id="desc"
                                                name="desc"
                                                placeholder="Description"
                                                type="textarea"
                                                onChange={props.handleChange}
                                            />
                                        </div>
                                    </FormGroup>
                                    <Button color='success' type='button' onClick={props.handleSubmit}>Add</Button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default UpdateLocationPage
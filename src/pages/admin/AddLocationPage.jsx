import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import useService from '../../hooks/useService'
import CityService from '../../services/cityService'
import LocationService from '../../services/locationService'
import LocationTypeService from '../../services/locationTypeService'

const AddLocationPage = () => {
    const [cities] = useService(new CityService().getCities.bind(null))
    const [types] = useService(new LocationTypeService().getTypes.bind(null))

    const handleAddLocationSubmit = (values) => {
        const data = {
            ...values,
            location: {
                coordinates: [values.coordX, values.coordY],
                type: "Point"
            }
        }

        const locationService = new LocationService()
        locationService.addLocation(data).then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <h1>Add Location</h1>
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
                                            id="name"
                                            placeholder="Location name"
                                            type="text"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="city">City</Label>
                                        <Input
                                            className='form-control'
                                            id="city"
                                            name="city"
                                            type="select"
                                            onChange={props.handleChange}
                                        >
                                            <option>Select City</option>
                                            {cities?.map(city => (
                                                <option key={city.cityName} value={city._id}>{city.cityName}</option>
                                            ))}
                                        </Input>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="location">Location Types</Label>
                                        <Input
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
                                                id="coordX"
                                                placeholder="x"
                                                type="number"
                                                onChange={props.handleChange}
                                            />
                                            <Input
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

export default AddLocationPage
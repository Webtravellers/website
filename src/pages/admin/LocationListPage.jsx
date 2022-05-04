import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from 'reactstrap'
import CityService from '../../services/cityService';
import LocationService from '../../services/locationService'

const LocationListPage = () => {

    let navigate = useNavigate();

    const [locations, setLocations] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {
        const locationService = new LocationService()
        const cityService = new CityService()

        locationService.getLocations().then(res => {
            setLocations(res.data.data)
            console.log(res.data.data);
        })

        cityService.getCities().then(res => {
            setCities(res.data.data)
            console.log(res.data.data);
        })
    }, [])

    const handleChangeStatus = (id) => {
        const locationService = new LocationService()
        locationService.deleteLocation(id)

        locationService.getLocations().then(res => {
            setLocations(res.data.data)
            console.log(res.data.data);
        })


    }
    return (
        <div>
            <h1>Location List</h1>
            <div className='mt-5 d-flex justify-content-end'>
                <Button color='primary' onClick={() => navigate("add")}>New Location</Button>
            </div>
            <div className='my-5'>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map(location => (
                            <tr>
                                <td>{location.name}</td>
                                <td >{(cities.find(element => element?._id === location?.city)?.cityName)}</td>
                                <td>{location.type.map(t => t.name).toString()}</td>
                                <td>{location.desc?.slice(0, 50)}</td>
                                <td>{(location.status) ? <i className="fa-solid fa-circle"></i> : <i class="fa-solid fa-circle-notch"></i>}</td>
                                <td>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav className="nav-link-icon">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </DropdownToggle>
                                        <DropdownMenu
                                            aria-labelledby="navbar-default_dropdown_1"
                                            className="dropdown-menu-arrow"
                                            right
                                        >
                                            <DropdownItem onClick={() => navigate("update/" + location._id)}>Update</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem onClick={() => handleChangeStatus("" + location._id)}>Change Status</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default LocationListPage
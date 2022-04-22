import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from 'reactstrap'
import LocationService from '../../services/locationService'

const LocationListPage = () => {

    let navigate = useNavigate();

    const [locations, setLocations] = useState([])

    useEffect(() => {
        const locationService = new LocationService()

        locationService.getLocations().then(res => {
            setLocations(res.data.data)
        })
    }, [])
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map(location => (
                            <tr>
                                <td>{location.name}</td>
                                <td>{location.city.cityName}</td>
                                <td>{location.type.map(t => t.name).toString()}</td>
                                <td>{location.desc?.slice(0, 50)}</td>
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
                                            <DropdownItem onClick={() => navigate("update/"+location._id)}>Update</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Change Status</DropdownItem>
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
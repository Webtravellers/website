import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from 'reactstrap'
import UserService from '../../services/users'

const UsersListPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const userService = new UserService()
        userService.getUsers().then(res => {
            setUsers(res.data.data)
        })
    })



    return (
        <div>
            <h1>Users Page</h1>
            <div className='my-5'>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{(user.status) ? <p>true</p> : <p>false</p>}</td>
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
                                            <DropdownItem >Change Status</DropdownItem>
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

export default UsersListPage
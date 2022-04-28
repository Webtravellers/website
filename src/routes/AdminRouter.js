import React from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "../layouts/AdminLayout";
import AddLocationPage from "../pages/admin/AddLocationPage";
import LocationListPage from "../pages/admin/LocationListPage";
import UpdateLocationPage from "../pages/admin/UpdateLocationPage";
import UsersListPage from "../pages/admin/UsersListPage";
import AboutUsPage from "../pages/AboutUsPage";
const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/" element={<h1>Admin Dashboard</h1>} />
                <Route path="/users" element={<UsersListPage />} />
                <Route path="/locations" element={<LocationListPage />} />
                <Route path="/locations/add" element={<AddLocationPage />} />
                <Route path="/locations/update/:id" element={<UpdateLocationPage />} />
                <Route path ="/AboutUsPage" element = {<AboutUsPage />}/>
            </Route>
        </Routes>
    )
}

export default AdminRouter
import React from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "../layouts/AdminLayout";
import AddLocationPage from "../pages/admin/AddLocationPage";
import LocationListPage from "../pages/admin/LocationListPage";
import UpdateLocationPage from "../pages/admin/UpdateLocationPage";
const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/" element={<h1>Admin Dashboard</h1>} />
                <Route path="/locations" element={<LocationListPage />} />
                <Route path="/locations/add" element={<AddLocationPage />} />
                <Route path="/locations/update/:id" element={<UpdateLocationPage />} />
            </Route>
        </Routes>
    )
}

export default AdminRouter
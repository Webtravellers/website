import React from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "../layouts/AdminLayout";
import AddLocationPage from "../pages/admin/AddLocationPage";
import LocationListPage from "../pages/admin/LocationListPage";
const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/" element={<h1>Admin Dashboard</h1>} />
                <Route path="/locations" element={<LocationListPage />} />
                <Route path="/locations/add" element={<AddLocationPage />} />
            </Route>
        </Routes>
    )
}

export default AdminRouter
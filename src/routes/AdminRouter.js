import React from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "../layouts/AdminLayout";
import LocationListPage from "../pages/admin/LocationListPage";
const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/" element={<h1>Admin Dashboard</h1>} />
                <Route path="/locations" element={<LocationListPage />} />
            </Route>
        </Routes>
    )
}

export default AdminRouter
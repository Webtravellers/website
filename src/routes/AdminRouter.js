import React from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "../layouts/AdminLayout";
const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/" element={<h1>Admin Dashboard</h1>} />
                <Route path="/test-link" element={<h1>Test Page</h1>} />
            </Route>
        </Routes>
    )
}

export default AdminRouter
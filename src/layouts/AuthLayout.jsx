import React from "react"
import { Outlet } from "react-router"

const AuthLayout = () => {
    return (
        <div className="fullpage auth-gradient-bg d-flex flex-column min-vh-100">
            <Outlet />
        </div>
    )
}

export default React.memo(AuthLayout)
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import { CookieTypes } from '../services/cookieService'

function ProtectedRoute({ roles }) {
    const { auth: { user } } = useSelector(state => state)
    const isLogin = Cookies.get(CookieTypes.AUTH) && !!user

    if (!isLogin) {
        return <Navigate to="/users/signin" replace />
    }

    // const isAccess = user && user.role && roles?.includes(user.role)

    // if (!isAccess) {
    //     return <Navigate to="/forbidden" replace />
    // }

    return <Outlet />
}

export default ProtectedRoute
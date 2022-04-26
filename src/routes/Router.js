import React from 'react'
import { Routes, Route } from 'react-router'
import BaseLayout from '../layouts/BaseLayout'
import HomePage from '../pages/HomePage'
import Signup from '../pages/auth/Signup'
import Signin from '../pages/auth/Signin'
import AuthLayout from '../layouts/AuthLayout'

const AdminRouter = React.lazy(() => import("./AdminRouter"))

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<AuthLayout />} >
                <Route exact path='' element={<HomePage />} />
            </Route>
            <Route path='users' element={<BaseLayout />}>
                <Route path='signup' element={<Signup />} />
                <Route path='signin' element={<Signin />} />
            </Route>
            <Route path='dashboard/*' element={
                <React.Suspense fallback={<p>...</p>}>
                    <AdminRouter />
                </React.Suspense>
            } />
        </Routes>
    )
}

export default React.memo(Router)
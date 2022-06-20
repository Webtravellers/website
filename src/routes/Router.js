import React from 'react'
import { Routes, Route } from 'react-router'
import BaseLayout from '../layouts/BaseLayout'
import DiscoverPage from '../pages/DiscoverPage'
import HomePage from '../pages/HomePage'
import LocationPage from '../pages/LocationPage'
import AccountPage from '../pages/user/AccountPage'
import IndividualPostPage from '../pages/IndividualPostPage'
import FilteringPage from '../pages/FilteringPage'
import SigninPage from '../pages/auth/SigninPage'
import SignupPage from '../pages/auth/SignupPage'
import AuthLayout from '../layouts/AuthLayout'

const AdminRouter = React.lazy(() => import("./AdminRouter"))

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />} >
                <Route exact path='' element={<HomePage />} />
                <Route exact path='location' element={<LocationPage />} />
                <Route exact path='discover' element={<DiscoverPage />} />
                <Route exact path='account' element={<AccountPage />} />
                <Route exact path='post' element={<IndividualPostPage />} />
                <Route exact path='filtering' element={<FilteringPage />} />
                <Route path='users' element={<AuthLayout />}>
                    <Route path='signup' element={<SignupPage />} />
                    <Route path='signin' element={<SigninPage />} />
                </Route>
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
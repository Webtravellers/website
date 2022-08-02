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
import ProtectedRoute from '../hoc/ProtectedRoute'
import { ROLES } from '../contants'
import UpdateUserInfo from '../pages/user/UpdateUserInfo'
const AdminRouter = React.lazy(() => import("./AdminRouter"))

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />} >
                <Route exact path='' element={<HomePage />} />
                <Route exact path='location/:id' element={<LocationPage />} />
                <Route exact path='discover' element={<DiscoverPage />} />
                <Route exact path='post' element={<IndividualPostPage />} />
                <Route exact path='filtering' element={<FilteringPage />} />
                <Route path='users' element={<AuthLayout />}>
                    <Route path='signup' element={<SignupPage />} />
                    <Route path='signin' element={<SigninPage />} />
                </Route>
                {/*Giriş yapmış tüm kullanıcıların erişebileceği linkler */}
                <Route element={<ProtectedRoute roles={Object.values(ROLES)} />}>
                    <Route exact path='bi/:id' element={<AccountPage />} />
                    <Route exact path='bi/:id/update' element={<UpdateUserInfo />} />
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
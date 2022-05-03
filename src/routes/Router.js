import React from 'react'
import { Routes, Route } from 'react-router'
import BaseLayout from '../layouts/BaseLayout'
import HomePage from '../pages/HomePage'
import LocationPage from '../pages/LocationPage'
import AccountPage from '../pages/user/AccountPage'
import IndividualPostPage from '../pages/IndividualPostPage'

const AdminRouter = React.lazy(() => import("./AdminRouter"))

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />} >
                <Route exact path='' element={<HomePage />} />
                <Route exact path='location' element={<LocationPage />} />
                <Route exact path='account' element={<AccountPage />} />
                <Route exact path='post' element={<IndividualPostPage />} />

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
import React from 'react'
import { Routes, Route } from 'react-router'
import BaseLayout from '../layouts/BaseLayout'
import DiscoverPage from '../pages/DiscoverPage'
import HomePage from '../pages/HomePage'
import LocationPage from '../pages/LocationPage'

const AdminRouter = React.lazy(() => import("./AdminRouter"))

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />} >
                <Route exact path='' element={<HomePage />} />
                <Route exact path='location' element={<LocationPage />} />
                <Route exact path='discover' element={<DiscoverPage />} />
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
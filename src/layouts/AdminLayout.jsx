import React from "react"
import { Outlet } from 'react-router-dom'
import { Container } from 'reactstrap'
import Brand from "../components/brands/Brand"
import SidebarNavItem from "../components/navbars/SidebarNavItem"
import { Link } from 'react-router-dom'
const AdminLayout = () => {
    return (
        <div className="dashboard min-vh-100 d-flex flex-column">
            <aside className="sidebar bg-dark text-center">
                <Link to="">
                    <Brand />
                </Link>
                <nav className="mt-5 d-block">
                    <ul className="p-0 m-0 text-left">
                        <SidebarNavItem to="test-link" text="Test Item" />
                    </ul>
                </nav>
            </aside>
            <main className="dashboard-main bg-ligth text-center">
                <Container>
                    <Outlet />
                </Container>
            </main>
        </div>
    )
}

export default React.memo(AdminLayout)
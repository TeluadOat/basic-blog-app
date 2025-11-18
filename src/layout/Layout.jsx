import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar.jsx";
import "../components/Footer.jsx"
import Footer from "../components/Footer.jsx";

export default function Layout() {
    return (
        <div className="layout">
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
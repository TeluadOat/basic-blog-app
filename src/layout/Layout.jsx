import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar.jsx";

export default function Layout() {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
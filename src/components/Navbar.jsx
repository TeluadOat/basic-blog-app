import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
            </NavLink>
            <NavLink to="/Posts" className={({ isActive }) => (isActive ? "active" : "")}>
                Posts
            </NavLink>
            <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>
                About
            </NavLink>
        </nav>
    )
}
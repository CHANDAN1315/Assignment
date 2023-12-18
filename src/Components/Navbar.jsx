import { NavLink } from "react-router-dom";
import '../App.css'
import logo from '../Assets/icons8-hamburger.svg'
function Navbar() {
    return (
        <>
            <nav className="nav">
                <NavLink to={'/'} className="hamburger">
                    <img src={logo} className="logo"/>
                </NavLink>
                <NavLink className="navlink" to={'./Home'}>Home</NavLink>
                <NavLink className="navlink" to={'./About'}>About</NavLink>
                <NavLink className="navlink" to={'./Contact'}>Contact</NavLink>
            </nav>

        </>
    )
}
export default Navbar;
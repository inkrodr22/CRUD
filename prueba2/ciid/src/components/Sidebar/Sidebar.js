import { NavLink } from "react-router-dom"
import * as FaIcons from 'react-icons/fa'

 
const Sidebar = () => {
    return (
        <div className="sidebar bg-light">
            <ul>
                <li>
                    <NavLink to="/" className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaHome className="me-2"/>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/startup" className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaRocket className="me-2"/>Startup</NavLink>
                </li>
                <li>
                    <NavLink to="/technology" className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaRegLightbulb className="me-2"/>Technology</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
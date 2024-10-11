import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import './Sidebar.scss';

const Sidebar = () => {
    const items = [
        { label: 'Inicio', icon: <FaIcons.FaHome className="me-2" />, path: '/' },
        { label: 'Startup', icon: <FaIcons.FaRocket className="me-2" />, path: '/startup' },
        { label: 'Technology', icon: <FaIcons.FaRegLightbulb className="me-2" />, path: '/technology' },
    ];

    return (
        <div className="sidebar">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink 
                            to={item.path} 
                            className={({ isActive }) => 
                                `text-indigo-500 rounded py-2 w-100 d-inline-block px-3 ${isActive ? 'active' : ''}`
                            }
                        >
                            {item.icon} {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

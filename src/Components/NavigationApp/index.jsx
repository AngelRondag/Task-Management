import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaSearch } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { FaPlus } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoCalculator } from "react-icons/io5";
import styles from './NavigationApp.module.css';

const NavigationApp = () => {
    const navigationItems = useSelector(state => state.navigationItems)
    const iconItems = {
        FaSearch: <FaSearch />,
        SiHomeadvisor: <SiHomeadvisor />,
        FaPlus: <FaPlus />,
        IoMdSettings: <IoMdSettings />,
        IoCalculator: <IoCalculator />,
    }

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <div className={styles.selector}></div>
                {navigationItems.map(({ id, icon, path, display }) => {
                    if (display) {
                        return (
                            <li className={styles.item} key={id} >
                                <NavLink to={path} className={({ isActive }) => isActive ? styles.active : styles.inactive}>
                                    <span className={styles.icon}>{iconItems[icon]}</span>
                                </NavLink>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}



export { NavigationApp };

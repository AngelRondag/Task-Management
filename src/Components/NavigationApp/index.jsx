import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import styles from './NavigationApp.module.css'

const NavigationApp = () => {

    const navigationItems = [
        { id: 0, icon: <FaPlus />, path: '/create-task' },
        { id: 1, icon: <GrTasks />, path: '/tasks/all' },
        { id: 2, icon: <FaSearch />, path: '/search-task' },
    ]
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <div className={styles.selector}></div>
                {navigationItems.map(({ id, icon, path }) =>
                    <li className={styles.item} key={id} >
                        <NavLink to={path} className={({ isActive }) => isActive ? styles.active : styles.inactive}>
                            <span className={styles.icon}>{icon}</span>
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}



export { NavigationApp };

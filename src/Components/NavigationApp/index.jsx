import { NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { GrTasks } from "react-icons/gr";
import styles from './NavigationApp.module.css'

const NavigationApp = () => {
    const styleActive = ` ${styles.active} inline-block bg-cust-primary text-white rounded-full p-3 border-solid border-2 border-white  transform translate-y-[-1.2rem] `;
    const styleInactive =`${styles.inactive} inline-block text-cust-primary rounded-full p-2`;

    return (
        <div className='flex justify-center'>
            <ul
                className={`${styles.menu} flex justify-center  gap-8 w-[98%] max-w-md h-10 bg-customPurple-100 text-white font-semibold fixed bottom-0`}
            >
                <li >
                    <NavLink to={'/create-task'} className={({ isActive }) => isActive ? styleActive : styleInactive}>
                        <FiPlus />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'tasks/all'} className={({ isActive }) => isActive ? styleActive : styleInactive}>
                        <GrTasks />
                    </NavLink>
                </li>
                <li >
                    <NavLink to={'/search-task'} className={({ isActive }) => isActive ? styleActive : styleInactive}>
                        <CiSearch />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export { NavigationApp };

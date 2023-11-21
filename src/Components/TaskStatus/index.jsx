import { NavLink } from "react-router-dom";

const TaskStatus = () => {

    const btnActive = 'flex items-center justify-center bg-primary text-white  text-sm px-3 py-1 rounded-lg  ';
    const btnInactive = 'flex items-center justify-center bg-custom-blue text-secondary text-sm px-3 py-1 rounded-lg shadow-md';

    return (
            <ul className="mt-8 flex gap-3">
                <li className=''>
                    <NavLink
                        className={({ isActive }) => isActive ? btnActive : btnInactive }
                        to={'/home'}>All</NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? btnActive : btnInactive}
                        to={'/in-pogress'}>In pogress</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? btnActive : btnInactive}
                        to={'/completed'}>Completed</NavLink>
                </li>
            </ul>  
    )
};

export { TaskStatus };
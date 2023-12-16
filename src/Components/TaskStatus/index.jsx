import { NavLink } from "react-router-dom";

const TaskStatus = () => {

    const btnActive = 'flex items-center justify-center bg-cust-primary text-white  text-sm px-3 py-1 rounded-lg  ';
    const btnInactive = 'flex items-center justify-center bg-custom-blue text-cust-secondary text-sm px-3 py-1 rounded-lg shadow-md';

    return (
            <ul className="mt-8 flex gap-3">
                <li className=''>
                    <NavLink
                        className={({ isActive }) => isActive ? btnActive : btnInactive }
                        to={'/tasks/all'}>All</NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? btnActive : btnInactive}
                        to={'/tasks/in-pogress'}>In pogress</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? btnActive : btnInactive}
                        to={'/tasks/completed'}>Completed</NavLink>
                </li>
            </ul>  
    )
};

export { TaskStatus };
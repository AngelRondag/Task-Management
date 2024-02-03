import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TaskStatus = () => {
    const { t } = useTranslation("global");
    const btnActive = 'flex items-center justify-center bg-cust-primary text-white  text-sm px-3 py-1 rounded-lg  ';
    const btnInactive = 'flex items-center justify-center bg-custom-blue text-cust-secondary text-sm px-3 py-1 rounded-lg shadow-md';

    return (
            <ul className="mt-8 flex gap-3">
                <li className=''>
                    <NavLink
                        className={({ isActive }) => isActive ? btnActive : btnInactive }
                        to={'/tasks/all'}>{t("tasks.all")}</NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? btnActive : btnInactive}
                        to={'/tasks/in-pogress'}>{t("tasks.in_progress")}</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? btnActive : btnInactive}
                        to={'/tasks/completed'}>{t("tasks.completed")}</NavLink>
                </li>
            </ul>  
    )
};

export { TaskStatus };
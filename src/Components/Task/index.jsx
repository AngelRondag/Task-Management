import { useNavigate } from "react-router-dom";
import { TaskIcon } from '../TaskIcon';
import { IoIosTime } from "react-icons/io";

const Task = ({
    title,
    taskGroup,
    description,
    pogress,
    time,
    id,
}) => {
    
    const btnCompleted = 'w-auto flex items-center justify-center bg-green-200 text-green-700  text-xxs  px-1 rounded-lg absolute bottom-4 right-4';
    const btnInPogress = 'w-auto flex items-center justify-center bg-orange-100 text-orange-600  text-xxs px-1 rounded-lg absolute bottom-4 right-4';
    
    const navigate = useNavigate();
    const handleTask = () => {
        navigate(`/task/${taskGroup}/${id}`);
    }

    return (
        <div onClick={handleTask} className='w-4/5 h-28 relative  shadow-md rounded-md bg-white'>
            <p className=' w-1/2  text-xs mt-4 ml-3 text-cust-intermediate truncate ' >{description}</p>
            <p className=' w-3/4 font-normal  text-cust-secondary text-sm truncate mt-1 ml-3'>{title}</p>
            <span className={pogress ? btnCompleted : btnInPogress}>
                {pogress ? 'Completed' : 'In progress'}
            </span>
            <span
                className='absolute top-4 right-4 '>
                <TaskIcon type={taskGroup} />
            </span>
            <span className='flex items-center gap-1 absolute bottom-2 left-2 text-purple-400 text-xs font-normal'>
                <IoIosTime />
                <p>{time}</p>
            </span>
        </div>
    )
}

export { Task };
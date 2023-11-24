import { useDispatch } from "react-redux";
import { deleteTask, setPogress } from "../../redux/actions";
import { MdDelete } from "react-icons/md";
import { IoIosTime as IconTime } from "react-icons/io";


const Task = ({ pogress, title, description, time }) => {

    
    const dispatch = useDispatch();

    const handlePogress = () => {
        const task = { pogress, title, description }
        dispatch(setPogress(task));
    }

    const handleDelete = () => {
        dispatch(deleteTask(title));

    }
    const btnCompleted = ' w-auto flex items-center justify-center bg-green-200 text-green-700  text-xs px-1 py-1 rounded-lg absolute bottom-4 right-4';
    const btnInPogress = ' w-auto flex items-center justify-center bg-orange-200 text-orange-700  text-xs px-1 py-1 rounded-lg absolute bottom-4 right-4';

    return (
        <div className='w-4/5 h-28 relative  shadow-md rounded-md bg-white'>
            <p className='font-normal text-xs mt-4 ml-3 text-gray-500 truncate break-words  w-1/2' >{description}</p>
            <p className='font-normal text-sm mt-1 ml-3'>{title}</p>
            <span
                onClick={handlePogress}
                className={pogress ? btnCompleted : btnInPogress}
            >
                {pogress ? 'Completed' : 'In progress'}
            </span>
            <span
                onClick={handleDelete}
                className='p-1 rounded-md text-center bg-red-50 cursor-pointer absolute top-4 right-4 '>
                <MdDelete color='#F478B8' size='1.3rem' />
            </span>
            <span className='flex items-center gap-1 absolute bottom-2 left-2 text-purple-400 text-xs font-normal'> 
                <IconTime />
                <p>{time}</p>
            </span>

        </div>
    )
}

export { Task };
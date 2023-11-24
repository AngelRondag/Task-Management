import { useDispatch } from "react-redux";
import { deleteTask, setPogress } from "../../redux/actions";
import { MdDelete } from "react-icons/md";


const Task = ({ pogress, title, description }) => {
    const dispatch = useDispatch();

    const handlePogress = () => {
        const task = { pogress, title, description }
        dispatch(setPogress(task));
    }

    const handleDelete = () => {
        dispatch(deleteTask(title));

    }
    const btnCompleted = ' w-auto flex items-center justify-center bg-green-200 text-green-700  text-xs px-3 py-1 rounded-lg absolute bottom-4 right-4';
    const btnInPogress = ' w-auto flex items-center justify-center bg-orange-200 text-orange-700  text-xs px-3 py-1 rounded-lg absolute bottom-4 right-4';

    return (
        <div className='w-4/5 h-32  relative  shadow-md rounded-md'>
            <h2 className='font-semibold mt-4 ml-3'>{title}</h2>
            <p className='font-normal mt-1 ml-3 text-gray-500'>{description}</p>
            <span
                onClick={handleDelete}
                className='p-1 rounded-md text-center bg-red-50 cursor-pointer absolute top-4 right-4 '>
                <MdDelete color='#F478B8' size='1.3rem' />
            </span>
            <span
                onClick={handlePogress}
                className={pogress ? btnCompleted : btnInPogress}
            >
                {pogress ? 'Completed' : 'In progress'}
            </span>

        </div>
    )
}

export { Task };
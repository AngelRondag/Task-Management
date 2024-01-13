import { useDispatch, useSelector } from "react-redux";
import { deleteTask, setPogress } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TaskGroup } from '../../Components/TaskCard/TaskGroup';
import { TaskTitle } from '../../Components/TaskCard/TaskTitle';
import { TaskDescription } from '../../Components/TaskCard/TaskDescription';
import { IoIosTime as IconTime, IoIosArrowBack } from "react-icons/io";
import { MdDelete } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import { ToBack } from '../../Components/ToBack';

const DetailTask = () => {
    const btnCompleted = 'bg-green-100 text-green-700  text-[11px]  px-1 rounded-lg';
    const btnInPogress = 'text-center bg-orange-100 text-orange-600  text-[11px] px-1 rounded-lg';

    const storeTasks = useSelector(state => state.storeTasks);
    const { id, taskGroup } = useParams();
    const tasks = storeTasks[taskGroup].tasks;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const taskFound = tasks.find(task => task.id === id);
    const handlePogress = () => {
        dispatch(setPogress(taskFound));
    }

    const handleDelete = () => {
        dispatch(deleteTask(taskFound));
        navigate(-1);
    }
    const handleEdit = () => {
        navigate(`/update/${id}`);
    }

    return (
        <>
            {taskFound &&
                <div className='h-full flex flex-col items-center  '>
                    <h1 className='text-center font-bold mt-4 text-lg'>Task Detail</h1>
                    <ToBack path={-1} />
                    <div className='w-5/6 max-w-sm mt-6 h-3/4 rounded-lg bg-white shadow-lg relative overflow-auto '>
                        <div className='flex flex-row  gap-2 items-center absolute top-4 right-4' >
                            <span
                                className={taskFound.pogress ? btnCompleted : btnInPogress}
                            >
                                {taskFound.pogress ? 'Completed' : 'In progress'}
                            </span>
                            <span
                                className='flex items-center gap-1 text-cust-intermediate text-xxs font-normal'>
                                <IconTime />
                                <p>{taskFound.time}</p>
                            </span>
                        </div>

                        <div className='flex flex-col gap-4 mx-6 mt-16'>
                            <TaskGroup type={taskFound.taskGroup} />
                            <TaskTitle
                                title={taskFound.title}
                                onClick={handlePogress}
                                pogress={taskFound.pogress}
                            />
                            {taskFound.description !== 'No description' && (
                                <TaskDescription type='Description' description={taskFound.description} />
                            )}
                        </div>
                        <div className=' w-full flex justify-center gap-4 absolute bottom-5'>
                            <button
                                onClick={handleEdit}
                                className='flex justify-center  items-center gap-2 w-24 h-auto bg-customPurple-100 text-cust-primary rounded-lg text shadow-md shadow-purple-500/20'
                            >
                                <TbEdit />
                                <p className='text-sm'>Edit</p>
                            </button>
                            <button
                                onClick={handleDelete}
                                className='flex justify-center items-center gap-2 w-24 h-auto bg-red-200 text-[#d3458e] py-1 rounded-lg shadow-md shadow-red-500/20'
                            >
                                <MdDelete />
                                <p className='text-sm'>Delete</p>
                            </button>
                        </div>

                    </div>
                </div>}
        </>
    )
}

export { DetailTask }
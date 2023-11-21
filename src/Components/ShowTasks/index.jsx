import { ButtonTask } from "../../Components/ButtonTask";
import { ListTask } from "../../Components/ListTask";
import { TaskStatus } from "../../Components/TaskStatus";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft as IconBack } from "react-icons/fa";


const ShowTasks = ({ title, tasks, message }) => {
    const navigate = useNavigate()

    const addTask = () => {
        navigate('/create-task')
    };

    const goToBack = () => {
        navigate('/')
    };

    return (
        <div className='flex flex-col items-center '>
            <span className='absolute top-5 left-5' onClick={goToBack}>
                <IconBack color={'gray'} size={'1.4rem'} />
            </span>
            <h1 className='font-bold mt-4 text-lg'>{title}</h1>
            <TaskStatus />
            <ListTask
                tasks={tasks}
                message={message}
            />
            <ButtonTask
                content={'Create To-do'}
                onClick={addTask}
            />
        </div>
    )
}

export { ShowTasks };


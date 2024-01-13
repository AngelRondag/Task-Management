import { DisplayTasks } from '../../Components/DisplayTasks';
import { ToBack } from '../../Components/ToBack';
import { getTasks } from '../../redux/getTasks'
import { useParams } from 'react-router-dom';

const Tasks = () => {
    const { type } = useParams();

    const tasks = getTasks(type);

    return (
        <div className=''>
            <ToBack path={'/home'} />
            <DisplayTasks title={type} tasks={tasks} message={'there are no tasks'} />
        </div>
    )
}

export { Tasks }
import { getTasks } from '../../redux/getTasks';
import { PercentCircle } from '../PercentCircle'
import { TaskIcon } from '../TaskIcon'
import { useNavigate } from 'react-router-dom';

const CardTaskGroup = ({ type, bgColor, lineColor }) => {

    const navigate = useNavigate()

    const tasks = getTasks(type);
    const totalTask = tasks.length;
    const taskCompleted = tasks.filter(task => task.pogress).length;
    const pogress = totalTask === 0 ? 0 : Math.round((taskCompleted / totalTask) * 100)

    const handleTypeGroup = () => {
        navigate(`/tasks/${type}`)
    }

    return (
        <>
            <div className="flex gap-4" onClick={handleTypeGroup}>
                <div className='flex items-center'>
                    <TaskIcon type={type} size={'text-xl'} />
                </div>
                <div className='flex flex-col justify-center '>
                    <h3 className='text-sm '>{type}</h3>
                    <p className='text-xxs text-cust-intermediate'>{totalTask} Tasks</p>
                </div>
            </div>
            <div>
                <PercentCircle pogress={pogress} bgColor={bgColor} lineColor={lineColor} size={45} />
            </div>
        </>
    )
}

export { CardTaskGroup }
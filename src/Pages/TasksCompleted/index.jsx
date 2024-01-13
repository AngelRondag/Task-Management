import { DisplayTasks } from "../../Components/DisplayTasks";
import { getTasks } from '../../redux/getTasks'

const TasksCompleted = () => {
    const allTasks = getTasks();
    const tasksFiltered = allTasks.filter(task => task.pogress);

    return (
        <>
            <DisplayTasks
                title={'Tasks Completed'}
                taskStatus={true}
                message={'No task completed'}
                tasks={tasksFiltered}
            />
        </>
    )
}

export { TasksCompleted };
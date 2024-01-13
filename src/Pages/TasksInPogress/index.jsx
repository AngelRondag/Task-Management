import { getTasks } from '../../redux/getTasks'
import { DisplayTasks } from "../../Components/DisplayTasks";

const TasksInPogress = () => {
    const allTasks = getTasks();
    const tasksFiltered = allTasks.filter(task => !task.pogress);

    return (
        <>
            <DisplayTasks
                title={'Tasks In Pogress'}
                taskStatus={true}
                message={'No task in pogress'}
                tasks={tasksFiltered}
            />
        </>
    )
}

export { TasksInPogress };
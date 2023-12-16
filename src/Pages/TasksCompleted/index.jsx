import { useSelector } from "react-redux";
import { DisplayTasks } from "../../Components/DisplayTasks";

const TasksCompleted = () => {
    const allTasks = useSelector(state => state.tasks);
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
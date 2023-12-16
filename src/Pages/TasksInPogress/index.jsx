import { useSelector } from "react-redux";
import { DisplayTasks } from "../../Components/DisplayTasks";

const TasksInPogress = () => {
    const allTasks = useSelector(state => state.tasks);
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
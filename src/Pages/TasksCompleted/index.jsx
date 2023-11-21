import { useSelector } from "react-redux";
import { ShowTasks } from "../../Components/ShowTasks";

const TasksCompleted = () => {
    const allTasks = useSelector(state => state.tasks);
    const tasksFiltered = allTasks.filter( task => task.pogress);

    return (
        <>
            <ShowTasks
                title={'Tasks in pogress'}
                tasks={tasksFiltered}
                message={'there are no tasks completed 😒'}
            />
        </>
    )
}

export { TasksCompleted };
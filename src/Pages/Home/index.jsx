import { useSelector } from "react-redux";
import { DisplayTasks } from "../../Components/DisplayTasks";

const Home = () => {
    const allTasks = useSelector(state => state.tasks);
    return (
        <>
            <DisplayTasks
                title={`Today's tasks`}
                taskStatus={true}
                tasks={allTasks}
                message={'Add Task to List'}
            />
        </>
    )
};

export { Home };
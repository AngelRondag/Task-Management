import { ShowTasks } from "../../Components/ShowTasks";
import { useSelector } from "react-redux";

const Home = () => {
    const allTasks = useSelector(state => state.tasks);

    return (
        <>
            <ShowTasks
                title={`Today's tasks`}
                tasks={allTasks}
                message={'Add To-do to list'}
            />
        </>
    )
};

export { Home };
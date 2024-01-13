import { DisplayTasks } from "../../Components/DisplayTasks";
import { getTasks } from '../../redux/getTasks';

const AllTasks = () => {
const allTasks =  getTasks()

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

export { AllTasks };
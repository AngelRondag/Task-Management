import { DisplayTasks } from "../../Components/DisplayTasks";
import { getTasks } from '../../redux/getTasks';
import { useTranslation } from "react-i18next";

const TasksCompleted = () => {
    const { t } = useTranslation("global");
    const allTasks = getTasks();
    const tasksFiltered = allTasks.filter(task => task.pogress);

    return (
        <>
            <DisplayTasks
                title={t("title.tasks.completed")}
                taskStatus={true}
                message={t("message.no_tasks_completed")}
                tasks={tasksFiltered}
            />
        </>
    )
}

export { TasksCompleted };
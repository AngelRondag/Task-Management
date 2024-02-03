import { getTasks } from '../../redux/getTasks'
import { DisplayTasks } from "../../Components/DisplayTasks";
import { useTranslation } from "react-i18next";
const TasksInPogress = () => {
    const { t } = useTranslation("global");
    const allTasks = getTasks();
    const tasksFiltered = allTasks.filter(task => !task.pogress);

    return (
        <>
            <DisplayTasks
                title={t("title.tasks.in_progress")}
                taskStatus={true}
                message={t("message.no_tasks_progress")}
                tasks={tasksFiltered}
            />
        </>
    )
}

export { TasksInPogress };
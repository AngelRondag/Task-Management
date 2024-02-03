import { DisplayTasks } from "../../Components/DisplayTasks";
import { ToBack } from "../../Components/ToBack";
import { getTasks } from "../../redux/getTasks";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Tasks = () => {
  const { t } = useTranslation("global");
  const { type } = useParams();

  const tasks = getTasks(type);

  return (
    <div >
      <ToBack path={"/home"} />
      <DisplayTasks title={t(`task_group.${type}`)} tasks={tasks} message={t("message.no_tasks")} />
    </div>
  );
};

export { Tasks };

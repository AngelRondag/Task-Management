import { DisplayTasks } from "../../Components/DisplayTasks";
import { getTasks } from "../../redux/getTasks";
import { useTranslation } from "react-i18next";

const AllTasks = () => {
  const { t } = useTranslation("global");
  const allTasks = getTasks();

  return (
    <>
      <DisplayTasks
        title={t("title.tasks.all")}
        taskStatus={true}
        tasks={allTasks}
        message={t("message.add_asks")}
      />
    </>
  );
};

export { AllTasks };

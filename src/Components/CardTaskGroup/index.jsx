import { useTranslation } from "react-i18next";
import { getTasks } from "../../redux/getTasks";
import { PercentCircle } from "../PercentCircle";
import { TaskIcon } from "../TaskIcon";
import { useNavigate } from "react-router-dom";

const CardTaskGroup = ({ type, bgColor, lineColor }) => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const tasks = getTasks(type);
  const totalTask = tasks.length;
  const taskCompleted = tasks.filter((task) => task.pogress).length;
  const pogress =
    totalTask === 0 ? 0 : Math.round((taskCompleted / totalTask) * 100);

  const handleTypeGroup = () => {
    navigate(`/tasks/${type}`);
  };

  return (
    <div
      className="w-full px-4 py-3 flex justify-between bg-white mb-3 rounded-xl shadow-md"
      onClick={handleTypeGroup}
    >
      <div className="flex gap-4">
        <div className="flex items-center">
          <TaskIcon type={type} size={"text-xl"} />
        </div>
        <div className="flex flex-col justify-center ">
          <p className="text-sm ">{t(`task_group.${type}`)}</p>
          <p className="text-xxs text-cust-intermediate">
            {t("create.tasks")} {totalTask}
          </p>
        </div>
      </div>
      <div className="w-12 h-12">
        <PercentCircle
          pogress={pogress}
          bgColor={bgColor}
          lineColor={lineColor}
          size={45}
        />
      </div>
    </div>
  );
};

export { CardTaskGroup };

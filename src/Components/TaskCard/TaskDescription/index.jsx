import { TaskIcon } from "../../TaskIcon";
import { useTranslation } from "react-i18next";

const TaskDescription = ({ type, description }) => {
  const { t } = useTranslation("global");

  return (
    <div className="flex w-full gap-3 h-auto rounded-lg bg-white p-3 shadow-sm relative ">
      <div className="flex items-start gap-4">
        <span className="mt-0.5 flex text-sm">
          <TaskIcon type={type} />
        </span>
        <p className="text-sm text-secondary mt-2.5">{description}</p>
      </div>
      <p className="text-cust-intermediate text-xxs absolute top-2 left-14">
        {t("detail.description")}
      </p>
    </div>
  );
};

export { TaskDescription };

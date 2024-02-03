import { IoIosCheckmark } from "react-icons/io";
import { useTranslation } from "react-i18next";

const TaskTitle = ({ title, onClick, pogress }) => {
  const { t } = useTranslation("global");
  return (
    <div className="flex w-full relative gap-3 h-30 rounded-lg  p-3 shadow-sm">
      <div className="flex items-start gap-4">
        <button
          className="mt-1.5 flex justify-center mx-0.5 items-center "
          onClick={onClick}
        >
          {pogress ? (
            <div className="w-5 h-5 rounded-full bg-green-200">
              <IoIosCheckmark size={"1.3rem"} color="green" />{" "}
            </div>
          ) : (
            <div className="w-5 h-5 rounded-full  bg-transparent border border-gray-400"></div>
          )}
        </button>
        <h2 className="pl-0.5 mt-2.5 font-normal text-sm text-secondary">
          {title}
        </h2>
      </div>

      <p className="text-xxs  text-cust-intermediate absolute top-2 left-14">
        {pogress ? t("detail.completed") : t("detail.in_progress")}
      </p>
    </div>
  );
};

export { TaskTitle };

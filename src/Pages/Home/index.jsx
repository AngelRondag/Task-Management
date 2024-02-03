import { CardTaskGroup } from "../../Components/CardTaskGroup";
import { PercentCircle } from "../../Components/PercentCircle";
import { Link, useNavigate } from "react-router-dom";
import { getTasks } from "../../redux/getTasks";
import { useSelector } from "react-redux";
import { MdOutlineEditNote } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const { avatar, username, lastName } = useSelector((state) => state.profile);

  const tasks = getTasks();
  const totalTask = tasks.length;
  const taskCompleted = tasks.filter((task) => task.pogress).length;
  const pogress =
    totalTask === 0 ? 0 : Math.round((taskCompleted / totalTask) * 100);

  const taskGroup = [
    {
      type: "work_project",
      bgColor: "#FFE4F2",
      lineColor: "#F478B8",
    },
    {
      type: "personal_project",
      bgColor: "#EDE4FF",
      lineColor: "#9260F4",
    },
    {
      type: "welfare",
      bgColor: "#E6EBFF",
      lineColor: "#6D84DB",
    },
    {
      type: "daily_study",
      bgColor: "#FFE6D4",
      lineColor: "#FF9142",
    },
    {
      type: "unspecified",
      bgColor: "#f2eeee",
      lineColor: "#a7a7a7",
    },
  ];

  const goProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="w-5/6 max-w-md mx-auto flex mt-4 pb-16 flex-col items-center ">
      <div className="w-full flex gap-3 mb-6 relative">
        <figure className="w-10 flex justify-center items-center bg-gray-200 rounded-full">
          <img src={avatar} alt="avatar" />
        </figure>
        <div className="flex flex-col justify-center">
          <p className="text-xs">{t("home.gretting")}</p>
          <p className="font-semibold">{`${
            username ? username : t("home.user")
          } ${lastName}`}</p>
        </div>
        <button onClick={goProfile} className="absolute right-1 top-2">
          <MdOutlineEditNote color="#444" size={25} />
        </button>
      </div>

      <div className="w-full h-32  max-w-md flex px-4 bg-cust-primary rounded-2xl shadow-lg">
        <div className="w-full flex flex-col justify-around items-start">
          <p className="w-36 text-sm text-white ">{t("home.tab_progress")}</p>
          <Link to="/tasks/all">
            <button className="bg-white text-cust-primary text-sm font-semibold py-1 px-4 rounded-lg">
              {t("home.viewTask")}
            </button>
          </Link>
        </div>
        <div className=" w-ful h-full flex justify-center items-center">
          <div className="w-24 h-24 flex justify-center items-center">
            <PercentCircle
              bgColor={"#8764FF"}
              lineColor={"#EEE9FF "}
              textColor={"white"}
              pogress={pogress}
              size={25}
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <h3 className="font-semibold ml-4 my-5">{t("home.task_group")}</h3>
        <div className="flex flex-col items-center  mx-auto">
          {taskGroup.map(({ type, bgColor, lineColor }) => (
            <CardTaskGroup
              key={type}
              type={type}
              bgColor={bgColor}
              lineColor={lineColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Home };

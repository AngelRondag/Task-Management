import { FlyoutButton } from "../../Components/FlyoutButton";
import { Toggle } from "../../Components/Toggle";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation("global");

  return (
    <div className="w-full h-5/6  ">
      <div className="w-full flex justify-end p-4">
        <FlyoutButton />
      </div>
      <div className=" flex justify-center w-4/5 h-5/6 max-w-md mx-auto mt-4  bg-white shadow-lg rounded-lg ">
        <div className="w-4/5 mx-auto mt-4 ">
          <h2 className="absolute left-1/2 transform -translate-x-1/2 top-5 text-lg font-bold text-center text-cust-secondary ">
            {t("title.settings")}
          </h2>
          <ul>
            <li className="flex justify-between items-center border-b-2 border-b-gray-100 py-2 ">
              <p className="text-sm text-gray-600">
                {t("settings.firstOption")}
              </p>
              <Toggle id={0} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Settings };

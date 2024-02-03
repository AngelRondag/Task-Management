import { useNavigate } from "react-router-dom";
import { ButtonTask } from "../../Components/ButtonTask";
import { Logo } from "../../Components/Logo";
import { useTranslation } from "react-i18next";
import { FlyoutButton } from "../../Components/FlyoutButton";

const WelcomePage = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const goProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="flex colum flex-col items-center">
      <div className="w-full flex justify-end p-4">
        <FlyoutButton />
      </div>
      <Logo />
      <h1 className="font-bold text-center text-xl text-secondary mt-8 w-72">
        {t("title.main")}
      </h1>
      <p className=" w-4/5 max-w-sm mt-4 m font-normal text-center text-cust-intermediate text-sm">
        {t("main.description")}
      </p>
      <div className="flex justify-center w-full absolute bottom-3 ">
        <ButtonTask
          content={t('main.button')}
          onClick={goProfile}
          background={"bg-cust-primary"}
          color={"text-white"}
        />
      </div>
    </div>
  );
};

export { WelcomePage };

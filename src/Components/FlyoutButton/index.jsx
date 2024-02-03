import i18next from "i18next";
import { useState } from "react";
import { BsTranslate } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const FlyoutButton = () => {
  const [openButton, setOperButton] = useState(false);
  const language = localStorage.getItem("LANGUAGE");

  const handleClick = () => {
    setOperButton(!openButton);
  };

  const hanldleLanguage = (language) => {
    localStorage.setItem("LANGUAGE", language);
    i18next.changeLanguage(language);
    setOperButton(false);
  };

  return (
    <div className=" relative inline-block text-left">
      <button
        type="button"
        className="flex gap-1.5 justify-center items-center w-full px-2 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none  focus:border-cust-primary"
        onClick={handleClick}
      >
        <BsTranslate />
        <p>{language}</p>
        <IoIosArrowDown />
      </button>

      <div
        className={`${
          openButton ? "" : "hidden"
        } absolute  right-1 z-10 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
      >
        <div className="py-1">
          <div
            onClick={() => {
              hanldleLanguage("en");
            }}
            className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <span className="mr-2">English</span>
          </div>
          <div
            onClick={() => {
              hanldleLanguage("es");
            }}
            className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <span className="mr-2">Español</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FlyoutButton };

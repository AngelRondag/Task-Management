import { useState } from "react";
import { evaluate } from "mathjs";
import styles from "./Calculator.module.css";

import { useTranslation } from "react-i18next";

const Calculator = () => {
  const { t } = useTranslation("global");
  const [data, setData] = useState({ operation: "", ans: "" });
  const operators = ["+", "-", "*", "/"];

  const handleClick = (event) => {
    const value = event.target.value;
    if (data.ans !== "") {
      setData({ operation: `${data.ans}${value}`, ans: "" });
      return;
    }
    if (operators.includes(value) && data.operation.at(-1) === value) return;
    if (data.operation === "" && operators.includes(value)) return;
    setData({ ...data, operation: `${data.operation}${value}` });
  };

  const handleReseat = () => {
    setData({ operation: "", ans: "" });
  };

  const handleCalculate = () => {
    try {
      const result = evaluate(data.operation);
      setData({ ...data, ans: result });
    } catch (error) {
      setData({ ...data, ans: "Error" });
    }
  };

  const buttons = [
    { type: "button", value: "7", onclick: handleClick, styles: styles.number },
    { type: "button", value: "8", onclick: handleClick, styles: styles.number },
    { type: "button", value: "9", onclick: handleClick, styles: styles.number },
    {
      type: "button",
      value: "+",
      onclick: handleClick,
      styles: styles.operation,
    },
    { type: "button", value: "4", onclick: handleClick, styles: styles.number },
    { type: "button", value: "5", onclick: handleClick, styles: styles.number },
    { type: "button", value: "6", onclick: handleClick, styles: styles.number },
    {
      type: "button",
      value: "-",
      onclick: handleClick,
      styles: styles.operation,
    },
    { type: "button", value: "1", onclick: handleClick, styles: styles.number },
    { type: "button", value: "2", onclick: handleClick, styles: styles.number },
    { type: "button", value: "3", onclick: handleClick, styles: styles.number },
    {
      type: "button",
      value: "*",
      onclick: handleClick,
      styles: styles.operation,
    },
    { type: "button", value: "0", onclick: handleClick, styles: styles.number },
    { type: "button", value: "C", onclick: handleReseat, styles: styles.other },
    {
      type: "button",
      value: "=",
      onclick: handleCalculate,
      styles: styles.other,
    },
    {
      type: "button",
      value: "/",
      onclick: handleClick,
      styles: styles.operation,
    },
  ];

  return (
    <div className="h-full">
      <h2 className="text-lg font-bold text-center mt-4">{t("title.calculator")}</h2>
      <div className={styles.container}>
        <form className={styles.form} name="calculator">
          <div className={styles.containerAns}>
            <input
              className={styles.ans}
              type="text"
              name="ans"
              value={data.operation}
              autoComplete="off"
              readOnly
            />
            <input
              className={styles.preAns}
              type="text"
              name="preAns"
              value={data.ans}
              autoComplete="off"
              readOnly
            />
          </div>
          <div className={styles.containerCalculator}>
            {buttons.map(({ type, value, onclick, styles }) => (
              <input
                className={styles}
                key={value}
                type={type}
                value={value}
                onClick={onclick}
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export { Calculator };

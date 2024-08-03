import React from "react";
import "./button.css";

interface IPropButton {
  children: React.ReactNode;
}

const Button = ({ children }: IPropButton) => {
  return <>
    <button className="button">
      {children}
    </button>
  </>
};

export default Button;
import React from "react";
import "./inputList.css";

interface IPropInputList {
  label: string;
  itens: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputList = ({ label, itens, value, setValue }: IPropInputList) => {
  return <>
    <div className="input_list">
      <label>{label}</label>
      <select
        value={value}
        onChange={(change) => setValue(change.target.value)}
      >
        {itens.map((item) => (<option key={item}>{item}</option>))}
      </select>
    </div>
  </>
};

export default InputList;
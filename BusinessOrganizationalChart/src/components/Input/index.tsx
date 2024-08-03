import "./input.css";

interface IPropInput {
	label: string;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	required?: boolean;
	placeholder: string;
}

const Input = ({ label, value, setValue, required = true, placeholder }: IPropInput) => {
	return <>
		<div className="field-text">
			<label>{label}</label>
			<input
				value={value}
				onChange={(change) => setValue(change.target.value)}
				required={required}
				placeholder={placeholder}
			/>
		</div>
	</>
};

export default Input;
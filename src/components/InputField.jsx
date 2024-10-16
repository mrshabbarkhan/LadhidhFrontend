import useInputClass from "../hooks/useInputClass";

const InputField = ({
  id,
  type,
  value,
  handleChange,
  placeholder,
  required,
  maxLength,
  minLength,
  label,
  ...rest
}) => (
  <div className="mb-3">
    <label className="block text-md font-medium mb-1" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={useInputClass()}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
      {...rest}
    />
  </div>
);

export default InputField;

import { InputTextProps } from "./types";

export default function InputText(props: InputTextProps) {
  const { value, placeholder, name, id, width, onChange } = props;

  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      name={name}
      value={value}
      width={width}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

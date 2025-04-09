import { InputTextProps } from "./types";
import styles from "./InputText.module.scss";

export default function InputText(props: InputTextProps) {
  const { value, placeholder, name, id, onChange } = props;

  return (
    <input
      className={styles.inputText}
      type="text"
      id={id}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

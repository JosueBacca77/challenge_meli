import { InputTextProps } from "./types";
import styles from "./InputText.module.scss";

/**
 * Renders a styled text input field with specified properties.
 *
 * @param {InputTextProps} props - The properties for the input field.
 * @param {string} props.value - The current value of the input.
 * @param {string} props.placeholder - Placeholder text for the input.
 * @param {string} props.name - Name attribute for the input.
 * @param {string} props.id - ID attribute for the input.
 * @param {(value: string) => void} props.onChange - Callback function to handle changes to the input value.
 * @param {(e: React.KeyboardEvent<HTMLInputElement>) => void} [props.onKeyDown] - Optional callback function to handle key down events on the input.
 */

export default function InputText(props: InputTextProps) {
  const { value, placeholder, name, id, onChange, onKeyDown } = props;

  return (
    <input
      className={styles.inputText}
      type="text"
      id={id}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
    />
  );
}

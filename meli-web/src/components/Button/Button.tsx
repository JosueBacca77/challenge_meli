import { ButtonProps, ButtonVariant } from "./types";
import PrimaryButton from "./PrimaryButton/PrimaryButton";

/**
 * A component to render a button.
 *
 * @param {ButtonProps} props
 * @prop {string} label - Text to be shown on the button.
 * @prop {ButtonVariant} variant - Button variant.
 * @prop {React.MouseEventHandler<HTMLButtonElement>} onClick - Click handler.
 *
 * @returns {React.ReactElement} A button element.
 */
export default function Button(props: ButtonProps) {
  const { label, variant, onClick } = props;

  switch (variant) {
    case ButtonVariant.Primary:
      return <PrimaryButton label={label} onClick={onClick} />;
    default:
      return <PrimaryButton label={label} onClick={onClick} />;
  }
}

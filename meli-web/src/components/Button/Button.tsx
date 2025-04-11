import { ButtonProps, ButtonVariant } from "./types";
import PrimaryButton from "./PrimaryButton/PrimaryButton";

export default function Button(props: ButtonProps) {
  const { label, variant, onClick } = props;

  switch (variant) {
    case ButtonVariant.Primary:
      return <PrimaryButton label={label} onClick={onClick} />;
    default:
      return <PrimaryButton label={label} onClick={onClick} />;
  }
}

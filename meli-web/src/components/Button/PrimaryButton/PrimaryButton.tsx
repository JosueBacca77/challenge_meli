import { PrimaryButtonProps } from "./types";
import styles from "./primaryButton.module.scss";
import baseStyles from "../button.module.scss";
import Text from "../../Text/Text";
import { TextColors } from "../../Text/types";

export default function PrimaryButton(props: PrimaryButtonProps) {
  const { label, onClick } = props;

  return (
    <button
      className={`${baseStyles.buttonBase} ${styles.primaryButtonBackgroundColor}`}
      onClick={onClick}
    >
      <Text value={label} color={TextColors.PrimaryBUtton} />
    </button>
  );
}

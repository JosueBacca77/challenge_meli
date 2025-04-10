import styles from "./text.module.scss";
import classNames from "../../../app/classes.module.scss";
import {
  TextColors,
  TextProps,
  TextSizes,
  TextStyles,
  TextWeights,
} from "./types";

const Text = ({
  color = TextColors.Primary,
  fontWeight = TextWeights.W400,
  fontSize = TextSizes.BASE,
  value,
}: TextProps) => {
  const fontColorClass = classNames[color];
  const weightClass = classNames[fontWeight];

  const style: React.CSSProperties = {
    fontSize: TextStyles[fontSize as TextSizes]?.fontSize,
    lineHeight: TextStyles[fontSize as TextSizes]?.lineHeight,
  };

  return (
    <span
      className={`${styles.textBase} ${fontColorClass} ${weightClass}`}
      style={style}
    >
      {value}
    </span>
  );
};

export default Text;

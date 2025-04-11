import styles from "./text.module.scss";
import classNames from "../../../app/classes.module.scss";
import {
  TextColors,
  TextProps,
  TextSizes,
  TextStyles,
  TextWeights,
} from "./types";

/**
 * A generic text component.
 *
 * @example
 * <Text color={TextColors.Primary} fontWeight={TextWeights.W500} fontSize={TextSizes.XL}>
 *   This is a large, bold, primary text.
 * </Text>
 *
 * @param {TextColors} [color=TextColors.Primary] - The color of the text
 * @param {TextWeights} [fontWeight=TextWeights.W400] - The weight of the text
 * @param {TextSizes} [fontSize=TextSizes.BASE] - The size of the text
 * @param {string} value - The value of the text
 * @returns {JSX.Element} The rendered text component
 */
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

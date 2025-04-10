import { TextProps, TextSizes, TextStyles } from "./types";
import styles from "./text.module.scss";

export default function Text(props: TextProps) {
  const { fontSize, fontStyle, color, fontWeight, value, className } = props;

  const style: React.CSSProperties = {
    fontSize: TextStyles[fontSize as TextSizes]?.fontSize,
    lineHeight: TextStyles[fontSize as TextSizes]?.lineHeight,
    fontStyle,
    fontWeight,
    color,
  };

  return (
    <span className={`${styles.textBase} ${className ?? ""}`} style={style}>
      {value}
    </span>
  );
}

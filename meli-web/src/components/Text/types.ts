export enum TextSizes {
  XS = "text-xs", // 12px
  SM = "text-sm", // 14px
  BASE = "text-base", // 16px
  LG = "text-lg", // 18px
  XL = "text-xl", // 20px
  XL_2 = "text-2xl", // 24px
  XL_3 = "text-3xl", // 30px
  XL_4 = "text-4xl", // 36px
  XL_5 = "text-5xl", // 48px
  XL_6 = "text-6xl", // 60px
  XL_7 = "text-7xl", // 72px
  XL_8 = "text-8xl", // 96px
  XL_9 = "text-9xl", // 128px
}

export enum TextColors {
  Primary = "primaryTextColor",
  Secondary = "secondaryTextColor",
  Tertiary = "tertiaryTextColor",
}

export enum TextWeights {
  W400 = "fw400",
  W500 = "fw500",
  W600 = "fw600",
}

export const TextStyles: Record<
  TextSizes,
  { fontSize: string; lineHeight: string }
> = {
  [TextSizes.XS]: { fontSize: "0.75rem", lineHeight: "1rem" }, // 12px, 16px
  [TextSizes.SM]: { fontSize: "0.875rem", lineHeight: "1.25rem" }, // 14px, 20px
  [TextSizes.BASE]: { fontSize: "1rem", lineHeight: "1.5rem" }, // 16px, 24px
  [TextSizes.LG]: { fontSize: "1.125rem", lineHeight: "1.75rem" }, // 18px, 28px
  [TextSizes.XL]: { fontSize: "1.25rem", lineHeight: "1.75rem" }, // 20px, 28px
  [TextSizes.XL_2]: { fontSize: "1.5rem", lineHeight: "2rem" }, // 24px, 32px
  [TextSizes.XL_3]: { fontSize: "1.875rem", lineHeight: "2.25rem" }, // 30px, 36px
  [TextSizes.XL_4]: { fontSize: "2.25rem", lineHeight: "2.5rem" }, // 36px, 40px
  [TextSizes.XL_5]: { fontSize: "3rem", lineHeight: "1" }, // 48px, 1
  [TextSizes.XL_6]: { fontSize: "3.75rem", lineHeight: "1" }, // 60px, 1
  [TextSizes.XL_7]: { fontSize: "4.5rem", lineHeight: "1" }, // 72px, 1
  [TextSizes.XL_8]: { fontSize: "6rem", lineHeight: "1" }, // 96px, 1
  [TextSizes.XL_9]: { fontSize: "8rem", lineHeight: "1" }, // 128px, 1
};

export interface TextProps {
  fontSize?: TextSizes;
  value: string;
  color?: TextColors;
  fontStyle?: "normal" | "italic" | "oblique";
  fontWeight?: TextWeights;
}

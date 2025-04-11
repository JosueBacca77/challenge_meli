export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}

export interface ButtonProps {
  label: string;
  variant: ButtonVariant;
  onClick: () => void;
}

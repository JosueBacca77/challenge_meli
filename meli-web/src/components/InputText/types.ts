export interface InputTextProps {
  value: string;
  placeholder: string;
  name: string;
  id: string;
  width: number;
  onChange: (value: string) => void;
}

export interface InputTextProps {
  value: string;
  placeholder: string;
  name: string;
  id: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

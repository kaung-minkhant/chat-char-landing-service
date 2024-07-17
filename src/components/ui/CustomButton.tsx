import Typography from "@ui/Typography";
import { tw } from "@utils/tw";

interface TCustomButtonProps {
  text: string;
  type?: "submit" | "reset" | "button";
  onClick?: any;
  customStyles?: string;
}
function CustomButton({ text, onClick, type, customStyles }: TCustomButtonProps) {
  return (
    <button
      className={tw(`bg-action py-3 px-5 rounded-2xl`, customStyles)}
      type={type}
      onClick={onClick}
    >
      <Typography>{text}</Typography>
    </button>
  );
}

export default CustomButton;

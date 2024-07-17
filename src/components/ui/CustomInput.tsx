import { tw } from "@utils/tw";

interface TCustomInputProps {
  placeholder?: string;
  type?: "text" | "textarea";
  height?: string | number;
  value?: any;
  onValueChange?: (item: any) => void;
}
function CustomInput({
  placeholder,
  height,
  value,
  onValueChange,
  type = "text",
}: TCustomInputProps) {
  if (type === "text") {
    return (
      <input
        className={tw(
          `p-5 bg-transparent rounded-3xl w-full border-2 border-stroke text-foreground placeholder:font-interreg`
        )}
        placeholder={placeholder}
        height={height}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onValueChange && onValueChange(e.currentTarget.value);
        }}
      />
    );
  } else {
    return (
      <textarea
        value={value}
        rows={typeof height === 'number' ? height : 5}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          onValueChange && onValueChange(e.currentTarget.value)
        }}
        placeholder={placeholder}
        className={tw(
          `resize-none p-5 bg-transparent rounded-3xl w-full border-2 border-stroke text-foreground placeholder:font-interreg`
        )}
      ></textarea>
    );
  }
}

export default CustomInput;

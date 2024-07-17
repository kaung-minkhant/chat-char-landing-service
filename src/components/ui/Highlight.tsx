interface THighlightProps {
  children: React.ReactNode;
  colorStyle?: string;
}
function Highlight({ children, colorStyle }: THighlightProps) {
  return <span className={`${colorStyle}`}>{children}</span>;
}

export default Highlight;

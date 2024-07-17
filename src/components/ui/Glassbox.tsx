import { tw } from "@utils/tw";

interface TGlassboxProps {
  children: React.ReactNode;
  paddingStyle?: string;
  borderWidth?: string;
  borderRadius?: string;
  borderStyles?: string;
  className?: string;
  enableGlass?: boolean;
}
function Glassbox({children, enableGlass=true, className, borderWidth = '1px', borderRadius='3rem', paddingStyle = 'p-14', borderStyles}: TGlassboxProps) {
  return (
    <div style={{
      '--border-width': borderWidth,
      '--border-radius': borderRadius,
    } as React.CSSProperties} className={tw(`w-full ${enableGlass ? 'glass' : ''} bg-glass ${paddingStyle} ${enableGlass ? '' : borderStyles} flex-1 flex justify-center`, className)}>
      {children}
    </div>
  )
}

export default Glassbox
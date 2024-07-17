import {tw} from '@utils/tw'
interface TTypographyProps {
  fontStyles?: string;
  sizeStyles?: number | string;
  colorStyles?: string;
  className?: string;
  children: React.ReactNode;
}
function Typography({fontStyles = "font-interreg", sizeStyles="text-base", className, colorStyles="text-foreground", children}: TTypographyProps) {
  return (
    <span className={tw(`${fontStyles} ${sizeStyles} ${colorStyles}`, className)}>
      {children}
    </span>
  )
}

export default Typography
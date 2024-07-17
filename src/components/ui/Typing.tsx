import { useEffect, useState } from 'react'
import {useInView} from 'react-intersection-observer'
import Typography from '@ui/Typography';
interface TTypingProps {
  fontStyle?: string;
  text: string;
  sizeStyle?: string;
  colorStyle?: string;
  className?: string;
  typingInterval?: number;
}
function Typing({fontStyle, typingInterval=100, sizeStyle, text, className, colorStyle}: TTypingProps) {
  const [currentText, setCurrentText] = useState('')
  const {inView, ref} = useInView({
    triggerOnce: true
  })
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (inView) {
      intervalId = setInterval(() => {
        if (currentText.length < text.length) {
          setCurrentText(currentText => currentText + text[currentText.length])
        } else {
          clearInterval(intervalId)
        }
      }, typingInterval)
    }
    return () => clearInterval(intervalId)
  }, [inView, currentText])
  return (
    <div ref={ref}>
      <Typography colorStyles={colorStyle} fontStyles={fontStyle} sizeStyles={sizeStyle} className={className}>{currentText}</Typography>
    </div>
  )
}

export default Typing
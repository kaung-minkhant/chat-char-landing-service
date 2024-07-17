import ContactForm from '@components/ContactForm'
import ContactFacebook from './ContactFacebook'
import { useEffect, useRef, useState } from 'react'
import { useResponsive } from '@hooks/useResponsive'

function Contact() {
  const formRef = useRef<HTMLDivElement>(null)
  const {scale, ScaleMap} = useResponsive()
  const [height, setHeight]  = useState(0)
  useEffect(() => {
    if (formRef.current) {
      setHeight(formRef.current.getBoundingClientRect().height)
    }
  }, [formRef.current])
  return (
    <div className="w-[95%] sm:w-[80%] lg:w-full flex justify-center relative z-10">
      <div className={`flex gap-7 flex-col-reverse lg:flex-row lg:gap-4 justify-center items-stretch w-full xl:px-16 2xl:px-0`}>
        <div className="flex-grow-0 lg:flex-grow lg:basis-0" style={{
          height: ( ( scale <= ScaleMap.md ) && !!height  ) ? height : 'auto'
        }}>
          <ContactFacebook />
        </div>
        <div ref={formRef} className="basis-0" style={{
          flexGrow: 1.7
        }}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
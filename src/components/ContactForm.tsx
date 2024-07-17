import { useResponsive } from "@hooks/useResponsive";
import CustomButton from "@ui/CustomButton";
import CustomInput from "@ui/CustomInput";
import Glassbox from "@ui/Glassbox";
import Typography from "@ui/Typography";

function ContactForm() {
  const {scale, ScaleMap, isXm} = useResponsive()
  const click = () => {
    console.log('clicked')
  }
  return (
    <Glassbox paddingStyle={scale <= ScaleMap.md ? 'p-10' : undefined}>
      <div className="w-full flex flex-col gap-10 z-20">
        <Typography fontStyles="font-intersemi" sizeStyles="text-2xl sm:text-4xl lg:text-2xl">
          Contact us
        </Typography>
        <div className="flex flex-col gap-5">
          <CustomInput type="text" placeholder="Your contact number" />
          <CustomInput type="textarea" placeholder="Your message" height={isXm ? 5 : 7}/>
        </div>
        <CustomButton text="Send" customStyles="self-end" onClick={click}/>
      </div>
    </Glassbox>
  );
}

export default ContactForm;

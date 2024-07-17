import { Facebook } from "@icons/Facebook";
import Glassbox from "@ui/Glassbox";
import Typography from "@ui/Typography";
import { useResponsive } from "@hooks/useResponsive";
import { Logo } from "@icons/Logo";

function ContactFacebook() {
  const { scale, ScaleMap, isXm } = useResponsive();
  return (
    <Glassbox
      className="h-full"
      paddingStyle={scale <= ScaleMap.md ? "p-10" : undefined}
    >
      <div className="w-full flex flex-col gap-10 lg:gap-16">
        <Typography
          fontStyles="font-intersemi"
          sizeStyles="text-2xl sm:text-4xl lg:text-2xl"
          className="whitespace-nowrap"
        >
          Connect us on Social
        </Typography>
        <div className="">
          <Facebook size={scale <= ScaleMap.md ? 90 : 100} />
        </div>
        <div className="flex items-center gap-5 mt-auto">
          <Logo size={isXm ? 25 : undefined} />
          <Typography
            fontStyles="font-graphikbold"
            sizeStyles="text-lg sm:text-2xl"
          >
            Digital Copilot
          </Typography>
        </div>
      </div>
    </Glassbox>
  );
}

export default ContactFacebook;

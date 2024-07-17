import Typography from "@ui/Typography";
import Glassbox from "@ui/Glassbox";
import GetApp from "@components/GetApp";
import { Apple, MM, PlayStore, QR } from "@icons/index";
import BannerPhone from "@components/BannerPhone";
import { useResponsive } from "@hooks/useResponsive";
export default function Banner() {
  const { scale, ScaleMap, isXm } = useResponsive();

  return (
    <header className="">
      <div className="flex flex-col gap-5 sm:gap-8 items-center m-auto">
        <Typography
          fontStyles="font-graphikmed"
          sizeStyles="text-[1.6rem] sm:text-4xl md:text-5xl"
          className="text-center leading-[35px] sm:leading-[50px] md:leading-[60px] xl:leading-[70px] w-[100%] sm:w-[90%] max-w-[700px]"
        >
          <span>
            Very First AI Application in Myanmar{" "}
            <MM className="inline ml-1" size={isXm ? 45 : 55} />
          </span>
        </Typography>
        <Typography
          fontStyles="font-walonebold"
          colorStyles="text-foreground-200"
          sizeStyles="text-base sm:text-xl md:text-2xl lg:text-3xl"
        >
          မြန်မာနိုင်ငံရဲ့ပထမဆုံး AI App
        </Typography>
        <span className="flex items-center justify-center gap-1">
          <Typography
            fontStyles="font-walonebold"
            sizeStyles="text-base sm:text-lg md:text-xl lg:text-2xl"
            colorStyles="text-foreground-200"
            className="text-center"
          >
            We support 3 languages, မြန်မာဘာသာစကား , 中文 and English language.
          </Typography>
        </span>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 xl:gap-10 mt-6 sm:mt-9 justify-center items-center w-full">
          <Glassbox
            paddingStyle={`${scale > ScaleMap.md ? "p-10" : "p-5"}`}
            borderWidth="2px"
            borderRadius="2rem"
            borderStyles="rounded-3xl"
            enableGlass={scale > ScaleMap.md}
          >
            <GetApp
              icon={<Apple size={isXm ? 45 : 55} />}
              subtitle="Download on the"
              title="App Store"
            />
          </Glassbox>
          <Glassbox
            paddingStyle={`${scale > ScaleMap.md ? "p-10" : "p-5"}`}
            borderWidth="2px"
            borderRadius="2rem"
            borderStyles="rounded-3xl"
            enableGlass={scale > ScaleMap.md}
          >
            <GetApp
              icon={<PlayStore size={isXm ? 35 : 50} />}
              subtitle="Get it on"
              title="Google Play"
            />
          </Glassbox>
          <Glassbox
            paddingStyle={`${scale > ScaleMap.md ? "p-10" : "p-5"}`}
            borderWidth="2px"
            borderRadius="2rem"
            borderStyles="rounded-3xl"
            enableGlass={scale > ScaleMap.md}
          >
            <GetApp
              icon={<QR size={isXm ? 40 : 52} />}
              subtitle="Scan now"
              title="To Download"
            />
          </Glassbox>
        </div>
      </div>
      <div className="">
        <BannerPhone />
      </div>
    </header>
  );
}

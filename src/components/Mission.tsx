import Typing from "@ui/Typing";
import Typography from "@ui/Typography";
import Eye from "@components/Eye";
import { useRef } from "react";
import { AnimatedTooltip } from "@ui/AnimatedTooltip";
import Highlight from "@ui/Highlight";
import { useResponsive } from "@hooks/useResponsive";
function Mission() {
  const eyeContainerRef = useRef<HTMLDivElement>(null);
  const { responsiveState, isXm } = useResponsive();
  let eyeSize;
  switch (responsiveState) {
    case "2xl":
      eyeSize = 200;
      break;
    case "xl":
    case "lg":
      eyeSize = 170;
      break;
    case "md":
      eyeSize = 140;
      break;
    case "sm":
      eyeSize = 120;
      break;
    default:
      eyeSize = 80;
      break;
  }
  return (
    <div className="">
      <div className="">
        <div className="inline-block w-[205px] sm:w-[330px] md:w-[415px] xl:w-[500px]">
          <Typing
            text="Digital Copilot"
            fontStyle="font-graphikmed"
            sizeStyle="text-3xl sm:text-5xl md:text-6xl xl:text-7xl"
            className="whitespace-nowrap"
          />
        </div>
        <div className="inline-block ml-2">
          <Typography
            fontStyles="font-graphikmed"
            colorStyles="text-foreground-300"
            sizeStyles="text-3xl sm:text-5xl md:text-6xl xl:text-7xl"
          >
            is an
          </Typography>
        </div>
        <div className="mt-1.5 sm:mt-3 xl:mt-1">
          <Typography
            fontStyles="font-graphikmed"
            colorStyles="text-foreground-300"
            sizeStyles="text-3xl sm:text-5xl md:text-6xl xl:text-7xl"
          >
            innovative AI company.
          </Typography>
        </div>
      </div>
      {isXm && (
        <div className="mt-5">
          <Typography
            colorStyles="text-foreground-100"
            sizeStyles="text-[1rem]"
            className="leading-[1.3rem]"
          >
            Our mission is to build impactful AI software that revolutionizes{" "}
            <Highlight colorStyle="bg-action">
              education, business and individuals{" "}
            </Highlight>
            for a smarter, simpler life.
          </Typography>
        </div>
      )}
      <div className="flex mt-8 sm:mt-32 items-end">
        <div className="h-fit flex-1 relative" ref={eyeContainerRef}>
          <Eye size={eyeSize} ref={eyeContainerRef} />
        </div>
        <div className="h-fit flex-[2] sm:flex-1">
          <div className="flex flex-col items-start justify-start">
            {!isXm && (
              <Typography
                colorStyles="text-foreground-100"
                sizeStyles="text-[1.2rem] lg:text-2xl xl:text-3xl"
                className="leading-[2rem] lg:leading-[2.5rem] xl:leading-[3.2rem]"
              >
                Our mission is to build impactful AI software that
                revolutionizes{" "}
                <Highlight colorStyle="bg-action">
                  education, business and individuals{" "}
                </Highlight>
                for a smarter, simpler life.
              </Typography>
            )}
            <div className="mt-10 flex ml-auto mr-6 sm:ml-0 sm:mr-0">
              <AnimatedTooltip
                items={[
                  {
                    id: 1,
                    name: "John Doe",
                    designation: "Software Engineer",
                    image:
                      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
                  },
                  {
                    id: 2,
                    name: "Robert Johnson",
                    designation: "Product Manager",
                    image:
                      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                  },
                  {
                    id: 3,
                    name: "Jane Smith",
                    designation: "Data Scientist",
                    image:
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                  },
                  {
                    id: 4,
                    name: "Emily Davis",
                    designation: "UX Designer",
                    image:
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                  },
                  {
                    id: 5,
                    name: "Tyler Durden",
                    designation: "Soap Developer",
                    image:
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
                  },
                  {
                    id: 6,
                    name: "Dora",
                    designation: "The Explorer",
                    image:
                      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;

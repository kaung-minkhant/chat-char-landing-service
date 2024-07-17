import { useResponsive } from "@hooks/useResponsive";
import { StickyScrollReveal } from "@ui/StickyScrollReveal";
import Typography from "@ui/Typography";
import MobileCard from "./MobileCard";

function Features() {
  const { scale, ScaleMap } = useResponsive();
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
      bg: "./feature-1-bg.jpg",
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="./iphone-half.png"
            className="h-[300px] w-[300px] object-cover"
            alt="iphone"
          />
        </div>
      ),
      bg: "./feature-2-bg.jpg",
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
      bg: "./feature-3-bg.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-10">
      <Typography
        fontStyles="font-graphikmed"
        sizeStyles="text-[1.6rem] sm:text-4xl md:text-5xl"
        className="text-center leading-[33px] sm:leading-[50px] md:leading-[60px] xl:leading-[55px] w-[90%]"
      >
        Advancing education, business and everyday life through transformative
        AI
      </Typography>
      <div className="w-full pt-0 sm:pt-10 relative">
        <div className="z-10 mb-8 md:mb-0">
          {scale >= ScaleMap.md && <StickyScrollReveal content={content} />}
          {scale < ScaleMap.md && (
            <div className="flex flex-col gap-8">
              {content.map((item) => (
                <MobileCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  img="./feature-1.png"
                  bg={item.bg}
                />
              ))}
            </div>
          )}
        </div>
        <div className="absolute w-full h-[700px] top-full bg-gradient-circle-sm md:bg-gradient-circle-mlg mlg:bg-gradient-circle z-0"></div>
      </div>
    </div>
  );
}

export default Features;

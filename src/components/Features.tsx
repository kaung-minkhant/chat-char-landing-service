import { useResponsive } from "@hooks/useResponsive";
import { StickyScrollReveal } from "@ui/StickyScrollReveal";
import Typography from "@ui/Typography";
import MobileCard from "./MobileCard";

function Features() {
  const { scale, ScaleMap } = useResponsive();
  const content = [
    {
      title: "Meet Your AI Companions",
      description:
        "At our company, we offer a diverse range of AI Agents designed to cater to your needs. May, your personal assistant, helps manage daily tasks and stay organized. Our AI-powered English and Chinese language tutors provide personalized language learning experiences. For a soothing end to your day, Molly, our bedtime storyteller, offers engaging tales to help you unwind and relax.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
      bg: "./feature-1-bg.jpg",
      img: "./feature-1.jpg",
    },
    {
      title: "Personalized Language Learning Guidance",
      description:
        "Our English and Chinese language tutors are designed to provide helpful suggestions based on your responses. Whether you’re practicing grammar, vocabulary, or pronunciation, the tutors offer real-time feedback to improve your language skills. They adapt to your learning pace and provide constructive tips to enhance your understanding, making your language learning journey both effective and enjoyable.",
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
      img: "./feature-2.jpg",
    },
    {
      title: "Enhance Your Daily Conversations",
      description:
        "Our English and Chinese language tutors offer various scenarios to help you practice and improve your daily conversations. Whether you're preparing for casual chats, business meetings, or travel interactions, the tutors provide tailored exercises that simulate real-life situations. By engaging in these scenarios, you can build confidence and fluency in your language skills, making communication smoother and more natural.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
      bg: "./feature-3-bg.jpg",
      img: "./feature-3.jpg",
    },
    {
      title: "Molly: Your Bedtime Storyteller",
      description:
        "Molly is your perfect companion for winding down at the end of the day. She offers a collection of soothing bedtime stories that are both engaging and relaxing, helping you drift off to sleep peacefully. Whether you prefer classic tales or new adventures, Molly has a story that will calm your mind and ease you into a restful night's sleep.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
      bg: "./feature-1-bg.jpg",
      img: "./feature-4.jpg",
    },
    {
      title: "Boost Your Learning with \"Try Saying\" Feature",
      description:
        "If you're ever unsure about how to respond during a session with our English or Chinese language tutors, our \"Try Saying\" feature is here to help. This tool provides suggested phrases and responses, guiding you through the conversation and easing your learning process. It’s designed to improve your language skills by offering practical examples and encouraging more confident communication.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
      bg: "./feature-2-bg.jpg",
      img: "./feature-5.jpg",
    },
    {
      title: "Customize Your Learning Experience",
      description:
        "With our English and Chinese language tutors, you have the flexibility to create your own scenarios tailored to your preferences. You can specify the roles for both the AI tutor and yourself, ensuring that each practice session meets your unique learning needs. This customization helps you engage more effectively with the material and practice real-life conversations in a way that feels relevant and personal.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
      bg: "./feature-3-bg.jpg",
      img: "./feature-6.jpg",
    },
    {
      title: "Explore Molly's Bedtime Stories",
      description:
        "Discover a world of enchanting tales with Molly’s bedtime stories. Each story is carefully crafted to provide a relaxing and delightful end to your day, helping you unwind and prepare for a restful night’s sleep. From timeless classics to imaginative adventures, Molly’s stories offer something for everyone, creating a calming bedtime routine you’ll look forward to each night.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
      bg: "./feature-1-bg.jpg",
      img: "./feature-7.jpg",
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
                  img={item.img}
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

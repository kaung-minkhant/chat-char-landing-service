import Typography from "@ui/Typography";

interface TMobileCardProps {
  title: string;
  description: string;
  img: string;
  bg: string;
}
function MobileCard({ title, description, img, bg }: TMobileCardProps) {
  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <div
        className="w-full h-[750px] rounded-4xl flex justify-center items-center"
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img src={img} className="w-[70%] object-contain rounded-2xl" />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <Typography
          fontStyles="font-intersemi"
          sizeStyles="text-lg sm:text-2xl"
        >
          {title}
        </Typography>
        <Typography sizeStyles="text-sm sm:text-base">{description}</Typography>
      </div>
    </div>
  );
}

export default MobileCard;

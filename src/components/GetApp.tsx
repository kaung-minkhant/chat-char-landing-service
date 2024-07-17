import Typography from "@ui/Typography";

interface TGetAppProps {
  icon: any;
  subtitle: string;
  title: string;
}
function GetApp({ icon, subtitle, title }: TGetAppProps) {
  return (
    <div className="flex gap-2 items-center border-2 rounded-lg p-2 bg-background w-[200px] sm:w-fit">
      {icon}
      <div className="flex flex-col">
        <Typography fontStyles="font-intermed" className="whitespace-nowrap" sizeStyles='text-sm lg:text-base'>{subtitle}</Typography>
        <Typography fontStyles="font-interbold" sizeStyles='text-xl lg:text-2xl' className="whitespace-nowrap">{title}</Typography>
      </div>
    </div>
  );
}

export default GetApp;

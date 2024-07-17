import { TIconProps } from "@/types";

export function Facebook({ size = 32, iconColor = "white" }: TIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="96" height="96" rx="32" fill="#1877F7" />
      <path
        d="M54.6845 38.5388V48.9951H67.6197L65.5717 63.0833H54.6845V95.5385C52.501 95.8425 50.2677 96 48.0013 96C45.3838 96 42.8161 95.79 40.312 95.3864V63.0833H28.3828V48.9951H40.312V36.2032C40.312 28.2649 46.7464 21.8275 54.6873 21.8275V21.8358C54.7094 21.8358 54.7315 21.8275 54.7536 21.8275H67.6225V34.0086H59.2146C56.7132 34.0086 54.6873 36.0346 54.6873 38.536L54.6845 38.5388Z"
        fill={iconColor}
      />
    </svg>
  );
}

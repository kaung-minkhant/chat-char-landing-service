import { TIconProps } from "@/types";

export function Logo({ size = 32, iconColor = 'white' }: TIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className="flex-shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8133 10.8871C19.8133 16.8999 15.7448 25 21.5282 25C27.3116 25 32 16.8999 32 10.8871C32 4.87432 27.3116 0 21.5282 0C15.7448 0 19.8133 4.87432 19.8133 10.8871Z"
        fill={iconColor}
      />
      <path
        d="M1.04568 15.9355C1.04568 23.6318 -2.89953 32 4.53628 32C11.9721 32 18 21.6318 18 13.9355C18 6.23913 11.9721 0 4.53628 0C-2.89953 0 1.04568 8.23913 1.04568 15.9355Z"
        fill={iconColor}
      />
    </svg>
  );
}


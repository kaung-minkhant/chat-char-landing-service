import { TIconProps } from "@/types";

export function MM({ size = 32,  className }: TIconProps) {
  return (
    <svg
      width={size}
      height={size - 16}
      viewBox="0 0 59 43"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1970_4588)">
        <rect width="58" height="43" transform="translate(0.5)" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 28.6667H58.5V43.0001H0.5V28.6667Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 14.3333H58.5V28.6666H0.5V14.3333Z"
          fill="#5EAA22"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 0H58.5V14.3333H0.5V0Z"
          fill="#FFD018"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.6125 28.6227L20.2766 34.4903L23.408 24.2186L16.749 17.5077L25.9296 17.3094L29.9914 7.16887L33.6926 17.4434L42.8513 17.6014L35.9688 24.4354L39.1827 34.2071L29.6125 28.6227Z"
          fill="#F7FCFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1970_4588">
          <rect
            width="58"
            height="43"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

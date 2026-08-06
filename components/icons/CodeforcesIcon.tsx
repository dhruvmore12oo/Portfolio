interface CodeforcesIconProps {
  size?: number;
  className?: string;
}

export function CodeforcesIcon({ size = 24, className = "" }: CodeforcesIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 13.5A1.5 1.5 0 0 1 6 12h1.5a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 7.5 21H6a1.5 1.5 0 0 1-1.5-1.5v-6Z"
        className="fill-[#F3C235]"
      />
      <path
        d="M10.5 7.5A1.5 1.5 0 0 1 12 6h1.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5v-12Z"
        className="fill-[#21759B]"
      />
      <path
        d="M16.5 10.5A1.5 1.5 0 0 1 18 9h1.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H18a1.5 1.5 0 0 1-1.5-1.5v-9Z"
        className="fill-[#B1361E]"
      />
    </svg>
  );
}

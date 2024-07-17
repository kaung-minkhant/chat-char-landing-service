import { useResponsive } from "@hooks/useResponsive";
import { Logo } from "@icons/index";
import Typography from "@ui/Typography";
import { useState } from "react";
function Navbar() {
  const {isXm} = useResponsive()
  const [sticky, _] = useState(false);
  return (
    <nav className={`w-full pt-6 pb-4 ${sticky ? 'sticky bg-background' : ''} top-0 z-20`}>
      <div className="w-full relative flex gap-5 items-center justify-center">
        {/* <div className="text-foreground absolute left-0">
          <label htmlFor="sticky" className="flex items-center gap-2">
            {window.innerWidth}
            <input
              id="sticky"
              type="checkbox"
              checked={sticky}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSticky(e.currentTarget.checked);
              }}
            />
            Sticky?
          </label>
        </div> */}
        <Logo size={isXm ? 25 : undefined} />
        <Typography fontStyles="font-graphikbold" sizeStyles="text-lg sm:text-2xl">
          Digital Copilot
        </Typography>
      </div>
    </nav>
  );
}

export default Navbar;

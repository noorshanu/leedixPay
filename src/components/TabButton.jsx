import { twMerge } from "tailwind-merge";
import Button from "./Button";

const TabButton = ({ children, icon, active, className, ...props }) => {
  return (
    <Button
      {...props}
      startIcon={icon ? <img src={icon} className="w-[22px] h-[22px]" /> : null}
      className={twMerge(
        "text-sm bg-text space-x-2",
        active ? "border border-active-blue" : null,
        className
      )}
    >
      {children}
    </Button>
  );
};

export default TabButton;

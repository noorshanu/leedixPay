import { twMerge } from "tailwind-merge";

function SubHeading({ className, children }) {
  return (
    <h1 className={twMerge("text-xl lg:text-[25px] font-medium", className)}>
      {children}
    </h1>
  );
}

export default SubHeading;

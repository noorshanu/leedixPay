import { twMerge } from "tailwind-merge";

function Heading({ className, children }) {
  return (
    <h1 className={twMerge("text-[35px] font-medium", className)}>
      {children}
    </h1>
  );
}

export default Heading;

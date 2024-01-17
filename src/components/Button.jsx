import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  "flex items-center justify-center disabled:opacity-60 space-x-[.4em] transition-all duration-200 h-[50px] rounded-full text-xl px-6 hover:opacity-90 font-medium",
  {
    variants: {
      variant: {
        outlined: "border-2 border-text-2 text-text-2 bg-transparent",
        contained: "bg-text-2 text-white border-2 border-transparent",
        "warning-contained": "bg-warning-600 hover:bg-warning-700 text-white",
        "warning-outlined":
          "border-2 border-warning-600 hover:bg-warning-900 hover:text-white text-warning-600",
        "error-contained": "bg-red-600 hover:bg-red-700 text-white",
        "error-outlined":
          "border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600",
        green: "bg-green border-green text-white",
        "green-outlined":
          "border border-green text-green bg-transparent hover:bg-green hover:text-black",
      },
      size: {
        default: "h-[50px]",
        lg: "h-[40px]",
        sm: "h-[30px]",
      },
    },
    defaultVariants: {
      variant: "contained",

      size: "default",
    },
  }
);

function Button({
  children,
  as = "button",
  className,
  startIcon,
  endIcon,
  variant,
  size,
  type = "button", // Default to "button" type
  ...props
}) {
  const Comp = as;

  return (
    <Comp
      {...props}
      className={cn(buttonVariants({ className, variant, size }))}
      type={type} // Add the type prop
    >
      {startIcon}
      {children ? <span>{children}</span> : null}
      {endIcon}
    </Comp>
  );
}

export default Button;

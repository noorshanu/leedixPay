import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";

const paragraphProps = cva("", {
  variants: {
    variant: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

function Typography({ as = "p", className, variant, children, ...props }) {
  const Comp = as;

  return (
    <Comp {...props} className={cn(paragraphProps({ className, variant }))}>
      {children}
    </Comp>
  );
}

export default Typography;

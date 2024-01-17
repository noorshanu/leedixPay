import { twMerge } from "tailwind-merge";

export default function PresaleInput({
  icon,
  iconClassName,
  inputRef,
  ...props
}) {
  return (
    <div className="relative z-10">
      <input
        ref={inputRef}
        {...props}
        type="number"
        className="h-[50px] rounded-full bg-text pl-4 pr-14 text-white w-full"
      />

      {icon ? (
        <img
          src={icon}
          className={twMerge(
            "w-7 h-w-7 absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none z-10 select-none",
            iconClassName
          )}
        />
      ) : null}
    </div>
  );
}

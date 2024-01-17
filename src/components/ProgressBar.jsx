import Typography from "./Typography";

export default function ProgressBar({ progress = 30 }) {
  return (
    <div className="h-[25px] rounded-full text-green w-full bg-[url('/images/bar.svg')] bg-no-repeat bg-cover overflow-hidden z-10 relative">
      <div
        style={{ width: `${progress}%` }}
        className="bg-white h-full absolute top-0 left-0 z-10"
      ></div>

      <Typography
        variant="xs"
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-green z-40"
      >
        Until Price Increase
      </Typography>
    </div>
  );
}

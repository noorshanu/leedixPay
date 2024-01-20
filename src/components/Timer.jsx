import { useEffect, useState } from "react";
import Typography from "./Typography";

const TimerTitle = ({ title }) => {
  return (
    <Typography variant="xs" className="opacity-90 text-white">


      {title}
    </Typography>
  
  );
};

const TimerNumber = ({ time, color = "white" }) => {
  const style = { color };

  return (
    <Typography variant="xs" className="opacity-90 text-white">
      {time}
      </Typography>
  );
};

const TimerSeperator = () => {
  return <TimerNumber time=":" color="rgba(255,255,255,.3)" />;
};

const TimeBox = ({ time, title }) => {
  return (
    <div className="h-11 flex gap-2 items-center justify-center bg-text rounded-full">
     <TimerNumber time={time} />  <TimerTitle title={title} />

      
    </div>
  );
};

const Timer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const isBritishSummerTime = (date) => {
    const lastSundayMarch = new Date(date.getFullYear(), 2, 31, 1, 0, 0, 0);
    lastSundayMarch.setDate(
      lastSundayMarch.getDate() - lastSundayMarch.getDay()
    );

    const lastSundayOctober = new Date(date.getFullYear(), 9, 31, 1, 0, 0, 0);
    lastSundayOctober.setDate(
      lastSundayOctober.getDate() - lastSundayOctober.getDay()
    );

    return date >= lastSundayMarch && date < lastSundayOctober;
  };

  useEffect(() => {
    const countdownDate = new Date("2024-04-18T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date();
      const londonOffset = isBritishSummerTime(now) ? 60 : 0; // Add 1 hour for BST
      const currentTime =
        now.getTime() + (now.getTimezoneOffset() + londonOffset) * 60 * 1000;

      const distance = countdownDate - currentTime;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (distance < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    
   <div className=" py-4 grid grid-cols-4 gap-2 px-5 mb-5">
        <TimeBox time={days} title="Days" />
        
        <TimeBox time={hours} title="Hours" />

        <TimeBox time={minutes} title="Minutes" />
  
        <TimeBox time={seconds} title="SECONDS" />
      </div>

  );
};

export default Timer;

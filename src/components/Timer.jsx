import { useEffect, useState } from "react";

const Timer = ({ duration, nextQuestion }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      nextQuestion();
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, nextQuestion]);

  return (
  <div className="flex justify-end">
  <p className="text-red-500 font-bold">Time Left: {timeLeft}s</p>
  
</div>
  )
};

export default Timer;

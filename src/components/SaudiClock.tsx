import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const SaudiClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatSaudiTime = () => {
    return time.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Riyadh',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatSaudiDate = () => {
    return time.toLocaleDateString('en-US', {
      timeZone: 'Asia/Riyadh',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <Card className="p-4 mb-6 text-center">
      <div className="text-3xl font-bold text-primary mb-2">
        {formatSaudiTime()}
      </div>
      <div className="text-sm text-muted-foreground">
        {formatSaudiDate()} | Saudi Arabia Time
      </div>
    </Card>
  );
};

export default SaudiClock;

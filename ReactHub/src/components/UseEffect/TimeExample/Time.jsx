import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <section>
      <div>
        <h2>Current Time</h2>
        <div>
          <p>
            {" "}
            Here we have used a <code>useEffect</code> hook and the{" "}
            <code>setInterval()</code> in order to update the time every second
            (1000ms interval)
          </p>
        </div>
        <p>
          <strong>current time is :</strong> {hour}:{minutes}:{seconds}
        </p>
      </div>
    </section>
  );
}

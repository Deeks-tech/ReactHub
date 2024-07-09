import { useState } from "react";
import dayjs from "dayjs";

export default function DayJS() {
  const [date, setDate] = useState(dayjs());

  const formatDate = (date) => date.format("dddd MMMM DD , YYYY HH:mma");

  function addDay(days) {
    setDate(date.add(days, "day"));
  }

  return (
    <section>
      <div>
        <h2>DayJS Example</h2>
      </div>
      <div>
        <p>Easy Dayjs package to access the date and format as needed </p>
      </div>
      <div>
        <h4>{formatDate(date)}</h4>
      </div>
      <div>
        <button onClick={() => addDay(1)}>Click to add a Day</button>
      </div>
    </section>
  );
}

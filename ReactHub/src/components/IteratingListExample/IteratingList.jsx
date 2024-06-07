import { useState } from "react";

export default function IteratingList() {
  const staff = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  const [index, setIndex] = useState(0);

  const hasNext = index < staff.length - 1;

  function handleNext() {
    if (hasNext) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  }

  const staffMember = staff[index];

  return (
    <section>
      <div>
        <h2>Iterating over a List Example</h2>
      </div>
      <div>
        <p>With this example we have our data within the component</p>
        <p>we use state to store a index varibale </p>
        <p>
          <code>const staffMember = staff[index]</code> is used so that when the
          handle click sets a new state index then the staffmember will change
          on every click - see code for handleNext
        </p>
      </div>
      <div>{staffMember.name}</div>
      <div>
        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
}

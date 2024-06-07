export default function RenderList2() {
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

  const chemist = staff.filter((person) => person.profession === "chemist");

  console.log(chemist);

  return (
    <section>
      <div>
        <h2> Render List Example 2 (from an Array)</h2>
        <p>
          This render of a list is rendering straight from an array of objects
          created within the component itself.
        </p>
        <p>Each object in the array has a id , name and proffesion</p>
        <p> Firstly we will render the list of names </p>
      </div>
      <div>
        <ol>
          {staff.map((people, index) => (
            <li key={index}>{people.name}</li>
          ))}
        </ol>
      </div>
      <div>
        <p>
          We can also filter through the list and just show the chemist storing
          the value in a const via
          <code>
            `const filteredStaff = staff.filter((person) ={`>`}{" "}
            person.profession === "chemist")``;
          </code>
        </p>
        <ol>
          {chemist.map((people, index) => (
            <li key={index}>{people.name}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

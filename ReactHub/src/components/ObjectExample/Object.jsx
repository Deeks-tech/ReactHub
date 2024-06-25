import data from "./objectData";

export default function Object() {
  return (
    <section>
      <div>{data.id}</div>
      <div>{data.employmentDetails.hireDate}</div>
    </section>
  );
}

export default function UseEffectDemo() {
  return (
    <section>
      <div>
        <h2>UseEffect</h2>
        <p>
          use effect can be used for when you want to set intervals are timeouts
          within your code
        </p>
        <p>
          {" "}
          use effect takes a fucntion and a array called a dependancy array
        </p>
        <p>
          when the dep array is kept empty then the useEffect will only run once
          upon mounting{" "}
        </p>
        <p>
          when there are items in the array then when these variables changes
          then the useEffect will run again
        </p>
      </div>
    </section>
  );
}

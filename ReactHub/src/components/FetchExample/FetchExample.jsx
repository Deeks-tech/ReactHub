import { useState } from "react";
import DumbBtn from "../DumbButtonExample/DumbBtn";
import styles from "./styles.module.css";

export default function YesNo() {
  const [image, setImage] = useState("");

  async function handleClick() {
    const res = await fetch("https://yesno.wtf/api");

    const data = await res.json();
    console.log(data);

    setImage(data.image);
  }

  function handleRemove() {
    setImage("");
  }

  return (
    <section>
      <div>
        <h2>Fetch Yes No Image </h2>
      </div>
      {image && <img className={styles.img} src={image} />}

      <div>
        <DumbBtn onClick={handleClick}>Click Me For Image </DumbBtn>
      </div>
      {image && (
        <div>
          <DumbBtn onClick={handleRemove}>Remove image</DumbBtn>
        </div>
      )}
    </section>
  );
}

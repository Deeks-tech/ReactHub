import { useState, useEffect } from "react";
import DumbBtn from "../DumbButtonExample/DumbBtn";
import styles from "./styles.module.css";

export default function YesNo() {
  const [image, setImage] = useState("");
  const [fetchInterval, setFetchInterval] = useState(null);

  async function fetchImage() {
    const res = await fetch("https://yesno.wtf/api");

    const data = await res.json();
    console.log(data);

    setImage(data.image);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetchImage();
    }, 5000);

    setFetchInterval(interval);

    return () => clearInterval(interval);
  }, []);

  function handleRemove() {
    clearInterval(fetchInterval);
    setImage("");
  }

  return (
    <section>
      <div>
        <h2>Fetch Yes No Image </h2>
        <div>
          <p>
            Here i am using a async fetch to get the image data from a free api
            , the first image is fetched from the button click , i have also set
            up a useEffect hook to handle setInterval in order to continue
            updating the Image state every 5 seconds (5000ms)
          </p>
        </div>
      </div>
      {image && <img className={styles.img} src={image} />}

      <div>
        <DumbBtn onClick={fetchImage}>Click Me For Image </DumbBtn>
      </div>
      {image && (
        <div>
          <DumbBtn onClick={handleRemove}>Remove image</DumbBtn>
        </div>
      )}
    </section>
  );
}

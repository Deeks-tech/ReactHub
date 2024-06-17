import React from "react";

export default function Profile({
  data,
  callToAction,
  callToActionText,
  handleNext,
}) {
  const { name, bio, email, hobbies } = data;

  return (
    <section>
      <div>
        <div>Image placeholder</div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{bio}</p>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        {callToAction && (
          <button onClick={handleNext}>{callToActionText}</button>
        )}
      </div>
    </section>
  );
}

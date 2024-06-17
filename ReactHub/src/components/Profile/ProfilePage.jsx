import Profile from "./Profile";
import colleagues from "./data";
import { useState } from "react";

export default function ProfilePage() {
  const [index, setIndex] = useState(0);

  const hasNext = index < colleagues.length - 1;

  function handleNext() {
    if (hasNext) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  }

  const colleague = colleagues[index];

  return (
    <section>
      <div>
        <h2>Profile Page</h2>
        <p>
          I have tried to create a dumb component with the Profile component. if
          you wanted to use the profile component elsewhere to display the users
          profile card then this would be possible
        </p>
        <p>
          i have conditionally rendered a button based on if a certain prop is
          passed in , this was it can be bespoke to other needs
        </p>
        <Profile
          data={colleague}
          callToAction={true}
          callToActionText={`Next colleague`}
          handleNext={handleNext}
        />
        <Profile data={colleagues[1]} />
      </div>
    </section>
  );
}

// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';
export default function BugProps() {
  const [message, setMessage] = useState('Hello, friend');
  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage('You clicked the button Yay!')}>
        Change Greeting
      </button>
    </div>
  );
}

// Explanation:
// first I imported useState then i got ride of the code saving the variable anmd the other two lines of code
// then we made a hook to store and update the message with setMessage. i also added am arrow function on the
//onClick to change the greeting once it is clicked

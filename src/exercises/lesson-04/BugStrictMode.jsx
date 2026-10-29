// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const initialEffect = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(initialEffect);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/*
StrictMode mount, unmount and remounts so in our code the useEffect is
ran twice and since the inital useEffect didn't have a way to stop rerendering it would double
like shown on the page which will then glitch out. We needed a way to stop the inital rending of
the first render. So i stored the intial function in a variable which i can feed to the clearInterval
 and return which canceled the reacurring action from the set Interval.
*/

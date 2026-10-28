// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';
export default function FindCorrectHook() {
  const countRef = useRef(0);
  const inputRef = useRef(0);

  function handleClick() {
    countRef.current = countRef.current + 1;
    inputRef.current.textContent = `${countRef.current} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick} ref={inputRef}>
        0 Clicks
      </button>
    </div>
  );
}

/*
  The right hook we have to use is the useRef() since the useState re-renders on every change
  We use useRef to initialize the countRef to zero at the start and inside the function handleClick
  we update the countRef using countRef.current we use .current so it can acces the item inside since 
  countRef acts like an object. Then we run into the issue with useRef we have to change the 
  value in the DOM manually since react cant see the updates in countRef. This in mind
  we reference the value we will use to manipulate the dom in this case
  inputRef which I set the textContents to the "countRef.current Clicks"
  so that handleClick() updates it automatically with every click
*/

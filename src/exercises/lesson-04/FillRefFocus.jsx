// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" placeholder="Type here..." ref={inputRef} />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

/* I import useRef from react and make a new inputRef and set its initial value to null
  then we make a function focusInput which we reference to the input but it used
  when the button is clicked. In the function we get the inoputRef.current.focus()
  so it will focus the <input when the button is clicked.

*/

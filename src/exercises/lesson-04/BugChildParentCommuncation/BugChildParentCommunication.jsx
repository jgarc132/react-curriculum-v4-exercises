//Do not change this component
//Update Parent and Child component so that the button increments the counter in Parent.

import Parent from './Parent';

export default function BugChildParentCommunication() {
  return <Parent />;
}

/**
 * Passed a prop to Child in this case a function which it uses when the button is clicked to incriment the counter
 *
 *
 */

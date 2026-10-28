// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(event) {
    alert('Button Clicked ✅');
    event.stopPropagation();
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

/*
  I added a stopPropagation in order to tell React that the click ends there instead for going
  up the tree to the parent and showing the parent Alert. In other words the click doesnt reach 
  the <div> so it doesn't show the other alert message. Bubbling is when two handlers happen one after another
  when a parent element and child element since the button is nested insde the <div>
  a click on the button also counts as a click on the div but nothing is set in place
  keeping react from going to the parent element and running that action.
*/

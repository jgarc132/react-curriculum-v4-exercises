//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let name = 'Juan';
  let age = 25;
  const hobbiesArray = [
    'Watching sports',
    'Watching movies',
    'Listening to music',
    'Lego building',
  ];
  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>
      <p>
        {' '}
        Hello! My name is {name} and I am {age}. I am from El Paso, Texas. I'm
        currently doing CTD's Advanced React Class and plan on furthering my
        career as a Software Engineer.
      </p>
      <ul>
        {hobbiesArray.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

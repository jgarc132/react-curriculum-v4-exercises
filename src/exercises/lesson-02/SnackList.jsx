function SnackList() {
  const snackObjects = [
    { name: 'Granola Bars', rank: 5 },
    { name: 'Pop-Tarts', rank: 4 },
    { name: 'Chocolate', rank: 3 },
    { name: 'TrailMix', rank: 2 },
    { name: 'CheeseSticks', rank: 1 },
  ];
  const orderedSnackObjects = snackObjects.toSorted((a, b) => a.rank - b.rank);
  return (
    <div>
      <h2>Snacks</h2>
      <ol>
        {orderedSnackObjects.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ol>
    </div>
  );
}
export default SnackList;

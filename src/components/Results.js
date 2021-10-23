const Results = ({ results }) => {
  return (
    <div>
      <ul>
        {results.map((result) => (
          <li key={result.name}>
            {result.name}: {result.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;

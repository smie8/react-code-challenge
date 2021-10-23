import { Button, FormControl, InputGroup } from "react-bootstrap";

const Search = ({ fetchData, setSearchInput }) => {
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <InputGroup>
        <FormControl
          onChange={handleInputChange}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        <Button onClick={fetchData}>search</Button>
      </InputGroup>
    </div>
  );
};

export default Search;

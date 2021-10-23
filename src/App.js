import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import { Alert, Card, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [errorAlert, setErrorAlert] = useState("");

  const sortByName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  };

  const fetchData = () => {
    const names = searchInput.split(",").map((name) => "name[]=" + name.trim());
    const urlParams = names.join("&");
    const baseUrl = "https://api.agify.io?";

    axios
      .get(baseUrl + urlParams)
      .then((res) => {
        setErrorAlert("");
        setResults(res.data.sort(sortByName));
      })
      .catch((err) => {
        console.log(err);
        setErrorAlert("error while fetching data");
        setResults([]);
      });
  };

  return (
    <Router>
      <header className="App-header">
        <Card className="mb-3">
          <Navbar bg="light">
            <Nav.Link as={Link} to="/">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/results">
              Results
            </Nav.Link>
          </Navbar>

          <Switch>
            <Route path="/results">
              <Results results={results} />
            </Route>
            <Route path="/">
              <Search fetchData={fetchData} setSearchInput={setSearchInput} />
            </Route>
          </Switch>
          {errorAlert ? <Alert variant="danger">{errorAlert}</Alert> : ""}
        </Card>
      </header>
    </Router>
  );
};

export default App;

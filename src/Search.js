import { useState } from "react";
import { Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Search = () => {

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  async function doSearch(err) {
    err.preventDefault();
    console.log("I think searchText is: " + searchText);
    navigate(`/SearchResult/${searchText}`)
  }

  return (

    <div>
      <Form onSubmit={doSearch} className="d-flex">
        <FormControl
          onChange={(event) => {
            setSearchText(event.target.value)
          }}
          type="text"
          placeholder="Search"
          className="me-2"
          value={searchText}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  )


}

export default Search;
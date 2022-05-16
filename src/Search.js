import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';


const Search = () => {

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  async function doSearch(err) {
    err.preventDefault();
    console.log("I think searchText is: " + searchText);

    let res = await axios.get(`http://localhost:4005/movie/searchMovie/${searchText}`)

    console.log(res.data);
    navigate(`/SearchResult/${res.data[0].id}`)

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
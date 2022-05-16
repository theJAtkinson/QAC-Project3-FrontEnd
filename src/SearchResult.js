import axios from "axios";
import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";



function SearchResult(){

    const {id} = useParams();

    console.log("I'm searching for "+ id)
    return(
        <div><h1>Search Results</h1></div>
    )
}

export default SearchResult;
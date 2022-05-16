import axios from "axios";
import React, { useState } from "react";

const Search = () => {

    const [content, setContent] = useState([])
    const [searchText, setSearchText] = React.useState('');


    React.useEffect(() => {
        axios.get(`http://localhost:4005/movie/read/screening/${searchText}`).then((response) => {
            setContent(response.data);
            console.log(content)
        });
    }, []);

    return (

        <div>

            <input className="search" type="text" palceholder="Search..." onChange={(e) => setSearchText(e.target.value)} />


        </div>
    )


}

export default Search;
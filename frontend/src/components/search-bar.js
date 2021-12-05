import React, { useState } from "react";
import "../App.css";


export default function SearchBar(props) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const data  = [
    "trousers",
    "pants",
    "jeans",
    "hoodies",
    "sweatshirt",
    "cardigan",
    "jacket",
    "coat",
    "accessories"
    ];


    function handleFilter (event) {
        const searchWord = event.target.value;
        console.log(searchWord)
        setWordEntered(searchWord);
        const newFilter = data.filter( value => 
            value.includes(searchWord.toLowerCase())
        );

        if (searchWord === "") {
        setFilteredData([]);
        } else {
        setFilteredData(newFilter);
        }
    };

    function clearInput() {
        setFilteredData([]);
        setWordEntered("");
    };

    function submitQuery() {
        window.location.replace('/results/' + wordEntered ); 
    }

    function onKeyDown(e) {
        if (e.keyCode === 13) {     
            window.location.replace('/results/' + wordEntered ); 
        }
    };
    

  

    return (
        <div className="search">
            <div className="searchInputs">
            <input
                type="text"
                className="search-input"
                placeholder={props.placeholder}
                value={wordEntered}
                onChange={handleFilter}
                onKeyDown={onKeyDown}/>
            </div>
        <div>
            <button onClick = {submitQuery}>Search</button>
        </div>

        {filteredData.length != 0 && (
        <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
                return (
                    <a key={key} className="dataItem" href={'results/'+ value} >
                    <p>{value} </p>
                    </a>
                );
        })}
        </div>
        )}
        </div>
    );
}



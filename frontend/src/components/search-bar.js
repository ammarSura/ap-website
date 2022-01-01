import React, { useState } from "react";
import "../App.css";
import Fuse from 'fuse.js'


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
        // const newFilter = data.filter( value => 
        //     value.includes(searchWord.toLowerCase())
        // );
        const options = {
            includeScore: false,
            shouldSort: true
          }
          
        const fuse = new Fuse(data, options);
        const result = fuse.search(searchWord)
        console.log('fuse', result)
        const newFilter = result;


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

        <div className="search" style={{marginRight: "10%", display: "flex",
        flexDirection: "row"}}>
            <div className="searchInputs" >
            <input
                type="text"
                className="search-input"
                placeholder={props.placeholder}
                value={wordEntered}
                onChange={handleFilter}
                onKeyDown={onKeyDown}/>
            </div>
        <div>
            <button style={{fontSize: "20px", paddingRight:"5px", paddingLeft: "5px"}}><i onClick = {submitQuery} class="fas fa-search" style={{fontSize: "18px"}}></i></button>
            
        </div>

        {filteredData.length != 0 && (
        <div className="dataResult" style={{position: "absolute", marginTop: "2.4%"}}>
            {filteredData.slice(0, 15).map((value, key) => {
                return (
                    <a key={key} className="dataItem" href={'//localhost:3000/results/'+ value.item} >
                    <p>{value.item} </p>
                    </a>
                );
        })}
        </div>
        )}
        </div>
    );
}



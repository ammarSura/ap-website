// import React, { Link, Component } from 'react';


// import "../App.css";

// async function Butter() {
        
//     const ass = await document.getElementById("myInput").value;
    
//     console.log(1, ass);

//     window.location.replace('/results/'+ ass); 

//     document.getElementById("myInput").value = ' ';
    
// }


// export default class SearchBar extends Component {

//     render() {
//         return (
//             <div>
//                 <input type="text" placeholder="Search" id="myInput"/>
//                 <button onClick={() => Butter()}>Search</button>    
//             </div>
//         );
//     }
        
       
// }

import React, { Component, Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import "../App.css";


function SearchBar(props) {
  

  const [ activeSuggestion, setActiveSuggestions ] = useState(0);
  const [ filteredSuggestions, setFilteredSuggestions ] = useState([]);
  const [ showSuggestions, setShowSuggestions ] = useState(false);
  const [ userInput, setUserInput ] = useState("");
  const [ query, setQuery ] = useState(false);

  useEffect( () => {
    if (query) {
        // console.log(query)
        window.location.replace('/results/'+ String(document.getElementById('search'))); 
    }
  })

  function onChange(e) {
    
    const suggestions  = [
        "trousers",
        "pants",
        "jeans",
        "hoodies",
        "sweatshirts",
        "cardigans",
        "jackets",
        "coats",
        "accessories"
    ];
    setUserInput(e.currentTarget.value);

    setFilteredSuggestions(suggestions.filter( suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ));
    
    if (userInput.length > 0) {
      
      setShowSuggestions(true);
      setActiveSuggestions(0);
      
    } else {
      
      setShowSuggestions(false);
      setActiveSuggestions(0);
    }
    
  };

  function onClick(e) {
    
      setActiveSuggestions(0);
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      setUserInput(e.currentTarget.innerText);
      setQuery(true);
      
  
  };

  function onKeyDown(e) {

    if (e.keyCode === 13) {
      
      setQuery(true);
      setActiveSuggestions(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
    }
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        setActiveSuggestions(filteredSuggestions.length - 1)
        return;
      }

      setActiveSuggestions(activeSuggestion - 1);
    }
    else if (e.keyCode === 40) {
      if (activeSuggestion === filteredSuggestions.length - 1) {
        setActiveSuggestions(0);
        return;
      }

      setActiveSuggestions(activeSuggestion + 1);
    }
  };

  
    
    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          type="text"
          id="search"
          placeholder="Search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
        <Button onClick = {() => setQuery(true)}>Search</Button>
      </Fragment>
    );
  
}

export default SearchBar;

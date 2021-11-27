import React, { Component, Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import "../App.css";


function Autocomplete(props) {
  

  const [ activeSuggestion, setActiveSuggestions ] = useState(0);
  const [ filteredSuggestions, setFilteredSuggestions ] = useState([]);
  const [ showSuggestions, setShowSuggestions ] = useState(false);
  const [ userInput, setUserInput ] = useState("");
  const [ query, setQuery ] = useState("");

  useEffect( () => {
    if (query !== "") {
      window.location.replace('/results/'+ query); 
    }
  })

  function onChange(e) {
    
    const { suggestions } = props.suggestions;
    setUserInput(e.currentTarget.value);

    setFilteredSuggestions(props.suggestions.filter( suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ));
    
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
      setQuery(e.currentTarget.innerText);
  
  };

  function onKeyDown(e) {

    if (e.keyCode === 13) {
      
      setQuery(userInput);
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
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          type="text"
          placeholder="Search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
        <Button>Search</Button>
      </Fragment>
    );
  
}

export default Autocomplete;

import React, { useState, useEffect } from "react";
import axios from "axios";

function TrackerButton(props) {

  const [isLogged, setIsLogged] = useState(props.logged);

  useEffect (() => {
    setIsLogged(props.logged);
 }, [props.logged]);
  
  function handleClick(event) {
    event.preventDefault();

    setIsLogged(!isLogged);

    const datestr = {log: props.name};

    //because useEffect is used, isLogged is updated to props's post-click state before this line is executed
    if (!isLogged) {            
      axios.post("/api/logs/add", datestr, {headers:{'Content-Type': 'application/json'}})
        .then(function(response) {
          console.log(response);
        });
        
    } else if (isLogged) {
      axios.delete("/api/logs/delete",{data: datestr}, {headers:{'Content-Type': 'application/json'}}) // "data" is required
        .then(function(response) {
          console.log(response);
        });
    }
  }

  return (
        <input 
          type="button"
          className={isLogged? "circle-logged": "circle-unlogged"} 
          onClick={handleClick}
          value={props.date}
        />
  );
}

export default TrackerButton;

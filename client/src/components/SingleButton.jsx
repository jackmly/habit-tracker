import React, { useState } from "react";
import axios from "axios";

function SingleButton(props) {

  var isLogged = props.logged;

  // const [isLogged, setIsLogged] = useState(false);
  const datestr = props.year + "/" + props.month + "/" + props.date;

  const [data, setLog] = useState({log: datestr});

  function handleClick(event) {
    event.preventDefault();
    // setIsLogged(!isLogged);
    isLogged  = !props.logged;

    if (isLogged) {
      axios.post("http://localhost:5000/api/logs/add", data, {headers:{'Content-Type': 'application/json'}})
        .then(function(response) {
          console.log(response);
        });
    }

    setLog({log: ""});

  }

  return (
        <input type="button" className={isLogged? "circle-logged": "circle-unlogged"} onClick={handleClick} value={props.date} />
  );
}

export default SingleButton;

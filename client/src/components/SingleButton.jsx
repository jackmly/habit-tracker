import React, { useState } from "react";
import axios from "axios";

function SingleButton(props) {

  const [isLogged, setIsLogged] = useState(false);
  const date = props.year + "/" + props.month + "/" + props.date;

  const [data, setLog] = useState({log: date,});

  function handleClick(event) {
    event.preventDefault();
    setIsLogged(!isLogged);

    axios.post("http://localhost:5000/logs", {log:"fun"}, {headers:{'Content-Type': 'application/json'}})
      .then(function(response) {
        console.log(response);
      });

    setLog({log: ""});

  }

  return (
        <input type="button" className={isLogged? "circle-logged": "circle-unlogged"} onClick={handleClick} value={props.date} />
  );
}

export default SingleButton;

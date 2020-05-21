import React, { useState } from "react";

function SingleButton(props) {

  const [isLogged, setIsLogged] = useState(false);

  function handleClick() {
    setIsLogged(!isLogged);

    console.log(props.month + "/" + props.date + "/" + props.year)
  }

  return (
        <input type="button" className={isLogged? "circle-logged": "circle-unlogged"} onClick={handleClick} value={props.date} />
  );
}

export default SingleButton;

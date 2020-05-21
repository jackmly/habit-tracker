import React, { useState } from "react";

function SingleButton(props) {

  function handleClick() {
    console.log(props.month + "/" + props.date + "/" + props.year)
  }

  return (
        <input type="button" className="circle" onClick={handleClick} value={props.date} />
  );
}

export default SingleButton;

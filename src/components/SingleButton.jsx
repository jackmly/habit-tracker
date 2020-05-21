import React, { useState } from "react";

function SingleButton() {
  const [checked, setChecked] = useState(true);

  function handleChange(event) {
    setChecked(!checked);
  }

  return (
    <form className="form">
        <input type="checkbox" id="checkbox1" name="checkbox1" checked={checked} onChange={handleChange} className="Checkbox" />
    </form>
  );
}

export default SingleButton;

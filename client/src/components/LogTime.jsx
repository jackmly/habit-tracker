import React from "react";
import Button from '@material-ui/core/Button';


function LogTime() {
    var day = new Date();
    var date = day.getDate();
    var month = day.getMonth()+1;
    var year = day.getFullYear();
    var dateStr = month + "/" + date + "/" + year;

    function handleClick() {
    }

    return(
        <div className="left-container">
            <h5>Today's Date: {dateStr}</h5>
            <Button variant="contained" color="default" onClick={handleClick}>Log</Button>
        </div>
    )
}

export default LogTime

import React, {useState, useEffect} from "react";
import axios from "axios";

function TrackerAddDelete(props) {
  
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  function getDateString(newDate) {
    const year = newDate.getFullYear();
    const month = newDate.getMonth()+1;
    const date = newDate.getDate();
    return year + "/" + month + "/" + date;
  }
 
  const [logData, setLogData] = useState(props.logData);

  useEffect(() => {
    setLogData(props.logData);
  }, [props.logData]);

  function handleClick(event) {
    event.preventDefault();

    var dateStr="";

    if (event.target.name === "today") {
      dateStr = getDateString(today);
    } else if (event.target.name === "yesterday") {
      dateStr = getDateString(yesterday);
    }

    const dateObj = {log: dateStr};

    props.updateLogs(dateStr);

    if (!logData.includes(dateStr)) {
      axios.post("/api/logs/add", dateObj, {headers:{'Content-Type': 'application/json'}})
        .then(function(response) {
          console.log(response);
        });

    } else {
      axios.delete("/api/logs/delete",{data: dateObj}, {headers:{'Content-Type': 'application/json'}}) // "data" is required
      .then(function(response) {
        console.log(response);
      });
    }
  }


  return ( 
    <div className="btn-group-vertical">
      <button
        className= "btn btn-sm btn-outline-secondary"
        name="today"
        onClick = {handleClick}>Today
      </button>

      <button
        className= "btn btn-sm btn-outline-secondary"
        name="yesterday"
        onClick = {handleClick}>Yesterday
      </button>
    </div>
  );
}

export default TrackerAddDelete
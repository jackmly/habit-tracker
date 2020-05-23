import React from "react";
import Tracker from "./Tracker";
import LogTime from "./LogTime";

function Home(){

    // function handleSuccessfulAuth(data){
    //     props.history.push("/")
    // }
    return (
        <div className="container-home">
            <LogTime />
            <Tracker />
        </div>
    )
}

export default Home
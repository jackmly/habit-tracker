import React from "react";
import Tracker from "./Tracker";
import LogTime from "./LogTime";

function Home(){
    return (
        <div class="container-home">
            <LogTime />
            <Tracker />
        </div>
    )
}

export default Home
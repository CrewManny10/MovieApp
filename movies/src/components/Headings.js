import React from "react";

//accepts a heading prop which gets rendered within a bootstrap column
//doing it this way makes it reuseable, and can be use else were
const Heading = (props) => {
    return (
        <div className="col">
            <h3>{props.heading}</h3>
        </div>
    );
};

export default Heading;

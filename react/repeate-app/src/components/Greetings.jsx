import React from "react";

function Greeting(props){
console.log(props)
    return(
        <>
        <h3>This is Greeting from Siddhart</h3>

        <h4>To Say I Love You</h4>
        <h2>To {props.girl}</h2>
        </>
    )

}

export default Greeting
import React from "react";

const FuctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h1>Hi, {props.name} I see you are {props.age}, {props.greeting}</h1>
}

export default FuctionalGreetingWithProps;
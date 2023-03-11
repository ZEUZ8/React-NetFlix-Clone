
import React from 'react'

export default function Name({just}){
    const [count,setCount] = React.useState("black") 
    function click(){
        setCount("red")
        just(10)
    }
    return(
        <>
            <h1 style={{color:count}}>hello</h1>
            <button onClick={click}>Click me</button>
        </>
    )
}


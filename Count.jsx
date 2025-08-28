import { useEffect, useState } from "react";

function Count(){
   
    let [count, setCount] = useState(0)
     useEffect(()=>{
        console.log("The count component is rendering")
    },[count])
    const handleclick = ()=>{
        setCount(count+1)
    }
    const handleclick1 = ()=>{
        setCount(count-1)
    }
    return (
        <>
        <button onClick={handleclick}>increase {count}</button>
       
        </>
    )
}
export default Count
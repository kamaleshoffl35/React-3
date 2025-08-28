import { useEffect } from "react";

function Basic(){
    useEffect(()=>{
        console.log("Render is happen at once")
    },[])
    return(
        <div>Go to view console</div>
    )
}
export default Basic
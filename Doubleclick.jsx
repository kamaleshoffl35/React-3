function Doubleclick(){
    const handleclick = ()=>{
        console.log("Box was double clicked")
    }
    return(
        <div onDoubleClick = {handleclick} style={{backgroundColor:"yellow", color:"black", height:"200px", width:"200px"}}>
            click
        </div>
    )
}
export default Doubleclick
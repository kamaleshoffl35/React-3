function KeyDown(){
    const handleclick =(event)=>{
        console.log(event.key)
    }
    return(
        <input type="text" onKeyDown={handleclick} />
    )
}
export default KeyDown
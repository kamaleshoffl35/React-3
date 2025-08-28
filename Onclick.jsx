function Onclick({label, onClick}){
    const handleclick = ()=> {
        alert("Button is clicked")
    }
    
    return(
        <button onClick={handleclick}>{label}</button>
    )
}
export default Onclick
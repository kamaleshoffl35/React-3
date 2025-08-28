function Mouse(){
    const mouseovermsg = ()=>{
        alert `Mouse is entered`
    }
    const mouseleft = ()=>{
        alert `Mouse is left`
    }
    return(
        <div onMouseEnter={mouseovermsg} onMouseLeave={mouseleft} style={{backgroundColor:"red", color:"black", height:"200px", width:"200px"}}></div>
    )
}
export default Mouse
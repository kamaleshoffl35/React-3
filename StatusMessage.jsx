function StatusMessage({status}){
    let color = "black"
    if(status === "success")
        color = "green"
    else if(status === "error")
        color = "red"
    else if (status === "Info")
        color = "blue"
    const styles = {
        color : color
    }
    return <p style={styles}>Status:{status}</p>
}
export default StatusMessage
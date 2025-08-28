function Weather({temperature}){
    let condition
    if(temperature > 30){
        condition = " ☀️ Hot Day"
    }
    else if(temperature < 10){
        condition = "❄️ Cold Day"
    }
    else {condition = " 🌤 Normal Day"}
    return (
        <h1>{condition}</h1>
    )    
    
}
export default Weather
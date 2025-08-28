function Discount({discount}){
     let message 
     if(discount>0){
        message = `You get ${discount}% Off`
     }
     else{
        message = `No discount Available`
     }
     return (
        <p>{message}</p>
     )

}
export default Discount
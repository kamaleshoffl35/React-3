function Product({instock,name}){
  let Productname
  if(instock){
    Productname = <span>{name}</span>
  }
  else {
    Productname = <span style = {{color:"red"}}>{name} Out of stock</span>
  }
  return(
    <p>{Productname}</p>
  )
}
export default Product
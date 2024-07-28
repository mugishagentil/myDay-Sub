import { useState } from "react"

function MyComponent(){
const [name, setName] = useState("");
const [comment, setComment] = useState("");
const [Number, setNumber] = useState();;
const [Payment, setPayment] = useState();
const [Shipping, setShipping] = useState()
function upDates(event){
    setName(event.target.value)
}
const newNumber = (number) => {
    setNumber(number.target.value)
}
const myComment = (event) => {
    setComment(event.target.value)
}
 
const myPayment = (event) => {
    setPayment(event.target.value)
}
const selctShipping = (event) => {
    setShipping(event.target.value)
}
return(
    <div>
        <input value={name} onChange={upDates}/>
        <p>Name: {name}</p>
        <input value={Number} onChange={newNumber} type="number"/>
        <p>Quantity: {Number}</p>
        <textarea values={comment} onChange={myComment}/>
        <p>{comment}</p>
        <select value={Payment} onChange={myPayment}>
            <option value="">Select Payment</option>
            <option value="VisaCard">Visa Card</option>
            <option value="Master Card">Master Card</option>
            <option value="BitCoin">BitCoin</option>
        </select>
        <p>Payments: {Payment}</p>
        <label >
            <input type="radio" value="Delivery"
            checked = {Shipping === "Delivery"}
            onChange={selctShipping}
            />
            Delivery
        </label>
        <br></br>
        <label >
            <input type="radio" value= "Pick Up" 
            checked = {Shipping === "Pick Up"}
            onChange={selctShipping}
            />
        </label>
        Pick Up
        <p>Shipping: {Shipping}</p>
    </div>
)
}

export default MyComponent
import { useState } from "react"

function Render(){
    const [name, setName] = useState("");
    const [Payments, setPayments] = useState();
    const [Delivery, setDelivery] = useState();
    const newPayment = (event) => {
        setPayments(event.target.value)
    }
    const upDates = (event) => {
        setName(event.target.value)
    }
    const myOption = (event) => {
        setDelivery(event.target.value)
    }
return(
    <div>
    <input type="text" value={name} onChange={upDates}/>
    <p>Name: {name}</p>
    <select value={Payments} onChange={newPayment}>
        <option >Select Option</option>
        <option value="Visa Card" >Visacard</option>
        <option value="Master Card" >Master Card</option>
        <option value="BitCoin" >Bit CoIN</option>
    </select>
    <p>Payment: {Payments}</p>
     
     <label>
        <input type="radio" 
        value="Delivery"
        checked = {Delivery === "Delivery"}
        onChange={myOption}
        />
        Delivery
     </label>
     <label >
        <input type="radio" 
        value= "Pick Up"
        checked = {Delivery === "Pick Up"}
        onChange={myOption}
        />
        Pick Up
     </label>
     <p>Shipping: {Delivery}</p>

    </div>
)
}
export default Render
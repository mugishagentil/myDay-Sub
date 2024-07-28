import { useState } from "react"

function updatesObject(){
    const [car, setcar] = useState({name: "Audi", manufacture: "Toyota", year: 2024})
    const newCarOne = (event) => {
        setcar({...car, year: event.target.value})
    
    }
    const newCarTwo = (event) =>{
        setcar({...car, name: event.target.value})
    }
    const newCarThree = (event) => {
        setcar({...car, name: event.target.value})
    }
    return(
        <div>
        <p>My Favorite Car: {car.name}, {car.manufacture}, {car.year}</p>
        <input type="number" value={car.year} onChange={newCarOne}/><br></br>
        <input type="text"  value={car.name} onChange={newCarTwo}/><br></br>
        <input type="text" value= {car.manufacture} onChange={newCarThree}/>
        </div>
    )
}
export default updatesObject
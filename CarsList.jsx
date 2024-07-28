import { useState } from "react"

function CarsList(){
        const [cars, setcars] = useState([]);
        const [carYear, setcarYear] = useState(new Date().getFullYear());
        const [carMake, setcarMake] = useState("");
        const [carModel, setcarModel] = useState('');

        const AddnewCar = () => {
            const newCar = {year: carYear, make: carMake, model: carModel}
            setcars([...cars, newCar])
            setcarYear(new Date().getFullYear())
            setcarMake("")
            setcarModel("")

        }
        const YearChange = (event) => {
              setcarYear(event.target.value)
        }
        const Modelchange = (event) => {
            setcarModel(event.target.value)

        }
        const Makechange = (event) => {
            setcarMake(event.target.value)
            
        }
        
        
        return(
            <div>
                <h3>My Favorite Cars</h3>
                <ol>
                {cars.map((car, index) => <li key={index}>{car.model} {car.make} {car.year}</li>)}
                </ol>
                <input type="number" value={carYear} onChange={YearChange} /><br/>
                <input type="text" value={carModel}  onChange={Modelchange} placeholder="Enter Car Name"/><br/>
                <input type="text" value={carMake}  onChange={Makechange} placeholder="Manufacture Name"/><br/>
                <button onClick={AddnewCar}>Add Car</button>
            </div>
        )
}
export default CarsList
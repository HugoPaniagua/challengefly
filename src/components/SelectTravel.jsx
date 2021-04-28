import React from 'react'
import { Input } from 'reactstrap'

// {origin.map((item, i) => {
//     return <option key={i} value={item.origin}>{item.origin === "COR" ? "Córdoba (COR)" : item.origin === "MDZ" ? "Mendoza (MDZ)" : item.origin === "EPA" ? "Buenos Aires (EPA)" : item.origin === "BRC" ? "Bariloche (BRC)" : false}</option>
// })}

const SelectTravel = ({destiny, origin, data, newTravel, getInput}) => {

    return(
        <>
        <div className="selectContainer">
        <Input type="select" name="origin" onChange={getInput} style={{width: "20vw"}} >
            <option disabled selected value={-1}>Desde</option>
            {origin.map((item, i) => {
                return <option key={i} value={item.origin}>{item.origin}</option>
            })}
        </Input>
        <Input type="select" name="destination" onChange={getInput} style={{width: "20vw"}} >
            <option selected>Hasta</option> 
            {newTravel.origin ?
            destiny.map(item => {
                return <option value={item.destination}>{item.destination}</option>
            }
            )
            :
            destiny.map(item => {
                return <option>{item.destination}</option>
            })
            
            }
        </Input>
    </div>
    <div className="selectContainer">
        <Input type="select" style={{width: "20vw"}}>
        <option></option>
        </Input>
        <Input type="select" style={{width: "20vw"}}>
        <option></option>
        </Input>
    </div>
    </>
    )
}

export default SelectTravel
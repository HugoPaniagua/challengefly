import React, { useState, useEffect } from 'react'

const Test = () => {
    const [data, setData] = useState([])
    const [origin, setOrigin] = useState([])
    const [destiny, setDestiny] = useState([])
    const [travel, setTravel] = useState(-1)

    useEffect(() => {
        fetch('dataset.json')
        .then(res => res.json())
        .then(res => {
            setOrigin(res.filter((v, i, a) => {
                return a.findIndex(newA => v.origin === newA.origin) === i
            }))
            setDestiny(res.filter((v, i, a) => {
                return a.findIndex(newA => v.destination === newA.destination) === i
            }))
        })
    }, [])



    const getInputValue = (e) => {
        const inputValue = e.target.value
        setTravel(inputValue)
    }
    console.log(travel)

    return(
        <div className="container p-5 m-5 d-flex justify-content-center">
            <div className="mx-5 bg-color-warning">
                <select type="select" onClick={getInputValue} style={{width: "20vw"}}>
                    <option value={-1}>elige</option>
                    {origin.map((item, index) => {
                        return <option key={index} value={item.origin}>{item.origin}</option>
                    })}
                </select>
            </div>
            <div>
                <select type="select" style={{width: "20vw"}}>
                    <option value="">elige</option>
                    <option>{travel}</option>
                </select>
            </div>
        </div>
    )
}

export default Test
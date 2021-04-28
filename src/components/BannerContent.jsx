import React, { useState, useEffect } from 'react';
import { Button } from 'rsuite';
import SelectTravel from './SelectTravel';


const BannerContent = () => {
    const [data, setData] = useState([])
    const [origin, setOrigin] = useState([])
    const [destiny, setDestiny] = useState([])
    //En NewTravel almaceno los Match
    const [newTravel, setNewTravel] = useState({})
    const [idArticles, setIdArticles] = useState(-1)

    useEffect(() => {
        fetch('dataset.json')
        .then(response => response.json())
        .then(response => {
            //En cada cargo todo el DataSet para luego encontrar coincidencias en el resultado del TravelSelect
            setData(response)
            //Filtro los valores repetidos de la Dataset.Origin()
            setOrigin(response.filter((value, index, array) => {
                return array.findIndex(newA => newA.origin === value.origin) === index
            }))
            //En éste filtro podría reutilizar el de Origin ya que los valores son siempre 4 distintos.
            //-Sin embargo, en el caso de que el dataSet tuviese Origenes y Destinos únicos esto sería un problema.
            setDestiny(response.filter((v, i, a) => {
                return a.findIndex(newA => newA.destination === v.destination) === i
            }))
            
        })
            .catch(error => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        const filter = data.filter((item) => {
            return (item.origin === newTravel.origin)
        })
        setDestiny(filter.filter((v, i, a) => {
            return a.findIndex(newA => newA.destination === v.destination) === i
        }))
       
    }, [newTravel])

    console.log(newTravel)
    const getInput = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value
            setNewTravel({
                ...newTravel,
                [inputName] : inputValue
            })
            console.log(e.target)
        }
            
    return(
        <section className="sectionContainer">
        <div className="sectionTitle">
            <h3>Viajar es fácil con Viajados.</h3>
        </div>
        <div className="cardContainer">
            <div className="mainCard">
                    <div className="topMainCard">
                        <h4>HOLA HOLA HOLA HOLA</h4>
                    </div>
                    <div className ="middleMainCard">
                        <div className="form-check form-check-inline p-1 px-3">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" for="inlineRadio1">Ida y vuelta.</label>
                        </div>
                        <div className="form-check form-check-inline p-1 px-2">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" for="inlineRadio1">Solo ida.</label>
                        </div>
                        <SelectTravel origin={origin} destiny={destiny} getInput={getInput} newTravel={newTravel} data={data}/>
                    </div>
                    <div className="d-flex flex-row-reverse py-2 px-3 bg-dark">
                        <Button>asdasd</Button>
                    </div>
            </div>
            <div className="secondCard">
                <h4 className="titleSecondCard" >Viajados® es tu mejor elección porque</h4>
                <p className="textSecondCard">Podrás viajar en pocos pasos.</p>
                <p className="textSecondCard">Excelente atención al cliente.</p>
                <p className="textSecondCard">Precios muy accesibles.</p>
            </div>
        </div>
        </section>
    )
}

export default BannerContent;
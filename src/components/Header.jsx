import React, { useState } from 'react'

const Header = () => {

    return (
        <>
        <div className="headerContainer">
            <div className="logoContainer">
                <img src="https://freesvg.org/img/wirelizard_Propellor_Airliner.png" className="logoR" ></img>
                <h2 className="pageTitle">Viajados</h2>
            </div>
            <div className="accessLog">
                <p className="accessLogText">Registrarse</p>
                <p className="accessLogText">Ingresar</p>
            </div>
        </div>
        </>
    )
}

export default Header;
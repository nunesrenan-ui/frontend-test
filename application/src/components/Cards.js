import React from  'react';
import './Cards.css'

const Cards = () => {
    return(
        <div className="Cards">
            <div className="container">
                <span>Encontrados 20 herois</span>
                <div className="wrapper">
                    <i><img src="./images/superhero.png" width="20" /></i> 
                    <span>Ordenar por nome - A/Z</span>
                    <img src="./images/toggle-left.png" width='70' />
                    <img src="./images/hearth-1.png" width="20"/>
                    <span>Somente Favoritos</span>
                </div>
            </div>
            <div>
                <img />
            </div>
        </div>
    )
}

export default Cards;
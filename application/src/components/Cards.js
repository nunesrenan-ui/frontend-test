import React from  'react';
import './Cards.css'

const Cards = () => {
    return(
        <div className="Cards">
            <div className="container">
                <span>Encontrados 20 herois</span>
                <div className="wrapper">
                    <span>Ordenar por nome - A/Z</span>
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
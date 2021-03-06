import React, { useState } from  'react';
import './Cards.css'

const Cards = ({data}) => {
    const results = data.data.results;
    
    console.log(results);
    
    return(
        <div className="CardsHeader">
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

            <div className="cards-container">
               { results.map(({name}) => {

                    return(
                        <div className="card">
                            <div className="image"></div>
                            <h1>{name}</h1>
                        </div> 
                    )   
                })}
            </div>
        </div>
    )
}

export default Cards;


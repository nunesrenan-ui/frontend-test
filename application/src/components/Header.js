import React, { useState } from 'react';
import "./Header.css";





const Header = () => {

    const [name, setName] = useState('');
    
    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&apikey=3f3b2601af6f85c4b73c5f8cd83358e6&hash=c967a17c3b09bf37e97c70f0b4d15088`)
        .then(response => console.log(response.json()))
    }

    return(
        <div className="header">
            <img src={"./images/logo.png"}></img>
            <h1>Explore o Universo</h1>
            <h3>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descubrirá em breve!</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={event => setName(event.target.value)} />
                <p>{name}</p>
            </form>
                
        </div>
    )

} 

export default Header;
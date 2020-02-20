import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cuid from 'cuid';

const PokemonCard = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                console.log('Response', res)
                setData(res.data.results)
            })
            .catch(err => console.log('Hey, didn\'t work', err))
    }, []);

    
    return (
        <div className="card">
                {data.map(pokemon => {
                    return (
                        <div key={cuid()} className="inner-card">
                            Name: {pokemon.name}
                        </div>
                    )
                } )}
            </div> 
    )
}

export default PokemonCard
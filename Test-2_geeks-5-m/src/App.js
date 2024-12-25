import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, filterPokemons } from './slices/pokemonSlice';
import style from './App.css';

const App = () => {
    const dispatch = useDispatch();
    const { filteredPokemons, status, error } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    const handleFilterChange = (e) => {
        const value = e.target.value;
        dispatch(filterPokemons({ type: 'name', value }));
    };

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div className='box'>
            <div className="poo">
                <h1>Pokemon List</h1>
                <input type="text" placeholder="Filter by name" onChange={handleFilterChange}/>
            </div>
            <div className='pokemonsList'>
                {filteredPokemons.map((pokemon) => (
                    <div className='pokemon'>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                        <h2>{pokemon.name}</h2>
                        <p>Weight: {pokemon.weight}</p>
                        <p>Height: {pokemon.height}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
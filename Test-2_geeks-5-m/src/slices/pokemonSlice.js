import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
    const detailedData = await Promise.all(
        response.data.results.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            return details.data;
        })
    );
    return detailedData;
});

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        filteredPokemons: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        filterPokemons(state, action) {
            const { type, value } = action.payload;
            state.filteredPokemons = state.pokemons.filter((pokemon) =>
                pokemon[type]?.toString().includes(value)
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pokemons = action.payload;
                state.filteredPokemons = action.payload;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { filterPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
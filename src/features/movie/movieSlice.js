import { createSlice } from "@reduxjs/toolkit";

const initialState={
    recommended:null,
    trending:null,
    originals:null,
    newDisney:null
}

const movieSlice=createSlice({
name:'movie',
initialState,
reducers:{
    setMovies:(state,action)=>{
        state.recommended=action.payload.recommended;
        state.trending=action.payload.trending;
        state.originals=action.payload.originals;
        state.newDisney=action.payload.newDisney;
    }
}
})

export const {setMovies} = movieSlice.actions;
export default movieSlice.reducer;

export const selectRecommended=(state)=> state.movie.recommended;
export const selectTrending=(state)=> state.movie.trending;
export const selectOriginals=(state)=> state.movie.originals;
export const selectNewDisney=(state)=> state.movie.newDisney;

import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponents";
import AllMovies from "./components/AllMovies";
export const API_KEY = 'cc2627e1';
const Container = styled.div`

display:flex;
flex-direction:column ; 


`;

const Header = styled.div`
display:flex;
flex-direction:row ;
justify-content:  space-between ;
background-color:black;
color:white;
padding:7px;
font-size:20px;
align-items:center;
font-weight:bold;
box-shadow: 0 3px 6px #555 ;
 `;

const AppName = styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 
 `;

const MovieImage = styled.img`
 
 width:40px;
height:40px;
margin:5px;
 
 `;

const SearchBox = styled.div`
 
 display:flex;
 flex-direction:row;
 padding: 8px 8px ;
 background-color: white;
 border-radius:6px;
 margin-left:20px;
 width:45% ;
 align-items:center;
  `;

const SearchIcon = styled.img`
  width:32px;
  height:32px;
  `;

const SearchInput = styled.input`
  
 color:black;
 font-size:16px;
 font-weight:bold;
  border:none;
  outline:none;
  margin-left:15px;
  `;

const MovieListContainer = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  padding:30px;
  justify-content:space-evenly ; 
  gap:24px;
  `;

const Placeholder = styled.img`
  width:120px;
  height:120px;
  margin:150px;
  opacity:50%;

  `;

function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const fetchData = async (searchString) => {

    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    console.log(response)
    updateMovieList(response.data.Search)
  };

  const onTextChange = (event) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() =>
      fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return <Container>
    <Header>
      <AppName>

        <MovieImage src="/movie-icon.svg" />
        MoviesApp
      </AppName>
      <SearchBox>
        <SearchIcon src="/search-icon.svg" />
        <SearchInput placeholder="Search Movie" onChange={onTextChange} />

      </SearchBox>
    </Header>
    {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie}
      onMovieSelect={onMovieSelect} />}
    {<MovieListContainer>
      {
        movieList?.length
          ? (movieList.map((movie, index) =>
          (<MovieComponent
            key={index}
            movie={movie}
            onMovieSelect={onMovieSelect}

          />
          ))
          ) :
          (
            <Placeholder src="/movie-icon.svg" />

          )}


    </MovieListContainer>}



  </Container>
    ;
}

export default App;



// * Successfully completed C++ Workshop Course by ** Learn To Thrive **.
// * Data Structures, Algorithms, and Web Development Bootcamp by ** Pepcoding Education Private Limited **.

// * Secured * 1496 * rank among 1lakh + participants in * CodeKaze - Round 1 *, an online coding competition organized by Coding Ninjas.
// * ** Codechef ** Max Rating - 1730(Handle : habs).
// * Secured * 895 * rank in ** Codechef STARTERS 25 ** among 10000 + participants.

// * Participated in CodeKaze Online Coding Competition organised by Coding Ninjas. 
// * Participated in CHASE Unicorn case study competition organised by E - Cell IIT BHU. 
// * Participated in 26th National Tennis Ball Cricket Championship 2015 - 2016. 
// * Participated in StockGro StockQuest - 5.0 organised by StockGro. 
// * Participated in International Mathematics Olympiad. 
// * Participated in Virtual Stock Market Workshops and Simulation Competition organised by E - cell IIT BOMBAY.
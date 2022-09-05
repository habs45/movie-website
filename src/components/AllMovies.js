import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

background:black;

`;
const Genre = styled.div`

display:flex;
flex-direction:column;
height:500px;
width:99%;
border:2px solid black;
background-color:white;
margin: 20px 4px;
background:black;
color:white;
`;
const MovieGenre = styled.div`
margin: 5px 5px;
display:flex;
flex-direction:row;
justify-content:  space-between ;
`;
const MovieType = styled.div`
padding-top:4px;
font-size: 25px; ;

`;
const GenreButton = styled.button`
box-shadow: 0 3px 6px #555 ;
border-radius:2px;
`;
const MoviesCollection = styled.div`
display:flex;
flex-direction:row;
justify-content:  space-between ;
flex-wrap:wrap;
`;
const EachMovie = styled.div`
color:white;
`;
const CoverImage = styled.img`
object-fit:cover;
height:350px;

`;
const MovieName = styled.span`
font-size:18px;
font-weight:600;

margin:15px 0;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;

`;

const InfoColumn = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between ; 

`;
const MovieInfo = styled.span`
font-size:16px;
font-weight:500;

text-transform:capitalize;
`;


const AllMovies = () => {
    return (
        <Container>
            <Genre>
                <MovieGenre>
                    <MovieType>Action</MovieType>
                    <GenreButton>See All</GenreButton>

                </MovieGenre>
                <MoviesCollection>
                    <EachMovie>
                        <CoverImage src='./movie-icon.svg' />
                        <MovieName> Avengers </MovieName>
                        <InfoColumn>
                            <MovieInfo>Year</MovieInfo>
                            <MovieInfo>Type</MovieInfo>

                        </InfoColumn>
                    </EachMovie>


                </MoviesCollection>
            </Genre>
        </Container>

    )

}
export default AllMovies;
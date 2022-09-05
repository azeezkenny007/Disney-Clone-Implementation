import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Movies() {
  const movies= useSelector(selectMovies);
  console.log('this is movie',movies)
  return (
    <Container>
      <h4>Recommended For You</h4>

      <Content>
         {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg}  />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Movies

const Container=styled.div`
      
`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (min-width: 200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
  }
`;
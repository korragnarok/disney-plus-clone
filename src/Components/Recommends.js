import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRecommend } from '../features/movie/movieSlice';

const Recommends = (props) => {

    const movies = useSelector(selectRecommend);
  
    return (
      <Container>
          {movies &&
            movies.map((movie, key) => (
              <Wrap key={key}>
                <Hidden>{movie.id}</Hidden>
                <Link to={`/detail/` + movie.id}>
                  <Image src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            ))}
      </Container>
    );
  };

const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 50px;
    left: 7%;
    width: 93%;
    margin-bottom: 100px;
    

    @media (max-width: 1300px) {
        width: 90%;
        left: 8.5%;
    }   

    @media (max-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
        left: 10%;
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
        width: 88.5%;
        left: 12%;
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        width: 83%;
        left: 16.5%;
    }
`;

const Wrap = styled.div`
  position: relative;
  width: 50%;
  top: 50px;
  right: 48px;
`

const Image = styled.img`
  width: 180%;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 4px solid transparent;

  &:hover {
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s !important;
      transform: scale(1.05);
      border: 4px solid hsla(0, 0%, 98%, 0.8);
`;

const Hidden = styled.div`
    display: none;
`;

  export default Recommends;
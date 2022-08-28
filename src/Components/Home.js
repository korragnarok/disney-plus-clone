import React from 'react'
import styled from 'styled-components'
import background from '../assets/home-background.png'
import Header from './Header';
import Viewers from './Viewers';
import Carousel from './Slider';
import Footer from './Footer';
import Recommends from './Recommends';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

function Home(props) {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newMovies = [];
  let natGeos = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(newMovies)
        switch(doc.data().type) {
          case 'recommend':
            recommends = [...recommends, {id: doc.id, ...doc.data()}];
            break;

          case 'new':
            newMovies = [...newMovies, {id: doc.id, ...doc.data()}];
            break;

          case 'natgeo':
            natGeos = [...natGeos, {id: doc.id, ...doc.data()}];
            break;
        }
      });
      dispatch(setMovies({
        recommend: recommends,
        newMovie: newMovies,
        natGeo: natGeos
      })
    );
    });
  }, [userName])

  return (
    <Container>
      <BackgroundImage src={background} alt="background" />
        <Header />
        <Carousel />
        <Viewers />
        <Recommends />
        <Footer />
    </Container>
  )
};

const Container = styled.div`
    position: relativ
    overflow: hidden;
`;

const BackgroundImage = styled.img`
    position: fixed;
    top: 0;
    width: 100%;
    height: 120%;
`;

export default Home
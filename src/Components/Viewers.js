import React from 'react';
import styled from 'styled-components';
import HoverVideoPlayer from 'react-hover-video-player';
import disneyVid from '../assets/disney.mp4';
import pixarVid from '../assets/pixar.mp4';
import marvelVid from '../assets/marvel.mp4';
import starwarsVideo from '../assets/starwars.mp4';
import natgeoVideo from '../assets/natgeo.mp4';

const Viewers = (props) => {
    const viewer = [
        {id: 1, vid: disneyVid, img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=400&aspectRatio=1.78&format=png'},
        {id: 2, vid: pixarVid, img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=400&aspectRatio=1.78&format=png'},
        {id: 3, vid: marvelVid, img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=400&aspectRatio=1.78&format=png'},
        {id: 4, vid: starwarsVideo, img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=400&aspectRatio=1.78&format=png'},
        {id: 5, vid: natgeoVideo, img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=400&aspectRatio=1.78&format=png'},
    ]
    return(
        <Container>
            {viewer.map((item) => {
                return(
                    <HoverVideoPlayer 
                    className='viewers__player'
                        videoSrc={item.vid}
                        pausedOverlay={
                            <img
                            className='viewers__img'
                            src={item.img}
                            alt=''/>}
                    />
                )
            })}
        </Container>
    )
};

const Container = styled.div`
    position: relative;
    overflow: hidden;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;   
    z-index: 999; 
    padding-bottom: 7rem;

    overflow: hidden;

    .viewers__img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 0.5;
        border: 3px solid rgb(61, 62, 72);
        border-radius: 6px;
        object-fit: cover;
        background: linear-gradient(to bottom, rgba(47,49,61,1) 0%,rgba(32,33,44,1) 100%);

        &:hover {
            background: transparent;
            z-index: 9999;
        }
    }

    .viewers__player {
        cursor: pointer;
        border-radius: 6px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s !important;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }
    
    .viewers__player:hover {
        scale: 1.05;
        z-index: 0;

    }
    
    .viewers__player video {
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 6px;
        border: 3px solid rgb(61, 62, 72);
        z-index: -1;
`;

export default Viewers;

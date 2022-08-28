import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import sliderData from "../slider_data";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import styled from "styled-components";

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            draggable: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4400,
            foucsOnSelect: true,
            nextArrow: <NextArrow />,
            prevArrow: <PreviousArrow />,
        }

        return(
            <Container>

                <Slider {...settings}>
                    {sliderData.map((slide) => {
                        return (
                            <Wrap>
                                <Frame>
                                    <TitleImg 
                                        className="title"
                                        src={slide.titleImg} />
                                    <Image src={slide.img} />                                
                                </Frame>
                            </Wrap>
                            
                        )
                    })}
                </Slider>
            </Container>
        )
    }
};

function NextArrow(props) {
    const { onClick } = props;
    return (
        <Next className="button__next">
            <HiOutlineChevronRight onClick={onClick} />
        </Next>
    );
};

function PreviousArrow(props) {
    const { onClick } = props;
    return (
        <Previous className="button__previous">
            <HiOutlineChevronLeft onClick={onClick} />
        </Previous>
    );
};

const Container = styled.div`

    position: relative;
    top: 100px;
    z-index: 2;

    overflow: hidden;


    .slick-current .title {
        width: 100%;
        animation: moveToLeft 1s ease-in-out;
        animation-delay: 5ms;

        @keyframes moveToLeft {
            100% {
                transform: translateX(0px);
            }
            0% {
                transform: translateX(30px);
            }
        }  
}
`;

const Wrap = styled.div`
    padding: 0 1rem;

    overflow: hidden;
`;

const Frame = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 8px;
    border: 3px solid transparent;
    transition: all 150ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s !important;

    overflow: hidden;
    

    &:hover {
        border: 3px solid hsla(0, 0%, 95%, 0.9);
        border-radius: 8px;
}
`;

const TitleImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    

`;

const Image = styled.img`
    width: 100%;
    border-radius: 6px;
    height: 100%;
    z-index: -1;
    cursor: pointer;
`;

const Next = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 98%;
    right: 1.5%;
    bottom: 5%;
    font-size: 3rem;
    opacity: 0;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

const Previous = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38%;
    top: 30%;
    left: 2%;
    font-size: 3rem;
    opacity: 0;
    z-index: 1;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;
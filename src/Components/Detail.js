import styled from "styled-components";
import { BsTriangleFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from '../firebase';


const Detail = (props) => {

    const { id } = useParams();
    const [ detailData, setDetailData ] = useState({});

    useEffect(() => {
        db.collection('movies').doc(id)
            .get()
            .then((doc) => {
            if (doc.exists) {
                setDetailData(doc.data());
            } else {
                console.log('no such document in firebase')
            }
        }).catch((error) => {
            console.log('error getting document: ', error)
        });
    }, [id]);

    return (
        <Container>
            <Background>
                    <img
                    src={detailData.backgroundImg}
                    alt={detailData.title}
                    />
            </Background>

            <ImageTitle>
                <img
                src={detailData.titleImg}
                alt=''
                />
            </ImageTitle>

            <Content>
                <Information>
                    <Rating src={detailData.rating} />
                    <AD src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FD4912EB883B7CCB847EB9C62E1FC853D547CAF7DF940B9086AE35AFAD0848AB/scale?width=240' />
                    <CC src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FAE63AC7AC11C27C949E1856CF188BF09FC20EA52AEA3B65B43C24EEB5F29BFD/scale?width=240' />
                    <Info>{detailData.info}</Info>
                </Information>
                <SubTitle>
                    <h6>{detailData.subTitle}</h6>
                </SubTitle>
                <Controls>
                    <Player>
                        <BsTriangleFill style={{ transform: 'rotate(90deg)', fontSize: 20 }}/>
                        <span>play</span>
                    </Player>
                    <AddList>
                        +
                    </AddList>
                    <GroupWatch>
                        <HiUsers />
                    </GroupWatch>
                </Controls>
                <Description>
                    <p>{detailData.description}</p>
                </Description>
            </Content>

        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0px;

    @media (max-width: 1289px) {
        gap: 150px;
    }

    @media (max-width: 968px) {
        gap: 250px;
    }

    @media (max-width: 705px) {
        gap: 350px;
    }

    @media (max-width: 500px) {
        gap: 450px;
    }

    @media (max-width: 200px) {
        gap: 550px;
    }
`;

const Background = styled.div`
    height: 100%;
    mask-image: linear-gradient(to bottom,rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));    

    img {
        width: 100%;
        mask-image: linear-gradient(to left,rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }
`;

const ImageTitle = styled.div`
    position: absolute;
    top: 22%;
    left: 5%;

    img {
        width: 35%;
    }
`;

const Content = styled.div`
`;

const Information = styled.div`
    position: absolute;
    top: 52%;
    left: 5%;
    display: flex;
    gap: 10px;
`;

const Rating = styled.img`
    width: 40px;
    object-fit: contain;
`;

const AD = styled.img`
    width: 40px;
    object-fit: contain;
`;

const CC = styled.img`
    width: 30px;
    object-fit: contain;
`;

const Info = styled.p`
    font-size: 12px;
    font-weight: 100;
`;

const SubTitle = styled.div`
    position: absolute;
    top: 53%;
    left: 5%;

    h6 {
        font-size: 12px;
        font-weight: 200;
    }
`;

const Controls = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 20px;
    top: 60%;
    left: 6%;
`;

const Player = styled.button`
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: white;
    padding: 1rem 1.75rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s !important;

    &:hover {
        background-color: lightgray;
    }

    span {
        font-family: 'Avenir', sans-serif;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
`;

const AddList = styled.button`
    font-family: 'Avenir', sans-serif;
    height: 45px;
    width: 45px;
    color: white;
    font-size: 22px;
    font-weight: 700;
    background-color: black;
    border: 2px solid white;
    border-radius: 50%;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s !important;

    &:hover {
        color: black;
        background-color: white;
        border: 2px solid black;
    }
`;

const GroupWatch = styled.button`
    font-family: 'Avenir', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    color: white;
    font-size: 22px;
    font-weight: 700;
    background-color: black;
    border: 2px solid white;
    border-radius: 50%;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s !important;

    &:hover {
        color: black;
        background-color: white;
        border: 2px solid transparent;
    }
`;

const Description = styled.div`
    position: absolute;
    max-width: 800px;
    top: 70%;
    left: 5%;
    margin-right: 10px;
    font-size: 20px;
    font-weight: 200;
    line-height: 35px;
`;

export default Detail;
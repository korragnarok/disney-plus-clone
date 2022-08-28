import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
        <Logo src='https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg'/>
        <Row>
            <Tab>Subscriber Agreement</Tab>
            <Tab>Your California Privacy Rights</Tab>
            <Tab>Do Not Sell My Personal Information</Tab>
            <Tab>Children's Online Privacy Policy</Tab>
        </Row>
        <Row>
            <Tab>Closed Captioning</Tab>
            <Tab>Supported Devices</Tab>
            <Tab>Gift Disney+</Tab>
            <Tab>About Us</Tab>
            <Tab>Disney+ Partner Program</Tab>
            <Tab>Interst-based Ads</Tab>
        </Row>
        <Row>
            <Tab>© Disney. All Rights Reserved.</Tab>
        </Row>
    </Container>
  )
};

const Container = styled.footer`
    position: relative;
    background-color: rgb(15,11,20);
    height: 300px;

    overflow: hidden;
`;

const Logo = styled.img`
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    width: 80px;
    
`;

const Row = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    gap: 35px;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem;
    top: 30%;
    bottom: 0;
`;

const Tab = styled.div`
    font-size: 12px;
    color: rgb(202,202,202);
`;

export default Footer;
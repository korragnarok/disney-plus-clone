import React from "react";
import styled from "styled-components";
import Header from "./Header";


const Login = (props) => {
    return(
        <Container className="login">
        <Header />
        <Background src='https://cnbl-cdn.bamgrid.com/assets/573dd3f069e6d574eac4e593f57d380b4c1c8a2319bc940a93749779c5bd34cc/original'/>
        <Content>
            <CTA>
                <CTALogoOne src='https://cnbl-cdn.bamgrid.com/assets/73855ecdad3fbc99c89bb2c1d21be651b543ff1fc2371c8dddfe146629e2bea0/original' alt=''/>
                <button>get the disney bundle</button>
                <Stream>
                    <h6>Stream Now.</h6>
                    <p>Terms Apply</p>
                </Stream>
                <CTALogoTwo src='https://cnbl-cdn.bamgrid.com/assets/8349a1f652e69bf1c3685a888092435110056a55e27b4eac3289e10fcb232978/original' alt=''/>
            </CTA>
        </Content>
    </Container>
)
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 800px;
`;

const Content = styled.div`
    position: relative; 
    display: flex;
    justify-content: center;
    aling-items: center;
    flex-direction: column;
    left: 50%;
    top: -20%;
    transform: translateX(-50%);
    width: 50vw;
    height: 100%;
    min-height: 100vh;
    padding: 80px 40px;
    overflow: hidden;
`;

const Background = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    overflowY: hidden;
`;

const CTA = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1vw;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;

    button {
        font-family: 'Avenir', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #0163E5;
        width: 100%;
        height: 50px;
        max-width: 600px;
        margin: 50px 0;
        padding: 16.5px 0;
        border: none;
        border-radius: 6px;
        color: white;
        text-transform: uppercase;
        font-size: 20px;
        letter-spacing: 1.5px;

        &:hover {
            background-color: #0483ee;
        }
}
`;

const CTALogoOne = styled.img`
    display: block;
    max-width: 600px;
    min-height: 1px;
`;

const CTALogoTwo = styled.img`
    display: block;
    max-width: 600px;
    min-height: 1px;

`;

const Stream = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -25px;
    margin-bottom: 20px;

h6 {
    color: hsla(0, 0%, 95.3%, 0.8);
    font-size: 12px;
    margin-right: 5px;
}

p {
    color: hsla(0, 0%, 95.3%, 0.8);
    font-size: 12px;
    text-decoration: underline;
}
`;

export default Login;
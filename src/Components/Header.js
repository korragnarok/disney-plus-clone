import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { auth, provider } from "../firebase";
import { useNavigate} from "react-router-dom";
import { 
    selectUserName, 
    selectUserPhoto, 
    setUserLoginDetails,
    setSignOutState
} from "../features/user/userSlice";
import '../header.css';
import { Link } from 'react-router-dom';
import { BiDotsVertical } from 'react-icons/bi';
import { HiHome, HiPlus } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { RiMovie2Fill } from 'react-icons/ri';
import { MdMovie } from 'react-icons/md';

function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                navigate('/home');
            }
        })
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
            }
    };

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }));
    }

    const [colorChange, setColorChange] = useState(false);
    const changeNavBarColor = () => {
        if (window.scrollY >= 5) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    }
    window.addEventListener('scroll', changeNavBarColor);

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMoustOut = () => {
        setIsHovering(false);
    };

    return (
        <div className={ colorChange ? 'header__colorChange' : 'header'}>
            { !userName ? <LoginButton onClick={handleAuth}>log in</LoginButton> : <>
        <Link to={`/home/`}>
         <Logo
        src='https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg'
        alt='disney plus logo'/>
        </Link>
       
        <List>
            <Item>
            <Link to={`/home/`}>
                <Icon><HiHome /></Icon>
            </Link>
            <Link   Link to={`/home/`}>
                <span>Home</span>
                </Link>
            </Item>
            <Item>
                <Icon><BiSearch /></Icon>
                <span>Search</span>
            </Item>
            <Item>
                <Icon><HiPlus /></Icon>
                <span>Watchlist</span>
            </Item>
            <ItemShow>
                <Dots>
                    <BiDotsVertical onMouseOver={handleMouseOver} onMouseOut={handleMoustOut} />
                </Dots>
                {isHovering &&         
                    <HoverMenu>
                        <Item>
                            <Icon><AiFillStar /></Icon>
                            <p>Originals</p>
                        </Item>
                        <Item>
                            <Icon><RiMovie2Fill /></Icon>
                            <p>Movies</p>
                        </Item>
                        <Item>
                            <Icon><MdMovie /></Icon>
                            <p>Series</p>
                        </Item>
                    </HoverMenu>
                    }
            </ItemShow>
            <ItemHide>
                <Icon><AiFillStar /></Icon>
                <span>Originals</span>
            </ItemHide>
            <ItemHide>
                <Icon><RiMovie2Fill /></Icon>
                <span>Movies</span></ItemHide>
            <ItemHide>
                <Icon><MdMovie /></Icon>
                <span>Series</span>
            </ItemHide>
        </List>
        <SignOut>
            <User>
                <img 
                className='header__avatar'
                src={userPhoto}
                alt={userName} />
            </User>
            <DropDown>
                <span onClick={handleAuth}>Log Out</span>
            </DropDown>
        </SignOut>
        </> 

    }
        </div>
      )
    };
    
    
const Logo = styled.img`
    width: 80px;
`;  


const List = styled.ul`
    position: relative;
    display: flex;
    flex: 1;
    flex-flow: row nowrap;
    align-items: center;
    gap: 40px;
    margin-top: 15px;
    text-transform: uppercase;
    color: white;
    list-style: none;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 2px;
`;

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
    z-index: 99;

    & span {
        position: relative;

        @media (max-width: 1050px) {
            display: none;
        }

        &:after {
            content: '';
            position: absolute;
            background-color: white;
            height: 2px;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }

        &:hover {
            &:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`;

const ItemHide = styled.li`;
    display: flex;
    gap: 15px;
    z-index: 99;

    & span {
        position: relative;

        &:after {
            content: '';
            position: absolute;
            background-color: white;
            height: 2px;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }

        &:hover {
            &:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }

    @media (max-width: 1050px) {
        display: none;
    }
`;

const ItemShow = styled.li`
    display: none;

    @media (max-width: 1050px) {
        display: block;
}
`;

const Icon = styled.a`
    font-size: 16px;
    z-index: 99;

    @media (max-width: 1050px) {
        font-size: 18px;
        cursor: pointer;   
        position: relative;

        &:after {
            content: '';
            position: absolute;
            background-color: white;
            height: 2px;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }

        &:hover {
            &:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`;

const HoverMenu = styled.div`
    position: absolute;
    top: 40px;
    left: 230px;
    padding: 1rem 4rem 1rem 1rem;
    background-color: rgb(19,19,19);
    border: 1px solid rgb(61, 62, 72);
    border-radius: 4px;

    p {
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`;

const Dots = styled.a`
    font-size: 20px;
`;

const HoverItem = styled.li``;

const HoverIcon = styled.a``;

const User = styled.div`
    & img {
        margin-top: 10px;
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        z-index: 99;
    }
`;

const LoginButton = styled.a`
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Avenir', sans-serif;
    color: white;
    background-color: hsla(0, 0%, 0%, 0.9);
    border: 1px solid white;
    border-radius: 4px;
    width: 100px;
    height: 50px;
    letter-spacing: 1px;
    right: 0;
    margin: 10px 1rem;
    padding: 0.5rem;
    text-transform: uppercase;
    font-size: 18px;
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: hsla(0, 0%, 100%, 0.9);
        color: black;
    }
`;

const UserImg = styled.div`
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    right: 0;
    margin: 1rem 2.5rem;
    object-fit: contain;
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.8);
    border-radius: 6px;
    padding: 0.5rem;
    box-shadow: rgb(0 0 0/ 50%) 0px 0px 17px 0px;
    font-size: 14px;
    letter-spacing: 2px;
    width: 100px;
    opacity: 0;
    z-index: 999;
`;

const SignOut = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 48px;
    width: 48px;
    cursor: pointer;
    color: white;

    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        }

        &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

export default Header;
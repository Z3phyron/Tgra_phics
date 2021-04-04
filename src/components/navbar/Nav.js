import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Nav = () => {

  const [click, setClick] = useState(false)


  const handleClick = () => {
    setClick(!click)
  }




    return (
        <Header>
            <Logo>
              <Link to="/">
              <img src={logo} alt=""/>
              </Link>
            </Logo>
            <Toggle onClick={handleClick}>
              {click ? <FaTimes/> : <FaBars/>}
            </Toggle>
            <Navigation  className={click ? 'active ' : ''}>
              <ul>
                <li><Link to="/" onClick={handleClick}>Home</Link></li>
                <li><Link to="/work" onClick={handleClick}>Portfolio</Link></li>
                <li><Link to="/contact" onClick={handleClick}>Contact</Link></li>
              </ul>

            </Navigation>
    </Header>
    )
}

const Header = styled.div`
position: fixed;
top:0;
left:0;
background: #fff;
width: 100%;
height: 70px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.04)


`;

const Logo = styled.div`
  position: fixed;
  top: 10px;
  left: 100px;
  font-size: 2rem;
  font-weight: 700;
  z-index: 20;
  
  img {
    width: 60px;
  }

  @media (max-width: 1068px) {
   top: 10px;
   left: 40px;
    
   }

   @media (max-width: 568px) {
    top: 8px;
   left: 20px;
  }

  `; 


/* TOGGLE */
const Toggle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
  z-index: 20;
  cursor: pointer;
  background: #2695eb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20pt;
  color: #fff;
`; 

const Navigation = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  width: 50%;
  height: 100%;
  background-color: #fff;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s;
  z-index:10;

  

    &.active {
    right: 0;
  }

  ul {
    position: relative;
  }

  ul li {
    position: relative;
    list-style: none;
    text-align: center;
    margin: 30px 0;
  }


  ul li a {
    font-size: 2.2rem;
    color: #111;
    text-decoration: none;
    font-weight: 300;
  }

 ul li a:hover {
  color: var(--primary-color);
}


`;









 


export default Nav

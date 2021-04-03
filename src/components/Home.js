import React from 'react'
import styled from 'styled-components'
import happy from './images/Happy.svg'
import { motion } from 'framer-motion'
import {pageAnimation} from './Animation'
import circle from './images/circle.svg'
import star from './images/star.svg'
import rect from './images/rect.svg'

const Home = () => {

  const Left = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeOut'
      }
    }
  }

  const TextAnim = {
    hidden: {
      x: -1000,
    },
    show: {
      x: 0,
      transition: {
        duration: 1.5
      }
    }
  }

  const FadeAnim = {
    hidden: {
     opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 2
      }
    }
  }

  const Container = {
    hidden: {
      opacity:0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 1.5,
        when:"afterChildren"
      
      }
    }
  }

    return (
      
        
            <HomeStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" className="home-content">
                <Background>
                  <img src={circle} alt="" className="circle"/>
                  <img src={star} alt="" className="star"/>
                  <img src={rect} alt="" className="rect"/>
                  <img src={circle} alt="" className="circle2"/>
                  <img src={star} alt="" className="star2"/>
                  <img src={rect} alt="" className="rect2"/>
                </Background>
                  <motion.div variants={Container}
                  initial="hidden"
                  animate="show">
                      <Hide>
                        <motion.h1 variants={Left} initial="hidden" animate="show">
                        Hi, i'm 
                        </motion.h1>
                      </Hide>
                      <Hide>
                        <motion.h1 variants={Left} initial="hidden" animate="show">
                        Feyishayo Akintola
                        </motion.h1>
                      </Hide>
                      <motion.p variants={TextAnim} initial='hidden' animate='show'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque
                      nam saepe vero voluptatem vel fuga a eaque earum alias ipsam
                      aspernatur culpa maxime laboriosam, impedit quae officiis consectetur
                      </motion.p>
                      <motion.Link variants={FadeAnim} initial="hidden" animate="show" class="btn">Hire me!</motion.Link>
                  </motion.div>
                  
                  <div className="image">
                      <img src={happy} alt=""/>
                  </div>
            </HomeStyle>
    )
}

const Background = styled.div`
  position: fixed;
  top:0;
  left: 0;

  .circle {
    position: fixed;
    left: 35%;
    top: 25vh;
    animation: spin;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .star {
    position: fixed;
    left: 15%;
    bottom: 17vh;
    animation: spin;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .rect {
    position: fixed;
    right: 10%;
    top: 27vh;
    animation: spin;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .rect2{
    position: fixed;
    left: 50%;
    bottom: 27vh;
    animation: turn;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .circle2 {
    position: fixed;
    right: 35%;
    bottom: 10vh;
    animation: turn;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .star2 {
    position: fixed;
    right: 50px;
    bottom: 27vh;
    animation: turn;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

      @-moz-keyframes spin {
        from { -moz-transform: rotate(0deg); }
        to { -moz-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
        from { -webkit-transform: rotate(0deg); }
        to { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }
      @-moz-keyframes turn {
        from { -moz-transform: rotate(0deg); }
        to { -moz-transform: rotate(-360deg); }
    }
    @-webkit-keyframes turn {
        from { -webkit-transform: rotate(0deg); }
        to { -webkit-transform: rotate(-360deg); }
    }
    @keyframes turn {
        from {transform:rotate(0deg);}
        to {transform:rotate(-360deg);}
    }
`;

const HomeStyle = styled(motion.div)`
  display: grid;
  grid-template-columns: 60% auto;
  flex-direction: row;
  height: 90vh;
  align-items: center;
  padding: 100px;
  margin-top: 60px;
  justify-content: space-between;

  @media (max-width: 1068px) {
    padding: 100px 40px;
    grid-template-columns: 1fr;
    
   }
 
    .home-content {
      max-width: 550px;
    }

.image {
    width:500px;
    @media (max-width: 1068px) {
      display: none;

   }
}

  .image  img{
    width: 100%;
    object-fit: cover;
    
    
    }

  .btn {
    cursor: pointer;
    display: inline-block;
    background: var(--primary-color);
    color: #fff;
    text-decoration: none;
    padding: 10px 30px;
    margin: 20px 0;
    border: 0;
  }
  
  .btn:hover {
    transform: scale(0.98);
  }
`;

const Hide = styled(motion.div)`
  overflow: hidden;
`;



export default Home

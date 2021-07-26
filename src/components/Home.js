import React from 'react'
import styled from 'styled-components'
import happy from './images/Happy.svg'
import { motion } from 'framer-motion'
import {pageAnimation} from './Animation'


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
      <HomeStyle
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className="home-content"
      >
        <motion.div variants={Container} initial="hidden" animate="show">
          <Hide>
            <motion.h1 variants={Left} initial="hidden" animate="show">
              Hi, i'm
            </motion.h1>
          </Hide>
          <Hide>
            <motion.h1 variants={Left} initial="hidden" animate="show" className='title'>
              Feyishayo Akintola
            </motion.h1>
          </Hide>
          <motion.p
            variants={TextAnim}
            initial="hidden"
            animate="show"
            className="desc"
          >
            Highly creative and multitalented Graphic Designer with extensive
            experience in multimedia, marketing, and print design.
          </motion.p>
          <motion.Link
            variants={FadeAnim}
            initial="hidden"
            animate="show"
            class="btn"
          >
            Hire me!
          </motion.Link>
        </motion.div>

        <div className="image">
          <img src={happy} alt="" />
        </div>
      </HomeStyle>
    );
}


const HomeStyle = styled(motion.div)`
  display: grid;
  grid-template-columns: 60% auto;
  flex-direction: row;
  height: 90vh;
  align-items: center;
  padding: 100px;
  margin-top: 60px;
  justify-content: space-between;
  z-index: 5;

  @media (max-width: 568px) {
    padding: 100px 20px;

    .title {
      font-size: 25px;
    }

    /* .desc {
      text-align: justify;
    } */
  }

  @media (max-width: 1068px) {
    padding: 100px 40px;
    grid-template-columns: 1fr;
  }

  .home-content {
    max-width: 550px;
  }

  .image {
    width: 500px;
    @media (max-width: 1068px) {
      display: none;
    }
  }

  .image img {
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

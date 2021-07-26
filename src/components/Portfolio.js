import React from 'react'
import styled from 'styled-components'
import work1 from './images/work1.jpg'
import work2 from './images/work2.jpg'
import work3 from './images/work3.jpg'
import work4 from './images/work4.jpg'
import work5 from './images/work5.jpg'
import work6 from './images/work6.jpg'
import work7 from './images/work7.jpg'
import work8 from './images/work8.jpg'
import work9 from './images/work9.jpg'
import work10 from './images/work10.jpg'
import work11 from './images/work11.jpg'
import work12 from './images/work12.jpg'
import work13 from './images/work13.jpg'
import { motion } from 'framer-motion'
import {pageAnimation} from './Animation'

const Portfolio = () => {
  const TitleAnim = {
    hidden: {
      x: -1000,
    },
    show: {
      x: 0,
      transition: {
        duration: 1
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
  const Container = {
    hidden: {
      opacity:0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 1,
        when:"afterChildren"
      
      }
    }
  }
    return (
      <PortfolioStyle
        variants={pageAnimation}
        exit="exit"
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={Container}
          initial="hidden"
          animate="show"
          class="title"
        >
          <motion.h1 variants={TitleAnim} initial="hidden" animate="show">
            Some of my finest work
          </motion.h1>
          <motion.p
            variants={TextAnim}
            initial="hidden"
            animate="show"
            className="desc"
          >
            Hi, I'm a Highly creative and multitalented Graphic Designer with
            extensive experience in multimedia, marketing, and print design.
            Exceptional collaborative and interpersonal skills; dynamic team
            player with well-developed written and verbal communication
            abilities. Highly skilled in client and vendor relations and
            negotiations; talented at building and maintaining “win-win”
            partnerships. Passionate and inventive creator of innovative
            marketing strategies and campaigns; accustomed to performing in
            deadline-driven environments with an emphasis on working within
            budget requirements.
            <br />
            <br />
            While graphic design and innovation are my two passions, I also
            enjoy games,music and exploring other things world. I am insanely
            curious about what the world has to offer
          </motion.p>
        </motion.div>

        <PortfolioItems>
          <Item>
            <img src={work1} alt="" />
          </Item>
          <Item>
            <img src={work2} alt="" />
          </Item>
          <Item>
            <img src={work3} alt="" />
          </Item>
          <Item>
            <img src={work4} alt="" />
          </Item>
          <Item>
            <img src={work5} alt="" />
          </Item>
          <Item>
            <img src={work6} alt="" />
          </Item>
          <Item>
            <img src={work7} alt="" />
          </Item>
          <Item>
            <img src={work8} alt="" />
          </Item>
          <Item>
            <img src={work9} alt="" />
          </Item>
          <Item>
            <img src={work10} alt="" />
          </Item>
          <Item>
            <img src={work11} alt="" />
          </Item>
          <Item>
            <img src={work12} alt="" />
          </Item>
          <Item>
            <img src={work13} alt="" />
          </Item>
        </PortfolioItems>
      </PortfolioStyle>
    );
}

const PortfolioStyle = styled(motion.div)`
    display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  padding: 100px;
  margin-top: 60px;
  @media (max-width: 1068px) {
    padding: 100px 40px;
   
   }
   @media (max-width: 568px) {
    padding: 100px 20px;

    .desc {
      text-align: justify;
    }
  }
`;

const PortfolioItems = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    z-index: -1;
    
`;
  
const Item = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    margin: 10px;
    overflow: hidden;
    
    img {
    width: 100%;
    height: 100%; 
    
    &:hover {
    transform: scale(1.2);
  }
  }    
  
  
 
`;
  
  
  

  
  
  
   

export default Portfolio

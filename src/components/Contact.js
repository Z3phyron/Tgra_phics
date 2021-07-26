import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {pageAnimation} from './Animation'

const Contact = () => {
      const TextAnim = {
        hidden: {
          x: -1000,
        },
        show: {
          x: 0,
          transition: {
            duration: 1.5,
          },
        },
      };
    return (
      <ContactPage
        variants={pageAnimation}
        exit="exit"
        initial="hidden"
        animate="show"
      >
        <SocialPage>
          <Items>
                <motion.p variants={TextAnim} initial="hidden" animate="show">
                    When you're ready for your brand to reach its next level of
                success, you can hire me
                </motion.p>
             
            
            <div className="social-item">
              <a href="https://facebook.com" className="icons">
                <FaFacebookF />
              </a>
            </div>
            <div className="social-item">
              <a href="https://twitter.com" className="icons">
                <FaTwitter />
              </a>
            </div>
            <div className="social-item">
              <a href="https://instagram.com" className="icons">
                <FaInstagram />
              </a>
            </div>
          </Items>
          <div className="email">
            <a href="mailto:Phakeemakintola@gmail.com">
              @ Phakeemakintola@Gmail.com
            </a>
          </div>
        </SocialPage>
      </ContactPage>
    );
}

const ContactPage = styled(motion.div)`
    display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;

`;


const SocialPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
 
    align-items: center;
    height: 100%;

    .email {
        a {
    color: #575656;

    &:hover {
        color:#2695eb;
    }
 }
    }

`;

const Items = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
width: 30%;
  margin-bottom: 10vh;
 font-size: 30pt;

@media (max-width: 568px) {
    width: 70%;
    font-size: 20pt;
}

 a {
    color: #575656;

    &:hover {
        color:#2695eb;
    }
 }

`;

export default Contact

import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
// import ZelarLogo from '../images/updated-logo.png';
import { MdCall, MdLocationOn } from 'react-icons/md';
import { FaRegEnvelope } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { animateScroll as scroll } from 'react-scroll';
import CodeFundaLogo from '../images/cf-nav-logo2.png';
import { motion } from "framer-motion";

import Aos from "aos";
import "aos/dist/aos.css";

const ContactSection = styled.div`
    background-color: #b3b3b3;
    padding: 2px;
`;
const ContactInfo = styled.div`
    padding: 5px;
`;

const ListItem = css`
    color: #fff;
    text-decoration: none;
    font-size: 17px;

    &:hover{
        color: #fff;
    }
`;
const ContactList = styled.div`
    a {
        ${ListItem}
    }

`;

const ContactItem = styled(Link)`
    ${ListItem}
    margin: 2rem 1rem;
`;

const SocialIcons = styled.div`
    color: #fff;
    padding: 1rem;

    i {
        padding: 0.5rem;    
    }
`;

const MailIcon = styled(FaRegEnvelope)`
  margin-right: 0.8rem;
`;
const PhoneIcon = styled(MdCall)`
  margin-right: 0.8rem;
`;
const LocationIcon = styled(MdLocationOn)`
  margin-right: 0.8rem;
`;

const ArrowUp = styled(IoMdArrowRoundUp)`
  margin-left: 0.5rem;
`;
const HRLine = styled.hr`
    border-top: 2px solid #fff;
`;

const Footer = () => {
    const curYear = new Date().getFullYear();

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);


  return (
    <div>
    <ContactSection>                
        <div className="container">
            <ContactInfo className="row">
                <motion.h1 className='text-white pb-2 text-center' whileHover="whileHover" whileTap='whileTap'><u>Zelar Groups LTD</u></motion.h1>
                <div className="col-md-5 col-sm-12">
                    <ContactList>
                         {/* <motion.img data-aos="fade-up" src={ZelarLogo} alt='logo' height={100} whileHover={{ scale: 1.3 }} initial={{ scale:  1.5}}>

                         </motion.img> */}
                        
                               <br/>
                         <div data-aos="fade-right">
                        <a href='mailto:office@zelargroup.co.uk'><MailIcon />office@zelargroup.co.uk</a><br />
                        <a href='tel:+07487 656 107'><PhoneIcon />07487 656 107.</a><br />
                        <a href='https://www.google.com/maps?ll=53.77414,-2.711996&z=16&t=m&hl=en&gl=IN&mapclient=embed&q=320+Blackpool+Rd+Fulwood+Preston+PR2+3AA+UK' rel="noreferrer" target="_blank"><LocationIcon />East Road <br />
                            Feltham, United Kingdom, TW14 8DQ</a><br />
                            </div>  

                        
                    </ContactList>
                </div>
                <div className="col-md-5 col-sm-12 mt-5">
                    <div className="row">
                        <div className="col">
                            <ContactList>
                                <ContactItem to='/' onClick={scrollToTop}>Home<ArrowUp /></ContactItem><br />
                                <ContactItem to='/Aim' onClick={scrollToTop}>Aim</ContactItem><br />
                                <ContactItem to='/Services' onClick={scrollToTop}>Services</ContactItem><br />
                                <ContactItem to='/Jobs' onClick={scrollToTop}>Jobs</ContactItem><br />
                                <ContactItem to='/contact' onClick={scrollToTop}>Contact</ContactItem><br />
                            </ContactList>
                        </div>
                        <div className="col">
                            <ContactList data-aos="fade-left">
                                <ContactItem to='/terms' onClick={scrollToTop}>T&C</ContactItem><br />
                                <ContactItem to='/privacy' onClick={scrollToTop}>Privacy Policy</ContactItem><br />
                                <ContactItem to='/faq' onClick={scrollToTop}>FAQs</ContactItem><br />
                            </ContactList>
                            <SocialIcons data-aos="fade-down">
                            <i to='/'><BsFacebook /></i>
                            <i to='/'><BsInstagram /></i>
                            <i to='/'><BsLinkedin /></i>
                            <i to='/'><BsWhatsapp /></i>                                    
                        </SocialIcons>
                        </div>
                    </div>
                </div>
            </ContactInfo>
            <HRLine />
            <p className='text-center text-white'>All Copyrights ©{curYear} reserved to ZELAR GROUP LIMITED under companies Act 2006,
                Registered in England and Wales, Company Reg : 11019204</p>                        
            <HRLine />

            <p className='text-center text-white'>Crafted by
                <a target='_blank' rel="noreferrer" href='http://codefunda.co/'>
                    <img src={CodeFundaLogo} alt='CodeFunda.co' height={25} />
                </a>
            </p>
        </div>

    </ContactSection>
</div>
  )
}

export default Footer

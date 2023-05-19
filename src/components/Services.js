import React, {useEffect} from 'react'
import styled from 'styled-components';
import { servicesData } from '../data/ServicesData';
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceSection = styled.div`
  padding: 3rem 1.5rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: block;
`;
const CardItem = styled.div`
  border: 1px solid rgba(82, 86, 94, 0.2);
  background: #fff;

  /position: relative;/
  border-radius: 0;
  margin: 20px;
  overflow: hidden;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
  transition: opacity 0.3s, transform 0.3s, background-color 0.3s;
  transition: 0.3s ease-in-out;
  position: relative;
  
  
  &:hover{
    background: linear-gradient(90deg, #ff87a8 0%, #0019ff 125%);
    color: #FFFFFF;
  }
`;

const ServiceTitle = styled.h4``;

const ServiceText = styled.p``;


const Services = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);

  return (
    <div>
    <ServiceSection>
      <div className="container">
        <h2 className='pb-5 text-center'><u>We provide SERVICES like,</u></h2>
        <div className="row">
        {servicesData.map((item, index) => (        
          <div className="col-md-6" data-aos="fade-up">
            <CardItem>
              <div className="row">
                <div className="col-xl-5">
                  <img className='img-fluid' src={item.image} alt="serive" />
                </div>
                <div className="col-xl-7 d-flex flex-row align-items-center">
                  <div className='d-flex flex-column align-items-left p-3'>
                    <ServiceTitle>{item.title}</ServiceTitle>
                    <ServiceText>{item.info}</ServiceText>
                  </div>
                </div>
              </div>
            </CardItem>
          </div>
))} 

        </div>
      </div>
    </ServiceSection>
    </div>
  )
}

export default Services
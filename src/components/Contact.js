import React from 'react'
import styled from 'styled-components'

import Icon1 from '../images/teach.svg'
import Icon2 from '../images/payment.svg'
import Icon3 from '../images/teach.svg'

const Contact = () => {
  return (
    <ContactContainer id="contact">
    <ContactH1>Yes am here too</ContactH1>
        <ContactWrapper>
         <ContactCard>
         <ContactIcon src={Icon1}/>
         <ContactH2>Yes am here too</ContactH2>
            <ContactP>am here</ContactP>
            </ContactCard>
            <ContactCard>
            <ContactIcon src={Icon2}/>
            <ContactH2>Yes am here too</ContactH2>
            <ContactP>am here</ContactP>
            </ContactCard>
            <ContactCard>
            <ContactIcon src={Icon3}/>
            <ContactH2>Yes am here too</ContactH2>
            <ContactP>am here</ContactP>
            </ContactCard>  
        </ContactWrapper>
    </ContactContainer>
   
  )
}

export default Contact

const ContactContainer=styled.div`
height:800px;
display:flex;
aliign-items:center;
flex-direction:column;
justify-content:center;
background:#010606;

@media screen and(max-width:760px){
    height:110px;
}

@media screen and (max-width:480px){
    height:1300px;
}
`
const ContactWrapper=styled.div`
max-width:1000px;
margin:0;
display:grid;
grid-templete-columns:1fr 1fr 1fr ;
align-items:center;
grid-gap:16px;
padding:0 50px;

@media screen and( max-width: 1000px){
    grid-templete-columns:1fr 1fr 1fr ;
}

@media screen and(max-width: 760px){
    grid-templete-columns:1fr;
    padding:0 20px;
}
`

const ContactCard=styled.div`
background:#fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:30px;
box-shadow:0 1px 3px rgba(0,0,0,.2);
transition:all 0.2s ease-in-out;

&:hover{
    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor:pointer;
}
`

const ContactIcon=styled.img`
height:160px;
width:160px;
margin-bottom:10px;


`

const ContactH1=styled.h1`
font-size:2.5rem;
color:#fff;
margin-bottom:64px;
align-items:center;
text-align:center;

@media screen and(max-width:480px){
    font-size:2rem;
}
`

const ContactH2=styled.h2`
font-size:1rem;
margin-bottom:10px;
`
const ContactP=styled.p`
font-size:1rem;
align-items:center;
`
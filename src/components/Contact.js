import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <ContactContainer id="contact">
        <ContactWrapper>
         <ContactCard>
            <ContactH1>Hello</ContactH1>
            <ContactP>am here</ContactP>
            <ContactIcon />
            <ContactH2>Yes am here too</ContactH2>
            </ContactCard>
            <ContactCard>
            <ContactH1>Hello</ContactH1>
            <ContactP>am here</ContactP>
            <ContactIcon />
            <ContactH2>Yes am here too</ContactH2>
            </ContactCard>
            <ContactCard>
            <ContactH1>Hello</ContactH1>
            <ContactP>am here</ContactP>
            <ContactIcon />
            <ContactH2>Yes am here too</ContactH2>
            </ContactCard>  
        </ContactWrapper>
    </ContactContainer>
   
  )
}

export default Contact

const ContactContainer=styled.div`

`

const ContactH1=styled.h1`

`

const ContactWrapper=styled.div`

`

const ContactCard=styled.div`

`

const ContactIcon=styled.img`

`

const ContactH2=styled.h2`

`
const ContactP=styled.p`

`
import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'


const About = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    primary,
    dark,
    dark2,
    // img,
    alt
}) => {
    
  return (
    <>
     <Container lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <SubTitle darkText={darkText}>{description}</SubTitle>
                    <BtnWrap>
                        <Button to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1: 0}
                        dark2={dark2 ? 1: 0}
                        >{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={require('../images/momo.svg').default} alt={alt}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
       
    </Container>
    </>
  )
}

export default About
const Container=styled.div`
color:#fff;
background:${({lightBg})=>(lightBg ? '#f9f9f9':'#010606')};
@media screen and (max-width:760px){
    padding:100px 0;

}
`

const InfoWrapper=styled.div`
display:grid;
z-index:1;
height:860px;
width100%;
max-width:1100px;
magin-right:auto;
margin-left:auto;
padding:1 24px;
justify-content:center;
`

const InfoRow=styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgStart})=>(imgStart ? `'col2 col1'`:`'col1 col2'`)};

@media screen and (max-width:760px){
    grid-template-areas:${({imgStart})=>(imgStart ? `'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
}
`

const Column1=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`

const Column2=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col2;
`

const TextWrapper=styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;
`
const TopLine=styled.p`
color:#01bf71;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
text-transform:upercase;
margin-bottom:16px;
`
const Heading=styled.h1`
margin-bottom:24px;
font-size:48px;
line-height:1.1;
font-weight:600;
color:${({lightText})=>(lightText ? '#f7f8f8': '#010606')};

@media screen and(max-width:480px){
    font-size:32px;
}
`

const SubTitle=styled.p`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color:${({darkText})=>(darkText ? '#010606': "#fff")};
`

const BtnWrap=styled.div`
display:flex;
justify-content:flex-start;

`

const ImgWrap=styled.div`
max-width:555px;
height:100%;

`
const Img=styled.img`
width:100%;
margin:0 0 10px 0;
padding-right:0;
`








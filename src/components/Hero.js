import React, {useState} from 'react'
import styled from 'styled-components'
import Video from './videos/video.mp4'
import {Button} from './Button'

import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'

function Hero() {
    const [hover,setHover]=useState(false)
    const onHover = ()=>{
        setHover(!hover)
    }

  return (
    <Container to="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
        </HeroBg>
        <HeroContent>
            <HeroH1>FeePayingMade Easy with OccuPay.</HeroH1>
            <HeroP>
            Sign up for new account today and receive GH₵20 reduction on your next payment.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                    Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>

    </Container>
  )
}

export default Hero

const Container=styled.div`
background:#0c0c0c;
display:flex;
justify-content:center;
align-items:center;
padding:0 30px;
height:800px;
position:relative;
z-index:1;
`

const HeroBg=styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`

const VideoBg=styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`

const HeroContent=styled.div`
z-index:3;
max-width:100vw;
height:85vh;
padding:5px 24px;
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
`
const HeroH1=styled.h1`
color:#fff;
font-size:58px;
text-align:center;


@media screen and(max-width:768px){
    font-size:40px;
}

@media screen and (max-width: 480px){
    font-size:32px;
}
`

const HeroP=styled.p`
margin-top:24px;
color:#fff;
font-size:24px;
text-align:center;
max-width:600px;

@media screen and(max-width:768px){
    font-size:24px;
}

@media screen and (max-width: 480px){
    font-size:18px;
}
`

const HeroBtnWrapper=styled.div`
margin-top:32px;
display:flex;
align-items:center;

`

const ArrowForward=styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`

const ArrowRight=styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px;
`

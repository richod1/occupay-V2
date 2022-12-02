import React from 'react'
import styled from 'styled-components'
import {NavLink as LinkR} from "react-router-dom"
// import {Link as LinkS} from "react-scroll"
import Hero from './Hero'
import About from './About'
import Payfee from './Payfee'
import Contact from './Contact'
import Payresit from './Payresit'
import { homeObjOne,homeObjTwo,homeObjThree } from './Data'






function Home(props) {
  return (
    <>
    
    <Nav>
          <NavContainer to="/" >
              <NavLogo>
                  <img src=""  alt="Logo" />
              </NavLogo>

              <NavMenu>
                  <NavItems>
                      <NavLink to="/payfee" activestyle="true">PayFee</NavLink>
                  </NavItems>
                  <NavItems>
                      <NavLink to="/payresit" activestyle="true">PayResit</NavLink>
                  </NavItems>
                  <NavItems>
                      <NavLink to="/contact" activestyle="true">ContactUs</NavLink>
                  </NavItems>
                  <NavItems>
                      <NavLink to="/about" activestyle="true">AboutUs</NavLink>
                  </NavItems>
              </NavMenu>
              <Navbtn >
                  <NavbtnLink to="signup">
                      SignUp
                  </NavbtnLink>
              </Navbtn>
              <NavProfile to="/profile">
                  <img src="" alt="profile" />
              </NavProfile>
          </NavContainer>
       
      </Nav>
      <Hero />
      <About {...homeObjOne}/>
      <Payfee {...homeObjTwo}/>
      <Payresit {...homeObjThree}/>
      <Contact/>
      {props.children}
       </>
    
  )
}

export default Home

const Nav=styled.nav`
background:#000;
height:80px;
display:flex;
justify-content:center;
align-items:center;
position:sticky;
top:0;
z-index:10;
@media screen and(max-width: 960px){
    transition:0.8s all ease;
}
`

const NavContainer=styled.nav`
display:flex;
width:100%;
justify-content:space-between;
z-index:1;
padding:0 24px;
height:80px;
max-width:1100px;
`
const NavLogo=styled(LinkR)`
color:#fff;
display:flex;
justify-content:flex-start;
cursor:pointer;
font-size:1.5rem;
align-items:center;
text-decoration:none;
margin-left:24px;
font-weight:bold;
`


const NavMenu=styled.ul`
display:flex;
list-style:none;
text-align:center;
margin-right:-22px;
@media screen and(max-width: 780px){
    display:none
}
`
const NavItems=styled.li`
height:80px;
`

const NavLink=styled(LinkR)`
color:#fff;
display:flex;
flex-direction:row;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;
&.active{
    border-bottom:3px solid #01bf71;
}
`

const NavProfile=styled.div`
display:flex;
justify-content:center;
align-items:center;
border:none;
border-radius:50%;
width:50px;
height:70%;
margin-top:10px;
color:#fff;
cursor:pointer;

@media screen and(max-width: 760px){
    display:none
}
`

const Navbtn=styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:760px){
    display:none;
}
`
const NavbtnLink=styled(LinkR)`
border-radius:10px;
background:#01bf71;
white-spacing:nowrap;
color:#010606;
padding:10px 20px;
font-size:16px;
outline:none;
border:none;
text-decoration:none;
cursor:pointer;
transition:all 0.2s ease-out;

&:hover{
    transition:all 0.2s ease-out;
    background:#fff;
    color:#010606;
}
`

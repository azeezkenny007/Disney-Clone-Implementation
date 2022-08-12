import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
   <ContentBox>
       <CtaOne src="./images/cta-logo-one.svg"/>
       <SignUp>GET ALL THERE</SignUp>
       <Description>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum provident tenetur aperiam omnis veritatis commodi sunt soluta voluptatum deleniti deserunt? Ex molestias mollitia hic adipisci? Eligendi, laborum officia?
        </Description>
        <CtaTwo src="./images/cta-logo-two.png"/>
   </ContentBox>
    </Container>
  )
}

export default Login

const Container=styled.div`
     position:relative;
     height:calc(100vh - 70px);
     display:flex;
     justify-content:center;
     align-items:top;

     &:before{
         position:absolute;
         content:"";
         top:0;
         bottom:0;
         right:0;
         left:0;
         background:url("./images/login-background.jpg");
         background-positon:top;
         background-size:cover;
         background-repeat:no-repeat;
         z-index:-1;
         opacity:0.8;
     }
`

const ContentBox = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 70%;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const CtaOne = styled.img`
   
`


const SignUp=styled.a`
   width:100%;
   background-color:#0063e5;
   font-weight:bold;
   padding:15px 0;
   color:#f9f9f9;
   border-radius:6px;
   text-align:center;
   font-size:18px;
   cursor:pointer;
   transiton:all 250ms;
   letter-spacing:1.5px;
   margin-top:5px;
   margin-bottom:5px;

   &:hover{
      background:#0483ee;
   }

`

const Description=styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`

const CtaTwo=styled.img`
   width:90%;
`
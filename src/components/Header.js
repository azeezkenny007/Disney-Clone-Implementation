import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {selectUserName,
          selectUserPhoto,
          setSignOut,
          setUserLogin
        } from '../features/user/userSlice'
import {useSelector,useDispatch} from 'react-redux'
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import {auth,provider} from '../firebase'


function Header() {
  const userName=useSelector(selectUserName)
  const userPhoto=useSelector(selectUserPhoto)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{
       const auth = getAuth();
       onAuthStateChanged(auth,async(user) => {
         if (user) {
              dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
             }))
            
         } 
       });
  })

  const signIn=()=>{
      
       signInWithPopup(auth,provider)
        .then((result)=>{
          let user=result.user
             dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
             }))
             navigate('/')

        }).catch((e)=>{
          console.log(e)
        })
  }

  const outside=()=>{
      
      signOut(auth)
      .then(()=>{
        dispatch(setSignOut())
        navigate('/login')
      })
  }

  return (
    <Nav>
      <Logo src="./images/logo.svg" />

      { !userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login> 
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="#">
              <img src="./images/home-icon.svg" alt="" />
              <span>Home</span>
            </a>

            <a href="#">
              <img src="./images/search-icon.svg" alt="" />
              <span>Search</span>
            </a>

            <a href="#">
              <img src="./images/watchlist-icon.svg" alt="" />
              <span>Watchlist</span>
            </a>

            <a href="#">
              <img src="./images/original-icon.svg" alt="" />
              <span>Originals</span>
            </a>

            <a href="#">
              <img src="./images/movie-icon.svg" alt="" />
              <span>movies</span>
            </a>

            <a href="#">
              <img src="./images/series-icon.svg" alt="" />
              <span>series</span>
            </a>
          </NavMenu>

          <UserImage onClick={outside} src="./images/kenny.png" />
        </>
      )}
    </Nav>
  );
}

export default Header


const Nav=styled.nav`
     height:70px;
     background:#090b13;
     display:flex;
     align-items:center;
     padding:0 36px;
     overflow-x:hidden;
`

const Logo=styled.img`
      width:80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        background: white;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(100%);
        opacity: 1;
      }
    }

    @media (max-width: 850px) {
       display:none;
    }
  }
`;

const UserImage=styled.img`
     border-radius:50%;
     cursor:pointer;
`

const Login=styled.div`
   border:1px solid #f9f9f9;
   padding:8px 16px;
   border-radius:4px;
   letter-spacing:1.5px;
   text-transform:uppercase;
   background-color:rgba(0,0,0,0.6);
   transition:all 0.2s ease 0s;
   cursor:pointer;

   &:hover{
      background-color:#f9f9f9;
      color:#000;
      border-color:transparent;
   }
`

const LoginContainer=styled.div`
   display:flex;
   justify-content:flex-end;
   flex:1;
`
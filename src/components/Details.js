import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import { useEffect , useState} from 'react'
import {doc,getDoc} from 'firebase/firestore' 
import db  from '../firebase'


function Details() {

  const {id}=useParams();
  console.log(id)
  const [movie, setMovie] = useState({});

  useEffect(()=>{
     async function movie(){
        const docRef = doc(db, "movies", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
             setMovie(docSnap.data())
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
     }
     movie()
  })

  console.log('movie is',movie)

     
  return (
    <Container>
      <BackGround>
        <img src={movie.backgroundImg} alt="" />
      </BackGround>

      <ImageTitle>
        <img src={movie.titleImg} alt="" />
      </ImageTitle>

      <Controls>
        <PlayButton>
<img src={window.location.origin + "/images/play-icon-black.png"} />
          <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
          <img src={window.location.origin + "/images/play-icon-white.png"} />
          <span>Trailer</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupWatchButton>
          <img src={window.location.origin + "/images/group-icon.png"} />
        </GroupWatchButton>
      </Controls>

      <SubTitle>{movie.subTitle}</SubTitle>

      <Description>{movie.description}</Description>
    </Container>
  );
}

export default Details

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position:relative;
  
  
`

const BackGround = styled.div`
  position: fixed;
  opacity: 0.8;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
 

 
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  width:20vw;
  min-height:150px;
  min-width:200px;
  

  img {
    width: 100%;
    height: 100%;
    object-fit:contain;
  }
  
`

const Controls=styled.div`
      display:flex;
      align-items:center;
`

const PlayButton=styled.button`
      border-radius:6px;
      font-size:15px;
      display:flex;
      align-items:center;
      height:44px;
      background:rgb(249,249,249);
      border:none;
      padding:0px 20px;
      margin-right:22px;
      letter-spacing:1.8px;
      cursor:pointer;

      &:hover{
        background:rgb(198,198,198);
      }
`

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform:uppercase;
`
const AddButton=styled.button`
     width:44px;
     height:44px;
     display:flex;
     align-items:center;
     justify-content:center;
     border-radius:50%;
     border:2px solid white;
     background:rgba(0,0,0,0.6);
     cursor:pointer;
     margin-right:16px;

     span{
       font-size:30px;
       color:white;
     }
`

const GroupWatchButton=styled(AddButton)`
   background:rgb(0,0,0)
`

const SubTitle=styled.div`
   margin-top:20px;
   min-height:20px;
   color:rgb(249,249,249);
   font-size:15px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width:500px;
  
`
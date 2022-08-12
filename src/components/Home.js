import React  from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import { useEffect } from 'react'
import db from '../firebase'
import {useDispatch} from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'

import {collection,doc,getDocs,onSnapshot} from 'firebase/firestore'
// import db from '../firebase'


function Home() {

  const dispatch=useDispatch()

  useEffect (()=>{
    const colRef=collection(db,"movies")
     onSnapshot(colRef,(snapshot)=>{
           let books=[]
        let temMovies=snapshot.docs.map((doc)=>{
             return ({id:doc.id,...doc.data()})
           })
           dispatch(setMovies(temMovies))
           
     })
    
       
  })
 

  return (
    <Container>
       <ImageSlider/>
       <Viewers/>
       <Movies/>
    </Container>
  )
}

export default Home

const Container = styled.div`
   min-height: calc(100vh - 70px);
   padding: 0 calc(3.5vw + 5px);
   position: relative;
   overflow:hidden;

   &:before {
     background: url("./images/home-background.png") center center / cover
     no-repeat fixed;
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: -1;
   }
`
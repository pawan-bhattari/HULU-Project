import React,{useState,useEffect}from 'react'
import './result.css';
import VedioCard from './VedioCard';
import requests from './requests'
import axios from './axios';
import FlipMove from 'react-flip-move'

function Result({selectedOption}) {

 const [movies,setMovie]=useState([]);




 useEffect(()=> {
 
    async function fetchData(){
 
       const request = await axios.get(selectedOption)

       setMovie(request.data.results)

       return request;
    }
    fetchData()
   
    
 },[selectedOption])

 
    return (
        <div className="results">
        <FlipMove>
            {movies.map((movie)=>(
                <VedioCard key={movie.id} movie ={movie}/> 
            ))} 
        </FlipMove>
        </div>
        
    )
}

export default Result

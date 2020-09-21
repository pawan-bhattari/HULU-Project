import React,{useState} from 'react';
import './App.css'
import Header from './Header'
import Nav from './Nav';
import Result from './Result';
import requests from './requests'


//e4cd106ae2b7ed446bbe58427effa84f

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGNkMTA2YWUyYjdlZDQ0NmJiZTU4NDI3ZWZmYTg0ZiIsInN1YiI6IjVmNDdhMzU2ZWZjYTAwMDAzNWJmOWVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5BzFZyvLYG7-gSdjf6LErDbgxmffbhE0BajrK6l2oKQ



function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className="app">
     
   
    {/* Header */}
    
    <Header/>

   
    {/* Navigation */}

   <Nav setSelectedOption={setSelectedOption} />

    {/* map function with card */}
   <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;

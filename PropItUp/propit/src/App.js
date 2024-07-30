import logo from './logo.svg';
import PersonCard from './Cpmonents/PersonCard';
import './App.css';
import React from 'react';
// import Header from './components/Header';

function App() {
  return (

   <div >
    <PersonCard firstName = "shatha" lastName = {"shatha"} age ={10} hairColor = {"red"} />  

    
    <PersonCard firstName = {"mohammad"} lastName = {"mohammad"} age ={20} hairColor = {"green"}>  

  </PersonCard>
  <PersonCard firstName = {"mustafa"} lastName = {"mustafa"} age ={30} hairColor = {"brown"}>  

  </PersonCard>
  <PersonCard firstName = {"ibrahim"} lastName = {"ibrahim"} age ={40} hairColor = {"white"}>  

  </PersonCard>
  
   
   
  
   
   
   </div>


  );
}

export default App;

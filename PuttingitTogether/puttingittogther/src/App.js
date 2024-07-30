
// import Pers from './compontents/PersonCard';

import './App.css';
import PersonCard from './compontents/PersonCard';

function App() {
  return (
    <div >
    <PersonCard firstName = "shatha" lastName = {"shatha"} age ={10} hairColor = {"red"} />  

    
    <PersonCard firstName = {"mohammad"} lastName = {"mohammad"} age ={20} hairColor = {"green"}/>  

   </div>
  );
}

export default App;

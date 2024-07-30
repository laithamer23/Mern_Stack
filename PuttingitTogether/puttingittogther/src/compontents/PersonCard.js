import React, {useState} from 'react'

const PersonCard = props => {
    const { firstName,lastName,age,hairColor }  = props;

    const [ageBirthday, setAgeBirthday] = useState(age);

    const increase =() =>{
        console.log(ageBirthday)
        setAgeBirthday(ageBirthday+1)
    }
   return (
    <div>
        <div className='presoncard'>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{ageBirthday}</h1>
            <h1>{hairColor}</h1>
            <button onClick = {increase}>Birthday Button For {firstName}</button>

        </div>

    </div>
   )
}



export default PersonCard

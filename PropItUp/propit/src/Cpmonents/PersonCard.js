import React from 'react';

const PersonCard = (props) =>{

   const { firstName,lastName,age,hairColor  }  = props

    
   return (
    <div>
        <div className='presoncard'>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{age}</h1>
            <h1>{hairColor}</h1>

        </div>

    </div>
   )
}

export default PersonCard
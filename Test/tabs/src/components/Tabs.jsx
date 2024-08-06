import React,{useState} from 'react'



const Tabs = () => {
    const [message,setMessage] = useState("")
      
    function handleClick (e) {
        // console.log(e.target.id)
        let temp = e.target.id;
        console.log(temp);
        const ob ={
            tab1 : "Tab 1 Content is showing Headers",
            tab2 : "Tab 2 Content is showing Headers",
            tab3 : "Tab 3 Content is showing Headers"
        }
            console.log(ob)
        if (ob.hasOwnProperty(temp)) 
            setMessage(ob[temp]);      
    }
    const btnList = ["tab1", "tab2", "tab3"];

    
  return (

    <>
      <div>
        {btnList.map((btn,i) => <button key={i} id= {btn} onClick={ handleClick }>{btn}</button> )}
      </div>
      <div>
        <h1>{message}</h1>
      </div>
    </>
  )
}

export default Tabs


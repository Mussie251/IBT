import React, { useState} from 'react'

//const { useState } = require("react")


const State = () => {
  // let {count, setCount} = useState(0);

  // const handleClick = () => {
  //   setCount((prev) => {
  //     return prev+1
  //   });
  // };

  const handleSubmit = (event) =>{
    event.preventDefault()
  }
  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    // <h1 className=''>{count}</h1>

    <>
     <form action='' onSubmit={handleSubmit}>
         <input type="text" name="firstName" id="" onChange={handleChange} /><br />
         <input type="text" name="lastName" id="" onChange={handleChange} /><br />
         <input type="text" name="" id="" onChange={handleChange} /><br />
         <input type="submit" name="" id="" /><br />
     </form>
    </>
  )
}

export default State
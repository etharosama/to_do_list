import {useState } from 'react';

export default (int) => {
  const [value , setvalue] = useState (int)
  const handelchange =(e)=>{
    setvalue(e.target.value)
  }
  const reset =()=>{
    setvalue('')
  }
  return [value, handelchange , reset ]
}

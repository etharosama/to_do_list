import {useState } from 'react';

// export default (int= false) =>{
//   const [value , revese ]=  useState(int) ;
//   const togle = () =>{
//     revese(!value)
//   }
//   return [value ,togle]
// }

 const Value = (int= false) =>{
  const [value , revese ]=  useState(int) ;
  const togle = () =>{
    revese(!value)
  }
  return [value ,togle]
}
export default Value

// function togleuse ( intvalue  =false ) {
//   const [state , setState] = useState (intvalue);
//   const togle = () =>{
//       setState(!state)
//     }
//     return   [state ,togle]
// }
// export default togleuse ;

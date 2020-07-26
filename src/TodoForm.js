import React  from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import texthandle from './hooks/texthandle.js'

function TodoForm (props){
  const [value, handelchange , reset] = texthandle ('')
  return(
    <Paper style = {{
      paddingLeft : '1rem' ,
      paddingRight : '1rem' ,
      marginTop :'1rem',
      marginBottom :'1rem',
    }}>
     <form onSubmit ={(e)=>{
       e.preventDefault() ;
       props.addtodo (value)
       console.log(e);
       reset ();
     }} >
       <TextField id="standard-basic"
                  label="add new to do"
                  margin = 'normal'
                  fullWidth
                  value= {value}
                  onChange ={handelchange}/>
      </form >
    </Paper>
  )
}
export default TodoForm

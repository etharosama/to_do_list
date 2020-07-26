import React  from 'react';
import TextField from '@material-ui/core/TextField';
import texthandle from './hooks/texthandle.js'

function EditeToDo(props) {
  let valueint = props.editehead ? props.task : props.expaln  ;
  const [value, handelchange , reset] = texthandle (valueint)
  return(
    <form style ={{width : '100% '}}
          onSubmit ={(e)=>{
          e.preventDefault() ;
          console.log(e);
          {props.editehead ? props.updatehead(props.id , value ) :props.updateexpalntion(props.id , value )  }
          reset ();
          {props.editehead ?   props.seteditehead() :props.setediteexpalin()  }

    }}>
     <TextField id="standard-basic"
                label="edite"
                fullWidth
                value= {value}
                onChange ={handelchange} />
    </form>
  )
}
export default EditeToDo

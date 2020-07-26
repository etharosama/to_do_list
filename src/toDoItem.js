import React  from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import AddCommentIcon from '@material-ui/icons/AddComment';
import togle from './hooks/togle.js'
import EditeToDo from './editeToDo.js'

function ToDoItem(props) {
  const [ editehead , seteditehead]=  togle (false) ;
  const [ editeexpalin , setediteexpalin]=  togle (false) ;

  return (
    <>
    <ListItem>
     { editehead || editeexpalin ? <  EditeToDo seteditehead = {seteditehead}
                                                 {...props}
                                                 updateexpalntion = {props.updateexpalntion}
                                                 setediteexpalin ={setediteexpalin}
                                                 editeexpalin ={editeexpalin}
                                                 editehead ={editehead}/> :

        <>
        <Checkbox checked={props.done} onClick = {()=>{ console.log(props.id , props.delettodo);
                                                         props.updatecheckbox(props.id)}}/>
        <ListItemText
               style = {{textDecoration:props.done?  'line-through' : 'none' }}
               primary={props.task}
               secondary={props.expaln } />
        <ListItemSecondaryAction>
              <IconButton aria-label='Edit' onClick = {()=>{ console.log(props.id );
                                                             seteditehead(editehead)
                                                           }} >
                   <EditIcon />
               </IconButton>
               <IconButton aria-label="delete" onClick = {()=>{ console.log(props.id );
                                                                setediteexpalin()
                                                            }}>
                   <AddCommentIcon fontSize="small"/>
               </IconButton>
               <IconButton aria-label="delete" onClick = {()=>{ console.log(props.id , props.delettodo);
                                                                props.delettodo(props.id)}}>
                   <DeleteIcon/>
               </IconButton>

        </ListItemSecondaryAction>
        </> }
    </ListItem>
    <Divider/>

    </>
  )
}
export default ToDoItem

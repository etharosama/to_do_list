import React from 'react';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ToDoItem from './toDoItem.js'

function Todolits(props) {
  console.log(props);
  if ( props.task.length){
  return(
    <Paper>
    <List>
     { props.task.map((item) =>
          <ToDoItem key ={item.id} {...item}
                    delettodo={props.delettodo}
                    updatecheckbox = {props.updatecheckbox}
                    updatehead ={ props.updatehead}
                    updateexpalntion = {props.updateexpalntion}/>
      )
      }
      </List>
    </Paper>
  )}else{
    return <div> no to do lift</div>
  }
}
export default Todolits

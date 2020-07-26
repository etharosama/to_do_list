import React ,{useState , useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Todolits from './Todolits.js'
import TodoForm from './TodoForm.js'
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';

function ToDo() {
  let fristtask = JSON.parse(localStorage.getItem('todolist' ) || '[]' )

  const [ todolitems , settodolitems ]= useState (fristtask) ;
  useEffect(() => {
     // Update the document title using the browser API
    window.localStorage.setItem('todolist' , JSON.stringify( todolitems))
   });
  const addtodo = item =>{
    let itemstat = {id : uuidv4() , task : item  , done : false}
    settodolitems ([...todolitems , itemstat ])
  }
  const delettodo = id =>{
    let update = todolitems.filter(i => i.id !==  id) ;
    console.log( update);
      settodolitems (update)
  }
  const updatecheckbox = id =>{
    let update = todolitems.map(i => (i.id === id)  ? {...i , done : !(i.done)} :i ) ;
    console.log( update);
      settodolitems (update)
  }
  const updatehead = (id , text) =>{
    let update = todolitems.map(i => (i.id === id)  ? {...i , task: text } :i ) ;
    console.log( update);
      settodolitems (update)
  }
  const updateexpalntion  = (id , text) =>{
    let update = todolitems.map(i => (i.id === id)  ? {...i , expaln : text } :i ) ;
    console.log( update);
      settodolitems (update)
  }
  return(
  <div>
    <Paper style = {{
      height : '100vh',
      padding : '0px' ,
      margin :'0px',
      backgroundColor : '#F2F2F2'
    }}>
      <AppBar position="static" color= 'primary'>
         <Toolbar>
         <Typography variant="h6" color = 'inherit'/*className={classes.title}*/>
             to do list
         </Typography>

         </Toolbar>
       </AppBar>
       <Grid container spacing={3}
             justify="center"
             wrap="nowrap"
              style = {{ marginTop : '1rem' , width : '98vw' , margin : '0px'}}>
          <Grid item  xs={11} md={8} lg={4} >
            <TodoForm  addtodo ={ addtodo}/>
            <Todolits  updatehead = { updatehead}
                       task = {todolitems}
                       delettodo ={delettodo}
                       updatecheckbox = {updatecheckbox}
                       updateexpalntion = {updateexpalntion}/>
          </Grid >
       </Grid>
    </Paper>
  </div>
  )
}
export default ToDo

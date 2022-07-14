import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core";
import { green} from '@material-ui/core/colors';
import List from "../student/List";
import axios from "axios";
import { useState } from "react";

const useStyles =makeStyles ({
  headingColor: {
    backgroundColor: "blue",
    color: "white",
    padding: "2px",
    borderRadius: "10px",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
    borderRadius: "30px"
   },
})

const Home = () => {
  const classes = useStyles();
  const [student, setStudent] = useState({
    stuname:"",
    email:""
  });

  function onTextFieldChange(e){
    setStudent({
      ...student, 
      [e.target.name]: e.target.value
    })
    // console.log(student);
  }

  const [status, setStatus] = useState();


  async function onFormSubmit(e){
    e.preventDefault()
    try{
      await axios.post(`http://localhost:3333/students`, student)
      setStatus(true);
  } catch(error){
      console.log("something is wrong")
  }
}

if(status){
  return <Home />
}
 
  return (
    <>
     <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
      <Typography variant="h3">
        Crud Operations
      </Typography>
     </Box>
     <Grid container justifyContent="center" spacing={4}>
    <Grid item md={6} xs={12}>
     <Box textAlign="center" p={2} mb={2} className={classes.addStuColor}>
      <Typography variant="h4">Add Student</Typography>
     </Box>
     <form noValidate>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <TextField autoComplete="stuname" name="stuname" variant="outlined" required fullWidth id="stuname" label="Name" onChange={e => onTextFieldChange(e)}/>
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email Address" onChange={e => onTextFieldChange(e)}/>
       </Grid>
      </Grid>
      <Box m={3}>
       <Button type="submit" variant="contained" color="primary" fullWidth onClick={e =>onFormSubmit(e)}> Add</Button>
      </Box>
     </form>
    </Grid>

    <Grid item md={6} xs={12}>
      <List />
    </Grid>
   </Grid>
    </>
  )
}

export default Home
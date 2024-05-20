import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  textField: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const Complaints = () => {
  const classes = useStyles();
  const [complaint, setComplaint] = useState('');

  const handleSubmit = () => {
    // Add your logic here to save the complaint to the database
    // Once the complaint is saved, show a success message to the user
    alert('Complaint submitted successfully');
  };

  return (<div className={classes.container}>
      <h1>Complaints Page</h1>
      <TextField
        label="Complaint"
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        className={classes.textField}
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className={classes.button}
      >
        Submit Complaint
      </Button>
    </div>
  );
};

export default Complaints;
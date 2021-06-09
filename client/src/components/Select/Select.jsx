import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
container: {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start'
},
  formControl: {
    margin: theme.spacing(0, 0, 2, 0),
    minWidth: 220,
    fontSize: '1.3rem'
  },
  select: {
    fontSize: '1.3rem'
  },
  inputLabel: {
    fontSize: '1.5rem'
  },
  menuItem: {
    fontSize: '1.3rem'
  }
}));

export default function ControlledOpenSelect({setTask}) {

  const classes = useStyles();
  const [type, setType] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setType(event.target.value);
  };
  useEffect(() => {
    setTask((prev) => ({...prev, type: type}))
  },[type])

  const handleClose = (event) => {
    setOpen(false)
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" className={classes.inputLabel}>Type</InputLabel>
        <Select
          className={classes.select}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={type}
          onChange={handleChange}
        >
          <MenuItem value="working" className={classes.menuItem}>
            <em>Working</em>
          </MenuItem>
          <MenuItem value={'shopping'} className={classes.menuItem}>Shopping</MenuItem>
          <MenuItem value={'meeting'} className={classes.menuItem}>Meeting</MenuItem>
          <MenuItem value={'task'} className={classes.menuItem}>Task</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
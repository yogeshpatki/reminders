import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '25vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    width: '20vw'
  }
}));

export default function SetNickName(props) {
  const classes = useStyles();
  const {open, handleClose} = props;

  return (
    <div>
      <Modal
        aria-labelledby="Nick Name"
        aria-describedby="Edit nick name on your account"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Set Nickname</h2>
            <TextField
              id="standard-textarea"
              label="NickName"
              placeholder="What would you like us to call you?"
              className={classes.textField}
              margin="normal"
            />
            <Button variant="contained" color="primary" className={classes.button} onClick={props.handleClose}>
              Save
          </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

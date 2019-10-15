import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import FaceIcon from '@material-ui/icons/Face';
import SetNickName from './SetNickName';

const useStyles = makeStyles(theme => ({
  root: {
    height: '91vh',
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

export default function CustomSpeedDial() {
  const classes = useStyles();
  const [modalState, toggleModal] = React.useState({modalOpen : false});
  const [dialState, toggleDial] = React.useState({speedDialOpen : false});

  const modalOpen = () => {
    toggleModal({
      modalOpen: true
    });
  };

  const modalClose = () => {
    toggleModal({
      modalOpen: false
    });
  };

  const dialOpen = () => {
    toggleDial({
      speedDialOpen: true
    });
  }

  const dialClose = () => {
    toggleDial({
      speedDialOpen: false
    });
  }

  const dialCloseWithAction = (beforeClose) => {
    return () => {
      beforeClose();
      dialClose();
    };
  };

  const nickNameSetter = (<SetNickName open={modalState.modalOpen} onClose={modalClose} />)

  const actions = [
    { icon: <FileCopyIcon />, name: 'New', onClick : () => console.log('New') },
    { icon: <SaveIcon />, name: 'Save', onClick : () => console.log('Save') },
    { icon: <FaceIcon />, name: 'Nickname', onClick: modalOpen }
  ];

  return (
    <div className={classes.root}>
      {nickNameSetter}
      <SpeedDial
        ariaLabel="Task Buttons"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={dialClose}
        onOpen={dialOpen}
        open={dialState.speedDialOpen}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={dialCloseWithAction(action.onClick)}
          />
        ))}
      </SpeedDial>
    </div>
  );

}

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (onClickHandler) => {
    return () => {
      setOpen(false);
      onClickHandler();
    }
  };

  const customClose = () => {
    setOpen(false);
  }

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const nickNameSetter = (<SetNickName open={openModal} onClose={handleCloseModal} />)

  const actions = [
    { icon: <FileCopyIcon />, name: 'New', onClick : () => console.log('New') },
    { icon: <SaveIcon />, name: 'Save', onClick : () => console.log('Save') },
    { icon: <FaceIcon />, name: 'Nickname', onClick: handleOpenModal }
  ];

  return (
    <div className={classes.root}>
      {nickNameSetter}
      <SpeedDial
        ariaLabel="Task Buttons"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={customClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose(action.onClick)}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

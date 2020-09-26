import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default function SpeedDialMenu(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const actions = [
        {icon: <HomeRoundedIcon />, name: 'Home'},
        {icon: <SettingsIcon />, name: 'Settings'},
        {icon: <AssignmentIcon />, name: 'Rules'},
    ];

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = (title) => {
        props.handleAction(title);
        handleClose();
    };

    return (
        <div>
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                className={classes.speedDial}
                hidden={false}
                icon={<SpeedDialIcon/>}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => handleClick(action.name)}
                        title={action.name}
                    />
                ))}
            </SpeedDial>
        </div>
    );
}

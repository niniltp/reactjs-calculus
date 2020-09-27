import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
   /* speedDial: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }*/
    speedDial: {
        position: 'absolute',
        [theme.breakpoints.only('xs')]: {
            top: theme.spacing(2),
            right: theme.spacing(2),
            direction: "left"
        },
        [theme.breakpoints.up('sm')]: {
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            direction: "up"
        }
    }
}));

export default function SpeedDialMenu(props) {
    const theme = useTheme();
    const screenIsSmall = useMediaQuery(theme.breakpoints.only('xs'));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [direction, setDirection] = React.useState("up");


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

    React.useEffect(() => {
        setDirection(screenIsSmall ? "left" : "up");
    });

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
                direction={direction}
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

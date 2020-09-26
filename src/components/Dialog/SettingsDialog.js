import React, {Component} from 'react';
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import IconButton from "@material-ui/core/IconButton";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

class SettingsDialog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            settings: this.props.settings
        }, () => {
            this.setState({
                isLoading: false
            })
        })
    };

    handleOpen = () => {
        this.props.handleClose();
    };

    handleSave = () => {
        let newSettings = {
            darkTheme: this.state.settings.darkTheme,
            buttonsType: this.state.settings.buttonsType,
            soundOn: this.state.settings.soundOn
        };

        this.props.handleNewSettings(newSettings);

    };

    handleChangeRadio = (event) => {
        const target = event.target;
        this.setState((prevState) => ({
            settings: {
                ...prevState.settings,
                [target.name]: target.checked
            }
        }));
    };

    handleChangeSelect = (event) => {
        const target = event.target;
        this.setState((prevState) => ({
            settings: {
                ...prevState.settings,
                [target.name]: target.value
            }
        }))
    };

    toggleSound = () => {
        this.setState((prevState) => ({
            settings: {
                ...prevState.settings,
                soundOn: !prevState.settings.soundOn
            }
        }))
    };


    displaySettings = () => {
        return (
            this.state.isLoading ? 'Loading...' :
                <Dialog onClose={this.handleOpen} aria-labelledby="simple-dialog-title" open={this.props.open}>
                    <Box m={2}>
                        <DialogTitle>
                            <Typography>Settings</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Box>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Theme</FormLabel>
                                    <FormControlLabel
                                        control={<Switch color={"primary"} checked={this.state.settings.darkTheme}
                                                         onChange={this.handleChangeRadio}
                                                         name="darkTheme"/>}
                                        label="Dark Theme"
                                    />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Buttons type</FormLabel>
                                    <RadioGroup row aria-label="position" name="buttonsType"
                                                value={this.state.settings.buttonsType}
                                                onChange={this.handleChangeSelect}>
                                        <FormControlLabel value="heavy" control={<Radio color="primary"/>}
                                                          label="Heavy"/>
                                        <FormControlLabel value="light" control={<Radio color="primary"/>}
                                                          label="Light"/>
                                        <FormControlLabel value="plainText" control={<Radio color="primary"/>}
                                                          label="Plain text"/>
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Sound</FormLabel>
                                    <IconButton aria-label="confirm" size="medium" color="default"
                                                onClick={this.toggleSound}>
                                        {this.state.settings.soundOn ? <VolumeUpIcon fontSize="inherit"/> :
                                            <VolumeOffIcon fontSize="inherit"/>}
                                    </IconButton>
                                </FormControl>
                            </Box>
                        </DialogContent>
                        <Divider/>
                        <DialogActions>
                            <Button size="large" onClick={this.handleOpen}>Cancel</Button>
                            <Button size="large" color="primary" onClick={this.handleSave}>
                                Save
                            </Button>
                        </DialogActions>
                    </Box>
                </Dialog>
        )
    };

    render() {
        return (
            <Box>
                {this.displaySettings()}
            </Box>
        );
    }
}

export default SettingsDialog;
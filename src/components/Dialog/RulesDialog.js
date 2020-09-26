import React, {Component} from 'react';
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import rulesData from "../../rulesData";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const rules = rulesData.rules;
const MEMBERSMAX = 1000;
const MEMBERSMIN = 2;

class RulesDialog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            rulesCheckbox: [],
            valueMembersMax: 105,
            notification: {
                state: false,
                type: '',
                message: ''
            }
        }
    }

    componentDidMount() {
        let rulesCheckbox = [];

        for (let i = 0; i < rules.length; i++) {
            rulesCheckbox[rules[i].id] = {
                ...rules[i],
                checked: false
            }
        }

        this.setState({
            rulesCheckbox: rulesCheckbox
        })
    };

    handleOpen = () => {
        this.props.handleClose();
    };

    areRulesValid = () => {
        let symbolsSelected;

        symbolsSelected = this.state.rulesCheckbox.find((rule) => {
            return rule.type === 0 && rule.checked === true
        });

        return symbolsSelected !== undefined;
    };

    completeRules = (ruleId) => {
        if (ruleId === 4 && this.state.rulesCheckbox[ruleId].checked) {
            this.setCheckbox(2, true);
        }
    };

    handleSave = () => {
        if (this.areRulesValid()) {
            let newRules = rules.filter((rule) => {
                return this.state.rulesCheckbox[rule.id].checked
            });

            let ruleMax = {
                "id": -1,
                "type": -1,
                "title": "max",
                "value": this.state.valueMembersMax
            };

            newRules.push(ruleMax);
            this.props.handleNewRules(newRules);
        } else {
            this.newNotification("error", "At least one rule must be selected")
        }
    };

    newNotification = (type, message) => {
        this.setState({
            notification: {
                state: true,
                type: type,
                message: message
            }
        })
    };

    setCheckbox = (ruleId, checked) => {
        let rulesCheckbox = this.state.rulesCheckbox;

        rulesCheckbox[ruleId].checked = checked;

        this.setState({
            rulesCheckbox: rulesCheckbox
        })
    };

    handleCheckbox = (ruleId) => {
        this.setCheckbox(ruleId, !this.state.rulesCheckbox[ruleId].checked);
        this.completeRules(ruleId);
    };

    setValueMembersMax = (value) => {
        this.setState({
            valueMembersMax: value
        })
    };

    handleSliderChange = (event, newValue) => {
        this.setValueMembersMax(newValue);
    };

    handleInputChange = (event) => {
        this.setValueMembersMax(event.target.value === '' ? '' : Number(event.target.value));
    };

    handleBlur = () => {
        if (this.state.valueMembersMax < 0) {
            this.setValueMembersMax(MEMBERSMIN);
        } else if (this.state.valueMembersMax > MEMBERSMAX) {
            this.setValueMembersMax(MEMBERSMAX);
        }
    };

    displaySliderMembersMax = () => {
        return (
            <FormGroup>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Typography id="input-slider" gutterBottom>
                            Max
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={typeof this.state.valueMembersMax === 'number' ? this.state.valueMembersMax : 0}
                            onChange={this.handleSliderChange}
                            aria-labelledby="input-slider"
                            min={MEMBERSMIN}
                            max={MEMBERSMAX}
                            step={10} marks
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            value={this.state.valueMembersMax}
                            margin="dense"
                            onChange={this.handleInputChange}
                            onBlur={this.handleBlur}
                            inputProps={{
                                step: 10,
                                min: MEMBERSMIN,
                                max: MEMBERSMAX,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </FormGroup>
        );
    };

    displayRulesCheckbox = () => {
        return (
            <FormGroup>
                {this.state.rulesCheckbox.map((rule) => {
                    return <FormControlLabel key={rule.id}
                                             control={<Checkbox name={(rule.title)}/>}
                                             label={rule.title} checked={rule.checked}
                                             onChange={this.handleCheckbox.bind(this, rule.id)}
                    />
                })}
            </FormGroup>
        );
    };

    handleCloseNotification = () => {
        this.setState({
            notification: {
                state: false,
                type: '',
                message: ''
            }
        })
    };

    displayNotification = () => {
        if (this.state.notification.state) {
            return (
                <Snackbar open={this.state.notification.state} autoHideDuration={6000}
                          onClose={this.handleCloseNotification}
                          anchorOrigin={{'vertical': 'top', 'horizontal': 'center'}}>
                    <Alert onClose={this.handleCloseNotification} severity={this.state.notification.type}>
                        {this.state.notification.message}
                    </Alert>
                </Snackbar>
            )
        }
    };

    displayRules = () => {
        return (
            <Dialog onClose={this.handleOpen} aria-labelledby="simple-dialog-title" open={this.props.open}>
                <Box m={2}>
                    <DialogTitle>
                        <Typography>Rules</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <FormControl component="fieldset">
                            {this.displaySliderMembersMax()}
                            {this.displayRulesCheckbox()}
                        </FormControl>
                    </DialogContent>
                    <Divider/>
                    <DialogActions>
                        <Button size="large" onClick={this.handleOpen}>Cancel</Button>
                        <Button size="large" color="primary" onClick={this.handleSave}>
                            Save
                        </Button>
                    </DialogActions>
                </Box>
                {this.displayNotification()}
            </Dialog>
        )
    };

    render() {
        return (
            <Box>
                {this.displayRules()}
            </Box>
        );
    }
}

export default RulesDialog;
import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import RulesDialog from "./Dialog/RulesDialog";
import Snackbar from "@material-ui/core/Snackbar";
import Badge from "@material-ui/core/Badge";
import soundScoring from "../sfx/sfx_right.wav";
import soundWrong from "../sfx/sfx_wrong.wav";
import soundSkip from "../sfx/sfx_swipe.wav";
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import Fab from "@material-ui/core/Fab";
import Slide from "@material-ui/core/Slide";
import SpeedDialMenu from "./SpeedDialMenu";
import {Redirect} from "react-router-dom";
import SettingsDialog from "./Dialog/SettingsDialog";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Alert from "@material-ui/lab/Alert";

class Calculus extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            fieldResult: '',
            fieldError: {
                state: false,
                message: ""
            },
            score: {
                right: 0,
                wrong: 0,
                skipped: 0,
                precision: 0
            },
            membersMin: 2,
            membersMax: 105,
            nbMaxMembers: 2,
            symbols: ["+"],
            calculus: {
                members: [],
                realResult: 0,
                symbol: ""
            },
            rules: [],
            badgeScoring: {
                state: false,
                type: ""
            },
            speedDial: {
                settings: false,
                rules: false
            },
            notification: {
                state: false,
                type: '',
                message: ''
            }
        }
    }

    componentDidMount() {
        this.setState({
            settings: {
                darkTheme: this.props.settings.darkTheme,
                buttonsType: this.props.settings.buttonsType,
                soundOn: this.props.settings.soundOn
            }
        }, () => {
            this.setState({
                isLoading: false
            })
        });

        this.loadNewCalculus();
    };

    processRules = async (rules) => {
        let symbols = [];

        for (let i = 0; i < rules.length; i++) {
            switch (rules[i].id) {
                case -1:
                    this.setState({
                        membersMax: rules[i].value
                    });
                    break;
                case 0:
                    symbols.push("+");
                    break;
                case 1:
                    symbols.push('-');
                    break;
                case 2:
                    symbols.push('x');
                    break;
                case 3:
                    symbols.push('/');
                    break;
                default:
                    break;
            }
        }

        if (symbols.length > 0) {
            this.setState({
                symbols: symbols
            });
        }
    };

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * ((max + 1) - min)) + min;
    };

    hasRule = (id) => {
        for (let i = 0; i < this.state.rules.length; i++) {
            if (this.state.rules[i].id === id) {
                return true;
            }
        }

        return false;
    };

    addAllSymbols = async () => {
        let symbols = [];
        symbols.push("+");
        symbols.push('-');
        symbols.push('x');
        symbols.push('/');

        this.setState({
            symbols: symbols
        });
    };

    loadNewCalculus = () => {
        let members = [];
        let result, nbMaxMembers, membersMin, membersMax, randSymbol = 0;

        if (this.state.symbols.length < 1) {
            this.addAllSymbols().then(() => {
                randSymbol = this.state.symbols[this.getRandomInt(0, this.state.symbols.length - 1)];
            });
        } else {
            randSymbol = this.state.symbols[this.getRandomInt(0, this.state.symbols.length - 1)];
        }

        if (randSymbol === '+' || randSymbol === "-")
            result = 0;
        else
            result = 1;

        // FOR DIVISION
        if (randSymbol === '/') {
            membersMax = this.state.membersMax;
            // Prevent division by 0 or 1
            membersMin = 2;

            // Only 2 members
            members.push(this.getRandomInt(membersMin, membersMax));
            members.push(this.getRandomInt(membersMin, membersMax));

            // Reorder array to have Greatest number / Smallest number
            members.sort((a, b) => b - a);
            result = (members[0] / members[1]);

            // If result is not integer or if the members are the same
            while (result % 1 !== 0 || members[0] === members[1]) {
                // Redraw second member
                members[1] = this.getRandomInt(membersMin, membersMax);

                // Reorder array to have Greatest number / Smallest number
                members.sort((a, b) => b - a);
                result = (members[0] / members[1]);
            }
        } else if (randSymbol === 'x' && this.hasRule(4)) {
            console.log("Special rule tens digit")
            nbMaxMembers = this.state.nbMaxMembers;
            membersMin = this.state.membersMin;
            membersMax = Math.floor(this.state.membersMax / 10);

            // FOR MULTIPLICATION & SAME TENS DIGITS
            let tensDigits = this.getRandomInt(membersMin, membersMax);
            for (let i = 0; i < nbMaxMembers; i++) {
                let finalMember;
                do {
                    let unitDigit = this.getRandomInt(1, 9);
                    finalMember = tensDigits * 10 + unitDigit;
                } while (finalMember > this.state.membersMax);
                members.push(finalMember);
                result = result * members[i];
            }
        } else {
            // FOR OTHER OPERATIONS
            nbMaxMembers = this.state.nbMaxMembers;
            membersMin = this.state.membersMin;
            membersMax = this.state.membersMax;

            for (let i = 0; i < nbMaxMembers; i++) {
                members.push(this.getRandomInt(membersMin, membersMax));
                switch (randSymbol) {
                    case "+":
                        result = result + members[i];
                        break;
                    case "-":
                        if (i === 0)
                            result = members[0];
                        else
                            result = result - members[i];
                        break;
                    case "x":
                        result = result * members[i];
                        break;
                    default:
                        break;
                }
            }
        }

        this.setState({
            calculus: {
                members: members,
                realResult: result,
                symbol: randSymbol
            }
        });


    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;

        this.setFieldResult(value);
        this.setFieldError(false, "");
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.fieldResult !== undefined && this.state.fieldResult !== "") {
            if (this.isRightResult(parseFloat(this.state.fieldResult), this.state.calculus.realResult)) {
                this.incrementScoreRight().then(() => {
                    this.updatePrecision();
                    this.resetFieldResult();
                    this.loadNewCalculus();
                });
            } else {
                this.incrementScoreWrong().then(() => {
                    this.updatePrecision();
                });
            }
        } else {
            this.setFieldError(true, 'Empty field');
        }
    };

    setFieldError = (state, message) => {
        this.setState({
            fieldError: {
                state: state,
                message: message
            }
        })
    };

    updatePrecision = () => {
        let precision;

        precision = (this.state.score.right / (this.state.score.right + this.state.score.wrong + this.state.score.skipped)) * 100;

        this.setState((prevState) => ({
            score: {
                ...prevState.score,
                precision: precision.toFixed(2)
            }
        }));
    };

    incrementScoreRight = async () => {
        this.setState((prevState) => ({
            score: {
                ...prevState.score,
                right: prevState.score.right + 1
            }
        }));
        this.showBadgeScoring("right");
        this.playSoundScoring();
    };

    incrementScoreWrong = async () => {
        this.setState((prevState) => ({
            score: {
                ...prevState.score,
                wrong: prevState.score.wrong + 1
            }
        }));
        this.showBadgeScoring("wrong");
        this.playSoundWrongAnswer();
    };

    incrementScoreSkipped = async () => {
        this.setState((prevState) => ({
                score: {
                    ...prevState.score,
                    skipped: prevState.score.skipped + 1
                }
            }), () => {
                this.updatePrecision()
            }
        );
        this.showBadgeScoring("skip");
        this.playSoundSkip();
    };

    handleSkip = (event) => {
        event.preventDefault();

        this.incrementScoreSkipped().then(() => {
            this.resetFieldResult();
            this.loadNewCalculus();
        });
    };

    resetFieldResult = () => {
        this.setFieldResult("");
    };

    setFieldResult = (value) => {
        this.setState({
            fieldResult: value
        })
    };

    isRightResult = (userResult, realResult) => {
        return userResult === realResult
    };

    displayCalculus = () => {
        return this.state.calculus.members.join(' ' + this.state.calculus.symbol + ' ')
    };

    displayScore = () => {
        return (
            <Box mt={4}>
                <Card>
                    <CardContent>
                        <Typography>R: {this.state.score.right} - W: {this.state.score.wrong} -
                            S: {this.state.score.skipped}</Typography>
                        <Typography>P: {this.state.score.precision} %</Typography>
                    </CardContent>
                </Card>
            </Box>
        );
    };

    playSound = (audioFile) => {
        if (this.state.settings.soundOn)
            audioFile.play();
    };

    playSoundScoring = () => {
        const audio = new Audio(soundScoring);
        this.playSound(audio);
    };

    playSoundWrongAnswer = () => {
        const audio = new Audio(soundWrong);
        this.playSound(audio);
    };

    playSoundSkip = () => {
        const audio = new Audio(soundSkip);
        this.playSound(audio);
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

    newNotification = (type, message) => {
        this.setState({
            notification: {
                state: true,
                type: type,
                message: message
            }
        })
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

    updateRules = (rules) => {
        this.toggleRulesDialog();
        this.setState({
            rules: rules
        }, () => {
            this.processRules(rules).then(() => {
                this.loadNewCalculus();
            });
        });

        this.newNotification("success", "The new rules have been saved");
    };

    updateSettings = (settings) => {
        this.toggleSettingsDialog();

        this.props.handleDarkTheme(settings.darkTheme);
        this.props.handleButtonsType(settings.buttonsType);
        this.props.handleSoundOn(settings.soundOn);

        this.setSettings(settings);

        this.newNotification("success", "The new settings have been saved");

    };

    setSettings = (settings) => {
        this.setState({
            settings: settings
        })
    };

    showBadgeScoring = (type) => {
        this.setState({
            badgeScoring: {
                state: true,
                type: type
            }
        });
    };

    hideBadgeScore = () => {
        this.setState({
            badgeScoring: {
                state: false,
                type: ""
            }
        });
    };

    displayBadgeScoring = () => {
        let badgeContent;

        switch (this.state.badgeScoring.type) {
            case "right":
                badgeContent = "+1";
                break;
            case "wrong":
                badgeContent = "X";
                break;
            case "skip":
                badgeContent = "miss";
                break;
            default:
                badgeContent = "";
                break;
        }

        return (
            <Snackbar open={this.state.badgeScoring.state}
                      anchorOrigin={{'vertical': 'bottom', 'horizontal': 'center'}}
                      autoHideDuration={1000}
                      TransitionComponent={this.TransitionUp}
                      onClose={this.hideBadgeScore}>
                <Badge badgeContent={badgeContent}/>
            </Snackbar>
        );
    };

    TransitionUp = (props) => {
        return <Slide {...props} direction="up"/>;
    };

    toggleRulesDialog = () => {
        this.setState((prevState) => ({
            speedDial: {
                ...prevState.speedDial,
                rules: !prevState.speedDial.rules
            }
        }))
    };

    toggleSettingsDialog = () => {
        this.setState((prevState) => ({
            speedDial: {
                ...prevState.speedDial,
                settings: !prevState.speedDial.settings
            }
        }))
    };

    toggleHome = () => {
        this.setState((prevState) => ({
            speedDial: {
                ...prevState.speedDial,
                home: !prevState.speedDial.home
            }
        }))
    };

    goToHome = () => {
        if (this.state.speedDial.home)
            return <Redirect to={{pathname: "/"}}/>
    };

    handleSpeedDialMenu = (action) => {
        switch (action) {
            case "Home":
                this.toggleHome();
                break;
            case "Settings":
                this.toggleSettingsDialog();
                break;
            case "Rules":
                this.toggleRulesDialog();
                break;
            default:
                break;
        }
    };

    displayButtonsAction = () => {
        switch (this.state.settings.buttonsType) {
            case 'heavy':
                return (
                    <Box mt={2}>
                        <Fab color="primary" aria-label="add" style={{"marginRight": "1rem"}}
                             onClick={this.handleSubmit}>
                            <CheckRoundedIcon fontSize="large"/>
                        </Fab>
                        <Fab color="secondary" aria-label="add">
                            <SkipNextRoundedIcon fontSize="large" onClick={this.handleSkip}/>
                        </Fab>
                    </Box>
                );
            case 'light':
                return (
                    <Box mt={2}>
                        <IconButton aria-label="confirm" size="large" color="primary" style={{"marginRight": "1rem"}}
                                    onClick={this.handleSubmit}>
                            <CheckRoundedIcon fontSize="large"/>
                        </IconButton>
                        <IconButton aria-label="confirm" size="large" color="secondary"
                                    onClick={this.handleSkip}>
                            <SkipNextRoundedIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                );
            case 'plainText':
                return (
                    <Box mt={2}>
                        <Button variant={"contained"} color={"primary"} size={"large"}
                                style={{"marginRight": "1rem", "minWidth": "7rem"}} type={"submit"}
                                onClick={this.handleSubmit}>Confirm</Button>
                        <Button variant={"contained"} color={"secondary"} size={"large"} style={{"minWidth": "7rem"}}
                                type={"submit"}
                                onClick={this.handleSkip}>Skip</Button>
                    </Box>
                );
            default:
                return (
                    <Box mt={2}>
                        <Fab color="primary" aria-label="add" style={{"marginRight": "1rem"}}
                             onClick={this.handleSubmit}>
                            <CheckRoundedIcon fontSize="large"/>
                        </Fab>
                        <Fab color="secondary" aria-label="add">
                            <SkipNextRoundedIcon fontSize="large" onClick={this.handleSkip}/>
                        </Fab>
                    </Box>
                );
        }
    };

    displayDialogs = () => {
        return (
            <Box>
                <RulesDialog open={this.state.speedDial.rules} handleNewRules={this.updateRules}
                             handleClose={this.toggleRulesDialog}/>
                <SettingsDialog open={this.state.speedDial.settings} handleNewSettings={this.updateSettings}
                                handleClose={this.toggleSettingsDialog} settings={this.state.settings}/>
                <SpeedDialMenu handleAction={this.handleSpeedDialMenu}/>
            </Box>
        )
    };

    render() {
        return (
            this.state.isLoading ? 'Loading...' :
                <div>
                    <Container maxWidth="sm" className="Calculus">
                        {this.displayBadgeScoring()}
                        <Box mb={5}>
                            <Typography variant="h3" component="h2">
                                {this.displayCalculus()}
                            </Typography>
                        </Box>
                        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <Box>
                                <TextField id="filled-basic" variant="filled" type="number" autoFocus={true}
                                           value={this.state.fieldResult} onChange={this.handleChange}
                                           error={this.state.fieldError.state}
                                           helperText={this.state.fieldError.state ? this.state.fieldError.message : ' '}/>
                            </Box>
                            {this.displayButtonsAction()}
                        </form>
                        {this.displayScore()}
                    </Container>
                    {this.displayDialogs()}
                    {this.goToHome()}
                    {this.displayNotification()}
                </div>
        );
    }
}

export default Calculus;
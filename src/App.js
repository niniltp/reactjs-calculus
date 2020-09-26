import React, {useState} from 'react';
import './App.css';
import logo from './logo.svg';
import Button from "@material-ui/core/Button";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Calculus from "./components/Calculus";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const defaultSettings = {
    darkTheme: true,
    buttonsType: 'heavy',
    soundOn: true
};

function Welcome() {
    return (
        <Box>
            <Box>
                <Typography variant="h3" component="h2">
                    Welcome to Calculus
                </Typography>
            </Box>
            <Box m={1}>
                <img src={logo} className="App-logo" alt="logo"/>
            </Box>
            <Box>
                <Button variant={"contained"} color={"primary"} size={"large"} component={Link}
                        to={'/play'}>Let's start !</Button>
            </Box>
        </Box>
    )
}

function App() {
    const [darkTheme, setDarkTheme] = useState(defaultSettings.darkTheme);
    const [buttonsType, setButtonsType] = useState(defaultSettings.buttonsType);
    const [soundOn, setSoundOn] = useState(defaultSettings.soundOn);

    const theme = createMuiTheme({
        palette: {
            type: darkTheme ? 'dark' : 'light',
            background: {
                default: darkTheme ? '#282c34' : '#fafafa'
            }
        },
    });

    const settings = {
        darkTheme: darkTheme,
        buttonsType: buttonsType,
        soundOn: soundOn
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Switch>
                        <Route path="/" exact={true}>
                            <Welcome/>
                        </Route>
                        <Route
                            path='/play'
                            render={(props) => <Calculus {...props} handleDarkTheme={setDarkTheme}
                                                         settings={settings} handleButtonsType={setButtonsType}
                                                         handleSoundOn={setSoundOn}/>}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
//global
import GlobalStyles from "./global/globalStyles";
import ThemeProvider from "./global/themeProvider";
import StateProvider from "./global/stateProvider";
//components
import Landing from "./components/landing";

function App() {
    // //initialize analytics
    // ReactGA.initialize('')

    return (
        <>
            <StateProvider>
                <ThemeProvider>
                    <GlobalStyles />
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Landing} />
                        </Switch>
                    </Router>
                </ThemeProvider>
            </StateProvider>
        </>
    );
}

export default App;

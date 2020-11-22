import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
//global
import GlobalStyles from "./global/globalStyles";
import ThemeProvider from "./global/themeProvider";
import StateProvider from "./global/stateProvider";
//components
import Landing from "./components/landing";
import Contact from "./components/contact";
import Nav from "./components/navigation";
import Footer from "./components/footer";

function App() {
    // //initialize analytics
    // ReactGA.initialize('')

    return (
        <>
            <StateProvider>
                <ThemeProvider>
                    <GlobalStyles />
                    <Router>
                        <Nav />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/contact" component={Contact} />
                        </Switch>
                        <Footer />
                    </Router>
                </ThemeProvider>
            </StateProvider>
        </>
    );
}

export default App;

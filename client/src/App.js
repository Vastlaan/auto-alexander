import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
//global
import GlobalStyles from "./global/globalStyles";
import ThemeProvider from "./global/themeProvider";
import StateProvider from "./global/stateProvider";
import ScrollToTop from "./global/scrollToTop";
//components
import Landing from "./components/landing";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Appointment from "./components/appointment";
import Nav from "./components/navigation";
import Footer from "./components/footer";

function App() {
    //initialize analytics
    // ReactGA.initialize("G-J7BPFRC0K6");

    return (
        <>
            <StateProvider>
                <ThemeProvider>
                    <GlobalStyles />
                    <Router>
                        <ScrollToTop />
                        <Nav />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route
                                exact
                                path="/diensten"
                                component={Services}
                            />
                            <Route exact path="/galerij" component={Gallery} />
                            <Route exact path="/contact" component={Contact} />
                            <Route
                                exact
                                path="/afspraak"
                                component={Appointment}
                            />
                        </Switch>
                        <Footer />
                    </Router>
                </ThemeProvider>
            </StateProvider>
        </>
    );
}

export default App;

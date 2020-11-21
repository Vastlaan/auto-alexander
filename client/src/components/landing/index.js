import React, { useContext } from "react";
import ReactGA from "react-ga";
import { Context } from "../../store";
import Header from "./header";
import Services from "./services";
import Team from "./team";
import Reviews from "./reviews";
import Gallery from "./gallery";

export default function Landing() {
    ReactGA.pageview("/");

    const { store, dispatch } = useContext(Context);

    console.log(store);

    return (
        <>
            <Header />
            <Services />
            <Team />
            <Reviews />
            <Gallery />
        </>
    );
}

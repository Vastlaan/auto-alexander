import React from "react";
import Header from "./header";
import Diensten from "./diensten";
import Intersection from "../utils/intersection";
import Banner from "./banner";
import Twin from "./twin";

export default function Services() {
    return (
        <div>
            <Header />
            <Diensten />
            <Intersection
                header="Wat kost precies het laten spuiten van mijn auto?"
                para="Iedere vraag is maatwerk, daarom geven wij je graag een vrijblijvende prijsindicatie hoeveel het laten spuiten van je auto gaat kosten."
            />
            <Banner />
            <Twin />
        </div>
    );
}

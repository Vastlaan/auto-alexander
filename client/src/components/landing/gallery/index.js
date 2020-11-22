import React from "react";
import styled from "styled-components";
import Content from "../../utils/header-min";
import { Section } from "../../../styles";

export default function Gallery() {
    return (
        <Section>
            <Content
                header="Ons werk is gemerkt door feilloze service en dito vakmanschap"
                para="Laat uw carrosserie herstellen bij Auto Alexander. Wij repareren uw auto met kennis van zaken."
                btn1="Galerij"
                btn2="Contact"
                link1="/galerij"
                link2="/contact"
            />
        </Section>
    );
}

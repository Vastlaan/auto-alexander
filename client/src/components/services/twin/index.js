import React from "react";
import styled from "styled-components";
import {
    respond,
    Section,
    Content,
    Heading4,
    Para2,
    ButtonFull,
} from "../../../styles";

export default function Twin() {
    return (
        <Section style={{ backgroundColor: "white" }}>
            <Content>
                <Layout>
                    <Card>
                        <Heading4>Vlekkeloze service</Heading4>
                        <Line></Line>
                        <Para2>
                            Hoe groot of klein uw carrosserieschade ook is, de
                            Auto Alexander experts herstellen uw auto weer in
                            ere.
                        </Para2>
                    </Card>
                    <Card>
                        <Heading4>Ervaren vakmensen</Heading4>
                        <Line></Line>
                        <Para2>
                            Hoe groot of klein uw carrosserieschade ook is, de
                            Auto Alexander experts herstellen uw auto weer in
                            ere.
                        </Para2>
                    </Card>
                </Layout>
            </Content>
        </Section>
    );
}

const Layout = styled.div`
    padding: 13rem 1.9rem;
    display: grid;
    grid-template-columns: 1fr;

    ${() => respond("s", "padding: 13rem  2.7rem;")}

    ${() =>
        respond("l", "padding: 13rem 4.7rem; grid-template-columns: 1fr 1fr;")}
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.7rem;
    max-widht: 35rem;

    h3 {
        text-align: center;
        width: 100%;
        max-width: 100%;
    }
`;
const Line = styled.div`
    width: 20rem;
    height: 2px;
    background-color: ${(p) => p.theme.grey};
    margin: 2.7rem auto;
`;

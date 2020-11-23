import React from "react";
import styled from "styled-components";
import { Section, Content, Heading6, Para2 } from "../../styles";

export default function Intersection({ header, para }) {
    return (
        <Section style={{ backgroundColor: "white" }}>
            <Content>
                <Layout>
                    <Line></Line>
                    <Heading6>
                        {header
                            .split(" ")
                            .map((w, i, a) =>
                                i !== a.length - 1 ? (
                                    <strong key={i * 2.17}>{w} </strong>
                                ) : (
                                    <span key={i * 2.17}>{w} </span>
                                )
                            )}
                    </Heading6>
                    <Para2>{para}</Para2>
                </Layout>
            </Content>
        </Section>
    );
}

const Layout = styled.div`
    padding: 13rem 2.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-bottom: 2.7rem;
    }
`;
const Line = styled.div`
    width: 20rem;
    height: 2px;
    background-color: ${(p) => p.theme.grey};
    margin: 2.7rem auto;
`;

import React from "react";
import styled from "styled-components";
import { respond, Header, Content, Heading1 } from "../../../styles";
import Img from "../../../img/afspraak-header.jpg";

export default function HeaderComponent() {
    return (
        <Header
            style={{
                backgroundImage: `linear-gradient( to right, rgba(255, 255, 255, 0.1),  rgba(255, 255, 255, 0.1)),
        linear-gradient(to top, transparent 30%, rgba(255, 255, 255, 1) 90%),
        url(${Img})`,
            }}
        >
            <Content>
                <Heading>
                    <Heading1>
                        {"In 4 stapen afspraak maken"
                            .split(" ")
                            .map((w, i, a) =>
                                i !== a.length - 1 ? (
                                    <strong key={i * 2.17}>{w} </strong>
                                ) : (
                                    <span key={i * 2.17}>{w} </span>
                                )
                            )}
                    </Heading1>
                </Heading>
            </Content>
        </Header>
    );
}

const Layout = styled.div`
    padding: 1.9rem;

    ${() => respond("s", "padding: 2.7rem;")}

    ${() => respond("l", "padding: 4.7rem;")}
`;

const Heading = styled.div`
    h1 {
        margin: 0 auto;
        margin-top: 11.6rem;
        margin-bottom: 2.7rem;
        text-align: center;
${() => respond("m", "margin-top: 6.7rem;")}
        ${() => respond("xxl", "margin-top: 11.5rem;")}
    }
`;

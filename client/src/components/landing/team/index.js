import React from "react";
import styled from "styled-components";
import {
    Content,
    SectionNarrow,
    respond,
    Heading2,
    Para1,
} from "../../../styles";
import Img from "../../../img/team-1.png";

export default function Team() {
    return (
        <SectionNarrow>
            <Content>
                <Layout>
                    <Image>
                        <Heading2>
                            Beste Team <span>Vakmensen</span>
                        </Heading2>
                    </Image>
                    <Text>
                        <Para1>
                            Separated they live in Bookmarksgrove right at the
                            coast of the Semantics, a large language ocean. A
                            small river named Duden flows by their place and
                            supplies it with the necessary regelialia.
                        </Para1>
                    </Text>
                </Layout>
            </Content>
        </SectionNarrow>
    );
}

const Layout = styled.div`
    padding: 4.7rem 1.9rem;
    margin-bottom: 4.7rem;
`;
const Image = styled.div`
    width: 100%;
    min-height: 35rem;
    margin: 6.7rem auto;
    background-image: linear-gradient(
            to bottom,
            transparent 50%,
            ${(p) => p.theme.white} 90%
        ),
        url(${Img});
    background-size: cover;
    background-position: top;
    position: relative;

    ${() => respond("xl", "width: 70%; min-height: 55rem; ")}

    h2 {
        position: absolute;
        bottom: 0;
        left: 0;
        max-width: 100%;
        width: 100%;
        text-align: center;
    }
`;

const Text = styled.div`
    display: flex;
    justify-content: center;

    p {
        text-align: center;
    }
`;

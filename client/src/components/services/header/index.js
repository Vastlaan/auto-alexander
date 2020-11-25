import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    respond,
    Header,
    Content,
    Heading1,
    Para1,
    ButtonFull,
} from "../../../styles";
import BackgroundPhoto from "../../../img/afspraak-header.jpg";
import Img1 from "../../../img/chat-1.png";
import Img2 from "../../../img/chat-2.png";

export default function HeaderComponent() {
    return (
        <Header img={BackgroundPhoto}>
            <Content>
                <Layout>
                    <Holder>
                        <Heading1>
                            {"Krassen en deuden spuiten"
                                .split(" ")
                                .map((w, i, a) =>
                                    i !== a.length - 1 ? (
                                        <strong key={i * 2.17}>{w} </strong>
                                    ) : (
                                        <span key={i * 2.17}>{w} </span>
                                    )
                                )}
                        </Heading1>
                        <Para1>
                            Vakkundig een nieuwe laklaag laten spuiten op je
                            auto.Wij helpen je graag bij het kiezen van een
                            nieuwe lakkleur.
                        </Para1>
                        <Buttons>
                            <Link to="/afspraak">
                                <ButtonFull>Plan een afspraak</ButtonFull>
                            </Link>
                        </Buttons>
                    </Holder>
                    <Holder>
                        <Image1>
                            <img src={Img1} alt="chat conversation" />
                        </Image1>
                        <Image2>
                            <img src={Img2} alt="chat conversation" />
                        </Image2>
                    </Holder>
                </Layout>
            </Content>
        </Header>
    );
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-itmes: center;
    padding: 1.9rem;

    ${() => respond("s", "padding: 2.7rem;")}

    ${() => respond("l", "padding: 4.7rem; flex-direction: row;")}
`;
const Holder = styled.div`
    h1 {
        margin-top: 6.7rem;
        margin-bottom: 2.7rem;

        ${() => respond("xxl", "margin-top: 11.5rem;")}
    }
    p {
        margin-bottom: 6.8rem;
    }
`;
const Buttons = styled.div`
    margin-bottom: 2.7rem;
`;
const Image = styled.div`
    display: flex;

    img {
        width: 100%;
        max-width: 294px;
    }

    ${() => respond("l", "max-width: 35rem;")}
`;
const Image1 = styled(Image)`
    margin-top: 4.7rem;
    margin-left: 0rem;
    max-width: 40rem;

    ${() => respond("l", "margin-left: 23rem; margin-top: 9rem;")}
`;
const Image2 = styled(Image)`
    margin-top: 4.7rem;
    margin-left: 2.7rem;
    max-width: 35rem;
    ${() => respond("l", "margin-left: 9rem;")}
`;

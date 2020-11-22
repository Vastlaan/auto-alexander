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
    ButtonEmpty,
    SocialButton,
} from "../../../styles";
import { RiFacebookFill, RiGoogleFill } from "react-icons/ri";
import BackgroundPhoto from "../../../img/auto-alexander-1-min.jpg";

export default function HeaderComponent() {
    return (
        <Header img={BackgroundPhoto}>
            <Content>
                <Layout>
                    <Heading1>
                        {"Personlijk en transparant"
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
                        Met onderhoud op maat gaan wij aan de slag om uw auto
                        weer helemaal rijklaar te maken, zodat u altijd veilig
                        de weg op kunt. Maak nu uw afspraak!
                    </Para1>
                    <Buttons>
                        <Link to="/afspraak">
                            <ButtonFull>Plan een afspraak</ButtonFull>
                        </Link>
                        <Link to="/contact">
                            <ButtonEmpty>Contact</ButtonEmpty>
                        </Link>
                    </Buttons>
                    <Icons>
                        <SocialButton
                            onClick={() =>
                                (window.location.href = "https://facebook.com")
                            }
                        >
                            <RiFacebookFill />
                        </SocialButton>
                        <SocialButton
                            onClick={() =>
                                (window.location.href = "https://google.com")
                            }
                        >
                            <RiGoogleFill />
                        </SocialButton>
                    </Icons>
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

    ${() => respond("l", "padding: 4.7rem;")}

    h1 {
        margin-top: 6.8rem;
        margin-bottom: 2.7rem;
    }
    p {
        margin-bottom: 6.8rem;
    }
`;
const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2.7rem;

    button {
        margin-right: 2.7rem;
    }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2.7rem;

    button {
        margin-right: 2.7rem;
    }
`;

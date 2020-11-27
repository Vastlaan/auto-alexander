import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Img from "../../img/auto-alexander-2-min.jpg";
import { respond, ButtonFull, ButtonEmpty } from "../../styles";

export default function HeaderMin({ header, para, btn1, btn2, link1, link2 }) {
    return (
        <Container>
            <ImageContainer>
                <img src={Img} alt="auto" />
            </ImageContainer>
            <Content>
                <h1>{header}</h1>
                <p>{para}</p>
                <Buttons>
                    <Link to={link1}>
                        <ButtonFull>{btn1}</ButtonFull>
                    </Link>
                    <Link to={link2}>
                        <ButtonEmpty>{btn2}</ButtonEmpty>
                    </Link>
                </Buttons>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

    ${() => respond("xl", "grid-template-columns: 1fr 1fr;")}
`;
const ImageContainer = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            to bottom,
            rgba(229, 229, 229, 0.6),
            ${(p) => p.theme.white}
        );

        ${(p) =>
            respond(
                "xl",
                `background-image: linear-gradient(to right, rgba(229,229,229,.1), ${p.theme.white});`
            )}
    }

    img {
        max-height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        display: none;
        ${() => respond("xl", "display: block;")}
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1/2;
    grid-row: 2/3;
    position: relative;
    z-index: 3;
    margin-top: 0;

    ${() =>
        respond(
            "xl",
            "grid-row: 1/2;grid-column: 2/3; margin-left:0; align-items: flex-start;"
        )}

    h1 {
        max-width: 40rem;
        margin-bottom: 2.7rem;
        margin-top: 2.7rem;
        font-size: 4.8rem;
        font-weight: 900;
        line-height: 1.1;
        color: ${(p) => p.theme.black};
        text-align: center;

        ${() => respond("xl", "max-width: 50rem; text-align:left;")}
    }
    p {
        max-width: 40rem;
        text-align: center;
        font-size: 1.9rem;
        font-weight: 300;
        line-height: 1.4;
        color: ${(p) => p.theme.greyDark};
        ${() => respond("xl", "text-align:left;")}
    }
`;
const Buttons = styled.div`
    margin: 6.7rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 90%;

    ${() =>
        respond(
            "xl",
            "align-self: auto;margin: 6.7rem 0 4.1rem 0;max-width: 27rem; justify-content: flex-start;"
        )}
`;

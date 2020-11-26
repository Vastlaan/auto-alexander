import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import LogoBlack from "../../img/logo.png";
import LogoWhite from "../../img/logo-2.png";
import { respond, fonts, ButtonFull, ButtonEmpty, Content } from "../../styles";
import { CgMenuMotion } from "react-icons/cg";

function Navigation(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function changeBackground() {
            if (window.scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", changeBackground);

        return () => window.removeEventListener("scroll", changeBackground);
    });

    return (
        <Positioner isScrolled={isScrolled}>
            <Content>
                <Container>
                    <Top>
                        <Link to="/">
                            <img
                                src={
                                    window.innerWidth >= 1366
                                        ? LogoBlack
                                        : LogoWhite
                                }
                                alt="logo auto alexander"
                            />
                        </Link>
                        <Icon
                            visible={isVisible}
                            onClick={() =>
                                setIsVisible((prevState) => !prevState)
                            }
                        >
                            <CgMenuMotion />
                        </Icon>
                    </Top>

                    <Buttons visible={isVisible}>
                        <Link
                            to="/diensten"
                            onClick={() => setIsVisible(false)}
                        >
                            <ButtonPlain>Diensten</ButtonPlain>
                        </Link>
                        <Link to="/galerij" onClick={() => setIsVisible(false)}>
                            <ButtonPlain>Galerij</ButtonPlain>
                        </Link>
                        <Link to="/contact" onClick={() => setIsVisible(false)}>
                            <ButtonPlain>Contact</ButtonPlain>
                        </Link>
                        <Link
                            to="/afspraak"
                            onClick={() => setIsVisible(false)}
                            style={
                                window.innerWidth >= 1366
                                    ? {}
                                    : { marginTop: "2.7rem" }
                            }
                        >
                            <ButtonEmpty
                                color={
                                    window.innerWidth >= 1366
                                        ? props.theme.black
                                        : props.theme.white
                                }
                                color2={
                                    window.innerWidth >= 1366
                                        ? props.theme.white
                                        : props.theme.black
                                }
                            >
                                Afspraak
                            </ButtonEmpty>
                        </Link>
                    </Buttons>
                </Container>
            </Content>
        </Positioner>
    );
}

export default withTheme(Navigation);

const Positioner = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    ${(p) =>
        respond(
            "xl",
            `background-color: ${p.isScrolled ? p.theme.white : "transparent"};`
        )}
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
`;
const Top = styled.div`
    padding: 1.3rem;
    width: 100%;
    position: static;
    z-index: 11;
    background-color: ${(p) => p.theme.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${() =>
        respond(
            "xl",
            "padding:.9rem 4.7rem; width: auto; background-color: transparent;"
        )}

    img {
        width: 15rem;
    }
`;
const Buttons = styled.div`
    display: flex;

    transition: all 0.3s;
    transform: ${(p) => (p.visible ? "translateY(0%)" : "translateY(-200%)")};

    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    background-color: ${(p) => p.theme.primary};
    width: 100%;
    align-items: flex-start;
    padding: 2.7rem;
    z-index: 10;

    ${() =>
        respond(
            "xl",
            `
    transform: translateY(0%); 
    position: static;
    align-items: center;
    justify-content: space-between;
    width: 55%;
    flex-direction: row;
    padding: 0 2.7rem;
    background-color: transparent;
  `
        )}

    a {
        text-decoration: none;
    }
`;

const ButtonPlain = styled.button`
    background-color: transparent;
    border: none;
    font-weight: 400;
    font-size: 2.7rem;
    color: ${(p) => p.theme.white};
    cursor: pointer;
    transition: all 0.3s;
    margin: 1rem 0;
    position: relative;

    &:after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: ${(p) => p.theme.black};
        position: absolute;
        bottom: -1rem;
        left: 0;
        opacity: 0;
        transition: all 0.2s;
    }

    &:hover {
        &:after {
            bottom: 0;
            opacity: 0.6;
        }
    }

    &:active,
    :focus {
        outline: none;
    }

    ${(p) => respond("xl", `color: ${p.theme.black}; font-size: 1.9rem;`)}
`;

const Icon = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus,
    :active {
        outline: none;
    }

    svg {
        font-size: 5rem;
        color: snow;
        transition: all 0.3s;
        transform: ${(p) => (p.visible ? "rotate(90deg)" : "rotate(0)")};
    }
    ${() => respond("xl", "display: none;")}
`;

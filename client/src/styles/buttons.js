import styled from "styled-components";
import { fonts } from "./fonts.js";
import { respond } from "./respond";

export const Button1 = styled.button`
    width: 20rem;
    height: 5rem;
    color: ${(p) => p.theme.grey8};
    border: 1px solid ${(p) => p.theme.secondary};
    background-color: transparent;
    font-family: ${fonts.para1};
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 2;

    &:after {
        content: "";
        display: block;
        background-color: ${(p) => p.theme.secondary};
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s;
        z-index: -1;
    }

    &:hover {
        border: 1px solid ${(p) => p.theme.grey3};
        color: ${(p) => p.theme.grey3};
        &:after {
            top: 100%;
        }
    }

    &:focus,
    :active {
        outline: none;
    }
`;
export const Button2 = styled.button`
    width: 20rem;
    height: 5rem;
    color: ${(p) => (p.color ? p.color : p.theme.grey6)};
    border: 1px solid transparent;
    background-color: transparent;
    font-family: ${fonts.para1};
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0 0 0.3rem ${(p) => (p.color ? p.color : p.theme.grey6)};
    z-index: 2;

    &:after {
        content: "";
        display: block;
        border-radius: 1rem;
        box-shadow: 0 0 0.5rem ${(p) => (p.color ? p.color : p.theme.grey6)};
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s;
        z-index: -1;
    }

    &:hover {
        color: ${(p) => (p.color ? p.color : p.theme.grey6)};
        &:after {
            transform: scale(1.5);
            opacity: 0;
        }
    }

    &:focus,
    :active {
        outline: none;
    }
`;

export const Button3 = styled.button`
    width: 20rem;
    height: 5rem;
    color: ${(p) => (p.color ? p.color : p.theme.grey7)};
    border: 1px solid transparent;
    background-color: rgba(255, 255, 255, 0.3);
    font-family: ${fonts.para1};
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0 0 0.3rem ${(p) => (p.color ? p.color : p.theme.grey7)};
    z-index: 2;

    &:after {
        content: "";
        display: block;
        border-radius: 1rem;
        box-shadow: 0 0 0rem ${(p) => (p.color ? p.color : p.theme.grey7)};
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s;
        z-index: -1;
    }

    &:hover {
        color: ${(p) => (p.color ? p.color : p.theme.grey7)};
        &:after {
            transform: scale(1.5);
            box-shadow: 0 0 0.5rem ${(p) => (p.color ? p.color : p.theme.grey7)};
            opacity: 0;
        }
    }

    &:focus,
    :active {
        outline: none;
    }
`;

export const SocialButton = styled.button`
    width: 5.7rem;
    height: 5.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(p) => (p.color ? p.color : p.theme.primary)};
    border-radius: 3px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;

    ${(p) =>
        respond(
            "l",
            `border: 1px solid ${p.color ? p.color : p.theme.primary};
            width: 4rem;
            height: 4rem;`
        )}

    &:hover {
        transform: scale(1.2);
    }
    &:focus,
    :active {
        outline: none;
    }
    svg {
        font-size: 2.7rem;
        color: ${(p) => p.theme.primary};
        ${(p) =>
            respond(
                "l",
                `font-size: 2.3rem;
                color: ${p.color ? p.color : p.theme.primary};`
            )}
    }
`;

export const ButtonFull = styled.button`
    padding: 1.9rem 3.3rem;
    background-color: ${(p) => (p.color ? p.color : p.theme.primary)};
    color: ${(p) => (p.color2 ? p.color2 : p.theme.white)};
    border: 1px solid transparent;
    border-radius: 3px;
    font-family: ${fonts.primary};
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 1;
    cursor: pointer;
    transition: all 0.3s;
    margin: 1rem 1rem;
    min-width: 20rem;

    &:hover {
        background-color: transparent;
        color: ${(p) => (p.color ? p.color : p.theme.primary)};
        border: 1px solid ${(p) => (p.color ? p.color : p.theme.primary)};
    }
    &:focus,
    :active {
        outline: none;
    }

    ${() => respond("l", "padding: 1.1rem 2.7rem;")}
`;
export const ButtonEmpty = styled.button`
    padding: 1.9rem 3.3rem;
    background-color: transparent;
    color: ${(p) => (p.color ? p.color : p.theme.primary)};
    border: 1px solid ${(p) => (p.color ? p.color : p.theme.primary)};
    border-radius: 3px;
    font-family: ${fonts.primary};
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 1;
    cursor: pointer;
    transition: all 0.3s;
    min-width: 20rem;

    &:hover {
        background-color: ${(p) => (p.color ? p.color : p.theme.primary)};
        color: ${(p) => (p.color2 ? p.color2 : p.theme.white)};
        border: 1px solid transparent;
    }
    &:focus,
    :active {
        outline: none;
    }

    ${() => respond("l", "padding: 1.1rem 2.7rem;")}
`;

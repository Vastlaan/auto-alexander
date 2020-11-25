import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fonts, respond, Content, ButtonEmpty } from "../../styles";
import Logo from "../../img/logo-2.png";
import { RiFacebookFill, RiGoogleFill } from "react-icons/ri";

const data = {
    name: "Auto Alexander",
    address: {
        street: "Herastraat 49",
        nr: "49",
        city: "5047 TX Tilburg",
        land: "Nederland",
    },
    phone: "06 17 23 15 85",
    phoneNL: "06 59 73 82 76",
    email: "info@auto-alexander.com",
    header: "Herstelbedrijf, auto spuiten en carrosseriewerk",
    copyright: " Alle rechten voorbehouden.",
    sections: [
        {
            id: 2,
            header: "Diensten",
            links: [
                "Auto spuiten",
                "Carrosseriewerk",
                "aannemen",
                "particuleren",
            ],
        },
        {
            id: 4,
            header: "Privacy",
            links: ["cookies", "Voorwaarden", "Privacy policy", "Contact"],
        },
    ],
    offerHeader: "Blijf op de hoogte",
    offerBtn: "Offerte",
};

export default function Footer2() {
    return (
        <Footer>
            <Content>
                <Bulk>
                    <Info>
                        <LogoContainer>
                            <img src={Logo} alt="auto alexander logo" />
                        </LogoContainer>
                        <h4>{data.header}</h4>
                        <div>
                            <p>
                                {data.address.street} {data.address.nr},{" "}
                            </p>
                            <p>
                                {data.address.city}, {data.address.land}
                            </p>
                            <p>
                                Telefoon:{" "}
                                <a href={`tel:${data.phone}`}>{data.phone}</a>{" "}
                                (Pools)
                            </p>
                            <p>
                                Mobiel:{" "}
                                <a href={`tel:${data.phoneNL}`}>
                                    {data.phoneNL}
                                </a>{" "}
                                (Nederlands)
                            </p>
                            <p>
                                E-mailadres:{" "}
                                <a href={`mailto:${data.email}`}>
                                    {data.email}
                                </a>
                            </p>
                        </div>
                    </Info>
                    <Links>
                        {data.sections.map((section, i) => {
                            return (
                                <div key={`${section}-${i * Math.random(100)}`}>
                                    <h3>{section.header}</h3>
                                    {section.links.map((link, i) => {
                                        return (
                                            <Link
                                                key={`${link}-${i}-${Math.random(
                                                    100
                                                )}`}
                                                to={`/${link}`}
                                            >
                                                {link}
                                            </Link>
                                        );
                                    })}
                                </div>
                            );
                        })}
                        <Icons>
                            <div>
                                <RiFacebookFill />
                            </div>
                            <div>
                                <RiGoogleFill />
                            </div>
                        </Icons>
                    </Links>
                    <Offer>
                        <h3>{data.offerHeader}</h3>
                        <input type="text" placeholder="E-mail" />
                        <ButtonEmpty color="white">Aanvragen</ButtonEmpty>
                    </Offer>
                </Bulk>
                <Copyright>
                    <h6>
                        &copy; {new Date().getFullYear()} Copyright{" "}
                        <a href="https://itcontext.nl">IT Context</a>{" "}
                        {data.copyright}
                    </h6>
                </Copyright>
            </Content>
        </Footer>
    );
}

const Footer = styled.footer`
    padding: 2.7rem 0.9rem;
    font-family: ${fonts.roboto};
    background-color: ${(p) => p.theme.primary};

    ${() => respond("l", "padding: 4.7rem; padding-bottom: 0;")}
`;
const Bulk = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    ${() => respond("s", "grid-template-columns: repeat(2, 1fr);")}
    ${() => respond("l", "grid-template-columns: repeat(3, 1fr);")}
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2.7rem;
    flex: 1;

    h3 {
        font-size: 2.7rem;
        line-height: 1;
        color: ${(p) => p.theme.white};
    }
    h4 {
        font-size: 1.9rem;
        line-height: 1;
        font-weight: 400;
        color: ${(p) => p.theme.white};
    }

    div {
        margin: 2.7rem 0;
        p {
            font-size: 1.6rem;
            line-height: 1.3;
            color: ${(p) => p.theme.white};
            font-weight: 300;
            margin: 0.6rem 0;
            a {
                color: #ebf5fb;
                font-weight: 600;
                transition: all 0.3s;

                &:hover {
                    display: inline-block;
                    transform: scale(1.05);
                }
            }
        }
    }
`;
const LogoContainer = styled.div`
    width: 20rem;

    img {
        width: 100%;
    }
`;
const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap-column: 2.3rem;
    padding: 2.7rem;

    ${() => respond("l", "grid-template-columns: repeat(2, 1fr);")}

    div {
        display: flex;
        flex-direction: column;
        margin: 0rem;

        ${() => respond("l", "margin: 2.7rem;")}

        h3 {
            font-weight: 600;
            color: ${(p) => p.theme.white};
            line-height: 1.3;
            font-size: 1.9rem;
            margin-bottom: 0.9rem;
        }

        a {
            margin-top: 1rem;
            text-decoration: none;
            font-weight: 300;
            color: ${(p) => p.theme.white};
            line-height: 1.3;
            font-size: 1.6rem;
            text-transform: capitalize;
            transition: all 0.3s;

            &:hover {
                color: ${(p) => p.theme.grey};
            }
        }
    }
`;
const Icons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row !important;
    align-items: flex-start !important;
    margin: 0 !important;

    div {
        border: 2px solid ${(p) => p.theme.white};
        border-radius: 5px;
        padding: 0.3rem 0.9rem;
        margin-right: 0.9rem;

        svg {
            font-size: 1.9rem;
            color: ${(p) => p.theme.white};
            cursor: pointer;
        }
    }
`;
const Offer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5.4rem 2.7rem;

    h3 {
        font-weight: 600;
        color: ${(p) => p.theme.white};
        line-height: 1.3;
        font-size: 1.9rem;
        margin-bottom: 0.9rem;
    }

    input {
        max-widht: 35rem;
        border: none;
        padding: 0.9rem 1.9rem;
        border-radius: 3px;
        margin: 2.7rem 0;

        &:active,
        :focus {
            outline: none;
            box-shadow: 0 0 1rem rgba(255, 255, 255, 0.6);
        }
    }

    button {
        &:hover {
            background-color: transparent;
            border: 1px solid ${(p) => p.theme.white};
            box-shadow: 0 0 1rem rgba(255, 255, 255, 0.6);
        }
    }
`;
const Copyright = styled.div`
    display: flex;
    justify-content: center;
    widht: 100%;
    padding-bottom: 1.9rem;

    h6 {
        font-size: 1.1rem;
        line-height: 1;
        letter-spacing: 0.2rem;
        font-weight: 300;
        color: ${(p) => p.theme.white};

        a {
            color: white;
        }
    }
`;

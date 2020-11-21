import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fonts, respond, Content } from "../../styles";
import Logo from "../../img/logo-2.png";

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
            id: 1,
            header: "Bedrijf",
            links: ["schoonmaken", "renoveren", "aannemen", "klussen"],
        },
        {
            id: 2,
            header: "Diensten",
            links: ["Auto spuiten", "arrangeren", "aannemen", "particuleren"],
        },
        {
            id: 3,
            header: "Over Ons",
            links: ["schoonmaken", "renoveren", "aannemen", "particuleren"],
        },
        {
            id: 4,
            header: "Privacy",
            links: ["cookies", "policy", "voorwaarden"],
        },
    ],
};

export default function Footer2() {
    return (
        <Footer>
            <Content>
                <LogoContainer>
                    <img src={Logo} alt="auto alexander logo" />
                </LogoContainer>
                <Bulk>
                    <Info>
                        <h3>{data.name}</h3>
                        <h4>{data.header}</h4>
                        <div>
                            <p>
                                {data.address.street} {data.address.nr},{" "}
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
                        <h6>
                            &copy; {new Date().getFullYear()} Copyright{" "}
                            <a href="https://itcontext.nl">IT Context</a>{" "}
                            {data.copyright}
                        </h6>
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
                    </Links>
                </Bulk>
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
    display: flex;
    flex-direction: column-reverse;
    ${() => respond("l", "flex-direction:row;")}
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.7rem;
    flex: 1;

    h3 {
        font-size: 2.7rem;
        line-height: 1;
        color: ${(p) => p.theme.silver};
    }
    h4 {
        font-size: 1.9rem;
        line-height: 1;
        font-weight: 400;
        color: ${(p) => p.theme.silver};
    }

    div {
        margin: 2.7rem 0;
        p {
            font-size: 1.6rem;
            line-height: 1.3;
            color: ${(p) => p.theme.silver};
            font-weight: 300;
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
    h6 {
        font-size: 1.1rem;
        line-height: 1;
        letter-spacing: 0.2rem;
        font-weight: 300;
        color: ${(p) => p.theme.silver};

        a {
            color: white;
        }
    }
`;
const LogoContainer = styled.div`
    padding-left: 2.7rem;
    width: 20rem;

    img {
        width: 100%;
    }
`;
const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.9rem;
    padding: 2.7rem;

    ${() => respond("l", "grid-template-columns: repeat(4, 1fr);")}

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
            margin-top: 0.5rem;
            text-decoration: none;
            font-weight: 300;
            color: ${(p) => p.theme.silver};
            line-height: 1.3;
            font-size: 1.9rem;
            text-transform: capitalize;
            transition: all 0.3s;

            &:hover {
                color: ${(p) => p.theme.grey};
            }
        }
    }
`;

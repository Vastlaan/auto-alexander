import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    SectionNarrow,
    respond,
    Heading4,
    Para1,
    ButtonFull,
} from "../../../styles";
import { RiMapPinLine, RiMailLine, RiPhoneLine } from "react-icons/ri";

export default function Header() {
    return (
        <SectionNarrow>
            <Layout>
                <Form>
                    <Heading4>Formulier</Heading4>
                    <Para1>
                        Neem contact met ons mee. Wij zijn je graag van dienst!
                    </Para1>
                    <Panel>
                        <Info>
                            <Field>
                                <label htmlFor="name">Naam:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="naam"
                                />
                            </Field>
                            <Field>
                                <label htmlFor="email">E-mail:</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="e-mail"
                                />
                            </Field>
                            <Field2>
                                <input
                                    type="checkbox"
                                    id="policy"
                                    name="policy"
                                />
                                <label htmlFor="policy">
                                    Ik verklaar dat ik mee ben met{" "}
                                    <Link to="/voorwaarden">
                                        Algemene Voorwaarden
                                    </Link>{" "}
                                    en{" "}
                                    <Link to="/cookies"> Cookies Policy</Link>
                                </label>
                            </Field2>
                        </Info>
                        <Message>
                            <Field>
                                <label htmlFor="msg">Bericht:</label>
                                <textarea
                                    name="msg"
                                    id="msg"
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </Field>
                        </Message>
                        <Field>
                            <ButtonFull>Versturen</ButtonFull>
                        </Field>
                    </Panel>
                </Form>
                <Contact>
                    <Heading4>Contact</Heading4>
                    <Para1>
                        Wij werken van maandag t/m vrijdag 08:00 - 16:00
                    </Para1>
                    <Field3>
                        <RiMapPinLine />
                        <p>
                            Herastraat 49 <br />
                            5047 TX Tilburg{" "}
                        </p>
                    </Field3>
                    <Field3>
                        <RiMailLine />
                        <p>info@auto-alexander.nl</p>
                    </Field3>
                    <Field3>
                        <RiPhoneLine />
                        <p>06 17 23 15 85 (PL)</p>
                    </Field3>
                    <Field3>
                        <RiPhoneLine />
                        <p>06 59 73 82 76 (NL)</p>
                    </Field3>
                </Contact>
            </Layout>
        </SectionNarrow>
    );
}

const Layout = styled.div`
    padding-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
const Form = styled.form`
    margin-top: 4.7rem;
    grid-column: 1/4;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    padding: 4.7rem 2.7rem;

    ${() => respond("xl", "grid-column: 1/3;grid-row: 1/2;")}
`;
const Panel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1.9rem;
    margin-top: 2.7rem;

    ${() => respond("s", "grid-template-columns: 1fr 1fr;")}
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45rem;
`;
const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.9rem;

    label {
        color: ${(p) => p.theme.primary};
        font-size: 1.9rem;
    }
    input,
    textarea {
        border: 1px solid ${(p) => p.theme.primary};
        padding: 0.9rem 1.9rem;
        border-radius: 3px;
        max-width: 35rem;

        &:focus,
        :active {
            outline: none;
            box-shadow: 0 0 1rem rgba(255, 255, 255, 0.6);
        }
    }
    button {
        align-self: flex-start;
    }
`;
const Field2 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.9rem;

    label {
        color: ${(p) => p.theme.grey};
        font-size: 1.3rem;

        a {
            color: ${(p) => p.theme.primary};
        }
    }
    input {
        border: 1px solid ${(p) => p.theme.primary};
        padding: 0.9rem 1.9rem;
        border-radius: 3px;
        margin-right: 1.9rem;
        max-widht: 35rem;

        &:focus,
        :active {
            outline: none;
            box-shadow: 0 0 1rem rgba(255, 255, 255, 0.6);
        }
    }
`;
const Message = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45rem;
`;

const Contact = styled.div`
    grid-column: 1/4;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    margin-top: 4.7rem;
    padding: 4.7rem 2.7rem;
    align-items: flex-start;

    ${() => respond("l", "")}
    ${() => respond("xl", "grid-column: 3/4; align-items: stretch;")}

    p {
        margin-bottom: 2.7rem;
    }
`;

const Field3 = styled.button`
    border: 1px solid ${(p) => p.theme.primary};
    background-color: transparent;
    transition: all 0.3s;
    display: grid;
    grid-template-columns: 5rem 1fr;
    align-items: center;
    justify-items: center;
    margin-bottom: 1.9rem;
    padding: 0.9rem 1.9rem;
    border-radius: 3px;
    cursor: pointer;
    min-width: 35rem;

    &:focus,
    :active {
        outline: none;
    }
    &:hover {
        transform: scale(1.05);
    }

    svg {
        font-size: 2.7rem;
        color: ${(p) => p.theme.primary};
    }
    p {
        font-size: 2.1rem;
        font-weight: 600;
        margin-bottom: 0;
        color: ${(p) => p.theme.primary};
    }
`;

import React, { useState } from "react";
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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [isChecked, setisChecked] = useState(false);
    const [warning, setWarning] = useState("");

    function submitContactForm(e) {
        e.preventDefault();
        if (!isChecked) {
            return setWarning(
                "Verklar aub dat je met onze Algemene Voorwaarden kennis hebt gemaakt"
            );
        }
        const data = {
            name,
            email,
            msg,
        };
        console.log(data);

        fetch("/api/contact-form-submition", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((d) => {
                if (d === "Sucess") {
                    return console.log("Done. Set confirmation.");
                }
            })
            .catch((e) => console.error(e));

        setWarning("");
    }
    return (
        <SectionNarrow>
            <Layout>
                <Form onSubmit={submitContactForm}>
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
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="email">E-mail:</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="e-mail"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Field>
                            <Field2>
                                <input
                                    type="checkbox"
                                    id="policy"
                                    name="policy"
                                    onChange={() =>
                                        setisChecked((prevState) => !prevState)
                                    }
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
                                    value={msg}
                                    onChange={(e) => setMsg(e.target.value)}
                                    required
                                ></textarea>
                            </Field>
                        </Message>
                        <Field>
                            {warning && (
                                <p style={{ color: "orangered" }}>{warning}</p>
                            )}
                            <ButtonFull type="submit">Versturen</ButtonFull>
                        </Field>
                    </Panel>
                </Form>
                <Contact>
                    <Heading4>Contact</Heading4>
                    <Para1>
                        Wij werken van maandag t/m vrijdag 08:00 - 18:00
                    </Para1>
                    <a href="https://www.google.com/maps/place/Herastraat+43,+5047+TX+Tilburg/@51.592085,5.006604,16z/data=!4m5!3m4!1s0x47c6963a1ac38025:0xd07dc3852710ccee!8m2!3d51.5920846!4d5.0066039">
                        <Field3>
                            <RiMapPinLine />
                            <p>
                                Herastraat 49 <br />
                                5047 TX Tilburg{" "}
                            </p>
                        </Field3>
                    </a>
                    <a href="mailto:info@auto-alexander.nl">
                        <Field3>
                            <RiMailLine />
                            <p>info@auto-alexander.nl</p>
                        </Field3>
                    </a>
                    <a href="tel:0031617231585">
                        <Field3>
                            <RiPhoneLine />
                            <p>06 17 23 15 85 (PL)</p>
                        </Field3>
                    </a>
                    <a href="tel:0031659738276">
                        <Field3>
                            <RiPhoneLine />
                            <p>06 59 73 82 76 (NL)</p>
                        </Field3>
                    </a>
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Calendar from "./calendar";
import Details from "./details";
import Person from "./person";
import { respond, SectionNarrow, Heading1, ButtonFull } from "../../../styles";

export default function FormComponent() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [job, setJob] = useState("Overig");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [warning, setWarning] = useState("");

    function afspreken(e) {
        e.preventDefault();
        const data = {
            date,
            time,
            job,
            name,
            email,
        };
        if (!date) {
            return setWarning("Kies een datum astublieft");
        }
        if (!time) {
            return setWarning("Kies een tijd astublieft");
        }
        if (!isChecked) {
            return setWarning("U moet mee eens gaan met Algemene voorwaarden.");
        }
        console.log(data);
    }

    return (
        <SectionNarrow>
            <Layout>
                <Form onSubmit={afspreken}>
                    <Calendar date={date} setDate={setDate} />
                    <Details
                        time={time}
                        setTime={setTime}
                        job={job}
                        setJob={setJob}
                    />
                    <Person
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        setIsChecked={setIsChecked}
                        warning={warning}
                    ></Person>
                </Form>
            </Layout>
            <Info>
                <Heading1>
                    Je kunt ons ook gerust bellen of een e-mail sturen
                </Heading1>
                <Link to="/contact">
                    <ButtonFull>Contact</ButtonFull>
                </Link>
            </Info>
        </SectionNarrow>
    );
}

const Layout = styled.div`
    padding: 2.7rem;
    background-image: linear-gradient(
        to bottom,
        rgba(40, 75, 99, 0.7),
        ${(p) => p.theme.primary} 50%
    );
    border-radius: 5px;
    transform: translateY(-40vh);
    min-height: 40rem;
    box-shadow: 0 5rem 5rem ${(p) => p.theme.primary};

    ${() => respond("xl", "")};
`;
const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.9rem;

    ${() => respond("l", "grid-template-columns: repeat( 3, 1fr);")}
`;
const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-10vh);

    h1 {
        text-align: center;
        margin-bottom: 4.7rem;
    }
`;

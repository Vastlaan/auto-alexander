import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    respond,
    Section,
    Content,
    ButtonFull,
    ButtonEmpty,
    Para4,
    Heading7,
} from "../../../styles";

export default function Section4() {
    return (
        <Section style={{ backgroundColor: "#284B63" }}>
            <Content>
                <Bulk>
                    <Info>
                        <Heading7>auto laten spuiten in Tilburg?</Heading7>
                        <Para4 color="white">
                            Duurzame herstelling van uw autoschade. Met
                            ecologische materialen en lak op basis van water. En
                            door alle restmaterialen en afval strikt te
                            sorteren. Zo gaat u de baan op met een duurzaam
                            herstelde wagen.
                        </Para4>
                    </Info>
                    <Buttons>
                        <Link to="/afspraak">
                            <ButtonFull color="white" color2="#284B63">
                                Afspraak
                            </ButtonFull>
                        </Link>
                        <Link to="/contact">
                            <ButtonEmpty color="white" color2="#284B63">
                                Contact
                            </ButtonEmpty>
                        </Link>
                    </Buttons>
                </Bulk>
            </Content>
        </Section>
    );
}

const Bulk = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;
const Info = styled.div`
    grid-column: 1/4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4.7rem;

    h2 {
        margin-bottom: 2.7rem;
    }

    ${() => respond("xl", "grid-column: 1/3;")}
`;
const Buttons = styled.div`
    grid-column: 1/4;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 4.7rem 4.7rem;

    ${() =>
        respond(
            "xl",
            "grid-column: 3/4; justify-content: center; flex-direction: column;"
        )}

    button {
        margin: 1.3rem 0;
    }
`;

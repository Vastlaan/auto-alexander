import React from "react";
import styled from "styled-components";
import { respond, Para1 } from "../../styles";
import { RiStarFill, RiUserHeartFill } from "react-icons/ri";

export default function card({ item }) {
    return (
        <Card key={`reviews-${item.id}`}>
            <Icons>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
            </Icons>
            <Para1>{item.text}</Para1>
            <Person>
                <User>
                    <RiUserHeartFill />
                </User>
                <Data>
                    <h6>{item.name}</h6>
                    <p>{item.brand}</p>
                </Data>
            </Person>
        </Card>
    );
}

const Card = styled.div`
    min-width: 35rem;
    margin: 2.7rem;
    background-color: ${(p) => p.theme.white};
    padding: 4.7rem 2.7rem;
    border-radius: 3px;
    display: flex;
    flex-direction: column;

    p {
        flex: 1;
    }
`;
const Icons = styled.div`
    display: flex;
    margin-bottom: 2.7rem;

    svg {
        margin-right: 1.1rem;
        color: gold;
        font-size: 2.7rem;
    }
`;
const Person = styled.div`
    margin-top: 4.7rem;
    display: grid;
    grid-template-columns: 10rem 1fr;
`;
const User = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 6.7rem;
    width: 6.7rem;
    background-color: ${(p) => p.theme.silver};

    svg {
        font-size: 3.3rem;
        color: ${(p) => p.theme.black};
    }
`;

const Data = styled.div`
    margin-top: 1.3rem;

    h6 {
        font-size: 1.5rem;
        color: ${(p) => p.theme.black};
    }
    p {
        font-size: 1.1rem;
        color: ${(p) => p.theme.grey};
        letter-spacing: 2px;
    }
`;

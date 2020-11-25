import React from "react";
import styled from "styled-components";
import { respond, FormColumn } from "../../../styles";

export default function DetailsComponent({ time, setTime, job, setJob }) {
    const times = [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
    ];
    const jobs = [
        "Auto (onderdeel) spuiten",
        "Schade spuiten",
        "Autoruitschade",
        "Carroserriewerk",
        "Overig",
    ];

    return (
        <FormColumn>
            <h3>02. Bepaal de tijd</h3>
            <Times>
                {times.map((t, i) => {
                    return (
                        <Time
                            type="button"
                            onClick={() => setTime(t)}
                            key={`time-${i}`}
                            isSelected={time === t}
                        >
                            {t}
                        </Time>
                    );
                })}
            </Times>
            <h3>03. Kies werkzaamheden</h3>
            <Jobs>
                {jobs.map((j, i) => {

                    return (
                        <Job key={`job-${i}`}>
                            <input
                                id={j}
                                type="radio"
                                onClick={() => setJob(j)}
                                name='jobs'
                            />
                            <label htmlFor={j}>{j}</label>
                        </Job>
                    );
                })}
            </Jobs>
        </FormColumn>
    );
}
const Times = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 2.7rem 0 4.7rem 0;
`;

const Time = styled.button`
    padding: 0.1rem 0.4rem;
    background-color: ${(p) => (p.isSelected ? p.theme.white : "transparent")};
    border: 1px solid ${(p) => p.theme.white};
    border-radius: 1rem;
    color: ${(p) => (p.isSelected ? p.theme.primary : p.theme.white)};
    margin-right: 1.3rem;
    margin-bottom: 1.3rem;
    transition: all 0.3s;

    &:hover,
    :active,
    :focus {
        outline: none;
        cursor: pointer;
        box-shadow: 0 0 1rem white;
    }
`;
const Jobs = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2.7rem 0 1.9rem 0;
`;
const Job = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items: center;

    ${()=>respond('l','margin: .3rem 0;')}
    

    input {
        margin-right: 1.9rem;
        cursor: pointer;
        
    }
    label {
        font-weight: 300;
        font-size: 1.9rem;
        color: ${(p) => p.theme.white};
        cursor: pointer;
    }
`;

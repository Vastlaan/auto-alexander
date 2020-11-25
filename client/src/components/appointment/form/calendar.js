import React from "react";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import dateFormat from "dateformat";
import "react-day-picker/lib/style.css";
import { FormColumn } from "../../../styles";

export default function CalendarComponent({ date, setDate }) {
    function handleDayClick(day, modifiers = {}) {
        if (modifiers.disabled) {
            return;
        }
        setDate(dateFormat(day, "dd.mm.yyyy"));
    }
    const modifiers = {
        disabled: [{ daysOfWeek: [6, 0] }, { before: new Date() }],
    };
    const modifiersStyles = {
        disabled: {
            color: "grey",
            backgroundColor: "transparent",
        },
        day: {
            color: "white",
        },
    };

    return (
        <FormColumn>
            <h3>01. Kies datum</h3>
            <Wrapper>
                <DayPicker
                    onDayClick={handleDayClick}
                    firstDayOfWeek={1}
                    modifiers={modifiers}
                    modifiersStyles={modifiersStyles}
                    selectedDays={new Date(date)}
                />
            </Wrapper>
            <Output>Je bent gekozen: {date && <span> {date}</span>}</Output>
        </FormColumn>
    );
}

const Wrapper = styled.div`
    div {
        font-size: 1.9rem;
        color: white;
    }
`;
const Output = styled.div`
    font-size: 1.9rem;
    color: ${(p) => p.theme.white};

    span {
        color: ${(p) => p.theme.primary};
        padding: 0.3rem 1.3rem;
        box-shadow: 0 0 2rem ${(p) => p.theme.white};
        border-radius: 1rem;
        background-color: ${(p) => p.theme.white};
    }
`;

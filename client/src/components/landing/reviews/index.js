import React, { useRef } from "react";
import styled from "styled-components";
import Card from "../../utils/card";
import { respond, Heading22, Para1 } from "../../../styles";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const data = [
    {
        id: 1,
        type: "pl",
        text:
            "Doskonała atmosfera i profesionalna obsługa. Jestem Bardzo zadowolona z rezultatu",
        name: "Jadwiga Wiszczok",
        brand: "Nissan Micra",
    },
    {
        id: 2,
        type: "pl",
        text:
            "Doskonała atmosfera i profesionalna obsługa. Jestem Bardzo zadowolona z rezultatu",
        name: "Grzegorz Swoboda",
        brand: "Seat Leon",
    },
    {
        id: 3,
        type: "pl",
        text:
            "Praca wykonana szybko i solidnie. Nie ma nawet najmnieszego śladu po stłuczce. Polecam zdecydowanie!",
        name: "Marcin Daroś",
        brand: "Audi A6",
    },
    {
        id: 4,
        type: "pl",
        text:
            "Praca wykonana szybko i solidnie. Nie ma nawet najmnieszego śladu po stłuczce. Polecam zdecydowanie!",
        name: "Marcin Daroś",
        brand: "Audi A6",
    },
    {
        id: 5,
        type: "pl",
        text:
            "Praca wykonana szybko i solidnie. Nie ma nawet najmnieszego śladu po stłuczce. Polecam zdecydowanie!",
        name: "Marcin Daroś",
        brand: "Audi A6",
    },
];

export default function Reviews() {
    function scrollRight() {
        carousel.current.scrollBy({
            top: 0,
            left: 300,
            behavior: "smooth",
        });
    }
    function scrollLeft() {
        carousel.current.scrollBy({
            top: 0,
            left: "-300",
            behavior: "smooth",
        });
    }

    const carousel = useRef();

    return (
        <Section>
            <Heading>
                <Heading22>Wat mensen zeggen over ons?</Heading22>
            </Heading>
            <Carousel ref={carousel}>
                {data.map((item, i) => {
                    return <Card item={item} key={`reviews-${item.id}`} />;
                })}
            </Carousel>
            <Buttons>
                <button onClick={scrollLeft}>
                    <RiArrowLeftLine />
                </button>
                <button onClick={scrollRight}>
                    <RiArrowRightLine />
                </button>
            </Buttons>
        </Section>
    );
}

const Section = styled.section`
    padding-left: 0;
    padding-bottom: 4.7rem;
    width: 100%;
    background-color: ${(p) => p.theme.primary};
`;

const Heading = styled.div`
    display: flex;
    justify-content: center;
    padding: 6.8rem 0 2.7rem 0;
`;
const Carousel = styled.div`
    display: flex;
    overflow-x: scroll;
    padding-left: calc((100vw - 1366px) / 2);
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2.7rem;

    button {
        margin-right: 2.7rem;
        border-radius: 3px;
        border: 2px solid ${(p) => p.theme.white};
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;

        &:hover {
            background-color: ${(p) => p.theme.white};

            svg {
                color: ${(p) => p.theme.black};
            }
        }

        &:active,
        :focus {
            outline: none;
        }

        svg {
            color: ${(p) => p.theme.white};
            font-size: 4.7rem;
            cursor: pointer;
        }
    }
`;

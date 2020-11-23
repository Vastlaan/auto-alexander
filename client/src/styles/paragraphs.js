import styled from "styled-components";
import { fonts } from "./fonts.js";
import { respond } from "./respond";

export const Para1 = styled.p`
    font-size: 2.1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(p) => p.theme.greyDark};
    max-width: 40rem;

    ${() => respond("l", "line-height: 1.6;  max-width: 55rem;")}
`;

export const Para2 = styled.p`
    font-size: 2.1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(p) => p.theme.greyDark};
    max-width: 40rem;
    text-align: center;

    ${() => respond("l", "line-height: 1.6;  max-width: 55rem;")}
`;

export const Para3 = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(p) => p.theme.primary};
    max-width: 40rem;
    text-align: center;
    font-style: italic;

    ${() => respond("l", "line-height: 1.6;    text-align: left;")}
`;
export const Para4 = styled.p`
    font-size: 2.1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(p) => p.theme.silver};
    max-width: 40rem;
    text-align: center;

    ${() => respond("l", "line-height: 1.6;  max-width: 55rem;")}
`;

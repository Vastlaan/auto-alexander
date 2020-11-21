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

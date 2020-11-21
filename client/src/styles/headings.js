import styled from "styled-components";
import { fonts } from "./fonts.js";
import { respond } from "./respond";

export const Heading1 = styled.h1`
    color: ${(p) => p.theme.black};
    font-size: 5.7rem;
    line-height: 1;
    letter-spacing: 0;
    font-weight: 900;
    max-width: 55rem;

    ${() => respond("l", "font-size: 5.7rem;")}

    strong {
        font-weight: 900;
        line-height: 1;
    }

    span {
        color: ${(p) => p.theme.primary};
        line-height: 1;
    }
`;
export const Heading2 = styled.h2`
    color: ${(p) => p.theme.black};
    font-size: 3.3rem;
    line-height: 1;
    letter-spacing: 0;
    font-weight: 900;
    max-width: 45rem;
    text-align: center;

    ${() => respond("l", "font-size: 4.7rem;")}

    strong {
        font-weight: 900;
        line-height: 1.3;
    }

    span {
        color: ${(p) => p.theme.primary};
        line-height: 1.3;
    }
`;

export const Heading3 = styled.h3`
    color: ${(p) => p.theme.black};
    font-size: 2.7rem;
    line-height: 1;
    letter-spacing: 0;
    font-weight: 900;
    max-width: 45rem;
    text-align: center;
    line-height: 1.3;
    text-transform: uppercase;

    ${() => respond("l", "font-size: 2.7rem;")}
`;

export const Heading22 = styled.h2`
    color: ${(p) => p.theme.white};
    font-size: 4.7rem;
    line-height: 1;
    letter-spacing: 0;
    font-weight: 800;
    max-width: 40rem;
    text-align: center;
    line-height: 1.3;

    ${() => respond("l", "font-size: 4.7rem;")}
`;

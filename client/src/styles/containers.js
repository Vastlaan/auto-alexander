import styled from "styled-components";
import { respond } from "./respond";

export const Header = styled.header`
    padding-top: 5rem; //margin for navbar
    min-height: 70vh;
    background-image: linear-gradient(
            to right,
            ${(p) => p.theme.white} 50%,
            rgba(255, 255, 255, 0.1)
        ),
        linear-gradient(to top, transparent 80%, rgba(255, 255, 255, 1)),
        url(${(p) => p.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const Content = styled.div`
    max-width: 1366px;
    height: 100%;
    margin: 0 auto;
`;

export const SectionNarrow = styled.section`
    max-width: 1366px;
    margin: 0 auto;
`;

export const Section = styled.section`
    width: 100%;
`;

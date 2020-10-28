import React from "react";
import styled from "styled-components";
import { respond } from "../../styles";

export default function ({ children }) {
    return <Layout>{children}</Layout>;
}

const Layout = styled.main`
    width: 100%;
    ${() => respond("xl", "width: 1366px; margin: 0 auto;")}
`;

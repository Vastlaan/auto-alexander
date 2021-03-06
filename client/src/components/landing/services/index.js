import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    respond,
    SectionNarrow,
    Heading2,
    Heading3,
    Para5,
    ButtonFull,
} from "../../../styles";
import Icon1 from "../../../img/auto-alexander-icon-1.png";
import Icon2 from "../../../img/auto-alexander-icon-2.png";
import Icon3 from "../../../img/auto-alexander-icon-3.png";

export default function Services() {
    return (
        <SectionNarrow>
            <Layout>
                <Heading>
                    <Heading2>
                        {"Wat kunnen wij voor u betekenen?"
                            .split(" ")
                            .map((w, i, a) =>
                                i !== a.length - 1 ? (
                                    <strong key={i * 2.17}>{w} </strong>
                                ) : (
                                    <span key={i * 2.17}>{w} </span>
                                )
                            )}
                    </Heading2>
                </Heading>
                <Card1>
                    <Heading3>Auto Spuiten</Heading3>
                    <Icon>
                        <img src={Icon1} alt="carroseriewerk icon" />
                    </Icon>
                    <Para5>
                        Heeft u lakschade opgelopen, of wilt u gewoon een ander
                        kleurtje? Dan kunt u bij ons terecht. Van oosprong zijn
                        wij een schadeherstel bedrijf maar wij zijn ook
                        professioneel en gespecialiseerd in het auto spuiten.
                    </Para5>
                    <Link to="/diensten">
                        <ButtonFull>Lees meer</ButtonFull>
                    </Link>
                </Card1>
                <Card2>
                    <Heading3>Plaatwerk</Heading3>
                    <Icon>
                        <img src={Icon2} alt="carroseriewerk icon" />
                    </Icon>
                    <Para5>
                        Onze team die al meer dan 20 jaar in het vak zit is zeer
                        te vertrouwen. Wij maken kunststofreparaties, onderhoud
                        en tuning. Samen met de spuiterij is dit de perfecte
                        combinatie om uw auto er weer stel als nieuw uit te
                        laten zien.
                    </Para5>
                    <Link to="/diensten">
                        <ButtonFull>Lees meer</ButtonFull>
                    </Link>
                </Card2>
                <Card3>
                    <Heading3>Pechhulp</Heading3>
                    <Icon>
                        <img src={Icon3} alt="carroseriewerk icon" />
                    </Icon>
                    <Para5>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.Vokalia and Consonantia.
                    </Para5>
                    <a href="tel:0031659738276">
                        <ButtonFull>Bel: 06 59 73 82 76</ButtonFull>
                    </a>
                </Card3>
            </Layout>
        </SectionNarrow>
    );
}

const Layout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4.7rem;
    padding: 1.9rem;

    ${() => respond("s", "padding: 2.7rem;")}

    ${() => respond("xl", "padding: 4.7rem;")}
`;
const Heading = styled.div`
    grid-column: 1/-1;
    margin-top: 4.7rem;
    display: flex;
    justify-content: center;
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 4.7rem 2.7rem;
    max-width: 45rem;
    justify-self: center;
    border-radius: 5px;
    box-shadow: 0 1rem 1rem rgba(40, 75, 99, 0.4);

    p {
        flex: 1;
    }

    a {
        margin-top: 4.7rem;
    }
`;

const Card1 = styled(Card)`
    grid-column: 1/-1;
    ${() => respond("m", "grid-column: 1/3;")}
    ${() => respond("xl", "grid-column: 1/2;")}
`;
const Card2 = styled(Card)`
    grid-column: 1/-1;
    ${() => respond("m", "grid-column: 2/4;")}
    ${() => respond("xl", "grid-column: 2/3;")}
`;
const Card3 = styled(Card)`
    grid-column: 1/-1;
    ${() => respond("m", "grid-column: 1/3;")}
    ${() => respond("xl", "grid-column: 3/4;")}
`;
const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 10rem;
        ${() => respond("xl", "width: 15rem;")}
    }
`;

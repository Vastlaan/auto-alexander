import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    respond,
    SectionNarrow,
    Heading4,
    Heading5,
    Para1,
    Para3,
    ButtonFull,
} from "../../../styles";

export default function Diensten() {
    return (
        <SectionNarrow>
            <Layout>
                <Info>
                    <Heading5>Onze diensten</Heading5>
                    <Para1>
                        Wil jij je auto of een onderdeel opnieuw laten spuiten?
                        Welk merk of model je ook hebt, bij Auto Alexander ben
                        je altijd aan het juiste adres.
                    </Para1>
                    <Para1>
                        Is de lak van je auto aangetast door weersinvloeden
                        (dof), vervelende krassen, of misschien wil je wel een
                        hele andere kleur op je auto? Bij Auto Alexander ben je
                        aan het juiste adres voor het aanbrengen van een nieuwe
                        laklaag op je auto.
                    </Para1>
                    <Para1>
                        Het is ook mogelijk om je carrosserie, velgen of
                        koplampen te voorzien van een nieuwe beschermlaag.
                    </Para1>
                    <Para1>
                        Maak nu gemakkelijk en snel online een afspraak.
                    </Para1>
                    <Link to="/afspraak">
                        <ButtonFull>Afspraak</ButtonFull>
                    </Link>
                </Info>
                <Grid>
                    <Card>
                        <Heading4>Schade spuiten</Heading4>
                        <Para1>
                            Heb je schade aan je voertuig? Dat is voor ons geen
                            probleem. Wij vervangen of repareren de beschadigde
                            onderdelen. Als de laklaag is aangetast, spuiten wij
                            dit opnieuw. Kom langs bij een van onze vestigingen.
                            Wij helpen je graag.
                        </Para1>
                        <Para3>prijs vanaf € 150</Para3>
                    </Card>
                    <Card>
                        <Heading4>Auto spuiten</Heading4>
                        <Para1>
                            Een klein ongelukje kan de laklaag van je auto
                            beschadigen. Deze krassen en deuken tasten de
                            beschermlaag aan. Hierdoor kunnen onderdelen
                            beginnen te roesten. Wij spuiten het beschadigde
                            onderdeel van je auto. Met onze geavanceerde
                            meetapparatuur maken we de originele kleur perfect
                            na.
                        </Para1>
                        <Para3>prijs vanaf € 250</Para3>
                    </Card>
                    <Card>
                        <Heading4>Autoruitschade</Heading4>
                        <Para1>
                            Als de beschadiging aan je autoruit te groot is, kan
                            de stevigheid van het glas niet meer gegarandeerd
                            worden. Daarom moet deze worden vervangen. Wij
                            leveren ruiten voor alle merken en modellen
                            personenauto’s tot 3500kg.
                        </Para1>
                        <Para3>prijs vanaf € 100</Para3>
                    </Card>
                    <Card>
                        <Heading4>Plaatwerk</Heading4>
                        <Para1>
                            Van een minuscule kras tot een fel gedeukte wagen.
                            Bij Auto Alexander kunt u terecht met kleine én
                            grote schadegevallen. Uw lampen of velgen vervangen,
                            roest verwijderen of hagelschade herstellen.
                        </Para1>
                        <Para3>prijs vanaf € 250</Para3>
                    </Card>
                </Grid>
            </Layout>
        </SectionNarrow>
    );
}

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4.7rem;
    padding: 4.7rem 1.9rem;

    ${() => respond("s", "padding: 4.7rem  2.7rem;")}

    ${() => respond("l", "padding: 4.7rem;")}

    ${() =>
        respond(
            "xl",
            `
              grid-template-columns: repeat(3, 1fr);
            `
        )}
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: 1/-1;

    ${() =>
        respond(
            "xl",
            `
              grid-column: 1/2;
              align-items: flex-start;
            `
        )}

    h1 {
        margin: 2.7rem 0;
    }

    p {
        text-align: center;
        margin-bottom: 2.7rem;

        ${() => respond("xl", "text-align: left;")}
    }
`;

const Grid = styled.div`
    margin-top: 2.7rem;
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2.7rem;

    ${() => respond("xl", "grid-template-columns: 1fr 1fr; grid-column: 2/-1;")}
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${() => respond("xl", "align-items: flex-start;")}

    h3 {
        margin-bottom: 2.7rem;
        text-align: center;

        ${() => respond("xl", "text-align: left;")}
    }
    p {
        margin-bottom: 2.7rem;
        text-align: center;

        ${() => respond("xl", "text-align: left;")}
    }
`;

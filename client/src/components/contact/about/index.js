import React from "react";
import styled from "styled-components";
import { SectionNarrow, Heading4, Para1, respond } from "../../../styles";
import { BsGem, BsClockHistory, BsGeoAlt } from "react-icons/bs";

export default function About() {
    return (
        <SectionNarrow>
            <Layout>
                <Headline>
                    <BsGem />
                    <Heading4>Het Bedrijf</Heading4>
                </Headline>
                <Article>
                    <Para1>
                        Met meer dan 10 jaar ervaring en de nieuwste technieken
                        is Auto Alexander het carrosserieherstellingsbedrijf
                        voor uw auto.
                    </Para1>
                    <Para1>
                        We pakken schade aan uw auto doeltreffend en duurzaam
                        aan. Onze missie? U snel weer de baan op sturen met een
                        auto die als nieuw is.
                    </Para1>
                </Article>
                <Article>
                    <Holder>
                        <Headline>
                            <BsClockHistory />
                            <Heading4>Openingstijden</Heading4>
                        </Headline>
                        <Table>
                            <div>
                                <p>Maandag</p>
                                <p>08:00 - 16:00</p>
                            </div>
                            <div>
                                <p>Dinsdag</p>
                                <p>08:00 - 16:00</p>
                            </div>
                            <div>
                                <p>Woensdag</p>
                                <p>08:00 - 16:00</p>
                            </div>
                            <div>
                                <p>Donderdag</p>
                                <p>08:00 - 16:00</p>
                            </div>
                            <div>
                                <p>Vrijdag</p>
                                <p>08:00 - 16:00</p>
                            </div>
                            <div>
                                <p>Zaterdag</p>
                                <p>gesloten</p>
                            </div>
                            <div>
                                <p>Zondag</p>
                                <p>gesloten</p>
                            </div>
                        </Table>
                    </Holder>
                    <Holder>
                        <Headline>
                            <BsGeoAlt />
                            <Heading4>Route</Heading4>
                        </Headline>
                        <Map>
                            <iframe
                                title="route-map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.698736865148!2d5.004415215773087!3d51.59208457964907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6963a1ac38025%3A0xd07dc3852710ccee!2sHerastraat%2043%2C%205047%20TX%20Tilburg!5e0!3m2!1sen!2snl!4v1606053094685!5m2!1sen!2snl"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </Map>
                    </Holder>
                </Article>
            </Layout>
        </SectionNarrow>
    );
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4.7rem 2.7rem;
    margin-bottom: 4.7rem;
`;
const Headline = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4.7rem;

    ${() => respond("l", "justify-content: flex-start;")}

    svg {
        font-size: 2.7rem;
        color: ${(p) => p.theme.primary};
        margin-right: 2.7rem;
    }
`;
const Article = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1.9rem;
    justify-items: start;

    ${() =>
        respond("l", "grid-template-columns: 1fr 1fr; justify-items: start;")}

    p {
        margin-bottom: 2.7rem;
    }
`;
const Holder = styled.div`
    margin-top: 6.8rem;
`;
const Table = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 35rem;

    div {
        display: flex;
        justify-content: space-between;

        p {
            font-size: 1.9rem;
            color: ${(p) => p.theme.greyDark};
        }
    }
`;

const Map = styled.div`
    iframe {
        width: 280px;
        height: 250px;

        ${() =>
            respond(
                "s",
                `width: 500px;
                height: 350px;`
            )}

        ${() =>
            respond(
                "l",
                `width: 650px;
                height: 400px;`
            )}
    }
`;

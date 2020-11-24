import React from "react";
import styled from "styled-components";
import { respond, SectionNarrow, Heading1, Para1 } from "../../styles";
import Img1 from "../../img/galery-header-1.jpg";
import Img2 from "../../img/galery-header-2.jpg";
import Img3 from "../../img/galery-header-3.jpg";

export default function Header3() {
    return (
        <SectionNarrow>
            <Container>
                <Content>
                    <Heading1>
                        {"Werken met passie voor de fijnste resultaat"
                            .split(" ")
                            .map((w, i, a) =>
                                i !== a.length - 1 ? (
                                    <strong key={i * 2.17}>{w} </strong>
                                ) : (
                                    <span key={i * 2.17}>{w} </span>
                                )
                            )}
                    </Heading1>
                    <Para1>
                        Vakkundig een nieuwe laklaag laten spuiten op je
                        auto.Wij helpen je graag bij het kiezen van een nieuwe
                        lakkleur.
                    </Para1>
                </Content>
                <Pictures>
                    <Image1>
                        <ImageFrame>
                            <img src={Img1} alt="auto" />
                        </ImageFrame>
                    </Image1>
                    <Image2>
                        <ImageFrame>
                            <img src={Img2} alt="auto" />
                        </ImageFrame>
                    </Image2>
                    <Image3>
                        <ImageFrame>
                            <img src={Img3} alt="auto" />
                        </ImageFrame>
                    </Image3>
                </Pictures>
            </Container>
        </SectionNarrow>
    );
}

const Container = styled.div`
    margin-top: 4.7rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 2.3rem;
    grid-row-gap: 8.2rem;
    padding: 8.2rem 1.9rem;
    overflow: hidden;

    ${() => respond("l", "padding: 10rem 2.7rem; overflow: visible; ")}
    ${() => respond("xxl", "padding: 13.6rem 2.7rem; ")}
`;
const Content = styled.div`
    grid-column: 1/-1;
    ${() => respond("l", "grid-column: 1/4;")}

    h1 {
        margin: 4.7rem 0;
    }
    p {
    }
`;

const Pictures = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column: 1/-1;
    position: relative;

    ${() =>
        respond(
            "l",
            "grid-column: 4/-1; grid-template-columns: repeat(9,1fr);"
        )}
`;
const Image = styled.div`
    width: 20rem;
    height: 30rem;
    position: relative;
    box-shadow: 2rem 2rem 2rem rgba(40, 75, 99, 0.6);
`;
const ImageFrame = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;
    z-index: 2;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${(p) => p.theme.secondary2};
        opacity: 0.3;
        z-index: 6;
    }

    img {
        object-fit: cover;
        object-position: center;

        min-height: 100%;
        width: 100%;
    }
`;

const Image1 = styled(Image)`
    grid-column: 1/4;
    grid-row: 3/6;
    z-index: 5;
    ${() => respond("l", "grid-column: 2/5;")}
`;
const Image2 = styled(Image)`
    grid-column: 3/8;
    grid-row: 1/4;
    z-index: 4;
    ${() => respond("l", "grid-column:  4/8;")}
`;
const Image3 = styled(Image)`
    grid-column: 5/-1;
    grid-row: 2/5;
    z-index: 3;
    ${() => respond("l", "grid-column:  6/-1;")}
`;

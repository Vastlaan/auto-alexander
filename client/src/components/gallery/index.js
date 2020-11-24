import React from "react";
import Header from "./header";
import Display from "./display";
import Img1 from "../../img/gallery-1.jpg";
import Img2 from "../../img/gallery-2.jpg";
import Img3 from "../../img/gallery-3.jpg";
import Img4 from "../../img/gallery-4.jpg";
import Img5 from "../../img/gallery-5.jpg";
import Img6 from "../../img/gallery-6.jpg";
import Img7 from "../../img/gallery-7.jpg";
import Img8 from "../../img/gallery-8.jpg";

export default function Gallery() {
    return (
        <>
            <Header />
            <Display
                headline="foto galerij"
                p1="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p2="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p3="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p4="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                imgl1={Img1}
                imgl2={Img2}
                imgl3={Img3}
                imgl4={Img4}
                imgl5={Img5}
                imgsm1={Img6}
                imgsm2={Img7}
                imgsm3={Img8}
            />
            <Display
                headline="carrosseriewerk"
                p1="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p2="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p3="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p4="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                imgl1={Img1}
                imgl2={Img2}
                imgl3={Img3}
                imgl4={Img4}
                imgl5={Img5}
                imgsm1={Img6}
                imgsm2={Img7}
                imgsm3={Img8}
            />
        </>
    );
}

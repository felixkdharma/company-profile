import { Flex, Image } from "@chakra-ui/react"
import "../styles/global.css"
import bca from "../assets/bca.png"
import lotte from "../assets/lotte.png"
import nestle from "../assets/nestle.jpg"
import ot from "../assets/ot.png"
import bumn from "../assets/bumn.png"
import channel from "../assets/channel.png"
import tokopedia from "../assets/tokopedia.jpg"
import CardPartOfUs from "./CardPartOfUs.jsx"
import wika from "../assets/wika.png"
import { source } from "framer-motion/client"

function PartOfUs() {

    return (
        <section className="section-wrapper">
            <div className="content-wrapper">
                <h1> Part of Us </h1>

                <CardPartOfUs
                    items={[
                        {
                            source: bca,
                            alt: "BCA Logo"
                        },
                        {
                            source: lotte,
                            alt: "Lotte Logo"
                        },
                        {
                            source: nestle,
                            alt: "Nestle Logo"
                        },
                        {
                            source: ot,
                            alt: "OT Logo"
                        },
                        {
                            source: bumn,
                            alt: "BUMN Logo"
                        },
                        {
                            source: channel,
                            alt: "Channel Logo"
                        },
                        {
                            source : tokopedia,
                            alt: "Tokopedia Logo"
                        },
                        {
                            source: wika,
                            alt: "WIKA Logo"
                        }
                    ]} />
            </div>

        </section>
    )
}

export default PartOfUs;
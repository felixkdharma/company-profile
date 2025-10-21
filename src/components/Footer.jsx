import { Flex, Box, Grid } from "@chakra-ui/react"
import { MdEmail, MdPhone } from "react-icons/md";
import CardFooter from "./CardFooter.jsx";
import "../styles/global.css"

function Footer() {

    return (
        <section className="section-wrapper">
            <div className="content-wrapper">
                <Grid
                    templateColumns="repeat(3, 1fr)" gap="5" pt="5"
                    templateAreas={`"location inquiry social"`}>
                    <Box gridArea="location">
                        <h2> Location </h2>
                        <Box as="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.636547142143!2d106.49236077603709!3d-6.179379960551683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e420050d1acc301%3A0xad20da27ce0c4264!2sCRM%20Suvarna%20Sutera!5e0!3m2!1sen!2sid!4v1761006595627!5m2!1sen!2sid"
                            width="500px"
                            height="400px"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            margin="0 auto">
                        </Box>
                        <p> RFCV+6XV, Wanakerta, Sindang Jaya, Tangerang Regency, Banten 15560 </p>
                    </Box>

                    <Box gridArea="inquiry">

                        <h2> Inquiry </h2>
                        <CardFooter
                            items={[
                                {
                                    description: "kurniadharma@gmail.com",
                                    source: MdEmail
                                },
                                {
                                    description: "+628123456789",
                                    source: MdPhone
                                }
                            ]}
                        />
                    </Box>

                    <Box>
                        <h2> Social Media </h2>

                    </Box>

                </Grid>
            </div>
        </section>
    )
}

export default Footer;
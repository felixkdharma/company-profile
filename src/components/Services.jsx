import { Flex } from "@chakra-ui/react"
import "../styles/global.css";
import CardServices from "./CardServices.jsx";
import solution from "../assets/solution.jpg"
import cloud from "../assets/cloud.jpg";
import employee from "../assets/employee.jpg"
function Services() {

    const wrapperCard = {
        alignItem: "center",
        justifyContent: "center",
        paddingTop: "50px",
        gap: "50px"
    };

    return (
        <section id="services">
            <h1> Our Services </h1>
            <Flex style={wrapperCard}>
                <CardServices
                    title="IT Solution"
                    source={solution}
                    description="We Provide Solution to solve Your Bussiness Needed"
                    footer="Browse for more" />
                <CardServices
                    title="Cloud Storage"
                    source={cloud}
                    description="Connect your data with any platforms with Cloud Storage"
                    footer="Browse for more" />
                <CardServices
                    title="Outsourcing"
                    source={employee}
                    description="We can give you man power with the best on their expertise"
                    footer="" />
            </Flex>

        </section>
    )
}

export default Services;
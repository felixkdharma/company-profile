import "../styles/global.css"
import "../styles/home.css"
import { useEffect, useState } from "react"
import { Flex, Box, HStack, Link, Button } from "@chakra-ui/react"
import companyLogo from "../assets/company-logo.png"

function Navbar() {

    const [showNavBar, setShowNavBar] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 700) {
                setShowNavBar(true)
            } else {
                setShowNavBar(false)
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return (<Flex
        justify="space-between"
        align="center"
        w={"100%"}
        bgColor={"#535353"}
        h={"auto"}
        position={"fixed"}
        top={0}
        left={0}
        transition={"transform 0.3s ease-in-out"}
        transform={showNavBar ? "translateY(0)" : "translateY(-100%)"}
        zIndex={100}>
        <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyItems={"center"}>

            <img
                src={companyLogo}
                style={{
                    height: 100,
                    width: 100
                }} />

            <p style={{ color: "white" }}> PT Kurnia Dharma </p>

        </Box>
        <HStack spacing={4}>
            <Link color="white">Home</Link>
            <Link color="white">About</Link>
            <Link color="white">Contact</Link>
        </HStack>
    </Flex>)
}

export default Navbar;
import "../styles/global.css"
import "../styles/home.css"
import { useEffect, useState } from "react"
import { Flex, Box, HStack, Link } from "@chakra-ui/react"
import companyLogo from "../assets/company-logo.png"

function Navbar() {

    const [showNavBar, setShowNavBar] = useState(false);
    const navbarStyle= {
        paddingRight: "20px"
    }
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowNavBar(true)
            } else {
                setShowNavBar(false)
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    const goToHome = () => {
        document.getElementById("home").scrollIntoView({
            behavior: 'smooth'
        });
    }

    const goToAboutUs = () => {
        document.getElementsByClassName("aboutus-section")[0].scrollIntoView({
            behavior: 'smooth'
        });
    }

    const goToServices = () => {
        document.getElementById("services").scrollIntoView({
            behavior: 'smooth'
        });
    }

    const goToContact = () => {
        document.getElementsByClassName("section-wrapper")[2].scrollIntoView({
            behavior: 'smooth'
        });
    }

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
        <HStack spacing={4} style={navbarStyle}>
            <Link color="white" onClick={goToHome}>Home</Link>
            <Link color="white" onClick={goToAboutUs}>About</Link>
            <Link color="white" onClick={goToServices}> Services</Link>
            <Link color="white" onClick={goToContact}>Contact</Link>
        </HStack>
    </Flex>)
}

export default Navbar;
import { Image, Flex, Box, useBreakpointValue } from "@chakra-ui/react"
import "../styles/global.css"
import "../styles/ceo.css"

function CardCeo(props) {

    const flexDirection = useBreakpointValue({base: "column", "2xl": "row"});

    const cardWrapper = {
        paddingTop: "100px",
        flexDirection: flexDirection,
        justifyContent: "center",
        alignItems: "center",
        gap: "150px"
    }

    const profileWrapper = {
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
    }
    return (
        <Flex style={cardWrapper}>
            {props.profiles.map((profile, index) => (
                <Flex style={profileWrapper}>
                    <Image
                        src={profile.src}
                        fit={"cover"}
                        boxSize={"220px"}
                        borderRadius={"full"}>
                    </Image>

                    <Box>
                        <h2> {profile.name} </h2>
                        <h2> as {profile.department}</h2>
                    </Box>
                </Flex>
            ))}
        </Flex>
    )
}

export default CardCeo;
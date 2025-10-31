import { Flex, Box, Center, useBreakpointValue } from "@chakra-ui/react";
import "../styles/global.css";

function CardAboutus(props) {

    const flexDirection = useBreakpointValue({ base: "column", "2xl": "row" });
    const overflowY = useBreakpointValue({ base: "auto", "2xl": "hidden" });
    const marginTop = useBreakpointValue({ base: "30px" });
    const maxH = useBreakpointValue({ base: "250px", "2xl": "auto" });
    const paddingLeft = useBreakpointValue({ "2xl": "35px" });
    const width = useBreakpointValue({ base: "350px", md: "500px", "2xl": "auto" });
    const alignItems = useBreakpointValue({base: "flex-start", md:"center", "2xl" : "flex-start"})

    const cardStyle = {
        flexDirection,
        justifyContent: "center",
        alignItems: alignItems,
        padding: "75px"
    }

    const imageStyle = {
        height: "500px",
        width: "500px",
        objectFit: "cover",
        borderRadius: "15px"
    }

    const textWrapper = {
        overflowY,
        marginTop,
        maxHeight: maxH
    }

    const paragraphStyle = {
        paddingLeft,
        width,
        textAlign: "left"
    }


    return (
        <Flex flexDirection={"column"}>
            {props.cards.map((card, index) => (
                <Flex style={cardStyle}>
                    <img
                        src={card.source}
                        style={imageStyle}
                    />

                    <Box style={textWrapper}>
                        <p style={paragraphStyle}> {card.desc} </p>

                    </Box>
                </Flex>

            ))}


        </Flex>
    )
}

export default CardAboutus;
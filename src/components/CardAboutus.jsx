import { Flex, Box, Center, useBreakpointValue } from "@chakra-ui/react";
import "../styles/global.css";

function CardAboutus(props) {

    const flexDirection = useBreakpointValue({base:"column", "2xl": "row"});
    const overflowY= useBreakpointValue({base: "auto"});
    const marginTop= useBreakpointValue({base: "30px"});
    const maxH= useBreakpointValue({base: "250px"});
    const paddingLeft= useBreakpointValue({"2xl": "35px"});
    const width= useBreakpointValue({base: "350px"});

    const cardStyle = {
        flexDirection,
        justifyContent: "center",
        alignItems: "flex-start",
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
        <Flex
            style={cardStyle}>

            <img
                src={props.source}
                style={imageStyle}
            />

            <Box style={textWrapper}>
                <p style={paragraphStyle}> {props.description} </p>

            </Box>

        </Flex>
    )
}

export default CardAboutus;
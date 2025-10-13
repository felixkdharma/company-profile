import { Flex, Box, Center } from "@chakra-ui/react";
import "../styles/global.css";

function CardAboutus(props) {

    const cardStyle = {
        flexDirection: "row",
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

    const paragraphStyle = {
        paddingLeft: "35px",
        textAlign: "left"

    }


    return (
        <Flex
            style={cardStyle}>

            <img
                src={props.source}
                style={imageStyle}
            />

            <p style={paragraphStyle}> {props.description} </p>
            
        </Flex>
    )
}

export default CardAboutus;
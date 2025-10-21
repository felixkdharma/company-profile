import { Flex, Box } from "@chakra-ui/react";
import "../styles/global.css"

function CardFooter(props) {

    const cardWrapper = {
        flexDirection: "coloumn",
        alignItems: "center",
        justifyContent: "center"
    }

    return (
        <Flex style={cardWrapper}>
            {props.items.map((item, index) => {
                const Icon = item.source;
                return (
                    <Flex flexDirection="column">
                        <Flex flexDirection="row">
                            <Icon size="30" />
                            <p style={{ paddingLeft: "10px" }}> {item.description} </p>
                        </Flex>
                    </Flex>
                )
            })}
        </Flex>
    )
}

export default CardFooter;
import { Card, Flex, Image, useBreakpointValue } from "@chakra-ui/react"
import "../styles/global.css";

function CardServices(props) {

    const cardWrapper =
    {
        flexDirection: useBreakpointValue({base: "column", "2xl": "row"}),
        alignItems: "center",
        gap: "40px"

    }
    return (
        <Flex
            style={cardWrapper}>
            {props.items.map((item, index) => (
                <Card.Root
                    maxW="sm"
                    overflow="hidden"
                    bg="#6C6C6C">
                    <Image
                        src={item.source}
                        alt="Solution"
                    />
                    <Card.Body gap="1">
                        <h2> {item.title} </h2>
                        <p> {item.description} </p>
                    </Card.Body>
                    <Card.Footer
                        justifyContent={"flex-end"}>
                        <span> {item.footer.length > 0 ? item.footer : <br/> } </span>
                    </Card.Footer>
                </Card.Root>

            ))}

            {/* <Image
                src={props.source}
                alt="Solution"
            />
            <Card.Body gap="1">
                <h2> {props.title} </h2>
                <p> {props.description} </p>
            </Card.Body>
            <Card.Footer
                justifyContent={"flex-end"}>
                <span> {props.footer} </span> */}
        </Flex>

    )
}

export default CardServices;
import { Card, Flex, Box, Image, HStack, Badge, Button } from "@chakra-ui/react"
import "../styles/global.css";


function CardTestmoni(props) {

    const cardWrapper = {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px"
    }

    const contentWrapper = {
        maxWidth: "1800px",
        flexWrap: "wrap",
        gap: "40px",
    }

    const cardStyle = {
        flexDirection: "row",
        overFlow: "hidden",
        maxw: "xl",
        bg: "#6c6c6c",
        margin: "0 auto" 
    }
    return (
        <Flex style={cardWrapper}>

            <Flex style={contentWrapper}>

                {props.testimoni.map((item, index) => (
                    <Card.Root  flexDirection="row" overflow="hidden" maxW="md" bg="#6C6C6C" margin="0 auto">
                        <Image
                            objectFit="cover"
                            maxW="200px"
                            src={item.source}
                            alt="profile"
                            borderRadius="full"
                            boxSize="170px"
                            padding="5"
                        />
                        <Box>
                            <Card.Body>
                                <Card.Title mb="2">
                                    <h2> {item.name} </h2>
                                </Card.Title>
                                <Card.Description pt="2" maxW={"250px"}>
                                    {item.description}
                                </Card.Description>

                            </Card.Body>
                            <Card.Footer justifyContent={"flex-end"}>
                                <p> ~ {item.position}</p>
                            </Card.Footer>
                        </Box>
                    </Card.Root>
                ))}


            </Flex>
        </Flex>
    )
}

export default CardTestmoni;
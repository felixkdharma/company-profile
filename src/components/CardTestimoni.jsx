import { Card, Flex, Box, Image, HStack, Badge, Button } from "@chakra-ui/react"
import "../styles/global.css";


function CardTestmoni(props) {

    const cardWrapper = {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "150px",
        paddingTop: "50px"
    }

    const contentWrapper = {
        maxWidth: "1000px",
        flexWrap: "wrap",
    }
    return (
        <Flex style={cardWrapper}>

            <Flex style={contentWrapper}>

                {props.testimoni.map((item, index) => (
                    <Card.Root flexDirection="row" overflow="hidden" maxW="xl" bg="#6C6C6C">
                        <Image
                            objectFit="cover"
                            maxW="200px"
                            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt="Caffe Latte"
                        />
                        <Box>
                            <Card.Body>
                                <Card.Title mb="2">
                                    <h2> {item.name} </h2>
                                </Card.Title>
                                <Card.Description pt="2">
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
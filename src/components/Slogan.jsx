import { Flex, Box, Center } from "@chakra-ui/react"
import "../styles/slogan.css"
import idea from "../assets/idea.png"

function Slogan() {

    const flexWrapper = {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
    const imageStyle = {
        width: "150px",
        height: "150px",
        objectFit: "cover",
    }

    const cardIcon = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifySelf: 'center',
        textAlign: 'center',
        width: '250px'
    }

    const wrapperCard = {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '100px'
    }

    return (
        <section className="slogan">
            <Flex style={flexWrapper}>
                <div className="wrapper-slogan">
                    <Box
                        textAlign={'center'}>
                        <h1> Our Method </h1>
                        <p> We serve our customer based on our way.
                            We always provide the best services and best experiences. </p>
                    </Box>
                </div>

                <Box
                    display="grid"
                    gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                    gap="60px"
                    justifyItems="center"
                    justifyContent="center"
                    maxW="1000px"
                    mx="auto"
                >
                    {[1, 2, 3, 4, 5].map((_, index) => (
                        <Flex
                            key={index}
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            width="250px"
                        >
                            <img src={idea} alt="idea" style={imageStyle} />
                            <Box>
                                <h2>Creative</h2>
                                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            </Box>
                        </Flex>
                    ))}
                </Box>
            </Flex>

        </section >
    )
}

export default Slogan;
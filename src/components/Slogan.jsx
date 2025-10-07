import { Flex, Box, Center } from "@chakra-ui/react"
import "../styles/slogan.css"

function Slogan() {

    return (
        <section className="slogan">
            <div className="wrapper-slogan">
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}>
                    <Box>

                        <h1> Our Method </h1>
                        <p> We serve our customer based on our way.
                            We always provide the best services and best experiences. </p>
                    </Box>
                </Flex>

            </div>
        </section>
    )
}

export default Slogan;
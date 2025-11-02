import { Flex, Image, Box } from "@chakra-ui/react"
import "../styles/global.css"

function CardPartOfUs(props) {

    return (
        <Flex
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={12}
            flexWrap={{base: "wrap"}}
            w="100%" // ✅ biar fleksibel, tidak dibatasi maxW
            maxW="900px" // optional, kalau mau ada batas lebar total
            mx="auto" // center horizontal
            paddingTop="50px">

            {props.items.map((item, index) => (
                <Box
                    overflow={"hidden"}>
                    <Image
                        key={index}
                        src={item.source}
                        alt={item.alt}
                        width={"220px"}
                        height={"90px"}
                        objectFit={"fit"}>
                    </Image>
                    
                </Box>
            ))}


        </Flex>
    )

}

export default CardPartOfUs;
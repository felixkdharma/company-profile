import { Flex, Box, Heading, useBreakpointValue, Text } from "@chakra-ui/react";
import "../styles/global.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Pagination,
    Autoplay,
    Navigation,
} from "swiper/modules";
function CardCarousel(props) {

    const swiperWrapper =
    {
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        flexWrap: "wrap"
    }

    const textBoxWrapper =
    {
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        height: "300px",
        gap: 12
    }

    const headingTag = useBreakpointValue({base: "h2", "2xl": "h1"})
    const paddingBottom = useBreakpointValue({base: "12vh", "2xl": "7vh"})
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{delay: 4000}}
            breakpoints={{  
                481: { slidesPerView: 1 }
            }}
            style={{
                paddingBottom: paddingBottom,
            }}
        >
            {props.cards.map((card, index) => (
                <SwiperSlide
                >
                    <Flex
                        style={swiperWrapper}>
                        <img
                            src={card.source}
                            width={"400px"}
                            height={"400px"}
                        />
                        <Flex
                            style={textBoxWrapper}>
                            <Box
                                width={{ "base": "350px", "2xl": "700px" }}
                                minH={"150px"}>
                                <Heading
                                    as={headingTag}
                                    lineHeight={"normal"}>
                                    {card.title}
                                </Heading>
                                {/* <h1> {card.title} </h1> */}
                                <Text
                                    as="p">
                                    {card.desc}
                                </Text>
                                {/* <p> {card.desc} </p> */}

                            </Box>
                            {/* <Box
                                    width={"800px"}>
                                    <p> {card.desc} </p>
                                </Box> */}
                        </Flex>
                    </Flex>
                </SwiperSlide>

            ))}
        </Swiper>
    )

}

export default CardCarousel;
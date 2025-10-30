import { Flex, Box, Heading, useBreakpointValue  } from "@chakra-ui/react";
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
        gap: 12
    }

    const textBoxWrapper =
    {
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        height: "300px",
        gap: 10

    }

    return (
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            style={{
                paddingBottom: "7vh",
            }}
        >
            {props.cards.map((card, index) => (
                <div>
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
                                    width={{"base": "300px", "2xl": "700px"}}
                                    minH={"120px"}>
                                    <Heading
                                        as={"h1"}
                                        lineHeight={"normal"}>
                                        {card.title}
                                    </Heading>
                                    {/* <h1> {card.title} </h1> */}
                                    <p> {card.desc} </p>

                                </Box>
                                {/* <Box
                                    width={"800px"}>
                                    <p> {card.desc} </p>
                                </Box> */}
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                </div>
            ))}
        </Swiper>
    )

}

export default CardCarousel;
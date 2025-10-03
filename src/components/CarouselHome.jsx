import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Flex, Box, Center } from "@chakra-ui/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import carousel1 from "../assets/carousel1.jpg"
import '../styles/global.css'

function CarouselHome() {

    return (
        <Flex
            overflow={'hidden'}>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{clickable: true}}
                >
                <SwiperSlide>
                    <Box
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={'center'}
                        gap={12}>
                        <img 
                            src={carousel1}
                            style={{
                                width: "500px",
                                height: "500px",
                                objectFit: "cover",
                                imageRendering: "pixelated"
                                }} />
                        <Box
                            display={'flex'}
                            flexDirection={'column'}>
                            <h1> Felix </h1>
                            <p> Kurniawan </p>
                            <p> Kurniawan </p>
                        </Box>
                    </Box>

                </SwiperSlide>
                <SwiperSlide>
                    Felix
                </SwiperSlide>
            </Swiper>

        </Flex>
    )

}

export default CarouselHome;
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
                pagination={{ clickable: true }}
            >
                <SwiperSlide
                    position={'relative'}>
                    <Box
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"flex-start"}
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
                            width={'500px'}
                            flexDirection={'column'}>
                            <h1> The Best IT Solution 2023 </h1>
                            <p> With our integrity and solution, our service always
                                fulfil what customer need. Since this Company
                                established 1999 we always give the best Services
                                to Our Customer. </p>
                        </Box>
                    </Box>

                </SwiperSlide>
                <SwiperSlide
                    position={'relative'}>
                    <Box
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"flex-start"}
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
                            width={'500px'}
                            flexDirection={'column'}>
                            <h1> The Best IT Solution 2023 </h1>
                            <p> With our integrity and solution, our service always
                                fulfil what customer need. Since this Company
                                established 1999 we always give the best Services
                                to Our Customer. </p>
                        </Box>
                    </Box>

                </SwiperSlide>
            </Swiper>

        </Flex>
    )

}

export default CarouselHome;
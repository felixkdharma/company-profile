import {
  Pagination,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import carousel1 from "../assets/carousel1.jpg";
import "../styles/global.css";

function CarouselHome() {
  return (
    <Flex overflow={"hidden"}>
      <Box
        w={["100%", "90%", "80%"]}  // ✅ responsive width
        maxW="1200px"
        mx="auto"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          navigation={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide position={"relative"}>
            <Box
              paddingBottom="20"
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={12}
            >
              <img
                src={carousel1}
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  imageRendering: "pixelated",
                  paddingLeft: "10px"
                }}
              />
              <Box display={"flex"} width={"700px"} flexDirection={"column"}>
                <h1> The Best IT Solution 2023 </h1>
                <p>
                  {" "}
                  With our integrity and solution, our service always fulfil what
                  customer need. Since this Company established 1999 we always
                  give the best Services to Our Customer.{" "}
                </p>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide position={"relative"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={12}
            >
              <img
                src={carousel1}
                style={{
                  width: "390px",
                  height: "390px",
                  objectFit: "cover",
                  paddingLeft: "10px",
                  imageRendering: "pixelated",
                }}
              />
              <Box display={"flex"} width={"500px"} flexDirection={"column"}>
                <h1> The Best IT Solution 2023 </h1>
                <p>
                  {" "}
                  With our integrity and solution, our service always fulfil what
                  customer need. Since this Company established 1999 we always
                  give the best Services to Our Customer.{" "}
                </p>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
}

export default CarouselHome;

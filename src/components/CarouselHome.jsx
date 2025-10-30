import { Flex } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/global.css";
import carousel1 from "../assets/carousel1.jpg";
import CardCarousel from "./CardCarousel.jsx";

function CarouselHome() {
  return (
    <Flex
      overflow={"hidden"}>
      <CardCarousel 
        cards={[
          {
            title: "The Best Company 2023",
            desc: `Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `,
            source: carousel1
          },
          {
            title: "The Best Innovation Technology 2023",
            desc: `Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `,
            source: carousel1

          }
        ]}
      />

    </Flex>
  );
}

export default CarouselHome;

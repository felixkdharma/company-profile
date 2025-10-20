import "../styles/global.css";
import "../styles/home.css";
import { Flex, Box } from "@chakra-ui/react";
import homePage from "../assets/homepage-2.jpg";
import Navbar from "./Navbar.jsx";
import CarouselHome from "./CarouselHome.jsx";
import Slogan from "./Slogan.jsx";
import Services from "./Services.jsx";
import AboutUs from  "./AboutUs.jsx";
import Ceo from "./Ceo.jsx";
import PartOfUs from "./PartOfUs.jsx";
import Testimoni from "./Testimoni.jsx";

function App() {
  const flexDirection = {
    "2xl": "row",
    md: "row",
    sm: "column",
    base: "column",
  };

  const marginLeftCompany = {
    md: "55px",
  };

  return (
    <div>
      <Box
        bgImage={`url(${homePage})`}
        bgSize="cover"
        bgPos="center"
        bgRepeat={"no-repeat"}
        h="100vh"
        w="100%"
      >
        <div className="title">
          <Flex
            gap={{ "2xl": 12, xl: 12 }}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={flexDirection}
            marginLeft={"5vw"}
          >
            <Box w="300px" marginTop={"30vh"} marginLeft={marginLeftCompany}>
              <h1> PT Kurnia Dharma </h1>
            </Box>

            <Box w="400px" marginTop={"40vh"} paddingLeft={"25px"}>
              <h1
                style={{
                  fontStyle: "italic",
                }}
              >
                {" "}
                Flexibel Creative Innovative{" "}
              </h1>
            </Box>
          </Flex>
        </div>
      </Box>

      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <Flex paddingTop={"150px"} flexDirection={"row"}>
        <CarouselHome />
      </Flex>

      {/* Slogan */}
      <Slogan
        title="Our Culture"
        description="We serve our customer based on our way. We always provide the best
              services and best experiences."
      />
      {/* Services */}
      <Services />

      {/* About Us */}
      <AboutUs />

      {/* CEO */}
      <Ceo/>

      {/* Part Of Us */}
      <PartOfUs/>

      {/* Testimoni */}
      <Testimoni/>
      
    </div>
  );
}

export default App;

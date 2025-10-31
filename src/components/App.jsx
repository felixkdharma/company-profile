import "../styles/global.css";
import "../styles/home.css";
import { Flex, Box } from "@chakra-ui/react";
import homePage from "../assets/homepage-2.jpg";
import Navbar from "./Navbar.jsx";
import CarouselHome from "./CarouselHome.jsx";
import Slogan from "./Slogan.jsx";
import Services from "./Services.jsx";
import AboutUs from "./AboutUs.jsx";
import Ceo from "./Ceo.jsx";
import PartOfUs from "./PartOfUs.jsx";
import Testimoni from "./Testimoni.jsx";
import Footer from "./Footer.jsx";

function App() {
  const flexDirection = {
    "2xl": "row",
    md: "row",
    sm: "column",
    base: "column",
  };

  const marginLeftCompany = {
    sm: "50px",
    md: "5vw",
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
            gap={{ 
              "base": 10,
              "sm" : 5,
              "xl": 12, 
              "2xl": 12, 
               }}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={flexDirection}
            marginLeft={"10vw"}
          >
            <Box 
              w="300px" 
              marginTop={{
                "base": "20vh",
                "sm" : "30vh", 
                "2xl": "38vh"}} 
              marginLeft={marginLeftCompany}>
              <h1> PT Kurnia Dharma </h1>
            </Box>

            <Box 
              w={{"2xl":"700px" }} 
              marginTop={{
                "sm" : "30vh",
                "2xl":"40vh"
              }} 
              paddingLeft={{
                "base": "16vw",
                "sm" : "5vw", 
                "2xl": "5vw"}}>
              <h1
                style={{
                  fontStyle: "italic",
                }}
              >
                Flexibel Creative Innovative
              </h1>
            </Box>
          </Flex>
        </div>
      </Box>

      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <section id="home">
        <Flex 
          paddingTop={"150px"} 
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}>
          <CarouselHome />
        </Flex>
      </section>


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
      <Ceo />

      {/* Part Of Us */}
      <PartOfUs />

      {/* Testimoni */}
      <Testimoni />

      {/* */}
      <Footer />

    </div>
  );
}

export default App;

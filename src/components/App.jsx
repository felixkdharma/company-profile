import "../styles/global.css"
import "../styles/home.css"
import { useEffect, useState } from "react"
import { Flex, Box, HStack, Link, Button } from "@chakra-ui/react"
import homePage from "../assets/homepage.jpg"
import Navbar from "./Navbar.jsx"
import CarouselHome from "./CarouselHome.jsx"

function App() {

  const flexDirection = {
    "2xl": "row",
    "md": "row",
    "sm": "column",
    "base": "column",
  }

  const marginLeftCompany =
  {
    "md": "55px"
  }

  return (

    <div>

      <Box
        bgImage={`url(${homePage})`}
        bgSize="cover"
        backgroundPosition="center"
        bgRepeat={"no-repeat"}
        h="100vh"
        w="100%">

        <div className="title">
          <Flex
            gap={{ "2xl": 12, xl: 12 }}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={flexDirection}
            marginLeft={"5vw"}>
            <Box
              w="300px"
              marginTop={"30vh"}
              marginLeft={marginLeftCompany}>
              <h1> PT Kurnia Dharma </h1>
            </Box>

            <Box
              w="400px"
              marginTop={"40vh"}
              paddingLeft={"25px"}>
              <h1 style={{
                fontStyle: "italic"
              }}> Flexibel Creative Innovative </h1>
            </Box>

          </Flex>
        </div>
      </Box>

      {/* Navbar */}
      <Navbar />

      <Flex
        marginTop={"30vh"}
        flexDirection={"row"}>

        <CarouselHome />
      </Flex>


    </div>
  )
}

export default App

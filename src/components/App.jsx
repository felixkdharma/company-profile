import "../styles/global.css"
import "../styles/home.css"
import { Flex, Box, HStack, Link, Button } from "@chakra-ui/react"
import homePage from "../assets/homepage.jpg"
import companyLogo from "../assets/company-logo.png"
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

    <Box
      bgImage={`url(${homePage})`}
      bgSize="cover"
      backgroundPosition="center"
      bgRepeat="no-repeat"
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
            <h1> Flexibel Creative Innovative </h1>
          </Box>

        </Flex>
      </div>

      {/* Navbar */}
      <Flex
        justify="space-between"
        align="center"
        w={"100%"}
        bgColor={"#535353"}
        h={"auto"}
        position={"sticky"}>

        <Box
          flexDirection={"column"}
          alignItems={"center"}
          justifyItems={"center"}>

          <img
            src={companyLogo}
            style={{
              height: 100,
              width: 100
            }} />

          <p style={{ color: "white" }}> PT Kurnia Dharma </p>
        </Box>
        <HStack spacing={4}>
          <Link color="white">Home</Link>
          <Link color="white">About</Link>
          <Link color="white">Contact</Link>
        </HStack>
      </Flex>

      <Flex
        marginTop={"150vh"}
        flexDirection={"row"}
        bgColor={"gray.muted"}>

        <h1> Felix </h1>
      </Flex>

    </Box>

  )
}

export default App

import "../styles/global.css"
import "../styles/home.css"
import { Flex } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

function App() {

  return (
    <section id="homepage">

      <div className="title">
        <Flex gap={{ "2xl": 12, xl: 12, }}
          alignItems={"center"}
          justifyContent={"center"} >
          <Box
            w="500px"
            marginLeft={12}
            paddingTop={"20%"}
            paddingLeft={{
              "2xl": "15%",
              "xl" : "15%",
              "lg" : "15%"
            }}
            textWrap={{"lg" : "wrap"}}>
            <h1> PT Adi Dharma </h1>
          </Box>

          <Box w="500px" paddingTop={"20%"}>
            <h1> Flexibel Creative Innovative </h1>
          </Box>

        </Flex>
      </div>

    </section>
  )
}

export default App

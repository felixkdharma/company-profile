import { Flex, Box, Center } from "@chakra-ui/react";
import "../styles/slogan.css";
import idea from "../assets/idea.png";
import balance from "../assets/balance.png";
import holistic from "../assets/holistic.png";
import support from "../assets/support.png";
import focus from "../assets/focus.png";
import CardSlogan from "./CardSlogan.jsx";

function Slogan(props) {
  const flexWrapper = {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const wrapperCard = {
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
    maxW: "1000px",
    mx: "auto",
    paddingTop: "50px",
  };

  return (
    <section className="slogan">
      <Flex style={flexWrapper}>
        <div className="wrapper-slogan">
          <Box textAlign={"center"}>
            <h1> {props.title} </h1>
            <p> {props.description} </p>
          </Box>
        </div>

        <Flex style={wrapperCard}>

          <CardSlogan
            items={[
              {
                title: "Creative",
                source: idea,
                description: "We encourage and need your Creative Innovation"
              },
              {
                title: "Balance",
                source: balance,
                description: "We do care about work life balance",
              },
              {
                title: "Holistic",
                source: holistic,
                description: "We are always seeking something holisticly"
              },
              {
                title: "Support",
                source: support,
                description: `We are not leaving each other and
                         find solution together`
              },
              {
                title: "Focus",
                source: focus,
                description: "We are always Focus to achieve Something Big"
              }

            ]}
          />
        </Flex>
      </Flex>
    </section>
  );
}

export default Slogan;

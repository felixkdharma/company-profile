import { Flex, Box, Center } from "@chakra-ui/react";
import "../styles/slogan.css";
import idea from "../assets/idea.png";

function CardSlogan(props) {
  const cardSlogan = {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "300px",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
  };

  return (
    <Flex style={cardSlogan}>
      <img src={props.source} alt="idea" style={imageStyle} />
      <Box>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Box>
    </Flex>
  );
}

export default CardSlogan;

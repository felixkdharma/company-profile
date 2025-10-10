import { Flex, Box, Center } from "@chakra-ui/react";
import "../styles/slogan.css";

function CardSlogan(props) {

  const wrapperCardSlogan = {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  };

  const cardSlogan = {
    flexDirection: "column",
    alignItems: "center",
    textAlign:"center",
    width: "250px"
  }

  const imageStyle = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
  };

  return (
    <Flex style={wrapperCardSlogan}>
      {props.items.map((item, index) => (
        <Flex
          key={index}
          style={cardSlogan}
        >
          <img src={item.source} alt="idea" style={imageStyle} />
          <Box>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
}

export default CardSlogan;

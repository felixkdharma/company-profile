import { Flex, Box } from "@chakra-ui/react";
import "../styles/global.css"

function CardFooter(props) {

    const cardWrapper = {
        flexDirection: "coloumn",
        alignItems: "center",
        justifyContent: "center",
        
    }

    return (
        <div >
            <p style={{marginBottom: "50px"}} > {props.items[0].section == "inquiry" ? "GROW YOUR BUSSINESS WITH US." : "FOLLOW OUR SOCIAL MEDIA." } </p>
            {props.items.map((item, index) => {
                const Icon = item.source;
                return (
                    <Flex style={cardWrapper} >
                        <Flex flexDirection="row">
                            <Icon size="30" />
                            <p style={{ paddingLeft: "10px" }}> {item.description} </p>
                        </Flex>
                    </Flex>
                )
            })}
            
        </div>
    )
}

export default CardFooter;
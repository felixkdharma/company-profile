import { Card, Image } from "@chakra-ui/react"
import "../styles/global.css";

function CardServices(props) {



    return (

        <Card.Root 
            maxW="sm" 
            overflow="hidden" 
            bg="#6C6C6C">
            <Image
                src={props.source}
                alt="Solution"
            />
            <Card.Body gap="1">
                <h2> {props.title} </h2>
                <p> {props.description} </p>
            </Card.Body>
            <Card.Footer
                justifyContent={"flex-end"}>
                <span> {props.footer} </span>
            </Card.Footer>
        </Card.Root>

    )
}

export default CardServices;
import "../styles/global.css"
import "../styles/ceo.css"
import CardCeo from "./CardCeo.jsx";
import rdj from "../assets/profile.jpg"
import aw from "../assets/profile2.jpg"
import ss from "../assets/profile3.jpg"

function Ceo() {

    return (
        <section id="ceo">
            <div className="ceo-wrapper">
                <h1> Meet Our CEO </h1>
                <CardCeo 
                    profiles = {[
                        {
                            src: rdj,
                            name: "Robert Downey Junior",
                            department: "CEO"
                        },
                        {
                            src: aw,
                            name: "Alan Walker",
                            department: "COO"
                        },
                        {
                            src: ss,
                            name: "Sydney Sweeney",
                            department: "CMO"
                        }
                    ]}
                />
            </div>

        </section>
    )
}

export default Ceo;
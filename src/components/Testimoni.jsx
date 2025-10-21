import "../styles/global.css"
import CardTestmoni from "./CardTestimoni.jsx";
import profile from "../assets/profile.jpg"
import profile2 from "../assets/profile2.jpg"
import profile3 from "../assets/profile3.jpg"

function Testimoni() {

    return (
        <section className="section-wrapper">
            <div className="content-wrapper">
                <h1> Hear from Them </h1>
                <CardTestmoni 
                    testimoni = {[
                        {
                            description: "Great Service, Very Recommended",
                            name: "John Doe",
                            position: "CEO of BCA Group",
                            source: profile
                        },
                        {
                            description: "Professional and Reliable Partner",
                            name: "Jane Smith",
                            position: "CTO of Lotte Corp",
                            source: profile2
                        },
                        {
                            description: "Reliable Company, Very Recomended",
                            name: "Charl Lowney",
                            position: "CEO of Nestle",
                            source: profile3
                        },
                        {
                            description: "Reliable Company, Very Recomended",
                            name: "Charl Lowney",
                            position: "CEO of Nestle",
                            source: profile
                        }
                    ]}
                />
            </div>
        </section>
    )
}

export default Testimoni;
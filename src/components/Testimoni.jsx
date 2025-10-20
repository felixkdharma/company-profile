import "../styles/global.css"
import CardTestmoni from "./CardTestimoni.jsx";

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
                            position: "CEO of BCA Group"
                        }
                    ]}
                />
            </div>
        </section>
    )
}

export default Testimoni;
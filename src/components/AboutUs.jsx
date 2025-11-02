import "../styles/global.css"
import "../styles/aboutus.css"
import CardAboutus from "./CardAboutus.jsx";
import Aboutus from "../assets/aboutus.jpg";
import Aboutus2 from "../assets/aboutus2.jpg";
import { source } from "framer-motion/client";
function AboutUs() {

    return (
        <section className="aboutus-section">
            <div className="aboutus-wrapper">
                <h1> About Us </h1>
                <CardAboutus 
                    cards={[
                        {
                            source: Aboutus,
                            desc: `Founded in 1999, PT Kurnia Dharma is a leading technology company dedicated to delivering innovative solutions that empower businesses and communities in the digital era. With more than two decades of experience, we have continuously evolved to meet the growing demands of the technology industry—driven by a passion for excellence and a commitment to innovation.

                            At PT Kurnia Dharma, we believe that technology should simplify, connect, and transform lives. Our mission is to provide reliable, high-quality products and services that help our clients achieve efficiency, growth, and long-term success.
            
                            Built on the core values of integrity, innovation, and customer satisfaction, we take pride in our strong partnerships and trusted reputation. Our team of skilled professionals works with dedication to develop cutting-edge solutions, ensuring that every project reflects our commitment to quality and continuous improvement.
            
                            As we move forward, PT Kurnia Dharma remains focused on shaping a smarter and more connected future—through technology that inspires progress and drives positive change.`
            
                        },

                        {
                            source: Aboutus2,
                            desc: `Founded in 1999, PT Kurnia Dharma is a leading technology company dedicated to delivering innovative solutions that empower businesses and communities in the digital era. With more than two decades of experience, we have continuously evolved to meet the growing demands of the technology industry—driven by a passion for excellence and a commitment to innovation.

                            At PT Kurnia Dharma, we believe that technology should simplify, connect, and transform lives. Our mission is to provide reliable, high-quality products and services that help our clients achieve efficiency, growth, and long-term success.
            
                            Built on the core values of integrity, innovation, and customer satisfaction, we take pride in our strong partnerships and trusted reputation. Our team of skilled professionals works with dedication to develop cutting-edge solutions, ensuring that every project reflects our commitment to quality and continuous improvement.
            
                            As we move forward, PT Kurnia Dharma remains focused on shaping a smarter and more connected future—through technology that inspires progress and drives positive change.`
            
                        },

                    ]}
                />
                {/* <CardAboutus
                    source={Aboutus}
                    description="Founded in 1999, PT Kurnia Dharma is a leading technology company dedicated to delivering innovative solutions that empower businesses and communities in the digital era. With more than two decades of experience, we have continuously evolved to meet the growing demands of the technology industry—driven by a passion for excellence and a commitment to innovation.

                At PT Kurnia Dharma, we believe that technology should simplify, connect, and transform lives. Our mission is to provide reliable, high-quality products and services that help our clients achieve efficiency, growth, and long-term success.

                Built on the core values of integrity, innovation, and customer satisfaction, we take pride in our strong partnerships and trusted reputation. Our team of skilled professionals works with dedication to develop cutting-edge solutions, ensuring that every project reflects our commitment to quality and continuous improvement.

                As we move forward, PT Kurnia Dharma remains focused on shaping a smarter and more connected future—through technology that inspires progress and drives positive change." />

                <CardAboutus
                    source={Aboutus2}
                    description="Founded in 1999, PT Kurnia Dharma is a leading technology company dedicated to delivering innovative solutions that empower businesses and communities in the digital era. With more than two decades of experience, we have continuously evolved to meet the growing demands of the technology industry—driven by a passion for excellence and a commitment to innovation.

                At PT Kurnia Dharma, we believe that technology should simplify, connect, and transform lives. Our mission is to provide reliable, high-quality products and services that help our clients achieve efficiency, growth, and long-term success.

                Built on the core values of integrity, innovation, and customer satisfaction, we take pride in our strong partnerships and trusted reputation. Our team of skilled professionals works with dedication to develop cutting-edge solutions, ensuring that every project reflects our commitment to quality and continuous improvement.

                As we move forward, PT Kurnia Dharma remains focused on shaping a smarter and more connected future—through technology that inspires progress and drives positive change." /> */}
            </div>
        </section>
    )
}

export default AboutUs;
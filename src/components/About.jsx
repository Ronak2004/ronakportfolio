import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-10 relative overflow-hidden bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary text-accent text-xs font-bold tracking-widest mb-4">
                        ABOUT ME
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                        Driven by Code, <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Focused on the User.</span>
                    </h2>
                    <div className="text-lg text-gray-400 leading-relaxed space-y-4">
                        <p>
                            Hi, I'm <strong className="text-white font-semibold">Ronak</strong>, a Web Developer pursuing a Bachelor of Science in Information Technology (BSc IT) with a year of professional experience building and maintaining web applications.
                        </p>
                        <p>
                            My background is rooted in PHP, MySQL, and traditional web development, but my current focus is expanding my expertise into modern frontend and full-stack development using <strong className="text-white font-semibold">React.js</strong>, Node.js, and Express.
                        </p>
                        <p>
                            In addition to coding, I bring practical experience in e-commerce operations and digital marketing, allowing me to build solutions that are not only technically sound but also aligned with business growth objectives.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
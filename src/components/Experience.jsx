import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Full Stack Developer",
        company: "Mrvistaarnet",
        date: "DEC 2025 – PRESENT",
        description: "Developing and managing websites using HTML, CSS, JavaScript, PHP, and MySQL. Integrating web development with digital strategy to deliver functional, high-performing websites.",
        skills: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Full Stack Development']
    },
    {
        title: "PHP Developer",
        company: "Bonum eDesign LLP",
        date: "MAY 2025 – JULY 2025",
        description: "Focused on backend development for onetwo9 and created responsive designs for Dhaiiyo. Ensured high performance, security, and responsive layouts.",
        skills: ['PHP', 'MySQL', 'Responsive Design', 'Backend Development']
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-10 relative bg-primary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary text-accent text-xs font-bold tracking-widest mb-4">
                        EXPERIENCE
                    </span>
                    <h2 className="text-3xl font-bold text-white">Professional Journey</h2>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-secondary/30 border border-gray-800 rounded-2xl p-6 md:p-8"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                    <p className="text-accent font-semibold">{exp.company}</p>
                                </div>
                                <div className="mt-2 md:mt-0 px-3 py-1 bg-gray-900 border border-gray-700 rounded-full inline-block text-sm text-gray-300">
                                    {exp.date}
                                </div>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="text-xs font-medium text-gray-400 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-md">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

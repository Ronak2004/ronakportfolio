import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const reactProjects = [
    {
        title: "React E-commerce Application",
        description: "A comprehensive e-commerce platform featuring product search, filtering, a shopping cart, authentication, and API integration.",
        tech: ["React.js", "Node.js", "Express", "Tailwind CSS"],
        status: "Coming Soon",
        github: "#",
        demo: "#"
    },
    {
        title: "React Admin Dashboard",
        description: "A full-featured admin dashboard with CRUD operations, data tables, advanced filtering, and backend API integration.",
        tech: ["React.js", "Material UI", "Chart.js"],
        status: "Coming Soon",
        github: "#",
        demo: "#"
    },
    {
        title: "Full-Stack Business Application",
        description: "A business management tool built with modern web technologies, featuring secure data handling and real-time updates.",
        tech: ["React.js", "Node.js", "MongoDB", "Express"],
        status: "Coming Soon",
        github: "#",
        demo: "#"
    }
];

const ReactProjects = () => {
    return (
        <section className="py-10 relative bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary text-accent text-xs font-bold tracking-widest mb-4">
                        LEARNING JOURNEY
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-4">React.js Projects</h2>
                    <p className="text-gray-400 max-w-2xl">
                        I am currently expanding my skill set to include modern React.js and Full-Stack development. These are the projects I am planning to build to demonstrate my proficiency.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reactProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-primary border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors flex flex-col h-full"
                        >
                            <div className="h-48 bg-gray-800 flex items-center justify-center border-b border-gray-800 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"></div>
                                <span className="relative z-10 bg-gray-900/80 text-gray-300 px-4 py-2 rounded-full border border-gray-700 font-medium text-sm">
                                    {project.status}
                                </span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-1">{project.description}</p>
                                
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 border-t border-gray-800 pt-4">
                                    <span className="flex items-center gap-2 text-sm text-gray-500 cursor-not-allowed">
                                        <FiGithub /> Code
                                    </span>
                                    <span className="flex items-center gap-2 text-sm text-gray-500 cursor-not-allowed">
                                        <FiExternalLink /> Live Demo
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReactProjects;

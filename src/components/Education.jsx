import React from "react";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section id="education" className="py-10 relative bg-primary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary text-accent text-xs font-bold tracking-widest mb-4">
                        EDUCATION
                    </span>
                    <h2 className="text-3xl font-bold text-white">Academic Background</h2>
                </motion.div>

                <div className="space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-4 bg-secondary/30 border border-gray-800 rounded-2xl p-6 md:p-8 relative overflow-hidden"
                    >
                        <div className="hidden md:flex flex-col items-center mr-4">
                            <div className="w-12 h-12 rounded-full bg-gray-900 border-2 border-accent flex items-center justify-center text-accent font-bold">01</div>
                            <div className="w-0.5 h-full bg-gray-800 mt-2"></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center mb-2">
                                <h3 className="text-xl font-bold text-white">Bachelor of Science in Information Technology</h3>
                                <span className="text-xs font-medium bg-gray-900 text-gray-400 px-3 py-1 rounded-full border border-gray-700 mt-2 sm:mt-0">2022 - 2025</span>
                            </div>
                            <h4 className="text-accent font-medium mb-4">Nagindas Khandwala College</h4>
                            <p className="text-gray-400 text-sm">
                                Gaining a strong foundation in computer science, software development, and modern IT practices.
                            </p>
                            <div className="mt-4 inline-block bg-gray-900 px-3 py-1 rounded border border-gray-800 text-sm font-semibold text-gray-300">GPA: 8.59</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-4 bg-secondary/30 border border-gray-800 rounded-2xl p-6 md:p-8 relative overflow-hidden"
                    >
                        <div className="hidden md:flex flex-col items-center mr-4">
                            <div className="w-12 h-12 rounded-full bg-gray-900 border-2 border-gray-600 flex items-center justify-center text-gray-400 font-bold">02</div>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center mb-2">
                                <h3 className="text-xl font-bold text-white">Higher Secondary Certificate</h3>
                                <span className="text-xs font-medium bg-gray-900 text-gray-400 px-3 py-1 rounded-full border border-gray-700 mt-2 sm:mt-0">2020 - 2022</span>
                            </div>
                            <h4 className="text-gray-400 font-medium mb-4">KES' Shroff College</h4>
                            <div className="mt-2 inline-block bg-gray-900 px-3 py-1 rounded border border-gray-800 text-sm font-semibold text-gray-300">Percentage: 69.17%</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;

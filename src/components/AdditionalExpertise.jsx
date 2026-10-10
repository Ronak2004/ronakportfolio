import React from "react";
import { motion } from "framer-motion";

const expertiseAreas = [
    { name: "Amazon Seller Central", desc: "Listing and inventory management" },
    { name: "Flipkart Seller Hub", desc: "Operations and cataloging" },
    { name: "Shopify", desc: "Store setup and maintenance" },
    { name: "Google & Meta Ads", desc: "Campaign creation and monitoring" },
    { name: "SEO", desc: "On-page and Off-page optimization" },
    { name: "Social Media & YouTube", desc: "Content strategy and channel management" }
];

const AdditionalExpertise = () => {
    return (
        <section className="py-10 relative bg-primary border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-2xl font-bold text-gray-300 mb-4">Additional Expertise</h2>
                    <p className="text-gray-500 text-sm">
                        While my primary focus is web development, I have valuable hands-on experience in e-commerce and digital marketing that helps me build better business-facing applications.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {expertiseAreas.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-secondary/20 border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center text-center w-48 hover:bg-secondary/40 transition-colors"
                        >
                            <h4 className="text-white font-medium text-sm mb-1">{item.name}</h4>
                            <p className="text-gray-500 text-xs">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdditionalExpertise;

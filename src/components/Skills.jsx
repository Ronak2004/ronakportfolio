import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Responsive Web Design"]
  },
  {
    category: "Backend",
    items: ["PHP", "Node.js", "Express.js"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "XAMPP", "Vercel"]
  }
];

const Skills = () => {
    return (
        <section id="skills" className="py-10 relative bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary text-accent text-xs font-bold tracking-widest mb-4">
                        TECHNICAL SKILLS
                    </span>
                    <h2 className="text-3xl font-bold text-white">Technologies I Work With</h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-secondary/40 border border-gray-800 rounded-2xl p-6 hover:bg-secondary/60 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-gray-900 text-gray-300 text-sm rounded-lg border border-gray-700">
                                        {item}
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

export default Skills;

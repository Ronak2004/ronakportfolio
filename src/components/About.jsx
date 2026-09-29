import React from "react";
import { motion } from "framer-motion";

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="about" className="pt-10 pb-24 relative overflow-hidden bg-gray-50">
            {/* Decorative background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-blue-50 to-transparent blur-3xl opacity-60"></div>
                <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-t from-gray-100 to-transparent blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="mb-16 max-w-3xl"
                >
                    <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-gray-200 text-gray-700 text-xs font-bold tracking-widest mb-4">
                        ABOUT ME
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                        Building Digital Experiences <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">That Make an Impact.</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="text-lg text-gray-600 leading-relaxed space-y-4">
                        <p>
                            Hi, I'm <strong className="text-gray-900 font-semibold">Ronak</strong>, an Information Technology Graduate and Digital Professional with Experience in Web Development, E-commerce, SEO, and Digital Marketing.
                        </p>
                        <p>
                            I enjoy creating websites, managing online stores, optimizing product listings, running digital campaigns, and developing strategies that help businesses grow online.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                >
                    {/* Education Card */}
                    <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/60 transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-800 font-bold text-sm">01</span>
                            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                        </div>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-gray-900">Nagindas Khandwala College</div>
                                        <time className="font-medium text-xs text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200">2022 - 2025</time>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">Bachelor of Science in Information Technology</div>
                                    <div className="text-xs font-semibold text-gray-800 bg-gray-200 inline-block px-2 py-1 rounded-md">GPA: 8.59</div>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-gray-900">KES' Shroff College</div>
                                        <time className="font-medium text-xs text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200">2020 - 2022</time>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">Higher Secondary Certificate</div>
                                    <div className="text-xs font-semibold text-gray-800 bg-gray-200 inline-block px-2 py-1 rounded-md">Percentage: 69.17%</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/60 transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-bold text-sm">02</span>
                            <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
                        </div>

                        <div className="space-y-6">
                            {/* Experience 1 */}
                            <div className="border-l-2 border-gray-200 pl-6 pb-2 relative">
                                <div className="absolute w-3 h-3 bg-gray-900 rounded-full -left-[7px] top-2 border-2 border-white"></div>
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <h4 className="text-lg font-bold text-gray-900">Full Stack Developer</h4>
                                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full border border-gray-200">DEC 2025 – PRESENT</span>
                                </div>
                                <h5 className="text-sm font-semibold text-blue-600 mb-3">@ Mrvistaarnet</h5>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    Developing and managing websites using HTML, CSS, JavaScript, PHP, and MySQL. Working across digital marketing, paid advertising, e-commerce, and social media marketing.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Full Stack', 'PHP & MySQL', 'Ads Management', 'E-commerce', 'Social Media Marketing', 'SEO'].map((skill, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md shadow-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Experience 2 */}
                            <div className="border-l-2 border-gray-200 pl-6 relative">
                                <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[7px] top-2 border-2 border-white"></div>
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <h4 className="text-lg font-bold text-gray-900">PHP Developer</h4>
                                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full border border-gray-200">MAY 2025 – JULY 2025</span>
                                </div>
                                <h5 className="text-sm font-semibold text-gray-500 mb-3">@ Bonum eDesign LLP</h5>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    Backend development for <strong className="text-gray-900 font-medium">onetwo9</strong> and created responsive designs for <strong className="text-gray-900 font-medium">Dhaiiyo</strong> with focus on performance and security.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['PHP', 'MySQL', 'Website', 'Responsive Design'].map((skill, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md shadow-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                >
                    {[
                        { value: '8.59', label: 'GPA', subtitle: 'Academic Excellence' },
                        { value: 'B.Sc IT', label: 'Education', subtitle: 'Degree' },
                        { value: 'Full Stack', label: 'Developer', subtitle: 'Experience' },
                        { value: 'Digital', label: 'Marketing', subtitle: 'Expertise' },
                        { value: 'E-commerce', label: 'Management', subtitle: 'Specialty' },
                    ].map((stat, i) => (
                        <motion.div key={i} variants={itemVariants} className="bg-gray-900 rounded-3xl p-6 text-center shadow-xl shadow-gray-900/10 hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
                            <p className="text-gray-300 font-semibold text-sm mb-1">{stat.label}</p>
                            <p className="text-gray-500 text-xs">{stat.subtitle}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
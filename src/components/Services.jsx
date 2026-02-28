import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Activity, FlaskConical, Baby, Stethoscope, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Heart />,
        title: 'Cardiology',
        desc: 'Expert heart care including advanced diagnostics and specialized treatments.'
    },
    {
        icon: <Brain />,
        title: 'Neurology',
        desc: 'Comprehensive neurological care for brain and spinal cord disorders.'
    },
    {
        icon: <Activity />,
        title: 'Orthopedics',
        desc: 'Specialized bone and joint care from trauma treatment to surgeries.'
    },
    {
        icon: <FlaskConical />,
        title: 'Diagnostics',
        desc: 'Fully equipped laboratory providing precise and timely diagnostic results.'
    },
    {
        icon: <Baby />,
        title: 'Pediatrics',
        desc: 'Healthcare environment dedicated to the well-being of children.'
    },
    {
        icon: <Stethoscope />,
        title: 'Internal Medicine',
        desc: 'General medical care and management of chronic conditions.'
    }
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        className="subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Medical Departments
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Specialized <span className="text-gradient">Healthcare Services</span>
                    </motion.h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="service-icon-wrapper">
                                {React.cloneElement(service.icon, { size: 32 })}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <a href="#" className="service-link">
                                Learn More <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

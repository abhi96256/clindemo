import React from 'react';
import { motion } from 'framer-motion';
import './Doctors.css';

const doctors = [
    {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        image: "https://images.unsplash.com/photo-1559839734-2b71f153678c?q=80&w=800&auto=format&fit=crop",
        edu: "M.D. Harvard Medical"
    },
    {
        name: "Dr. Michael Chen",
        specialty: "Neurologist",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
        edu: "Johns Hopkins University"
    },
    {
        name: "Dr. Emily Williams",
        specialty: "Pediatrician",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
        edu: "Stanford Medical School"
    },
    {
        name: "Dr. David Smith",
        specialty: "Orthopedic Surgeon",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
        edu: "University of Toronto"
    }
];

const Doctors = () => {
    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Expert Team</span>
                    <h2>Meet Our <span className="text-gradient">Professional Doctors</span></h2>
                </div>

                <div className="doctors-grid">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            className="doctor-card"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="doctor-image">
                                <img src={doctor.image} alt={doctor.name} />
                            </div>
                            <div className="doctor-info">
                                <h3>{doctor.name}</h3>
                                <span className="specialty">{doctor.specialty}</span>
                                <p className="edu">{doctor.edu}</p>
                                <div className="doctor-social">
                                    <a href="#">FB</a>
                                    <a href="#">LI</a>
                                    <a href="#">TW</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;

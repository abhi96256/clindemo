import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-grid">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="badge">
                        <ShieldCheck size={14} />
                        <span>Trusted Healthcare Partner</span>
                    </div>
                    <h1>Providing <span className="text-gradient">Medical Care</span> For Your Family</h1>
                    <p>
                        Experience the future of healthcare with our state-of-the-art facilities and world-renowned specialists dedicated to your health and wellness.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">
                            Book Appointment <Calendar size={18} />
                        </button>
                        <button className="btn btn-outline">
                            Our Services <ArrowRight size={18} />
                        </button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Emergency Care</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">150+</span>
                            <span className="stat-label">Expert Doctors</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                            alt="Professional Doctor"
                        />
                        <motion.div
                            className="floating-card info-card"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="card-icon">🏥</div>
                            <div className="card-text">
                                <strong>Advanced Tech</strong>
                                <span>Next-gen Labs</span>
                            </div>
                        </motion.div>
                        <motion.div
                            className="floating-card success-card"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                            <div className="card-icon"><Star size={20} className="star-icon" /></div>
                            <div className="card-text">
                                <strong>4.9/5 Rating</strong>
                                <span>From 5000+ Patients</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

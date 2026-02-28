import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import './AppointmentForm.css';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        date: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({
            name: '', email: '', phone: '', department: '', date: '', message: ''
        });
    };

    return (
        <section id="contact" className="appointment">
            <div className="container appointment-wrapper">
                <motion.div
                    className="appointment-info"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">Get In Touch</span>
                    <h2>Make An <span className="text-gradient">Appointment</span> Today</h2>
                    <p>
                        Schedule your visit with our expert medical team. We're here 24/7 to provide you with the best healthcare services.
                    </p>

                    <div className="contact-details">
                        <div className="contact-tile">
                            <div className="tile-icon-wrapper">
                                <Phone size={24} />
                            </div>
                            <div>
                                <strong>Emergency Call</strong>
                                <p>+1 (800) 123-4567</p>
                            </div>
                        </div>
                        <div className="contact-tile">
                            <div className="tile-icon-wrapper">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <strong>Our Location</strong>
                                <p>123 Medical Plaza, NY 10001</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="appointment-card"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    {submitted ? (
                        <div className="success-message">
                            <CheckCircle2 size={64} color="var(--primary)" />
                            <h3>Request Received!</h3>
                            <p>Our team will contact you within 24 hours to confirm your time slot.</p>
                            <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send Another</button>
                        </div>
                    ) : (
                        <form className="form-grid" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="E.g. John Doe"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Department</label>
                                <select
                                    required
                                    value={formData.department}
                                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                >
                                    <option value="">Select Service</option>
                                    <option value="cardiology">Cardiology</option>
                                    <option value="neurology">Neurology</option>
                                    <option value="orthopedics">Orthopedics</option>
                                    <option value="pediatrics">Pediatrics</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Preferred Date</label>
                                <input
                                    type="date"
                                    required
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div className="form-group full-width">
                                <label>Message (Optional)</label>
                                <textarea
                                    rows="4"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Request <Send size={18} />
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default AppointmentForm;

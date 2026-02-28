import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container stats-container">
                <div className="stat-card">
                    <h3>25k+</h3>
                    <p>Happy Patients</p>
                </div>
                <div className="stat-card">
                    <h3>150+</h3>
                    <p>Expert Doctors</p>
                </div>
                <div className="stat-card">
                    <h3>30+</h3>
                    <p>Departments</p>
                </div>
                <div className="stat-card">
                    <h3>20+</h3>
                    <p>Years Excellence</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;

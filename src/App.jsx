import { CheckCircle2, Award, Clock } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Doctors from './components/Doctors';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Doctors />

      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop" alt="Modern Medical Laboratory" />
            <div className="experience-badge">
              <strong>20+</strong>
              <span>Years of Success</span>
            </div>
          </div>
          <div className="about-content">
            <span className="subtitle">About Our Clinic</span>
            <h2>Setting High Standards In <span className="text-gradient">Modern Healthcare</span></h2>
            <p>
              Our clinic has been at the forefront of medical excellence for over two decades.
              We combine compassionate care with the latest medical technology to provide the best possible outcomes for our patients.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon"><Award size={24} /></div>
                <div>
                  <strong>Certified Excellence</strong>
                  <p>Award-winning healthcare provider with international accreditation.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><CheckCircle2 size={24} /></div>
                <div>
                  <strong>Modern Technology</strong>
                  <p>Equipped with the latest diagnostic and surgical equipment.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Clock size={24} /></div>
                <div>
                  <strong>24/7 Support</strong>
                  <p>Our emergency department is always ready to assist you.</p>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Discover More About Us</button>
          </div>
        </div>
      </section>

      <AppointmentForm />
      <Footer />
    </div>
  );
}

export default App;

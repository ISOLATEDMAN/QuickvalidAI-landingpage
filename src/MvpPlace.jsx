import React, { useRef } from 'react';
import { Brain, Users, Search, Download, CheckCircle, Sparkles, ExternalLink } from 'lucide-react';
import './index.css';

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="card-glow"></div>
    <div className="icon-wrapper">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const LandingPage = () => {
  // Create a ref for the CTA section
  const ctaRef = useRef(null);

  const scrollToCTA = () => {
    ctaRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      {/* Nav Section */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Sparkles className="logo-icon" />
            QuickValid.AI
          </div>
          <a
      href="https://drive.google.com/file/d/10zL7r8nB1vwH6a-0Ptzpui6DtWnLaoqB/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="nav-cta"
    >
      Try Now <ExternalLink className="btn-icon" />
    </a>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="grid-pattern"></div>
          <div className="glow-orb"></div>
          <div className="glow-orb-2"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <Sparkles className="badge-icon" />
              <span>Powered by Advanced AI</span>
            </div>
            <h1>
              Validate Your Startup Idea
              <span className="gradient-text"> in Seconds</span>
            </h1>
            <p className="hero-description">
              QuickValid.AI uses artificial intelligence to analyze your startup idea,
              providing instant market validation and actionable insights.
            </p>
            <div className="button-group">
              <button className="primary-button" onClick={scrollToCTA}>
                Start Validating <Download className="btn-icon" />
              </button>
              <div className="success-rate">
                <div className="rate">94%</div>
                <div className="rate-text">Validation Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>AI-Powered <span className="gradient-text">Features</span></h2>
            <p>Transform your idea into a validated business concept</p>
          </div>
          <div className="features-grid">
            <FeatureCard
              icon={<Brain className="feature-icon" />}
              title="Instant Analysis"
              description="Get comprehensive AI analysis of your startup idea with market fit predictions and success metrics."
            />
            <FeatureCard
              icon={<Users className="feature-icon highlight" />}
              title="Community Insights"
              description="Access a network of entrepreneurs and experts for valuable feedback and collaboration."
            />
            <FeatureCard
              icon={<Search className="feature-icon" />}
              title="Competitor Analysis"
              description="Using AI-powered search, discover similar apps, analyze their user base, and assess their market performance."
            />
            <FeatureCard
              icon={<CheckCircle className="feature-icon" />}
              title="Smart Validation"
              description="Receive personalized recommendations and validation metrics for your unique concept."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" ref={ctaRef}>
  <div className="container">
    <h2>Ready to Validate Your Vision?</h2>
    <p>Join innovative founders using AI to validate their startup ideas</p>
    <a
      href="https://drive.google.com/file/d/10zL7r8nB1vwH6a-0Ptzpui6DtWnLaoqB/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button"
    >
      Download MVP <ExternalLink className="btn-icon" />
    </a>
  </div>
</section>
    </div>
  );
};

export default LandingPage;

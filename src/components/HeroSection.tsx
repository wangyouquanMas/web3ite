import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Solana培训营</h1>
        <p>系统学习Solana区块链开发，从零基础到专业开发者</p>
        <div className="hero-buttons">
          <button className="btn primary">申请报名</button>
          <button className="btn secondary">各类课程详情</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Placeholder for a Solana-related image */}
        <div className="image-placeholder">
          <div className="solana-logo"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
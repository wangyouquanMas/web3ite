import React from 'react';
import './CertificateSection.css';

const CertificateSection: React.FC = () => {
  return (
    <section className="certificate">
      <div className="section-transition-top"></div>
      <div className="section-header">
        <h2>Solana开发者认证</h2>
        <p>完成课程后，您将获得专业的Solana开发者认证，证明您具备专业的区块链开发能力</p>
      </div>
      <div className="certificate-container">
        <div className="certificate-content">
          <p>获得我们颁发的专业认证，为您的职业发展增添有力证明。</p>
          <ul className="certificate-benefits">
            <li>证明您的Solana开发技能</li>
            <li>增加您的就业竞争力</li>
            <li>成为Solana开发者社区的一员</li>
            <li>独特的认证编号，可在线验证</li>
          </ul>
        </div>
        <div className="certificate-image">
          <div className="certificate-card">
            <div className="certificate-header">
              <div className="certificate-logo"></div>
              <h3>Solana开发者认证</h3>
            </div>
            <div className="certificate-body">
              <p className="certificate-name">张三</p>
              <p className="certificate-text">成功完成Solana区块链开发培训课程</p>
              <p className="certificate-date">颁发日期: 2025年4月15日</p>
              <p className="certificate-number">证书编号: SOL-DEV-20250415-001</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-transition-bottom"></div>
    </section>
  );
};

export default CertificateSection; 
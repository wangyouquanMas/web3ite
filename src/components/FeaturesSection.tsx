import React from 'react';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: '系统化学习 Solana 开发课程',
      description: '全面系统地学习Solana区块链开发所需的知识，从基础概念到高级应用。',
      icon: '📚'
    },
    {
      id: 2,
      title: '深入掌握 Rust 语言与 Anchor 框架',
      description: '详细学习Rust编程语言和Anchor框架，掌握核心开发工具和技术。',
      icon: '🔧'
    },
    {
      id: 3,
      title: '实战项目经验',
      description: '通过实际项目开发积累经验，从设计到部署的全流程实践。',
      icon: '💻'
    },
    {
      id: 4,
      title: '就业面试指导',
      description: '提供职业规划和面试技巧指导，帮助学员顺利进入Web3行业。',
      icon: '👔'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="section-header">
        <h2>课程特征</h2>
        <p>我们的课程专为想要进入Web3行业的开发者设计</p>
      </div>
      <div className="features-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection; 
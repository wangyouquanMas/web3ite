import React from 'react';
import './AboutInstructorSection.css';

const AboutInstructorSection: React.FC = () => {
  const experiences = [
    {
      period: '2021-2022',
      role: 'B站后端开发',
      company: '哔哩哔哩',
      description: '1年后端开发经验，负责核心业务系统开发',
      icon: (
        <svg className="experience-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 7L12 12L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      period: '2022-2023',
      role: '零知识证明开发',
      company: 'Trapdoortech',
      description: '1年多零知识证明开发经验，深入研究密码学应用',
      icon: (
        <svg className="experience-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      period: '2023-2024',
      role: 'Gap Year',
      company: '自我探索',
      description: '停下来思考，解决人生中反复出现的问题',
      icon: (
        <svg className="experience-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      period: '2024-现在',
      role: '远程DEX开发',
      company: '全栈开发',
      description: '专注于去中心化交易所开发，全栈技术栈',
      icon: (
        <svg className="experience-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const skills = [
    {
      category: '区块链生态',
      items: ['EVM系列(ETH, Base, BSC)', 'Solana生态', '智能合约开发', 'DeFi协议']
    },
    {
      category: '后端技术',
      items: ['Golang', 'Rust', 'MySQL', 'Redis', 'Kafka', 'gRPC', 'go-zero']
    },
    {
      category: '前端技术',
      items: ['React', 'HTML/CSS/JavaScript', 'WebSocket', '响应式设计']
    },
    {
      category: '其他技能',
      items: ['英语口语流利', '零知识证明', '系统架构设计', '项目管理']
    }
  ];

  const insights = [
    {
      title: 'Gap Year的价值',
      content: 'Gap year没那么可怕，人可以停下，休息一会可以让你更好的出发。相比于漫长的人生几十年，如果你能够在gap year把那些反反复复出现在你人生不同阶段的问题解决掉，那gap的性价比可太高了。'
    },
    {
      title: '掌控人生方向',
      content: '要做司机而不是乘客，方向盘要掌握在自己手里。主动选择比被动接受更重要。'
    },
    {
      title: '核心竞争力',
      content: '快速学习能力才是你的核心竞争力。在技术快速迭代的时代，学习能力比已有知识更重要。'
    },
    {
      title: '独特性的价值',
      content: '珍视自己的各种奇奇怪怪的特质，这是你独特性的来源。不要试图成为别人，要成为更好的自己。'
    }
  ];

  return (
    <section id="about-instructor" className="about-instructor">
      <div className="section-header">
        <h2>关于导师</h2>
        <p>一个<span className="highlight">普通人</span>的Web3开发之路，从传统互联网到区块链的<span className="highlight">全栈实践</span></p>
      </div>
      
      <div className="instructor-content">
        {/* 个人简介卡片 */}
        <div className="instructor-intro-card">
          <div className="intro-avatar">
            <div className="avatar-placeholder">
              <svg className="avatar-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="intro-content">
            <h3>一个普通人的技术探索</h3>
            <div className="education">
              <span className="education-label">学历背景：</span>
              <span className="education-value">南京邮电大学通信专业研究生</span>
            </div>
            <p className="intro-description">
              从传统互联网到Web3的转型实践者，在B站积累后端开发经验，在Trapdoortech深入零知识证明领域，
              经历gap year的自我探索，现在专注于DEX开发。相信每个人都有自己独特的技术成长路径。
            </p>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="main-content-grid">
          {/* 工作经历 */}
          <div className="content-card experience-card">
            <h3 className="card-title">工作经历</h3>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="exp-icon">{exp.icon}</div>
                  <div className="exp-content">
                    <div className="exp-period">{exp.period}</div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 技能栈 */}
          <div className="content-card skills-card">
            <h3 className="card-title">技能栈</h3>
            <div className="skills-compact">
              {skills.map((skill, index) => (
                <div key={index} className="skill-group">
                  <div className="skill-category-compact">{skill.category}</div>
                  <div className="skill-items-compact">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 人生感悟 */}
          <div className="content-card insights-card">
            <h3 className="card-title">毕业四年多的感悟</h3>
            <div className="insights-compact">
              {insights.map((insight, index) => (
                <div key={index} className="insight-item">
                  <div className="insight-title-compact">{insight.title}</div>
                  <div className="insight-content-compact">{insight.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructorSection; 
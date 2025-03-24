import React from 'react';
import './CourseOutline.css';

const CourseOutline: React.FC = () => {
  const roadmapSteps = [
    { id: 1, name: 'Rust', description: '学习Rust编程语言基础' },
    { id: 2, name: 'Solana', description: 'Solana区块链原理与架构' },
    { id: 3, name: 'Anchor', description: 'Anchor框架应用开发' },
    { id: 4, name: 'DApp', description: '去中心化应用开发' },
    { id: 5, name: 'DeFi', description: '去中心化金融开发' }
  ];

  const courseModules = [
    {
      id: 1,
      title: 'Solana 基础',
      topics: [
        'Solana区块链基本原理',
        '共识机制与验证节点',
        'Solana生态系统介绍',
        '账户模型与交易结构'
      ]
    },
    {
      id: 2,
      title: 'JavaScript & TypeScript 编程语言',
      topics: [
        'JS/TS基础语法',
        '异步编程与Promise',
        '前端框架介绍',
        'Web3.js客户端开发'
      ]
    },
    {
      id: 3,
      title: 'Rust 编程语言',
      topics: [
        'Rust基础语法',
        '所有权与借用',
        '结构体与枚举',
        '错误处理与并发'
      ]
    },
    {
      id: 4,
      title: 'Anchor 框架应用与进阶',
      topics: [
        'Anchor框架设计理念',
        '程序开发与测试',
        '安全性与优化',
        '实际项目案例分析'
      ]
    }
  ];

  return (
    <div>
      <section id="roadmap" className="roadmap">
        <div className="section-header">
          <h2>技术路线图</h2>
          <p>我们的课程按照循序渐进的方式设计，帮助你系统掌握Solana开发技能</p>
        </div>
        <div className="roadmap-container">
          {roadmapSteps.map((step, index) => (
            <div key={step.id} className="roadmap-step">
              <div className="step-number">{step.id}</div>
              <div className="step-content">
                <h3>{step.name}</h3>
                <p>{step.description}</p>
              </div>
              {index < roadmapSteps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      <section id="outline" className="course-modules">
        <div className="section-header">
          <h2>课程大纲</h2>
          <p>全面的课程内容，让你系统学习Solana开发所需的技能</p>
        </div>
        <div className="modules-container">
          {courseModules.map(module => (
            <div key={module.id} className="module-card">
              <h3>{module.title}</h3>
              <ul>
                {module.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseOutline; 
import React, { useState } from 'react';
import './CourseDetailSection.css';
// Import the WeChat QR code image
import wechatQrImage from '../assets/images/wechat.jpg';

const CourseDetailSection: React.FC = () => {
  const [showWechatModal, setShowWechatModal] = useState(false);

  const openWechatModal = () => {
    setShowWechatModal(true);
  };

  const closeWechatModal = () => {
    setShowWechatModal(false);
  };

  const courseChapters = [
    {
      id: 1,
      title: '基础篇',
      level: 'L0',
      description: '从零开始学习区块链交易，掌握钱包、代币、合约等核心概念，建立Web3开发的基础知识体系',
      topicsLeft: [
        '如何创建交易？',
        '钱包在交易中的角色？',
        '代币是什么？',
        '如何查看交易？',
        '地址和账户的关系？',
        '钱包账户和代币的关系？',
        '如何发送交易到链上？',
        '合约是什么？'
      ],
      topicsRight: [
        '如何创建并部署合约？',
        '如何与合约交互？',
        '交易上链后发生了什么？',
        '区块链？什么是区块？',
        '交易的三种状态处理机制',
        '交易状态confirmed详解',
        '交易状态finalized详解',
        'Golang核心特性与并发模型'
      ],
      duration: '2-3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 7L12 12L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: '数据解析篇',
      level: 'L1',
      description: '深入理解交易解析的应用场景，掌握区块链数据结构、交易数据解析、事件日志处理等技巧',
      topicsLeft: [
        '交易解析的应用场景',
        '交易数据结构深度解析',
        '指令数据结构解析',
        '账户状态变化跟踪',
        'IDL文件获取与使用',
        '如何查看data布局？',
        '实时计算代币价格',
        '获取代币holder数量'
      ],
      topicsRight: [
        '检查代币安全性',
        '解析PumpFun/AMM事件',
        '解析Raydium/Launchpad事件',
        '解析Token/Token2022事件',
        '代币元数据解析',
        '获取用户持仓信息',
        '计算top10持币地址',
        '第三方数据服务集成'
      ],
      duration: '2-3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="10" y1="9" x2="8" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: '交易构造篇',
      level: 'L1',
      description: '学习交易构造原理、各种指令作用、AMM机制、流动性概念，掌握复杂交易的构建技巧',
      topicsLeft: [
        '交易构造核心原理',
        'ComputeUnit/Price指令',
        'ATA指令作用机制',
        'Sync指令详解',
        'Transfer指令实现',
        'Swap指令核心逻辑',
        'Close指令与账户生命周期',
        'System Program合约'
      ],
      topicsRight: [
        'Token Program合约',
        'Custom Program合约',
        '什么是交易对？',
        'AMM自动做市商机制',
        '流动性池原理',
        '滑点计算与控制',
        'CLMM与AMM区别',
        'PDA账户详解'
      ],
      duration: '2-3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 9L12 16L2 9L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 24L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 19L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: '核心业务篇',
      level: 'L2',
      description: '实现DEX核心业务逻辑，包括实时解析、订单系统、数据推送、K线计算等核心功能',
      topicsLeft: [
        '保障解析实时性',
        '解析失败兜底策略',
        '实时数据推送机制',
        '限价单设计实现',
        '翻倍出本策略',
        '市价单设计'
      ],
      topicsRight: [
        '交易成功状态判断',
        'K线数据计算',
        'Token表结构设计',
        'Pair表结构设计',
        'Trade表结构设计',
        'Redis发布订阅模式'
      ],
      duration: '3-4周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 5,
      title: '性能优化篇',
      level: 'L2',
      description: '掌握交易成功率优化、上链速度提升、安全防护、数据库优化等高级性能优化技术',
      topicsLeft: [
        '交易成功率保障',
        '交易上链速度优化',
        '节点选择策略',
        'ComputeLimit优化'
      ],
      topicsRight: [
        'Priority Fee策略',
        '代币购买安全保障',
        '亿级数据表优化',
        '查询速度优化'
      ],
      duration: '2-3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 6,
      title: '核心原理篇',
      level: 'L3',
      description: '深入理解区块链核心技术原理，包括共识机制、拜占庭容错、Solana虚拟机等底层技术',
      topicsLeft: [
        '拜占庭攻击原理',
        'POW工作量证明',
        'POS权益证明',
        'POH历史证明优化'
      ],
      topicsRight: [
        'Finalized状态安全性',
        'Solana最新共识机制',
        'Solana虚拟机原理',
        '区块重置攻击防护'
      ],
      duration: '3-4周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 7,
      title: '项目综合篇',
      level: 'L3',
      description: '完整DEX项目开发实战，包括架构设计、微服务搭建、数据库部署、前端实现等端到端开发',
      topicsLeft: [
        'Go-Zero框架搭建',
        'Consumer服务核心',
        'Trade服务核心',
        'Market服务核心',
        'Gateway服务核心'
      ],
      topicsRight: [
        'Data-flow服务核心',
        'WebSocket服务实现',
        'Kafka集群部署',
        'Redis/MySQL部署',
        'gRPC服务集成'
      ],
      duration: '4-5周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19C9 19 9 19 9 19V9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div>
      <section id="course-detail" className="course-detail">
        <div className="section-header">
          <h2>课表详情</h2>
          <p>从<span className="highlight">基础入门</span>到<span className="highlight">项目实战</span>，循序渐进的Web3开发学习路径</p>
        </div>
        <div className="course-detail-grid">
          {courseChapters.map(chapter => (
            <div key={chapter.id} className="course-chapter-card">
              <div className="chapter-header">
                <div className="chapter-icon-container">
                  {chapter.icon}
                </div>
                <div className="chapter-level">
                  <span className="level-badge">{chapter.level}</span>
                  <span className="duration">{chapter.duration}</span>
                </div>
              </div>
              <h3>{chapter.title}</h3>
              <p className="chapter-description">{chapter.description}</p>
              <div className="chapter-topics-container">
                <div className="topics-column">
                  <ul className="chapter-topics">
                    {chapter.topicsLeft.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div className="topics-column">
                  <ul className="chapter-topics">
                    {chapter.topicsRight.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="course-detail-cta">
          <button className="btn primary" onClick={openWechatModal}>咨询课程详情</button>
        </div>
      </section>

      {/* Wechat Modal */}
      {showWechatModal && (
        <div className="modal-overlay" onClick={closeWechatModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeWechatModal}>&times;</button>
            <h3>微信咨询</h3>
            <img src={wechatQrImage} alt="微信二维码" className="wechat-qr" />
            <p>扫码添加微信，获取更多课程信息</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailSection; 
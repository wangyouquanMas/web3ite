import React, { useState } from 'react';
import './CourseSchedule.css';
// Import the WeChat QR code image
import wechatQrImage from '../assets/images/wechat.jpg';

const CourseSchedule: React.FC = () => {
  const [showWechatModal, setShowWechatModal] = useState(false);
  
  const batches = [
    { id: 1, date: '2025年2月15日', slots: { total: 10, filled: 10 }, isFull: true },
    { id: 2, date: '2025年5月15日', slots: { total: 10, filled: 7 }, isFull: false },
    { id: 3, date: '2025年8月15日', slots: { total: 10, filled: 0 }, isFull: false },
    { id: 4, date: '2025年11月15日', slots: { total: 10, filled: 0 }, isFull: false },
  ];

  const openWechatModal = () => {
    setShowWechatModal(true);
  };

  const closeWechatModal = () => {
    setShowWechatModal(false);
  };

  const pricingPlans = [
    {
      id: 1,
      name: '基础知识包',
      priceUSDT: 59,
      description: '快速入门Solana生态',
      badge: '',
      features: [
        '1次答疑服务',
        'web3基础入门教程',
        '精选学习资源合集',
        '行业最新技术趋势更新',
        '专属学习社群',
        '高薪工作机会推荐'
      ]
    },
    {
        id: 2,
        name: 'Web3实战开发',
      priceUSDT: 549,
      description: '从零到一完整项目实战',
      badge: '最受欢迎',
      features: [
        '包含基础知识包所有内容',
        '100+ 节精品视频课程',
        '课后实践加答案解析',
        '学习群答疑服务',
        '1对1简历优化 + 求职指导',
        '生产级项目实战',
        '试用期指导',
        '黑客松参赛指导',
        '2个月学习周期',
        '无限次重复学习'
      ]
    },
    {
      id: 3,
      name: '全流程VIP陪跑',
      priceUSDT: 1549,
      description: '一对一全程指导',
      badge: 'VIP专享',
      features: [
        '包含实战开发全部内容',
        '模拟面试',
        '面试复盘(持续跟踪)',
        '英语口语学习路径规划',
        '共6次咨询服务(每次1h)',
        '持续6个月跟踪服务'
      ]
    }
  ];

  return (
    <div>
      <section id="fee" className="course-fee">
        <div className="section-transition-top"></div>
        <div className="section-header">
          <h2>课程费用</h2>
          <p>选择适合您的学习方案，开启Web3开发之旅</p>
        </div>
        <div className="fee-container">
          {pricingPlans.map(plan => (
            <div key={plan.id} className={`price-card ${plan.badge === '最佳选择' ? 'featured' : ''}`}>
              {plan.badge && <div className="price-badge">{plan.badge}</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.priceUSDT}</span>
                <span className="currency">USDT</span>
              </div>
              <p className="price-description">{plan.description}</p>
              <ul className="price-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="btn primary" onClick={openWechatModal}>咨询详情</button>
            </div>
          ))}
        </div>
        <div className="section-transition-bottom"></div>
      </section>

      {/* Wechat Modal */}
      {showWechatModal && (
        <div className="wechat-modal-overlay" onClick={closeWechatModal}>
          <div className="wechat-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeWechatModal}>×</button>
            <h3>扫描二维码联系我们</h3>
            <div className="wechat-qr-container">
              <img 
                src={wechatQrImage} 
                alt="微信二维码" 
                className="wechat-qr-image" 
              />
            </div>
            <p>请扫描上方二维码添加up微信</p>
          </div>
        </div>
      )}

      {/* 
      <section id="schedule" className="course-schedule">
        <div className="section-transition-top"></div>
        <div className="section-header">
          <h2>开班信息</h2>
          <p>选择适合您的课程批次，开始您的Solana开发之旅</p>
        </div>
        <div className="schedule-container">
          <div className="batches">
            {batches.map(batch => (
              <div key={batch.id} className={`batch-card ${batch.isFull ? 'full' : ''}`}>
                <div className="batch-header">
                  <h3>第{batch.id}期</h3>
                  {batch.isFull && <span className="batch-status full">已满</span>}
                  {!batch.isFull && batch.slots.filled > 0 && (
                    <span className="batch-status available">招生中</span>
                  )}
                  {batch.slots.filled === 0 && (
                    <span className="batch-status new">未开放</span>
                  )}
                </div>
                <div className="batch-details">
                  <div className="batch-date">
                    <strong>开班日期:</strong> {batch.date}
                  </div>
                  <div className="batch-slots">
                    <strong>名额:</strong> {batch.slots.filled}/{batch.slots.total}
                    <div className="progress-bar">
                      <div 
                        className="progress" 
                        style={{ width: `${(batch.slots.filled / batch.slots.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <button 
                  className={`btn ${batch.isFull ? 'disabled' : 'primary'}`}
                  disabled={batch.isFull}
                >
                  {batch.isFull ? '名额已满' : '申请报名'}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="section-transition-bottom"></div>
      </section> */}
    </div>
  );
};

export default CourseSchedule; 
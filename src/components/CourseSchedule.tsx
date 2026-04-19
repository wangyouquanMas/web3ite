import React, { useState } from 'react';
import './CourseSchedule.css';
import wechatQrImage from '../assets/images/wechat.jpg';

type PricingPlan = {
  id: number;
  name: string;
  priceUSDT: number;
  discount?: number;
  description: React.ReactNode;
  badge?: string;
  features: Array<string | React.ReactNode>;
};

const CourseSchedule: React.FC = () => {
  const [showWechatModal, setShowWechatModal] = useState(false);

  const openWechatModal = () => setShowWechatModal(true);
  const closeWechatModal = () => setShowWechatModal(false);

  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: 'Web3实战开发',
      priceUSDT: 1018,
      discount: 0.5,
      description: '从零到一完整项目实战',
      badge: '最受欢迎',
      features: [
        'DEX聚合器100+ 节精品视频课程',
        '课后实践加答案解析',
        '学习群答疑服务',
        '生产级项目实战',
        '大量真实面经',
        '简历修改',
        '专属社区(实时交流)',
      ],
    },
    {
      id: 2,
      name: 'Web3实战+合约开发',
      priceUSDT: 1258,
      discount: 0.5,
      description: '从零到一完整项目实战',
      badge: '最受欢迎',
      features: [
        'DEX聚合器100+ 节精品视频课程',
        'Pumpfun合约从零到一实现',
        'EVM(ETH/BASE/BSC)全系列解析实战',
        '课后实践加答案解析',
        '学习群答疑服务',
        '生产级项目实战',
        '大量真实面经',
        '简历修改',
        '专属社区(实时交流)',
      ],
    },
    {
      id: 3,
      name: 'Web3实战+合约开发+路由聚合器开发',
      priceUSDT: 1498,
      discount: 0.5,
      description: '实战、合约与链下路由聚合一站式',
      badge: '含路由专项',
      features: [
        'DEX聚合器100+ 节精品视频课程',
        'Pumpfun合约从零到一实现',
        'EVM(ETH/BASE/BSC)全系列解析实战',
        'Router 路由聚合器实战项目',
        '课后实践加答案解析',
        '学习群答疑服务',
        '生产级项目实战',
        '大量真实面经',
        '简历修改',
        '专属社区(实时交流)',
      ],
    },
    {
      id: 4,
      name: '全流程VIP陪跑',
      priceUSDT: 2449,
      description: <span className="price-highlight-text">一对一全程指导</span>,
      badge: 'VIP专享',
      features: [
        '个性化学习路径规划',
        '包含实战开发全部内容',
        'EVM全系列解析实战',
        '合约开发实战',
        'Router 路由聚合器实战项目',
        '1对1简历优化 + 求职指导',
        '模拟面试',
        '面试复盘(持续跟踪)',
        '英语口语学习路径规划',
        <span key="vip-meetings" className="price-highlight-text">每周3-4次,1v1会议，进度跟踪及复盘</span>,
        <span key="vip-probation" className="price-highlight-text">试用期指导</span>,
        '持续6个月跟踪服务',
      ],
    },
  ];

  return (
    <div>
      <section id="fee" className="course-fee">
        <div className="section-transition-top"></div>
        <div className="section-header">
          <h2>课程费用</h2>
          <p>选择适合您的学习方案，开启Web3开发之旅</p>
        </div>
        <p className="fee-pricing-policy">
          为了给大家提供更高性价比的内容体验，同时为了打击盗版，<strong>所有内容全部五折</strong>
          ；同时<strong>可免费进入付费社群</strong>，享 <strong>1 年</strong>权益
          <span className="fee-note-highlight">（现价 999）</span>。
        </p>
        <div className="fee-container">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`price-card ${plan.badge === '最佳选择' ? 'featured' : ''}`}>
              {plan.badge && <div className="price-badge">{plan.badge}</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.discount != null && plan.discount < 1 ? (
                  <>
                    <div className="price-discount-line">
                      <span className="price-zhe-badge">{Math.round(plan.discount * 10)}折</span>
                    </div>
                    <div className="price-row price-row--sale">
                      <span className="amount">{Math.round(plan.priceUSDT * plan.discount)}</span>
                      <span className="currency">USDT</span>
                    </div>
                    <div className="price-row price-row--original">
                      <span className="price-original-label">原价</span>
                      <span className="price-original-value">{plan.priceUSDT}</span>
                      <span className="currency currency--muted">USDT</span>
                    </div>
                  </>
                ) : (
                  <div className="price-row price-row--sale">
                    <span className="amount">{plan.priceUSDT}</span>
                    <span className="currency">USDT</span>
                  </div>
                )}
              </div>
              <p className="price-description">{plan.description}</p>
              <ul className="price-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button type="button" className="btn primary" onClick={openWechatModal}>
                咨询详情
              </button>
            </div>
          ))}
        </div>

        <div className="section-transition-bottom"></div>
      </section>

      {showWechatModal && (
        <div className="wechat-modal-overlay" onClick={closeWechatModal}>
          <div className="wechat-modal-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="close-modal-btn" onClick={closeWechatModal}>
              ×
            </button>
            <h3>扫描二维码联系我们</h3>
            <div className="wechat-qr-container">
              <img src={wechatQrImage} alt="微信二维码" className="wechat-qr-image" />
            </div>
            <p>请扫描上方二维码添加up微信</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseSchedule;

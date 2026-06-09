import React, { useState } from 'react';
import './CourseSchedule.css';
import wechatQrImage from '../assets/images/wechat.jpg';

type PricingPlan = {
  id: number;
  name: string;
  /** 套餐类别：自学 / 小班 / 1v1 */
  category: string;
  priceUSDT: number;
  /** 每期人数 / 开班节奏等补充说明（小班用） */
  cohortNote?: React.ReactNode;
  /** 早鸟实付价（覆盖显示），配合 priceUSDT 作为划线原价 */
  salePriceUSDT?: number;
  description: React.ReactNode;
  badge?: string;
  /** 主推套餐（小班）高亮显示 */
  featured?: boolean;
  /** 与 PILLAR_COPY 四项对应（DEX → Pumpfun → Router → EVM），true 表示本套餐含该项 */
  pillars: [boolean, boolean, boolean, boolean];
  features: Array<string | React.ReactNode>;
};

const PILLAR_COPY: readonly [string, string, string, string] = [
  'DEX聚合器100+ 节精品视频课程',
  'Pumpfun合约从零到一实现',
  'Router 路由聚合器实战项目',
  '预测市场（EVM）全栈实战',
];

const CourseSchedule: React.FC = () => {
  const [showWechatModal, setShowWechatModal] = useState(false);

  const openWechatModal = () => setShowWechatModal(true);
  const closeWechatModal = () => setShowWechatModal(false);

  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: '自学套餐',
      category: '自学',
      priceUSDT: 1049,
      description: '一次购买，永久回看 · 按自己的节奏学',
      pillars: [true, true, true, false],
      features: [
        <span key="self-combo" className="price-highlight-text">Web3实战 + 合约开发 + 路由聚合器开发</span>,
        '课后实践加答案解析',
        '学习群答疑服务',
        '生产级项目实战',
        '大量真实面经',
        '专属社区(实时交流)',
      ],
    },
    {
      id: 2,
      name: '小班课程',
      category: '小班',
      priceUSDT: 2049,
      description: '小班直播带练 · 带改作业 · 带找工作',
      badge: '主推',
      featured: true,
      cohortNote: (
        <>
          <strong>下期 7 月 1 日开班</strong>，每 2 个月一期 · 为保障质量，每期仅招 <strong>5 人</strong>
        </>
      ),
      pillars: [true, true, true, true],
      features: [
        <span key="class-include" className="price-highlight-text">含自学套餐全部内容</span>,
        <span key="class-cohort" className="price-highlight-text">每 2 个月一期，为保障质量每期仅招 5 人</span>,
        '小班直播带练 + 作业批改',
        '简历修改 + 求职指导',
        '模拟面试 + 面经复盘',
        '专属小班社群（高频答疑）',
      ],
    },
    {
      id: 3,
      name: '1v1 全程陪跑',
      category: '1v1',
      priceUSDT: 3899,
      description: <span className="price-highlight-text">一对一全程指导</span>,
      badge: 'VIP专享',
      pillars: [true, true, true, true],
      features: [
        <span key="vip-include" className="price-highlight-text">含小班课程全部内容</span>,
        '个性化学习路径规划',
        '1对1 简历优化 + 求职指导',
        '模拟面试 + 面试复盘(持续跟踪)',
        <span key="vip-meetings" className="price-highlight-text">每周 1v1 会议，进度跟踪及复盘</span>,
        '英语口语学习路径规划',
        <span key="vip-probation" className="price-highlight-text">试用期指导</span>,
        '持续 6 个月跟踪服务',
      ],
    },
  ];

  return (
    <div>
      <section id="fee" className="course-fee">
        <div className="section-transition-top"></div>
        <div className="section-header">
          <h2>课程费用</h2>
          <p>三种学习方式：自学 · 小班 · 1v1，<strong className="fee-note-highlight">主推小班带练</strong>，开启你的 Web3 之旅</p>
        </div>
        <p className="fee-pricing-policy">
          为了给大家提供更高性价比的内容体验，同时为了打击盗版，所有付费用户<strong>可免费进入付费社群</strong>，享 <strong>1 年</strong>权益
          <span className="fee-note-highlight">（现价 999）</span>。
        </p>

        <aside className="fee-authenticity-notice" role="note">
          <p>
            现在市面上看到卖聚合器相关课程的，基本都是盗版我资料流出去的。
            <a
              className="fee-authenticity-notice__link fee-authenticity-notice__link--highlight"
              href="https://www.bilibili.com/video/BV1NqDJB4Eh2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看具体情况（被盗版维权进展 · B 站）
            </a>
            很多没有后续维护等，注意辨别。
            DEX 聚合、Pumpfun、路由等都是公司实际项目，并结合阅读大量源码、与行业内朋友交流之后独立研发出来，内容质量和售后都有保障。
          </p>
        </aside>

        <div className="fee-container">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`price-card ${plan.featured ? 'featured' : ''}`}>
              {plan.badge && <div className="price-badge">{plan.badge}</div>}
              <span className={`price-category price-category--${plan.category === '小班' ? 'class' : plan.category === '1v1' ? 'vip' : 'self'}`}>
                {plan.category}
              </span>
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.salePriceUSDT != null && plan.salePriceUSDT < plan.priceUSDT ? (
                  <>
                    <div className="price-discount-line">
                      <span className="price-zhe-badge">
                        提前预定 {Math.round((plan.salePriceUSDT / plan.priceUSDT) * 10)}折
                      </span>
                    </div>
                    <div className="price-row price-row--sale">
                      <span className="amount">{plan.salePriceUSDT}</span>
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
              {plan.cohortNote && <p className="price-cohort-note">{plan.cohortNote}</p>}
              <p className="price-description">{plan.description}</p>
              <ul className="price-features">
                {PILLAR_COPY.map((pillarText, i) =>
                  plan.pillars[i] ? (
                    <li key={`pillar-${plan.id}-${i}`}>
                      <span className="price-highlight-text">{pillarText}</span>
                    </li>
                  ) : null,
                )}
                {plan.features.map((feature, index) => (
                  <li key={`feat-${plan.id}-${index}`}>{feature}</li>
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

      <section id="community-delivery" className="community-section" aria-labelledby="community-delivery-heading">
        <div className="section-transition-top" aria-hidden="true" />
        <div className="community-section-inner">
          <div className="community-delivery-overview">
            <h3 id="community-delivery-heading" className="community-delivery-title">
              社群内容交付总览
            </h3>
            <div className="community-delivery-pricing">
            </div>

            <div className="community-modules-grid">
              <article className="community-module">
                <h4 className="community-module-heading">
                  <span className="community-module-num">01</span> 英语提升
                </h4>
                <ul>
                  <li>听力常见坑点与提分经验</li>
                  <li>口语表达与常见问题</li>
                  <li>写作结构与逻辑优化方案</li>
                  <li>阅读策略与复盘方法</li>
                  <li>英语产品一个月免费福利</li>
                </ul>
              </article>
              <article className="community-module">
                <h4 className="community-module-heading">
                  <span className="community-module-num">02</span> Web3实战
                </h4>
                <ul>
                  <li>Pumpfun 合约实战拆解</li>
                  <li>Router 路由聚合器实战拆解</li>
                  <li>预测市场（EVM）全栈实战拆解</li>
                  <li>Smart Wallet 实战拆解</li>
                  <li>UniswapV3 实战拆解</li>
                </ul>
              </article>
              <article className="community-module">
                <h4 className="community-module-heading">
                  <span className="community-module-num">03</span> 产品出海
                </h4>
                <ul>
                  <li>需求与价值分析总结</li>
                  <li>出海常见坑点与解决思路</li>
                  <li>增长思维与踩坑总结</li>
                  <li>从0到1做英语产品实践总结</li>
                </ul>
              </article>
              <article className="community-module">
                <h4 className="community-module-heading">
                  <span className="community-module-num">04</span> AI实践
                </h4>
                <ul>
                  <li>Agent 工作流稳定性实践</li>
                  <li>MCP 使用与工具生态分享</li>
                  <li>Claude Code 核心与源码解读</li>
                  <li>工作流实践经验总结</li>
                </ul>
              </article>
            </div>

            <div className="community-weekly">
              <h4 className="community-weekly-title">每周固定节奏</h4>
              <ul className="community-weekly-list">
                <li>
                  <strong>每周固定直播：</strong>
                  讲解 Web3 核心技术原理或产品出海复盘等
                </li>
                <li>
                  <strong>每日分享：</strong>
                  英语 + AI + 需求分析 + 流量运营 + 当下 Web3 热点等
                </li>
                <li>
                  <strong>资源库：</strong>
                  所有核心资源将补充至资料网站：{' '}
                  <a
                    href="https://web3-lab-three.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="community-resource-link community-resource-link--highlight"
                  >
                    https://web3-lab-three.vercel.app/
                  </a>
                </li>
              </ul>
            </div>

            <p className="community-value-prop">
              你将获得：系统化知识交付 + 实时反馈 + 持续迭代
            </p>

           
          </div>
        </div>
        <div className="section-transition-bottom" aria-hidden="true" />
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

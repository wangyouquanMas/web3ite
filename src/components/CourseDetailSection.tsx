import React, { useState } from 'react';
import './CourseDetailSection.css';
// Import the WeChat QR code image
import wechatQrImage from '../assets/images/wechat.jpg';

type CourseChapterCard = {
  id: number;
  title: string;
  level: string;
  description: string;
  topicsLeft: string[];
  topicsRight: string[];
  duration: string;
  icon: React.ReactNode;
};

const CourseDetailSection: React.FC = () => {
  const [showWechatModal, setShowWechatModal] = useState(false);

  const openWechatModal = () => {
    setShowWechatModal(true);
  };

  const closeWechatModal = () => {
    setShowWechatModal(false);
  };

  const renderChapterGrid = (chapters: CourseChapterCard[]) => (
    <div className="course-detail-grid">
      {chapters.map((chapter) => (
        <div key={chapter.id} className="course-chapter-card">
          <div className="chapter-header">
            <div className="chapter-icon-container">{chapter.icon}</div>
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
  );

  const courseChapters: CourseChapterCard[] = [
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
        'Golang核心特性与并发模型',
        'Rust核心特性及合约开发基础',
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
        'POH历史证明优化',
        'UniswapV3源码及实战',
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
      description: '从零到一，一行行跟着敲代码，实现完整DEX项目开发，包括架构设计、微服务搭建、数据库部署、前端实现等端到端开发',
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

  const pumpfunCourseChapters: CourseChapterCard[] = [
    {
      id: 1,
      title: '模型与账户设计',
      level: 'P0',
      description: '理解 Pump 类发射台业务模型，梳理链上账户、PDA 与权限边界，为合约实现打地基',
      topicsLeft: ['Bonding curve 与定价直觉', 'Mint / 迁移生命周期', '相关 Program 与账户关系'],
      topicsRight: ['PDA 派生与种子设计', '权限与签名方梳理', '开发网环境与调试思路'],
      duration: '1-2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19h16M6 16l3-8 4 6 3-10 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: '合约骨架与指令',
      level: 'P1',
      description: '从零搭建链上程序骨架，拆解核心指令与状态迁移，对齐官方/社区常见实现思路',
      topicsLeft: ['项目结构与入口', '指令分发与反序列化', '错误码与可测试性'],
      topicsRight: ['状态账户布局', '核心指令：创建 / 交易 / 迁移', '安全边界与断言'],
      duration: '2-3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '解析与数据面',
      level: 'P1',
      description: '把链上行为变成结构化事件：池创建、buy/sell、迁移等，服务索引与展示',
      topicsLeft: ['日志与事件字段对齐', '解析 buy / sell / 池子创建', '元数据与补充数据源'],
      topicsRight: ['与 DEX 解析的异同', '失败与重组场景', '对账与回放'],
      duration: '1-2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" />
          <path d="M14 2v6h6M8 13h8M8 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Swap 构造与对接',
      level: 'P2',
      description: '掌握 Pumpfun Swap 相关交易构造与解析，并能接入聚合/路由层调用路径',
      topicsLeft: ['账户列表与依赖', '滑点与最小输出', '与常见路由参数对齐'],
      topicsRight: ['构造失败排查', '解析回填业务模型', '和聚合器联调要点'],
      duration: '2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12M17 20l4-4M17 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 5,
      title: '测试、部署与观测',
      level: 'P2',
      description: '从本地单测到开发网部署，建立日志与指标，保障迭代效率',
      topicsLeft: ['单元与集成测试策略', '开发网部署与升级注意点', '常见坑与排障清单'],
      topicsRight: ['模拟交易与快照', '监控指标建议', '版本兼容与依赖管理'],
      duration: '1-2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 6,
      title: '综合实战',
      level: 'P3',
      description: '串联「合约 + 解析 + Swap」形成可演示的最小产品闭环，贴近真实交付节奏',
      topicsLeft: ['里程碑拆分与验收标准', '接口与文档化', '性能与成本粗估'],
      topicsRight: ['安全自查清单', '扩展：多环境/多版本', '简历与面试可讲亮点'],
      duration: '2-3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const routerCourseChapters: CourseChapterCard[] = [
    {
      id: 1,
      title: '路由问题抽象',
      level: 'R0',
      description: '把「用户要换币」抽象成可计算的报价与路径问题，明确链上约束与产品目标',
      topicsLeft: ['询价 / 报价 / 成交链路', '多池并存的组合爆炸', '链上确认与最终性'],
      topicsRight: ['成功率与体验指标', '与钱包、节点交互边界', '需求到接口的拆解'],
      duration: '1周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: '报价与路径搜索',
      level: 'R1',
      description: '实现多跳、拆单、限额下的路径搜索与剪枝，平衡精度与延迟',
      topicsLeft: ['图模型与中间代币', '剪枝与启发式', '拆单与深度约束'],
      topicsRight: ['数值精度与舍入', '缓存与增量更新', '最坏情况降级策略'],
      duration: '2-3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12h4l2-6 4 12 2-6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '滑点、风控与回滚',
      level: 'R1',
      description: '把最小输出、限额、失败回滚和产品提示串成一致的风控层',
      topicsLeft: ['minOut / deadline 语义', '部分成交与重试', '用户可见错误归因'],
      topicsRight: ['模拟与预检（simulate）', '黑名单与熔断', '日志与告警'],
      duration: '1-2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18M5 9l7-6 7 6M5 15l7 6 7-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: '链下服务与多链适配',
      level: 'R2',
      description: '搭建 Quote / Route API，抽象 Solana 与 EVM 等异构链的适配层',
      topicsLeft: ['服务分层与依赖注入', '限流、鉴权与配额', '配置与多环境'],
      topicsRight: ['EVM 路由差异点', 'Solana 账户模型对接', '协议升级与兼容策略'],
      duration: '2-3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 5,
      title: '数据、回放与压测',
      level: 'R2',
      description: '用真实流量样本验证路由质量，建立回归集与压测基线',
      topicsLeft: ['录制与回放工具链', '关键指标：延迟、命中率', 'Diff 与回归门禁'],
      topicsRight: ['影子流量与灰度', '容量规划粗算', '事故演练与复盘模板'],
      duration: '1-2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 14l4-4 3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 6,
      title: '项目集成与交付',
      level: 'R3',
      description: '与现有 DEX/钱包/前端串联，完成从设计文档到可上线模块的交付闭环',
      topicsLeft: ['API 契约与版本化', '联调清单与里程碑', '文档与运维交接'],
      topicsRight: ['面试：如何讲清路由架构', '扩展：MEV / 私有 RPC', '简历项目描述模板'],
      duration: '2-3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 21h8M12 17v4M6 8l6-5 6 5v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <section id="course-detail" className="course-detail">
        <div className="section-header">
          <h2>DEX 聚合器 · 课表详情</h2>
          <p>从<span className="highlight">基础入门</span>到<span className="highlight">项目实战</span>，循序渐进的 Web3 开发学习路径</p>
        </div>
        {renderChapterGrid(courseChapters)}
        <div className="course-detail-cta">
          <button className="btn primary" onClick={openWechatModal}>咨询课程详情</button>
        </div>
      </section>

      <section id="pumpfun-course-detail" className="course-detail course-detail-pumpfun">
        <div className="section-header">
          <h2>Pumpfun 合约 · 从零到一</h2>
          <p>
            面向<span className="highlight-pumpfun">Solana 发射台类业务</span>，覆盖合约、解析与 Swap 对接，与「Web3 实战+合约开发」套餐内容对齐
          </p>
        </div>
        {renderChapterGrid(pumpfunCourseChapters)}
        <div className="course-detail-cta course-detail-cta-pumpfun">
          <button className="btn primary" onClick={openWechatModal}>咨询 Pumpfun 专项</button>
        </div>
      </section>

      <section id="router-course-detail" className="course-detail course-detail-router">
        <div className="section-header">
          <h2>Router 路由聚合器 · 实战项目</h2>
          <p>
            聚焦<span className="highlight-router">链下报价与路径</span>、多协议适配与工程化交付，与含「路由聚合器」套餐能力对应
          </p>
        </div>
        {renderChapterGrid(routerCourseChapters)}
        <div className="course-detail-cta course-detail-cta-router">
          <button className="btn primary" onClick={openWechatModal}>咨询路由专项</button>
        </div>
      </section>

      {/* Wechat Modal */}
      {showWechatModal && (
        <div className="modal-overlay" onClick={closeWechatModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeWechatModal}>&times;</button>
            <h3>微信咨询</h3>
            <img src={wechatQrImage} alt="微信二维码" className="wechat-qr" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailSection; 
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
  const [activeCourse, setActiveCourse] = useState('dex');

  const openWechatModal = () => {
    setShowWechatModal(true);
  };

  const closeWechatModal = () => {
    setShowWechatModal(false);
  };

  const renderChapterGrid = (chapters: CourseChapterCard[], gridExtraClass?: string) => (
    <div className={gridExtraClass ? `course-detail-grid ${gridExtraClass}` : 'course-detail-grid'}>
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

  const routerCourseChapters: CourseChapterCard[] = [
    {
      id: 1,
      title: 'Go 工程与仓库结构',
      level: 'L0',
      description: '能独立编译、跑测试、跟读 router_v1 目录与依赖服务边界。',
      topicsLeft: [
        'Go modules、go test、benchmark 基础',
        'go-zero / 服务分层（logic、svc、internal）粗读',
        '本仓库 consumer、cache、resources 的职责划分',
      ],
      topicsRight: ['作业：跑通 resources/experiments 下单元测试，改一个边界 case'],
      duration: '1～2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: '图论与路由入门',
      level: 'L1',
      description: '建立「代币图为点、池为边、汇率为乘积」的心智模型，并理解为何需要线图与 DP。',
      topicsLeft: [
        '有向图、最短路、松弛的直观含义',
        'Bellman–Ford 与负环检测（与 bellman_ford_moore.go 对照）',
        '−ln(R) 把「汇率乘积」变成「边权之和」',
      ],
      topicsRight: [
        '作业：阅读 route_paper/5.1.Bellman-Ford-Moore.md，手绘小环 ∏R>1 与 ∑(−ln R)<0 的对应关系',
      ],
      duration: '1～2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '线图与「路径爆炸」',
      level: 'L1',
      description: '理解聚合器为何不用「枚举所有简单路径」，而用线图上的有限轮更新。（核心模块）',
      topicsLeft: [
        'route_paper/1.如何避免路径爆炸.md 主线',
        '线图顶点=原图边（池）、线图边=合法池间跳转',
        '剪枝（如互惠来回）、有限步终止与储备、AMM 性质在文档中的角色',
      ],
      topicsRight: ['作业：用伪代码写清「一轮更新」在输入输出上做了什么'],
      duration: '2～3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12L12 3L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12L12 21L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: '缓存、数据与消息',
      level: 'L1',
      description: '弄清线上路由依赖的数据从哪来、如何更新。',
      topicsLeft: [
        'PathCache / DepthCache 的加载与使用场景（consumer）',
        'MySQL 与全量/增量加载思路（以代码与配置为准）',
        'Kafka 在路由/市场数据流中的角色（按仓库实际订阅为准）',
      ],
      topicsRight: ['作业：画一张「请求 → 缓存 → 构图 → 报价」的时序草图'],
      duration: '1～2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 5,
      title: '报价与 Swap 逻辑走读',
      level: 'L2',
      description: '能把一次 Quote 从入口函数跟到「路径 + 池子选择」的关键分支。',
      topicsLeft: ['consumer 侧 quotelogic、quote/swapservice 等入口', '与 PathCache、DepthCache 的协作方式'],
      topicsRight: [
        '滑点、多池比较的工程细节（以当前实现为准）',
        '作业：选一个 token 对，用日志或调试走通一次完整报价路径',
      ],
      duration: '1～2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 6,
      title: '综合实战与扩展',
      level: 'L2',
      description: '在真实约束下思考「检测套利」与「主路由目标」的差异。',
      topicsLeft: [
        'Bellman–Ford 负环检测 vs 主路由最优化报价（见 5.1 Q5）',
        '可选：mock 池子数据对接 ArbitrageNegativeCycle 实验（bellman_ford_moore_pool_test.go）',
        '可选：阅读论文/博客链接（resources/readme.md）',
      ],
      topicsRight: [
        '大作业（任选）：A 扩展/优化某链路径缓存策略说明文档；或 B 设计「批处理套利扫描」模块方案（架构与数据流）',
      ],
      duration: '1～2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 7,
      title: '综合篇',
      level: 'L3',
      description: '核心能力回顾、仓库文档锚点与专项定位；与 Pumpfun 链上合约方向对照。',
      topicsLeft: [
        '线图 + 迭代 DP、PathCache / DepthCache',
        'Quote / SwapService、experiments 与 route_paper',
        '参考：router_v1/resources/route_paper/、readme.md、bellman_ford_moore.go',
      ],
      topicsRight: [
        'Pumpfun：合约 + Anchor + 全栈一条链',
        'Router：链下聚合与路由，重图算法与缓存',
        '技术栈：Go、gRPC、MySQL、Kafka、go-zero、Bellman–Ford 等',
      ],
      duration: '复盘',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19V9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 6V3M8 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const evmDexAggregatorIcon = (
    <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 22V12M21 7L12 12L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const evmDexAggregatorCourseChapters: CourseChapterCard[] = [
    {
      id: 1,
      title: 'EVM 数据模型与交易解析',
      level: 'L0 · Day 1–2',
      description: '从区块、交易、Receipt、Logs 和 Trace 建立 EVM 数据事实层，为 DEX 数据产品提供可靠输入。',
      topicsLeft: [
        'block / transaction / receipt 数据结构',
        'Event topic、data 与 ABI 解码',
        'internal call、delegatecall 与 call trace',
      ],
      topicsRight: [
        '交易状态、确认深度与链重组',
        '实验：完整还原一笔多协议 Swap',
        '验收：成交、转账和手续费可以互相对账',
      ],
      duration: '2 天',
      icon: evmDexAggregatorIcon,
    },
    {
      id: 2,
      title: '实时 Consumer 与可靠数据管道',
      level: 'L1 · Day 3–4',
      description: '通过 WebSocket 快通道和区块回放构建不丢数、可回滚、可恢复的多链数据摄取服务。',
      topicsLeft: [
        'WebSocket 订阅、RPC 补块与 checkpoint',
        'txHash + logIndex 幂等键与重复消费',
        'reorg 检测、回滚和 finalized 推进',
      ],
      topicsRight: [
        'Kafka 分区、背压、重试与死信队列',
        '实验：断流、漏块和重组故障注入',
        '验收：恢复后数据库与链上事实一致',
      ],
      duration: '2 天',
      icon: evmDexAggregatorIcon,
    },
    {
      id: 3,
      title: 'V2 / V3 / V4 协议解析',
      level: 'L1 · Day 5–7',
      description: '解析不同 AMM 的池发现、流动性状态与 Swap 事件，形成统一 Pool、Pair 和 Trade 数据模型。',
      topicsLeft: [
        'V2 Factory、Pair、reserve 与 Swap/Sync',
        'V3 Pool、slot0、tick、liquidity 与事件',
        'V4 Singleton、PoolKey、poolId 与 Hook',
      ],
      topicsRight: [
        'Factory、bytecode、token 和 fee 可信校验',
        '协议差异适配与未知 Hook 隔离',
        '实验：同一交易解析为统一 Trade 记录',
      ],
      duration: '3 天',
      icon: evmDexAggregatorIcon,
    },
    {
      id: 4,
      title: 'Token、行情与 K 线系统',
      level: 'L2 · Day 8–9',
      description: '把原始链上事件加工成代币、交易对、价格、成交量、Holder 与 OHLCV 等可查询产品数据。',
      topicsLeft: [
        'Token / Pair / Pool / Trade 表结构',
        '价格锚定、decimal 与 USD 计价',
        '实时 K 线聚合与迟到事件修正',
      ],
      topicsRight: [
        'Holder、流动性和风险指标',
        'Redis 热数据与历史数据库分层',
        '实验：链上 Swap → 实时 K 线闭环',
      ],
      duration: '2 天',
      icon: evmDexAggregatorIcon,
    },
    {
      id: 5,
      title: '行情 API 与实时推送',
      level: 'L2 · Day 10–11',
      description: '对外提供 Token、Pair、Trade、K 线和钱包数据 API，并通过 WebSocket 推送实时行情。',
      topicsLeft: [
        'REST / gRPC / WebSocket 服务边界',
        '分页、排序、搜索与多链命名空间',
        '缓存一致性、热点保护和限流',
      ],
      topicsRight: [
        '钱包持仓、成交历史和 PnL 数据',
        '实验：实现交易流与 K 线订阅',
        '验收：断线重连后无重复、无数据缺口',
      ],
      duration: '2 天',
      icon: evmDexAggregatorIcon,
    },
    {
      id: 6,
      title: '交易服务与 Router 集成边界',
      level: 'L2 · Day 12–13',
      description: 'DEX 聚合器负责用户、行情与交易生命周期；最佳路径计算和 calldata 构造交给独立 Router 服务。',
      topicsLeft: [
        'Quote / Build API 契约与 RoutePlan',
        'Allowance、Permit2、nonce 与 EIP-1559',
        '订单 pending / confirmed / reverted 状态机',
      ],
      topicsRight: [
        'minOut、deadline 与交易前模拟',
        'Receipt、Logs 与余额增量成交对账',
        '实验：聚合器调用 Router 完成一次真实闭环',
      ],
      duration: '2 天',
      icon: evmDexAggregatorIcon,
    },
    {
      id: 7,
      title: '微服务部署、监控与综合验收',
      level: 'L3 · Day 14–15',
      description: '部署 Consumer、Market、Trade、Gateway 与数据组件，通过延迟、完整性和故障恢复证明系统可用。',
      topicsLeft: [
        'Go 服务、Kafka、Redis、PostgreSQL 部署',
        '消费延迟、漏块、解析失败和 API p95 指标',
        'RPC 超时、限流、熔断与节点切换',
      ],
      topicsRight: [
        '数据回放、Schema 演进与灰度发布',
        '最终作品：多链 DEX 数据与交易平台',
        '边界：本课程不深入路径搜索算法和路由合约',
      ],
      duration: '2 天',
      icon: evmDexAggregatorIcon,
    },
  ];

  const evmRouterCourseChapters: CourseChapterCard[] = [
    {
      id: 1,
      title: 'Router 边界与 EVM 交易事实',
      level: 'L0 · Day 1–2',
      description: '先区分行情看板、DEX Router 与真正的聚合器，再用 transaction、receipt、logs 和 trace 还原一笔多跳交易。',
      topicsLeft: [
        '聚合器的数据面、决策面与执行面',
        'Quote、RoutePlan、交易与结算事实的边界',
        'transaction / receipt / logs / trace 各自回答什么',
      ],
      topicsRight: [
        '实验：用 Go 解析一笔 EVM 多跳 Swap',
        '验收：按 txHash + logIndex 还原事件和余额变化',
        '面试：为什么不能只解析 calldata？',
      ],
      duration: '2 天',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22V12M21 7L12 12L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: '实时摄取与可信 Pool Registry',
      level: 'L1 · Day 3–4',
      description: '通过 WS 快通道与 confirmed 回放维护可回滚的池状态，并从 Factory / PoolManager 事件安全发现池子。',
      topicsLeft: [
        'WebSocket、checkpoint、幂等键与补块',
        'blockHash、确认深度与 reorg 回滚',
        'V2/V3 Factory 与 V4 PoolManager 池发现',
      ],
      topicsRight: [
        '验证 factory、bytecode、token 与 fee 参数',
        '实验：重组和漏块故障注入',
        '验收：假池不能进入 Token/Pool 图',
      ],
      duration: '2 天',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="2" />
          <path d="M4 5V12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12V5M4 12V19C4 20.7 7.6 22 12 22C16.4 22 20 20.7 20 19V12" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'V2 / V3 / V4 本地报价',
      level: 'L1 · Day 5–7',
      description: '从 reserve、tick 到 PoolKey / Hook，真正理解三代 AMM 的流动性表达和 exact-input 报价。',
      topicsLeft: [
        'V2：x·y=k、手续费、价格冲击与整数舍入',
        'V3：sqrtPriceX96、TickBitmap 与跨 tick 流动性',
        'V4：Singleton、poolId、PoolKey 与 dynamic fee',
      ],
      topicsRight: [
        'Hook 能改变什么，未知行为如何隔离',
        '实验：本地报价与 Quoter / eth_call 对账',
        '验收：误差、方向和边界金额均有测试证据',
      ],
      duration: '3 天',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18L8 13L12 16L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 6H20V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: '统一 Adapter 与多跳路径搜索',
      level: 'L2 · Day 8–9',
      description: '把不同 DEX 转换为同一报价接口和 Token/Pool 图，在有限延迟预算内搜索 1/2/3-hop 候选。',
      topicsLeft: [
        'QuoteExactIn、依赖版本、新鲜度与错误分类',
        'Token 为节点、Pool 为边的邻接图',
        '简单路径约束、流动性剪枝与 top-K beam search',
      ],
      topicsRight: [
        '防止组合爆炸与跨版本状态拼接',
        '实验：不同图规模下的 p50 / p95 benchmark',
        '面试：adapter 如何让新增 DEX 不改搜索器？',
      ],
      duration: '2 天',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
          <path d="M6.5 10.5L10.5 6.5M13.5 6.5L17.5 10.5M17.5 13.5L13.5 17.5M10.5 17.5L6.5 13.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Gas 后最优与拆单路由',
      level: 'L2 · Day 10',
      description: '最大 amountOut 不等于最佳成交；将 Gas 换算成输出代币，并比较单路径与受控两路拆单的净输出。',
      topicsLeft: [
        'netOut = amountOut − gasCost − fee − riskPenalty',
        'Gas 价格与资产价格的单位换算',
        '两路 split 的边际报价与金额守恒',
      ],
      topicsRight: [
        '避免共享池导致的虚假拆单收益',
        '实验：直接、多跳、拆单三类 RoutePlan 对比',
        '验收：选择结果可解释、可复现',
      ],
      duration: '1 天',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4V9C4 11 6 12 8 12H16C18 12 20 13 20 15V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 20V15C4 13 6 12 8 12M20 4V9C20 11 18 12 16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 6,
      title: '安全执行、滑点与交易发送',
      level: 'L2 · Day 11–13',
      description: '把 RoutePlan 构造成原子交易，通过执行合约与发送状态机控制授权、滑点、MEV、nonce 和 calldata 风险。',
      topicsLeft: [
        'allowlist、deadline、minOut 与余额增量校验',
        'ERC-20 allowance、Permit2、ETH / WETH 边界',
        'pending nonce、EIP-1559、replacement 与私有发送',
      ],
      topicsRight: [
        '模拟、stale state、滑点失败与 MEV 风险',
        '校验外部 route/build 的 to、value、data 与 fee',
        '实验：Fork 上签名、广播、revert 解码和 PnL 对账',
      ],
      duration: '3 天',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 7,
      title: '生产优化、综合验收与面试',
      level: 'L3 · Day 14–15',
      description: '用性能指标、故障演练和端到端对账证明它是可运行的 Router，而不是只会展示理论报价的 demo。',
      topicsLeft: [
        'Quote p50 / p95 / p99、锁竞争与缓存失效',
        'RPC 超时、限流、节点切换与可观测性',
        '请求 → route ID → txHash → receipt → PnL 全链路追踪',
      ],
      topicsRight: [
        'Fork E2E、第三方聚合器对照与故障注入',
        '最终作品：多 DEX、1/2/3-hop、Gas 后选优与安全执行',
        '面试：用问题、原因、方案和证据讲清项目价值',
      ],
      duration: '2 天',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15C3 17 3 21 3 21C3 21 7 21 9 19C10 18 10 16.5 9.5 15.5C9 14.5 7 14 5 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 15L7 13C8 9 11 5 18 4C19 8 17 12 14 14L12 16L9 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="14.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const contractAuditIcon = (
    <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const evmContractAuditCourseChapters: CourseChapterCard[] = [
    {
      id: 1,
      title: '区块链与 Solidity 基础',
      level: 'L0 · Step 1–2',
      description: '从 Ethereum 状态转换、共识和最终性开始，建立能够逐行追踪 Solidity 状态、资金与外部调用的基础。',
      topicsLeft: [
        'Mastering Ethereum、PoW 与 PoS',
        '账户、交易、区块、Gas 与最终性',
        'Solidity 类型、数据位置与可见性',
      ],
      topicsRight: [
        '继承、modifier、error 与外部调用',
        'Secureum Solidity 101 / 201',
        '验收：画出陌生合约的状态与资金流',
      ],
      duration: '2～3 周',
      icon: contractAuditIcon,
    },
    {
      id: 2,
      title: '安全合约工程基础',
      level: 'L1 · Step 3–7',
      description: '掌握 Gas、测试、ERC 标准、OpenZeppelin 与代理升级，使正常功能和工程边界都可被验证。',
      topicsLeft: [
        'storage / memory / calldata 与 Gas 优化',
        'Foundry、Hardhat、Tenderly 调试',
        'unit、fuzz、invariant 与 fork test',
      ],
      topicsRight: [
        'ERC-20/721/777/1155/4626/2981',
        'OpenZeppelin 权限与安全组件',
        'Proxy、storage collision 与升级权限',
      ],
      duration: '3～4 周',
      icon: contractAuditIcon,
    },
    {
      id: 3,
      title: '攻击面、Yul 与 EVM',
      level: 'L1 · Step 8–9',
      description: '从攻击向量和业务不变量寻找漏洞，并下降到 Yul、opcode、precompile 和动态 Gas 理解真实执行行为。',
      topicsLeft: [
        '权限、重入、算术、签名与 DoS',
        '外部调用、回调、升级与经济攻击',
        'Secureum Pitfalls、SWC Registry',
      ],
      topicsRight: [
        'Inline Assembly 与 Yul',
        'Stack、Memory、Storage 与 Opcodes',
        'CALL/DELEGATECALL、Precompile 与 Gas',
      ],
      duration: '2～3 周',
      icon: contractAuditIcon,
    },
    {
      id: 4,
      title: 'CTF 与 DeFi 攻击实战',
      level: 'L2 · Step 10–12',
      description: '通过 CTF 和协议深挖，把漏洞知识转化为可复现 PoC，并理解闪电贷、预言机和 MEV 组合攻击。',
      topicsLeft: [
        'Ethernaut、Capture The Ether',
        'CipherShastra、Damn Vulnerable DeFi',
        '每题交付根因、PoC、修复和回归测试',
      ],
      topicsRight: [
        'Uniswap、Compound、Curve、Aave、Vault',
        'Flash Loan → Oracle Manipulation',
        'Front-running、Sandwich 与授权风险',
      ],
      duration: '4～6 周',
      icon: contractAuditIcon,
    },
    {
      id: 5,
      title: '事故复盘与审计报告',
      level: 'L2 · Step 13–14',
      description: '还原真实攻击的前置条件、调用链和资金流，并把发现写成清晰、可复现、可修复的专业报告。',
      topicsLeft: [
        'Immunefi、BlockSec、SlowMist',
        'Rekt News、PeckShield 事故复盘',
        '根因、攻击路径、影响与修复模板',
      ],
      topicsRight: [
        'Secureum Audit Findings 101 / 201',
        'Consensys、Trail of Bits、OpenZeppelin',
        'Code4rena、Sherlock 与 Solodit',
      ],
      duration: '2～3 周',
      icon: contractAuditIcon,
    },
    {
      id: 6,
      title: '标准、EIP 与审计工具箱',
      level: 'L2 · Step 15–17',
      description: '用标准清单保障覆盖面，用关键 EIP 理解安全假设，再用自动化工具为人工审计提供证据。',
      topicsLeft: [
        'SCSVS 与 Solcurity 检查清单',
        'EIP-1559/2929/1153、EIP-712',
        'ERC-1271/2612/4337/4626',
      ],
      topicsRight: [
        'Slither、Mythril、Manticore、Echidna',
        'Surya、Scribble 与交易 Trace 工具',
        '原则：工具告警必须人工验证可利用性',
      ],
      duration: '2～3 周',
      icon: contractAuditIcon,
    },
    {
      id: 7,
      title: '持续研究与综合审计',
      level: 'L3 · Step 18',
      description: '跟踪 Ethereum 规范与最新攻击面，并对一个真实中型协议完成从威胁建模到正式报告的完整审计。',
      topicsLeft: [
        'Yellow Paper、Execution / Consensus Specs',
        'Ethereum Magicians、Eth Research',
        '安全社区、事故周报与研究论文',
      ],
      topicsRight: [
        '权限图、资金流与关键不变量',
        '手工审计、工具扫描、PoC 与严重度',
        'Capstone：提交完整审计报告和修复测试',
      ],
      duration: '持续进行',
      icon: contractAuditIcon,
    },
  ];

  const solanaContractAuditCourseChapters: CourseChapterCard[] = [
    {
      id: 1,
      title: 'Solana 执行与账户模型',
      level: 'L0 · Day 1–3',
      description: '理解显式账户输入、Signer/Writable 权限、账户锁和原子执行，建立 Solana 特有的攻击面模型。',
      topicsLeft: [
        'Account、Program、Instruction 与 Transaction',
        'owner、lamports、data、executable',
        'AccountMeta、账户锁与并行执行',
      ],
      topicsRight: [
        'Native Rust、Anchor 与序列化边界',
        'PDA、CPI 与 signer privilege',
        '实验：绘制交易账户权限和状态变化图',
      ],
      duration: '3 天',
      icon: contractAuditIcon,
    },
    {
      id: 2,
      title: '账户身份与授权审计',
      level: 'L1 · Day 4–6',
      description: '验证账户是否真实、属于预期程序、具备正确类型，并与 signer、authority 和业务实例严格绑定。',
      topicsLeft: [
        'Signer Authorization 与 authority rotation',
        'Account Owner、Program ID、Sysvar',
        'Address、discriminator 与 data length',
      ],
      topicsRight: [
        'Account Data Matching 与 has_one',
        'Type Cosplay、remaining_accounts 注入',
        '实验：跨市场拼接账户完成未授权提现',
      ],
      duration: '3 天',
      icon: contractAuditIcon,
    },
    {
      id: 3,
      title: 'PDA 与账户生命周期',
      level: 'L1 · Day 7–9',
      description: '审查初始化、canonical bump、PDA 共享、账户关闭和复活，防止重复领取与跨用户权限泄漏。',
      topicsLeft: [
        'init、zero、init_if_needed 与重初始化',
        'Canonical Bump 与完整 PDA Seeds',
        'PDA Sharing 和 domain separation',
      ],
      topicsRight: [
        'close、lamports、discriminator 与 revival',
        'close destination 和 force defund',
        '实验：重复 claim 与关闭后再次使用账户',
      ],
      duration: '3 天',
      icon: contractAuditIcon,
    },
    {
      id: 4,
      title: 'CPI 与运行时边界',
      level: 'L2 · Day 10–12',
      description: '识别任意 CPI、PDA confused deputy、重复可变账户和 CPI 后陈旧状态等 Solana 高危漏洞。',
      topicsLeft: [
        'Arbitrary CPI 与恶意 Program 替换',
        'invoke_signed、PDA signer 和账户传播',
        'Duplicate Mutable Accounts 与账户别名',
      ],
      topicsRight: [
        'CPI 后 Account reload',
        'Instructions Sysvar 与指令内省',
        '实验：恶意 CPI + stale supply 会计攻击',
      ],
      duration: '3 天',
      icon: contractAuditIcon,
    },
    {
      id: 5,
      title: 'Token、Oracle 与 DeFi 安全',
      level: 'L2 · Day 13–15',
      description: '从整数舍入、SPL Token/Token-2022 到 Pyth 和 DeFi 不变量，审查真实资产与价格风险。',
      topicsLeft: [
        'checked arithmetic、精度与舍入套利',
        'Mint、ATA、delegate、close/freeze authority',
        'Token Program 与 Token-2022 Program ID',
      ],
      topicsRight: [
        'Transfer Fee/Hook、Permanent Delegate、CPI Guard',
        'Pyth feed、status、staleness、confidence、exponent',
        '实验：Token-2022 到账差异与价格攻击',
      ],
      duration: '3 天',
      icon: contractAuditIcon,
    },
    {
      id: 6,
      title: '测试、Fuzz 与事故复现',
      level: 'L2 · Day 16–18',
      description: '结合攻击测试、Trident fuzz、invariant、Radar/Xray 和交易 Trace，将安全假设变成可验证证据。',
      topicsLeft: [
        'Anchor、BanksClient/Bankrun 与 Rust VM 测试',
        'Sequence Fuzzing、Crash Replay 与 Coverage',
        '资金守恒、权限隔离和份额单调性 invariant',
      ],
      topicsRight: [
        'Radar、Xray 与 Sealevel Attacks',
        'Inner Instructions、Logs 和余额变化',
        '实验：Wormhole/真实事故根因复现',
      ],
      duration: '3 天',
      icon: contractAuditIcon,
    },
    {
      id: 7,
      title: '升级安全与完整审计',
      level: 'L3 · Day 19–21',
      description: '检查 Upgrade Authority、ProgramData 和可验证构建，并完成从 Threat Model 到 Retest 的正式审计。',
      topicsLeft: [
        'Upgradeable Loader、ProgramData 与 Buffer',
        '多签、权限轮换、Immutable Program',
        '依赖锁定、IDL、Program ID 与部署配置',
      ],
      topicsRight: [
        'Instruction/Account Matrix 与资金流',
        'Finding、Severity、PoC、Recommendation、Retest',
        'Capstone：完整审计报告和修复测试',
      ],
      duration: '3 天',
      icon: contractAuditIcon,
    },
  ];

  const evmLaunchpadIcon = (
    <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 15C3 17 3 21 3 21C3 21 7 21 9 19C10 18 10 16.5 9.5 15.5C9 14.5 7 14 5 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 15L7 13C8 9 11 5 18 4C19 8 17 12 14 14L12 16L9 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const evmLaunchpadCourseChapters: CourseChapterCard[] = [
    {
      id: 1,
      title: '产品闭环与 EVM 交易事实',
      level: 'L0 · Day 1–2',
      description: '理解 create、曲线买卖、毕业迁移与 DEX 交易的完整资金流，并用 receipt/logs 验证真实结果。',
      topicsLeft: ['Launchpad、Bonding Curve 与 DEX 的边界', 'transaction、receipt、Event 与余额变化', 'Factory、Token、Market、Migrator 的职责'],
      topicsRight: ['实验：还原一次 create/buy/sell 交易', '交付：资金流图、状态图与信任边界', '面试：txHash 为什么不代表执行成功？'],
      duration: '2 天',
      icon: evmLaunchpadIcon,
    },
    {
      id: 2,
      title: '曲线数学、固定供应与 Factory',
      level: 'L1 · Day 3–5',
      description: '用虚拟储备建立初始价格，严格区分真实储备与费用，并创建不可任意增发的 ERC-20 和独立 Market。',
      topicsLeft: ['偏移常数乘积、手续费与整数舍入', '固定供应 ERC-20：无 mint、blacklist 和隐藏税', 'Factory 配置上限、映射与 configHash'],
      topicsRight: ['实验：quote 与执行同状态对账', '验证：fee bucket 不进入迁移储备', '交付：LaunchToken + LaunchFactory 测试'],
      duration: '3 天',
      icon: evmLaunchpadIcon,
    },
    {
      id: 3,
      title: 'Curve Buy / Sell 与费用会计',
      level: 'L1 · Day 6–7',
      description: '实现 exact-input 买卖、滑点、deadline、allowance 和真实 BNB 储备约束，使每一笔资金都可解释。',
      topicsLeft: ['quoteBuy/buy 与 minTokenOut', 'approve + quoteSell/sell 与 minQuoteOut', '协议费、创作者费与真实储备分账'],
      topicsRight: ['CEI、nonReentrant 与安全 ETH transfer', '实验：极小输入、储备不足和超滑点', '验收：事件可重放交易前后储备'],
      duration: '2 天',
      icon: evmLaunchpadIcon,
    },
    {
      id: 4,
      title: '毕业状态机与 Pancake 迁移',
      level: 'L2 · Day 8–9',
      description: '达到阈值后冻结曲线交易，并将剩余 Token + WBNB 原子迁移到 PancakeSwap V2。',
      topicsLeft: ['Active → Graduating → Graduated', '临界买入、不可越过阈值与失败回滚', 'WBNB、addLiquidity、min amount 与 deadline'],
      topicsRight: ['LP lock/burn、Router refund 与 dust', 'BSC fork 核对 Pair 储备和 LP 接收者', '验收：毕业后曲线 buy/sell 永久失败'],
      duration: '2 天',
      icon: evmLaunchpadIcon,
    },
    {
      id: 5,
      title: 'Event Indexer 与钱包前端',
      level: 'L2 · Day 10–11',
      description: '从 Factory 部署块重放创建、成交和毕业事件，并完成创建代币、报价、交易和领取费用的前端闭环。',
      topicsLeft: ['blockHash、txHash、logIndex 与幂等快照', 'reorg buffer、checkpoint 与恢复', '读取 Market 配置，禁止前端猜测曲线参数'],
      topicsRight: ['钱包签名、approve 顺序与 receipt status', '展示价格、储备、fee、minOut 和毕业进度', '实验：Indexer 快照驱动完整 UI'],
      duration: '2 天',
      icon: evmLaunchpadIcon,
    },
    {
      id: 6,
      title: 'Foundry 测试与安全审计',
      level: 'L2 · Day 12–13',
      description: '用 unit、fuzz、invariant 和攻击实验验证储备守恒、状态不可逆与权限最小化。',
      topicsLeft: ['quote parity、余额/储备与 fee invariant', '重入、恶意 Router、舍入和极值输入', 'creator/admin/deployer 权限与 LP 归属'],
      topicsRight: ['实验：随机 buy/sell 序列和迁移失败', '安全检查：无库存提取、无重复迁移', '交付：SECURITY_REVIEW 与残余风险'],
      duration: '2 天',
      icon: evmLaunchpadIcon,
    },
    {
      id: 7,
      title: 'BSC Fork、上线与面试答辩',
      level: 'L3 · Day 14–15',
      description: '使用真实 WBNB/Pancake 合约完成端到端验证，交付部署、监控、回滚和项目表达。',
      topicsLeft: ['Fork E2E、真实 Router/Factory 与参数审查', '部署密钥、权限交接、监控和 incident runbook', 'create → trade → graduate → DEX 全链路演示'],
      topicsRight: ['验收：资金、费用、dust 和 LP 全部对账', '主网前独立审计与小额 canary', '面试：问题、数学、状态机、安全和证据'],
      duration: '2 天',
      icon: evmLaunchpadIcon,
    },
  ];

  const solanaPredictionIcon = (
    <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 5H20V19H4V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 15L11 12L13 14L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const solanaPredictionCourseChapters: CourseChapterCard[] = [
    {
      id: 1,
      title: 'Anchor 工程与预测市场账户图',
      level: 'L0 · Day 1–2',
      description: '从源码快照重建可运行 workspace，设计 Config、Market、Vault、YES/NO Mint 和 Position PDA。',
      topicsLeft: ['Anchor workspace、Program ID、IDL 与客户端', 'PDA seeds、bump、space、owner 与 signer', '抵押 vault、outcome vault 与用户 ATA'],
      topicsRight: ['实验：修复工程并通过 anchor build', '交付：账户关系图和权限矩阵', '验收：相同市场地址可确定性派生'],
      duration: '2 天',
      icon: solanaPredictionIcon,
    },
    {
      id: 2,
      title: 'Complete Set、FPMM 与市场创建',
      level: 'L1 · Day 3–5',
      description: '建立 YES + NO 的抵押责任和 AMM 定价，实现 Config、Outcome Mint、Metadata 与安全市场创建。',
      topicsLeft: ['1 collateral ↔ 1 YES + 1 NO', 'x·y=k、YES/NO 边际价格与整数舍入', 'Configure、两步 authority transfer 与参数上限'],
      topicsRight: ['创建 Market PDA、Mints、Vault ATA 和 Metadata', '约束 mint/freeze authority 和市场时间', '实验：从账户余额证明抵押责任'],
      duration: '3 天',
      icon: solanaPredictionIcon,
    },
    {
      id: 3,
      title: '流动性、LP 会计与 Swap',
      level: 'L1 · Day 6–7',
      description: '实现比例化流动性份额和 exact-input YES/NO 交易，确保 Market 字段与 SPL vault 实际余额一致。',
      topicsLeft: ['初始 LP 价格、share mint/position 与比例存取', 'buy/sell、fee、minimum_receive_amount', 'SPL Token CPI 与 idempotent ATA 创建'],
      topicsRight: ['验证 mint、authority、token program 和 vault', '实验：方向、零输出、滑点与余额差', '验收：quote 和相同 slot 执行一致'],
      duration: '2 天',
      icon: solanaPredictionIcon,
    },
    {
      id: 4,
      title: '生命周期、Oracle 与 Claim',
      level: 'L2 · Day 8–10',
      description: '用可信外部结果完成 Open、Closed、Resolved/Voided 和领取，禁止使用市场储备自动决定现实赢家。',
      topicsLeft: ['Draft → Open → Closed → Resolving → Resolved/Voided', 'slot/time 边界、暂停、oracle/multisig 和 challenge delay', '胜方 token burn/escrow 与 payout vector'],
      topicsRight: ['重复 claim、错误 outcome 与无结果退款', '实验：正常 YES/NO 结算和 Void', '验收：resolution 后 swap 与规则修改永久失败'],
      duration: '3 天',
      icon: solanaPredictionIcon,
    },
    {
      id: 5,
      title: '交易构造、Events 与 Indexer',
      level: 'L2 · Day 11–12',
      description: '构造多指令交易并通过 logs/account subscription 重建市场、价格、成交、持仓与结算。',
      topicsLeft: ['AccountMeta、Compute Budget、CPI、ALT 与签名', 'Anchor Event、token balance change 与错误解码', 'processed 快通道、confirmed/finalized 事实层'],
      topicsRight: ['signature + instruction/event index 幂等键', 'slot、blockhash、重放窗口与恢复', '实验：从事件和账户状态恢复市场快照'],
      duration: '2 天',
      icon: solanaPredictionIcon,
    },
    {
      id: 6,
      title: '钱包前端与交易体验',
      level: 'L2 · Day 13',
      description: '实现市场列表、交易面板、持仓、LP 和 Claim，并正确表达 pending、confirmed 与 finalized。',
      topicsLeft: ['Wallet Adapter、网络切换与账户准备', 'amountOut、fee、price impact、minOut 和 quote slot', '市场截止、结果、payout 和可领取量'],
      topicsRight: ['交易发送后检查 meta.err', '账户变化推送和过期报价刷新', '实验：浏览器完成 create → trade → claim'],
      duration: '1 天',
      icon: solanaPredictionIcon,
    },
    {
      id: 7,
      title: '安全、Devnet 与面试答辩',
      level: 'L3 · Day 14–15',
      description: '通过账户替换、权限、数学和重复领取攻击实验验证安全，在 Devnet 完成可交易和可结算的闭环。',
      topicsLeft: ['Anchor constraints、恶意账户、整数和状态 invariant', 'LiteSVM/Bankrun、Devnet E2E 与故障注入', 'upgrade authority、oracle、监控和 incident 流程'],
      topicsRight: ['验收：vault 覆盖最大兑付责任', '演示：create → LP → trade → resolve → claim', '面试：账户模型、FPMM、结算和安全证据'],
      duration: '2 天',
      icon: solanaPredictionIcon,
    },
  ];

  const pumpfunCourseChapters: CourseChapterCard[] = [
    {
      id: 1,
      title: '基础篇',
      level: 'L0',
      description: '对应 lessons「1.基础」：在 pumpfun_program 语境下补齐 Rust 与 Anchor，能读懂后续源码与四条核心指令的账户、约束与 CPI。',
      topicsLeft: [
        '1.rust基础（约 21 文件）：变量/常量/类型、函数与作用域、表达式',
        '所有权、生命周期、slice；struct、trait、generics',
        'mod、pub、cargo.toml；macro 基础',
        '必读：readme.md、rust_syntax_roadmap.md（语法与项目映射）',
      ],
      topicsRight: [
        '2.anchor基础（约 36 文件）：项目结构、declare_id、program、mod',
        'Context、#[derive(Accounts)]、常见 account 约束写法',
        'PDA 派生、跨程序 CPI、错误与自定义错误码',
        '编译、部署、本地/开发网调试与日志阅读',
        '3.anchor进阶：Signer 等账户语义、进阶约束场景',
      ],
      duration: '4～8周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 7L12 12L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: '源码解读篇',
      level: 'L1',
      description: '对应「2.源码解读」（约 9 文件）：先建立业务心智与代码地图，再进入指令级实现；多数文档含录播与问答，便于对照仓库阅读。',
      topicsLeft: [
        'bonding curve：定价直觉、曲线状态如何随交易更新',
        '虚拟储备 vs 真实储备：对价格与流动性的影响',
        '合约编译、部署与 config：全局/可配参数如何进入链上状态',
      ],
      topicsRight: [
        'create bonding curve：账户布局与初始化顺序',
        '买卖（swap）路径：资产在哪些 ATA/金库间流转',
        'migration：触发条件、涉及账户、与 Meteora 衔接在代码中的落点',
        '将「机制说明」映射到具体文件与函数，养成断点/日志跟踪习惯',
      ],
      duration: '2～3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '实战篇 · Configure 指令',
      level: 'L1',
      description: '「3.实战 / 1.configure」（约 16 文件）：从零写清一条配置类指令的账户列表、约束与 handler，建立后续指令的「模板感」。',
      topicsLeft: [
        '指令目标：要改哪些链上状态、与产品/部署流程的对应关系',
        '所需账户清单：谁可写、谁只读、PDA 与签名方分别是谁',
        'instruction data：序列化布局、与客户端/测试如何对齐',
        '#[derive(Accounts)]：每个字段的约束（mut、signer、has_one 等）',
      ],
      topicsRight: [
        '结构体与参数：配置项如何映射到账户字段与 data',
        'handler：权限校验、状态写入顺序、错误分支',
        '与全局 config 账户的初始化/升级关系（若课程文档涉及）',
        '调试：单元测试、开发网重放、常见账户缺失/权限报错定位',
        '交付：能独立说明「本指令输入→链上变化→验证方式」',
      ],
      duration: '2～3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 9L12 16L2 9L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17L12 24L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: '实战篇 · CreateBondingCurve',
      level: 'L1',
      description: '「3.实战 / 2.bondingcurve」（约 9 文件）：完成曲线与池子相关状态初始化，理清依赖程序与账户准备顺序。',
      topicsLeft: [
        '指令概述：创建曲线时链上需要出现哪些状态账户',
        '账户准备：mint、vault、curve 状态、权限 PDA 等如何串联',
        '依赖关系：与 token program、系统账户、可选第三方程序的 CPI',
        '参数与剩余账户：可选扩展位、与 IDL/客户端字段一致',
      ],
      topicsRight: [
        '状态账户：空间分配、discriminator、初始化与默认值',
        'handler：分步初始化、防重复创建、错误码设计',
        '测试：本地 validator、fixture、与参考答案 diff',
        '与后续 swap 的衔接：哪些字段会被 swap 读取、不变量约定',
        '自检：能画出「创建曲线」时序图与账户关系图',
      ],
      duration: '2～3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 9L12 16L2 9L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 19L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 5,
      title: '实战篇 · Swap 指令',
      level: 'L2',
      description: '「3.实战 / 3.swap」（约 9 文件）：买卖核心路径、储备更新与 AMM 公式落地，是 Pump 风格合约中最长链路之一。',
      topicsLeft: [
        '指令概述：buy / sell 在数据与账户上的差异',
        '账户：用户 ATA、池储备、curve 状态、fee 相关账户',
        'handler 数据准备：从 instruction data 解析到内部结构',
        'Trait / 模块拆分：报价、滑点、最小输出等边界由谁实现',
      ],
      topicsRight: [
        'apply_buy（及对称卖出）逻辑：状态转移与断言',
        'AMM / 曲线公式：与虚拟储备、手续费参数的结合方式',
        '精度与舍入：避免可套利缺口与安全断言',
        '测试：正向/反向交易、边界金额、失败路径（余额不足、滑点）',
        '与链下解析/索引的对照：事件或账户差分如何还原成交',
      ],
      duration: '2～4周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12M17 20l4-4M17 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 6,
      title: '实战篇 · Migration 指令',
      level: 'L2',
      description: '「3.实战 / 4.migration」（4 文件）：在满足迁移条件时，将流动性与权限切换到 Meteora 侧，完成「发射台 → AMM 池」闭环。',
      topicsLeft: [
        'migration 概述：业务触发条件与链上前置检查',
        '指令账户：旧状态、新池相关账户、Meteora 程序与 PDA',
        '核心逻辑：资金/ LP / 权限的交接顺序，避免中间态被攻击',
      ],
      topicsRight: [
        'Meteora 创建池子：instruction data 字段含义与长度',
        'CPI 组合：本 program 如何调用外部 program、返回值处理',
        '测试与联调：开发网部署顺序、常见 CPI 账户错误',
        '与 swap 完结态：迁移后用户应走哪条交易路径',
        '复盘：能口述「为何必须按该顺序 CPI」',
      ],
      duration: '1～2周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 7,
      title: '综合篇',
      level: 'L3',
      description: '串联四条指令与 lessons 学习顺序；建议节奏、验收标准，并与 Router（链下路由）专项作定位区分。',
      topicsLeft: [
        '推荐顺序：1.基础 → 2.源码解读 → configure → bondingcurve → swap → migration',
        '系统学习约 10～15 周：每周完成一个子模块 +「代码定位 + 机制复述」',
        '教学方法：项目导向、先模型后指令、任务式闭环（输入→处理→输出→验证）',
      ],
      topicsRight: [
        '机制：能解释曲线、虚拟储备、migration 条件与 Meteora 衔接',
        '代码：能定位四指令关键文件并说明账户图',
        '实现：能按步骤口述四指令执行与失败回滚',
        '扩展：可选结合 Dex 主课的解析/构造视角做 end-to-end 复盘',
        'Router 对照：Router 重链下路由与缓存；本专项重 Anchor 链上程序',
      ],
      duration: '全程',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19V9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 6V3M8 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const predictionMarketCourseChapters: CourseChapterCard[] = [
    {
      id: 1,
      title: '导论与 EVM 基础',
      level: 'L0',
      description:
        '架构全景 + EVM 基础：从账户、Gas 到 ERC20 / ERC1155 与事件，搭好链上预测市场全栈的地基。',
      topicsLeft: [
        '你要造什么：BTC 涨跌 + 通用 YES/NO 预测市场',
        '架构全景：前端 → 后端/撮合 → 合约/链',
        '账户、交易、Nonce、Gas、区块',
        'EOA vs 合约账户（埋点 EIP-7702 智能账户）',
        'EVM 执行模型、revert 与自定义错误',
      ],
      topicsRight: [
        'ERC20 抵押币（USDT）',
        'ERC1155 多代币：为什么预测市场用它',
        '事件(Event/Log)与链上索引',
        '开发环境：Hardhat / Postgres / Redis / 水龙头',
        '实验：手写并部署一个最小 ERC1155',
      ],
      duration: '2～3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 7L12 12L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: '合约①：AMM 预测市场',
      level: 'L1',
      description:
        'KurokageXMarket.sol：FPMM 定价、买卖曲线、parimutuel 结算与 UUPS 可升级合约，真实部署到 Sepolia。',
      topicsLeft: [
        'FPMM 定价：yesPrice = noReserve/(yes+no)',
        '为什么 YES + NO ≡ 1',
        '买入/卖出：恒定乘积、滑点、手续费',
        '储备地板 reserve floor',
        'parimutuel 结算：赢家按份额瓜分整池',
      ],
      topicsRight: [
        '市场状态机 Pending→Active→Closed→Resolved',
        'ERC1155 抵押、铸造与 claim 领取',
        'UUPS 可升级 + 访问控制',
        'Hardhat 编译 / 部署 / Sepolia 实战',
        '实验：开盘→买卖→结算→领取闭环验证',
      ],
      duration: '3～4周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 14C9 9 11 9 13 12C15 15 17 13 19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '合约②：CLOB 订单簿引擎',
      level: 'L1',
      description:
        'ConditionalTokens 与 OutcomeExchange：1:1 固定赔付、EIP-712 链下签名限价单、链上撮合成交，不托管资金。',
      topicsLeft: [
        '为什么 CLOB 需要 1:1 ConditionalTokens',
        'split / merge：1 USDC ⇄ 1 YES + 1 NO',
        'OutcomeExchange.fillOrder 链上撮合',
        'EIP-712 签名限价单：maker 链下签',
      ],
      topicsRight: [
        'taker 链上吃单、资金不托管',
        'AMM vs CLOB 全面对比',
        '流动性、价格发现、滑点、对手方',
        '实验：签限价单 → 脚本 fill → 校验代币转移',
      ],
      duration: '2～3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12M17 20l4-4M17 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: '合约安全与测试',
      level: 'L2',
      description:
        '单元 / 集成 / Fork / 不变量 / 模糊测试一套打通，复盘真实漏洞与状态机非法转移。',
      topicsLeft: [
        '测试方法论：单元、集成、Fork、不变量',
        '重入攻击与防御 nonReentrant',
        '抵押不变量：池子守恒、totalCollateral 一致',
        'Fork 测试：在真实链状态上测试',
      ],
      topicsRight: [
        '状态机非法转移、边界与权限测试',
        '真实漏洞：EIP-7702 智能账户无法收 ERC1155',
        '覆盖率、Gas 报告、EVM 漏洞清单',
        '实验：跑通测试套件并补一条非法转移用例',
      ],
      duration: '2～3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 5,
      title: '后端：API · 索引器 · Workers',
      level: 'L2',
      description:
        'KuroKageX-Backend：Fastify + Prisma + Redis，链上事件索引、自动开盘/结算与多方式鉴权。',
      topicsLeft: [
        'Fastify + Prisma(Postgres) + Redis 工程骨架',
        'Zod 配置校验与密钥管理',
        '链上事件索引器：区块扫描 + WS 订阅',
        '幂等与链↔库一致性（真实坑：反向区间崩溃）',
      ],
      topicsRight: [
        'BullMQ Workers：价格流/自动开盘/自动结算',
        '鉴权：JWT(ES256) · SIWE 钱包登录 · OAuth',
        '托管钱包、加密密钥、relayer 代付',
        '实验：触发一次自动开盘，索引器写库',
      ],
      duration: '3～4周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 7H7.01M7 17H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 6,
      title: '撮合服务 + 前端 DApp',
      level: 'L2',
      description:
        'CLOB Operator 撮合器（不托管资金）+ Next.js Polymarket 风格 DApp：交易面板、组合 P&L、订单簿。',
      topicsLeft: [
        '撮合器：订单 API + 聚合盘口 + WS 推送',
        '价格-时间优先撮合、EIP-712 验签',
        '多钱包发现 EIP-6963、连接/切换/退出',
        'EIP-7702 智能账户识别与护栏',
      ],
      topicsRight: [
        '交易面板：Buy/Sell、分价、滑点、To win 预览',
        '组合与 P&L：Won/Lost 语义（对冲亏损坑）',
        '订单簿 UI、最近成交、WebSocket',
        'Polymarket 风格 UI 重构 + 限流分批加载',
      ],
      duration: '3～4周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 7,
      title: '部署上线 · 可观测 · Capstone',
      level: 'L3',
      description:
        'Vercel + Railway + Docker 全站上线，k6 压测与混沌注入，最后独立交付一个端到端新特性。',
      topicsLeft: [
        '拓扑：Vercel(前端) + Railway(后端/撮合/PG/Redis)',
        'Docker 化后端：Prisma 引擎与 OpenSSL',
        '跨站打通：CORS + SameSite=None + OAuth 回调',
        '排障实录：镜像 / RPC / 启动命令连环故障',
      ],
      topicsRight: [
        'k6 负载测试给 API / 撮合压测',
        '混沌 / 故障注入：RPC 抖动下的韧性',
        '公共 RPC vs 付费 RPC、filter 不稳定根治',
        'Capstone：设计→合约/后端/前端→测试→上线',
      ],
      duration: '2～3周',
      icon: (
        <svg className="course-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15C3 17 3 21 3 21C3 21 7 21 9 19C10 18 10 16.5 9.5 15.5C9 14.5 7 14 5 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 15L7 13C8 9 11 5 18 4C19 8 17 12 14 14L12 16L9 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="14.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  type CourseTab = {
    id: string;
    tab: string;
    badge?: string;
    panelClass: string;
    gridClass?: string;
    title: string;
    subtitle: React.ReactNode;
    valueProp: React.ReactNode;
    chapters: CourseChapterCard[];
  };

  const courses: CourseTab[] = [
    {
      id: 'dex',
      tab: 'DEX 聚合器（Solana）',
      panelClass: '',
      title: 'DEX 聚合器 · 课表详情',
      subtitle: (
        <p>从<span className="highlight">基础入门</span>到<span className="highlight">项目实战</span>，循序渐进的 Web3 开发学习路径</p>
      ),
      valueProp: (
        <p className="course-detail-value-prop">实现一个类似 gmgn.ai 的项目，包含所有核心功能，岗位量大。</p>
      ),
      chapters: courseChapters,
    },
    {
      id: 'pumpfun',
      tab: 'Pumpfun 合约',
      panelClass: 'pumpfun-course-detail',
      gridClass: 'pumpfun-course-grid',
      title: 'Pumpfun Program · 课表详情',
      subtitle: (
        <p>
          围绕 <span className="highlight">pumpfun_program/lessons</span>，从 <span className="highlight">Rust / Anchor</span> 到{' '}
          <span className="highlight">bonding curve、swap、migration（Meteora）</span> 完整链路；文档为主，配合录播与命令示例，强调能读源码、理解设计、完成关键指令与调试。
        </p>
      ),
      valueProp: (
        <p className="course-detail-value-prop">实现一个类似 pump.fun 的项目，面试亮点。</p>
      ),
      chapters: pumpfunCourseChapters,
    },
    {
      id: 'router',
      tab: 'Router 路由（Solana）',
      panelClass: 'router-course-detail',
      gridClass: 'router-course-grid',
      title: 'Router 实战项目 · 课表详情',
      subtitle: (
        <p>
          面向 <span className="highlight">DEX 聚合</span> 场景，从 <span className="highlight">流动性图建模、路径缓存、多池报价</span> 到{' '}
          <span className="highlight">可证明复杂度的路由核心</span>，贯通工程实现与算法理论（L0 基础 → L1 核心 → L2 实战 → L3 综合）。
        </p>
      ),
      valueProp: (
        <p className="course-detail-value-prop">
          实现类似 Uniswap Swap / jup.ag 的项目，支持最佳路径报价 <strong className="course-detail-value-prop-emphasis">【面试核心亮点】</strong>
        </p>
      ),
      chapters: routerCourseChapters,
    },
    {
      id: 'evm-aggregator',
      tab: 'DEX 聚合器（EVM）',
      badge: 'NEW',
      panelClass: 'evm-aggregator-course-detail',
      gridClass: 'evm-aggregator-course-grid',
      title: 'DEX 聚合器（EVM）· 15天全栈工程实战',
      subtitle: (
        <p>
          参考真实 <span className="highlight">EVM Consumer 与 dex_full 数据系统</span>，从{' '}
          <span className="highlight">交易解析、实时摄取、V2 / V3 / V4 协议适配</span> 到{' '}
          <span className="highlight">Token 行情、K 线、交易服务与微服务部署</span>，完成 DEX 产品闭环。
        </p>
      ),
      valueProp: (
        <p className="course-detail-value-prop">
          构建完整的 EVM DEX 数据与交易平台；Router 作为独立下游服务，本课程不深入路径搜索算法{' '}
          <strong className="course-detail-value-prop-emphasis">【数据与业务系统】</strong>
        </p>
      ),
      chapters: evmDexAggregatorCourseChapters,
    },
    {
      id: 'evm-router',
      tab: 'Router 路由（EVM）',
      badge: 'NEW',
      panelClass: 'evm-router-course-detail',
      gridClass: 'evm-router-course-grid',
      title: 'Router 路由（EVM）· 15天算法与执行实战',
      subtitle: (
        <p>
          基于真实 <span className="highlight">evm_router_aggregator</span>，从{' '}
          <span className="highlight">一致池状态、本地报价、Token/Pool 图和 1/2/3-hop 搜索</span> 到{' '}
          <span className="highlight">Gas 后选优、拆单、执行 Adapter 与 RelayRouter</span>。
        </p>
      ),
      valueProp: (
        <p className="course-detail-value-prop">
          输入标准化池状态，输出可执行 RoutePlan 和安全 calldata；不负责 K 线、Holder 和行情产品{' '}
          <strong className="course-detail-value-prop-emphasis">【路由算法与执行系统】</strong>
        </p>
      ),
      chapters: evmRouterCourseChapters,
    },
    {
      id: 'solana-contract-audit',
      tab: '智能合约审计（Solana）',
      badge: 'NEW',
      panelClass: 'solana-contract-audit-course-detail',
      gridClass: 'solana-contract-audit-course-grid',
      title: 'Solana 智能合约审计 · 21天工程实战',
      subtitle: (
        <p>
          基于 <span className="highlight">Solana Developer Program Security 与 SlowMist 最佳实践</span>，从{' '}
          <span className="highlight">账户身份、PDA、CPI 和 Anchor 攻击面</span> 到{' '}
          <span className="highlight">Token-2022、Pyth、Fuzz、升级安全与完整审计报告</span>。
        </p>
      ),
      valueProp: (
        <p className="course-detail-value-prop">
          掌握 Solana 特有的账户替换、权限传播和组合调用风险，能够独立完成 PoC、修复与 Retest{' '}
          <strong className="course-detail-value-prop-emphasis">【Solana Program 安全专项】</strong>
        </p>
      ),
      chapters: solanaContractAuditCourseChapters,
    },
    {
      id: 'contract-audit',
      tab: '智能合约审计（EVM）',
      badge: 'NEW',
      panelClass: 'contract-audit-course-detail',
      gridClass: 'contract-audit-course-grid',
      title: 'Ethereum 智能合约审计 · 18步成长路线',
      subtitle: (
        <p>
          基于 <span className="highlight">Ethereum Smart Contract Auditor Roadmap</span>，从{' '}
          <span className="highlight">Solidity、EVM、Yul 与攻击向量</span> 到{' '}
          <span className="highlight">DeFi CTF、事故复盘、审计工具和正式报告</span>，形成完整审计能力。
        </p>
      ),
      valueProp: (
        <p className="course-detail-value-prop">
          不只背漏洞名称，而是能够定义不变量、定位根因、编写 PoC、评估影响并交付专业审计报告{' '}
          <strong className="course-detail-value-prop-emphasis">【智能合约安全专项】</strong>
        </p>
      ),
      chapters: evmContractAuditCourseChapters,
    },
    {
      id: 'evm-launchpad',
      tab: 'Pump.fun (EVM)',
      badge: 'NEW',
      panelClass: 'evm-launchpad-course-detail',
      gridClass: 'evm-launchpad-course-grid',
      title: 'Pump.fun（EVM 版本）· 15天工程实战',
      subtitle: (
        <p>
          基于真实 <span className="highlight">Solidity + Foundry</span> 项目，从{' '}
          <span className="highlight">固定供应代币、Bonding Curve 买卖和费用会计</span> 到{' '}
          <span className="highlight">PancakeSwap 毕业迁移、Indexer 与钱包前端</span>。
        </p>
      ),
      valueProp: (
        <p className="course-detail-value-prop">
          构建可交易、可毕业、可审计的 EVM Launchpad，而不是简单 ERC-20 发币页面{' '}
          <strong className="course-detail-value-prop-emphasis">【Solidity资金系统实战】</strong>
        </p>
      ),
      chapters: evmLaunchpadCourseChapters,
    },
    {
      id: 'solana-prediction',
      tab: '预测市场 (Solana)',
      badge: 'NEW',
      panelClass: 'solana-prediction-course-detail',
      gridClass: 'solana-prediction-course-grid',
      title: '预测市场（Solana 版本）· 15天工程实战',
      subtitle: (
        <p>
          使用 <span className="highlight">Rust + Anchor + TypeScript</span>，从{' '}
          <span className="highlight">Market PDA、YES/NO Token、FPMM 和流动性</span> 到{' '}
          <span className="highlight">Oracle Resolution、Claim、Indexer 与 Devnet</span>。
        </p>
      ),
      valueProp: (
        <p className="course-detail-value-prop">
          实现资金守恒、结果可验证、结算可领取的 Solana 二元预测市场{' '}
          <strong className="course-detail-value-prop-emphasis">【Anchor综合项目】</strong>
        </p>
      ),
      chapters: solanaPredictionCourseChapters,
    },
    {
      id: 'evm',
      tab: '预测市场 (EVM)',
      badge: 'NEW',
      panelClass: 'prediction-market-course-detail',
      gridClass: 'prediction-market-course-grid',
      title: '预测市场（EVM）· 课表详情',
      subtitle: (
        <p>
          一套 <span className="highlight">真实部署、真实可交易</span> 的链上预测市场：从{' '}
          <span className="highlight">智能合约（AMM + CLOB 两套引擎）</span> 到{' '}
          <span className="highlight">后端基建、撮合服务、前端 DApp 与上线运维</span> 的完整全栈链路。
        </p>
      ),
      valueProp: (
        <p className="course-detail-value-prop">
          实现一个类似 Polymarket 的预测市场，跑在 Sepolia 测试网、公网可访问可交易{' '}
          <strong className="course-detail-value-prop-emphasis">【面试核心亮点】</strong>
        </p>
      ),
      chapters: predictionMarketCourseChapters,
    },
  ];

  const courseTabOrder = [
    'dex',
    'router',
    'pumpfun',
    'solana-prediction',
    'solana-contract-audit',
    'evm-aggregator',
    'evm-router',
    'evm-launchpad',
    'evm',
    'contract-audit',
  ];
  const orderedCourses = courseTabOrder
    .map((id) => courses.find((course) => course.id === id))
    .filter((course): course is CourseTab => course !== undefined);
  const active = orderedCourses.find((course) => course.id === activeCourse) ?? orderedCourses[0];

  return (
    <div>
      <section id="course-detail" className="course-detail course-detail--tabbed">
        <div className="section-header course-detail-intro">
          <h2>课表详情</h2>
          <p>十大实战项目，<span className="highlight">点击切换</span>查看每套课程的完整章节</p>
        </div>

        <div className="course-tabs" role="tablist" aria-label="课程切换">
          {orderedCourses.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active.id === c.id}
              className={`course-tab course-tab--${c.id} ${active.id === c.id ? 'active' : ''}`}
              onClick={() => setActiveCourse(c.id)}
            >
              {c.tab}
              {c.badge && <span className="course-tab-badge">{c.badge}</span>}
            </button>
          ))}
        </div>

        <div className={`course-panel ${active.panelClass}`} role="tabpanel">
          <div className="section-header course-panel-header">
            <h2>{active.title}</h2>
            {active.subtitle}
            {active.valueProp}
          </div>
          {renderChapterGrid(active.chapters, active.gridClass)}
          <div className="course-detail-cta">
            <button className="btn primary" onClick={openWechatModal}>咨询课程详情</button>
          </div>
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

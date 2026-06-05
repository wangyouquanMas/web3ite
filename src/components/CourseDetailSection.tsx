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
      tab: 'DEX 聚合器',
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
      tab: 'Router 路由',
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

  const active = courses.find((c) => c.id === activeCourse) ?? courses[0];

  return (
    <div>
      <section id="course-detail" className="course-detail course-detail--tabbed">
        <div className="section-header course-detail-intro">
          <h2>课表详情</h2>
          <p>四大实战项目，<span className="highlight">点击切换</span>查看每套课程的完整章节</p>
        </div>

        <div className="course-tabs" role="tablist" aria-label="课程切换">
          {courses.map((c) => (
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
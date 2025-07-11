import React, { useState } from 'react';
import './FaqSection.css';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}



const FaqSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  
  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: '我是否应该报班？',
      answer: '问这个问题之前，你需要先回答几个前置问题：\n1.我当下迫切需要解决的问题是什么？\n2.web3这个方向怎么样？\n3.选择web3能解决我的问题吗？\n\n回答完这些问题之后，才应该去考虑学什么，怎么学的问题。\n\n不然，就会又买了一堆自己永远用不到的东西，浪费时间，浪费金钱。'
    },
    {
      id: 2,
      question: '课程形式是怎么样的？',
      answer: '课程采用录播的形式进行，每节课课后习题放在github仓库，详情查看图片。\n\n没有实践，知识就会成为空中楼阁，最终和你买过的许多书一样，被遗忘在某个角落。没有能触发思考的实践，知识难以成为你自己的技能。所以在实践设计方面，基于每个知识点设计了有难度的单元测试，并配合答案讲解。'
    },
    {
      id: 3,
      question: '我需要准备什么设备？',
      answer: '您需要一台能够运行开发环境的计算机（Windows、Mac或Linux系统），建议使用香港服务器，保障稳定的网络连接。我们会在课程开始前提供详细的环境配置指南。'
    },
    {
      id: 4,
      question: '参加课程需要具备什么前提条件？',
      answer: '建议您有基本的编程基础，了解基本的编程概念。不过，我们的课程从基础开始，即使您是编程新手，只要有学习热情，配合高效的学习方法，也可以跟上。'
    },
    {
      id: 5,
      question: '项目采用的是什么技术栈？',
      answer: '后端：Go, Kafka, Redis, MySQL, gRPC, WebSocket\n前端：React, JavaScript, HTML5, CSS3\n通信：HTTP REST API, WebSocket, gRPC\n数据存储：MySQL, Redis\n消息队列：Kafka'
    },
    {
      id: 6,
      question: '项目专注的是哪个链？',
      answer: '主流的EVM系列（以太坊、BSC、Base）和Solana都会教。所以你学完之后可以做任何链的开发。'
    },
    {
      id: 7,
      question: '项目学了之后我能做什么？',
      answer: '学完课程后，你将拥有多种职业发展路径：\n\n1️⃣ 链上科学家\n从事数据分析、策略开发或研究，具体包括：\n\n📈 跟单：通过分析区块链交易记录，识别高收益交易者（大户或"鲸鱼"）的行为模式，模仿他们的交易策略，监控特定地址的买卖行为并跟随操作。\n\n⚡ 狙击：在代币上线或流动性池刚创建时，通过快速交易抢占早期价格波动机会。开发"狙击机器人"监控新代币上市或流动性添加事件，以极快速度执行买入操作。\n\n💰 套利：利用不同交易所或协议之间的价格差异进行套利。例如在Uniswap和SushiSwap上同一代币价格不同时，低买高卖赚取差价。\n\n🎯 攻击：利用区块链协议或智能合约漏洞进行盈利性操作，包括抢跑（Frontrunning）、夹单（Sandwich Attack）等策略。\n\n💎 MEV开发：开发最大可提取价值（MEV）策略，通过重新排序或插入交易，从区块中提取额外利润。这包括构建MEV机器人、优化交易顺序、开发套利策略等。\n\n🔐 合约安全审计：审查智能合约代码，识别潜在的安全漏洞和风险点。这需要深入理解合约机制、常见攻击向量，以及安全最佳实践。\n\n📊 策略开发：设计和实现量化交易策略，包括技术分析指标、风险管理模型、自动化交易系统等。结合链上数据和传统金融模型开发盈利策略。\n\n📈 链上数据分析：深入分析区块链交易数据，识别市场趋势、资金流向、用户行为模式等。为投资决策、产品优化提供数据支持。\n\n2️⃣ 转行Web3\n直接进入Web3企业担任开发工程师，从事DEX、DeFi协议、NFT平台等项目开发工作。'
    },
    {
      id: 8,
      question: '项目与实际工作需求的匹配度有多高？',
      answer: '项目来源于我的一线工作经验总结，工作要求里有的，我有。没有的，我也有。'
    },
  ];
  
  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };
  
  return (
    <section className="faq" id="faq">
      <div className="section-transition-top"></div>
      <div className="section-header">
        <h2>常见问题</h2>
        <p>解答您关于Web3培训课程的疑问</p>
      </div>
      <div className="faq-container">
        {faqItems.map(item => (
          <div key={item.id} className={`faq-item ${activeId === item.id ? 'active' : ''} ${item.id === 2 ? 'has-image' : ''}`}>
            <div className="faq-question" onClick={() => toggleFaq(item.id)}>
              <h3>{item.question}</h3>
              <span className="faq-icon">{activeId === item.id ? '−' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeId === item.id ? 'show' : ''}`}>
              <p>{item.answer}</p>
                            {item.id === 2 && (
                <div className="course-structure-image">
                  <img 
                    src="/course-structure.png" 
                    alt="Web3Fun-Dex Solana DEX 区块链课程学习项目结构说明" 
                    className="structure-diagram"
                  />
                </div>
              )}
              {item.id === 5 && (
                <div className="tech-stack-image">
                  <img 
                    src="/tech-stack-architecture.png" 
                    alt="项目技术栈架构图" 
                    className="tech-stack-diagram"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="section-transition-bottom"></div>
    </section>
  );
};

export default FaqSection; 
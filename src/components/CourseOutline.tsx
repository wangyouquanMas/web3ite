import React, { useState } from 'react';
import './CourseOutline.css';

// Define types for our nested content structure
interface Topic {
  title: string;
  subtopics?: string[];
}

const CourseOutline: React.FC = () => {
  // Track expanded topics
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});

  const toggleTopic = (moduleId: number, topicIndex: number) => {
    const key = `${moduleId}-${topicIndex}`;
    setExpandedTopics(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const roadmapSteps = [
    { id: 1, name: 'Direction', description: '选择方向' },
    { id: 2, name: 'Learning', description: '学习方法' },
    { id: 3, name: 'Basic', description: 'Solana基础' },
    { id: 4, name: 'Advanced', description: 'Solana进阶' },
    { id: 5, name: 'Interview', description: '面试准备' }
  ];

  const courseModules = [
    {
      id: 1,
      title: '认知方法',
      topics: [
        {
          title: '如何选择你的方向',
          subtopics: [
            '点线面体分析',
            '做正确的事情',
            '提前解决反复出现的问题'
          ]
        },
        {
          title: '认知负载理论',
          subtopics: [
            '工作记忆限制',
            '构建信息块',
            '内部与外部复杂度',
            '任务分解与类比',
             '不要外包思维过程',
             '定期多样化的复习'
          ]
        },
        {
          title: '刻意练习',
          subtopics: [
            '有效及时反馈',
            '避免过度练习'
          ]
        },
        {
          title: 'GTD理论',
          subtopics: [
            '收集整理',
            '明确下一步行动',
            '定期回顾'
          ]
        },
        { title: '目标管理',
          subtopics:[
            '28原则',
            '问题导向',
            '不要强行上难度'
          ]
         },
        { title: '信息收集',
          subtopics:[
            '去信息的源头'
          ]
         },
        { title: '压力管理',
          subtopics:[
            '错误是成长的机会',
            '可持续 > 高强度',
            '完成 > 完美',
            '什么是该停下来休息'
          ]
         },
         { title: '英语口语',
          subtopics:[
            '可复制的经验分享',
            '一对一咨询'
          ]
         },
        { title: '其它',
          subtopics:[
            '社交链接：从他人身上学习',
            '改变视角: 不追求目标,而是改变identity'
          ]
         }
      ]
    },
    {
      id: 2,
      title: '基础部分',
      topics: [
        {
          title: '编程基础',
          subtopics: [
            'Rust语言',
            'JS语言',
            'Go语言'
          ]
        },
        {
          title: '区块链基础',
          subtopics: [
            '分布式账本技术',
            'PoH及共识机制',
            'Solana架构'
          ]
        },
        { title: '合约基础',
          subtopics:[
            '合约结构',
            '合约入口',
            '合约调用',
            '合约测试',
            '合约部署'
          ]
         },
        {
          title: '状态管理:账户模型',
          subtopics: [
            '账户类型',
            '数据存储',
            '账户权限',
            'PDA账户',
            '生命周期'
          ]
        },
        {
          title: 'SPL',
          subtopics: [
            'SPL Token标准'
          ]
        },
        {
          title: '流动性池',
          subtopics: [
            '基础版: AMM原理',
            '流动性计算',
            '池子深度与滑点关系'
          ]
        },
        {
          title: '交易结构及构造',
          subtopics: [
            '交易格式',
            '指令集',
            'Token2022交易构造'
          ]
        },
        { title: '交易解析',
          subtopics:[
            '怎么构造，怎么解',
            'Raydium V4、CLMM、CPMM解析',
            'Pumpfun 解析',
            'Token2022解析'
          ]
         },
        { title: '实践',
          subtopics:[
            '跟单机器人'
          ]
         }
      ]
    },
    {
      id: 3,
      title: 'Solana 进阶',
      topics: [
        {
          title: 'AMM系列',
          subtopics: [
            'Raydium V4/CLMM/CPMM',
            'Pumpfun'
          ]
        },
        {
          title: 'Token2022系列',
          subtopics: [
            'Token2022交易构造',
            'Token2022解析'
          ]
        },
        {
          title: '如何保障交易成功率',
          subtopics: [
            '优化交易构造',
            '自动滑点'
          ]
        },
        { title: '如何保障交易速率',
          subtopics:[
            '提高gas费',
            '如何给合适的gas费'
          ]
         },
        { title: '防夹与Jito管理',
          subtopics:[
            '夹子种类',
            'Validator 排序规则',
            'Jito管理'
          ]
         },
        { title: 'Pumpfun Swap支持',
          subtopics:[
            'Pumpfun Swap交易构造',
            'Pumpfun Swap解析'
          ]
         },
        { title: '共识源码解读',
          subtopics:[
            'BFT: 什么是共识？',
            'POH在共识中的作用',
            'POS共识及关键构成'
          ]
         },
        { title: 'Raydium Pool源码解读',
          subtopics:[
            '池创建',
            '池流动性管理',
            'Swap',
            '...'
          ]
         },
        { title: 'Solana 核心源码解读',
          subtopics:[
            'System Program',
            'Token Program',
            'Token2022 Program',
            '...'
          ]
         },
        { title: '实践',
          subtopics:[
            '跟单机器人优化版',
            '实现一个Pumpfun'         
         ]
         },
      ]
    },
    {
      id: 4,
      title: '面试亮点:线上问题与实践',
      topics: [
        { title: '限价单构造与实现' },
        { title: 'Token交易权限冻结' },
        { title: '计算单元优化与Gas费' },
        { title: 'Holder数及Top10计算问题' },
        { title: 'Helius 资产无法正常获取' },
        { title: '如何帮用户选择合适的池子',
          subtopics:[
            '低手续费，低滑点'
          ]
        },
        { title: '区块解析: 丢块了怎么办？',
          subtopics:[
            '丢块补偿'
          ]
        },
        { title: '其它' },
      ]
    }
  ];

  // 将话题分成两列
  const splitTopicsIntoColumns = (topics: Topic[]) => {
    const midpoint = Math.ceil(topics.length / 2);
    const firstColumn = topics.slice(0, midpoint);
    const secondColumn = topics.slice(midpoint);
    
    return {
      firstColumn,
      secondColumn
    };
  };

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
              {index < roadmapSteps.length - 1 && <div className="step-connector"></div>}
              <div className="step-content">
                <h3>{step.name}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="outline" className="course-modules">
        <div className="section-transition-top"></div>
        <div className="section-header">
          <h2>课程大纲</h2>
          <p>全面的课程内容，让你系统学习Solana开发所需的技能</p>
        </div>
        <div className="modules-container">
          {courseModules.map(module => {
            const { firstColumn, secondColumn } = splitTopicsIntoColumns(module.topics);
            
            return (
              <div key={module.id} className="module-card">
                <h3>{module.title}</h3>
                <div className="topics-two-columns">
                  <ul className="topics-column">
                    {firstColumn.map((topic, topicIndex) => (
                      <li key={`first-${topicIndex}`} className={topic.subtopics ? "has-subtopics" : ""}>
                        <div 
                          className="topic-title"
                          onClick={() => topic.subtopics && toggleTopic(module.id, topicIndex)}
                        >
                          {topic.title}
                          {topic.subtopics && (
                            <span className={`expand-icon ${expandedTopics[`${module.id}-${topicIndex}`] ? 'expanded' : ''}`}>
                              {expandedTopics[`${module.id}-${topicIndex}`] ? '−' : '+'}
                            </span>
                          )}
                        </div>
                        {topic.subtopics && expandedTopics[`${module.id}-${topicIndex}`] && (
                          <ul className="subtopics-list">
                            {topic.subtopics.map((subtopic, subtopicIndex) => (
                              <li key={`subtopic-${subtopicIndex}`}>{subtopic}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  <ul className="topics-column">
                    {secondColumn.map((topic, topicIndex) => {
                      // Adjust index for the second column
                      const actualIndex = topicIndex + firstColumn.length;
                      return (
                        <li key={`second-${topicIndex}`} className={topic.subtopics ? "has-subtopics" : ""}>
                          <div 
                            className="topic-title"
                            onClick={() => topic.subtopics && toggleTopic(module.id, actualIndex)}
                          >
                            {topic.title}
                            {topic.subtopics && (
                              <span className={`expand-icon ${expandedTopics[`${module.id}-${actualIndex}`] ? 'expanded' : ''}`}>
                                {expandedTopics[`${module.id}-${actualIndex}`] ? '−' : '+'}
                              </span>
                            )}
                          </div>
                          {topic.subtopics && expandedTopics[`${module.id}-${actualIndex}`] && (
                            <ul className="subtopics-list">
                              {topic.subtopics.map((subtopic, subtopicIndex) => (
                                <li key={`subtopic-${subtopicIndex}`}>{subtopic}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="section-transition-bottom"></div>
      </section>
    </div>
  );
};

export default CourseOutline; 
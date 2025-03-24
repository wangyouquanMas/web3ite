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
      question: '参加课程需要具备什么前提条件？',
      answer: '建议您有基本的编程基础，了解基本的编程概念。不过，我们的课程从基础开始，即使您是编程新手，只要有学习热情，也可以跟上。'
    },
    {
      id: 2,
      question: '我需要准备什么设备？',
      answer: '您需要一台能够运行开发环境的计算机（Windows、Mac或Linux系统），以及稳定的网络连接。我们会在课程开始前提供详细的环境配置指南。'
    },
    {
      id: 3,
      question: '课程是线上还是线下进行？',
      answer: '我们的课程采用线上直播+录播的形式进行，您可以在世界任何地方参与学习。同时，我们也有专门的学习社区，方便学员之间交流。'
    },
    {
      id: 4,
      question: '完成课程后能找到工作吗？',
      answer: '我们提供就业指导，包括简历制作、面试准备和行业资源对接。虽然我们不能保证100%就业，但掌握Solana开发技能在当前区块链行业非常有竞争力。'
    },
    {
      id: 5,
      question: '课程费用可以分期支付吗？',
      answer: '是的，我们提供灵活的支付方案，包括分期付款选项。您可以联系我们的客服了解详情。'
    },
    {
      id: 6,
      question: '如果我错过了直播课程怎么办？',
      answer: '所有课程都会录制并上传到学习平台，您可以随时观看回放。我们也提供课程笔记和补充材料，确保您不会错过重要内容。'
    }
  ];
  
  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };
  
  return (
    <section className="faq">
      <div className="section-header">
        <h2>常见问题</h2>
        <p>解答您关于Solana培训课程的疑问</p>
      </div>
      <div className="faq-container">
        {faqItems.map(item => (
          <div key={item.id} className={`faq-item ${activeId === item.id ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFaq(item.id)}>
              <h3>{item.question}</h3>
              <span className="faq-icon">{activeId === item.id ? '−' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeId === item.id ? 'show' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection; 
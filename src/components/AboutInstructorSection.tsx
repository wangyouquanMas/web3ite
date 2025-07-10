import React, { useState } from 'react';
import './AboutInstructorSection.css';

const AboutInstructorSection: React.FC = () => {
  const [isTransitionExpanded, setIsTransitionExpanded] = useState(false);


  const insights = [
    {
      title: 'Gap Year的价值',
      content: 'Gap year没那么可怕，人可以停下，休息一会可以让你更好的出发。相比于漫长的人生几十年，如果你能够在gap year把那些反反复复出现在你人生不同阶段的问题解决掉，那gap的性价比可太高了。'
    },
    {
      title: '掌控人生方向',
      content: '要做司机而不是乘客，方向盘要掌握在自己手里。主动选择比被动接受更重要。'
    },
    {
      title: '核心竞争力',
      content: '快速学习能力才是你的核心竞争力。在技术快速迭代的时代，学习能力比已有知识更重要。'
    },
    {
      title: '独特性的价值',
      content: '珍视自己的各种奇奇怪怪的特质，这是你独特性的来源。不要试图成为别人，要成为更好的自己。'
    },
    {
      title: '爱上犯错',
      content: '犯错不可怕，事实上你应该爱上犯错。因为本质上，犯错暴露了我们的认知盲点，我们的局限性。每一次犯错都是在给我们一次变得更好的机会。'
    }
  ];

  return (
    <section id="about-instructor" className="about-instructor">
      <div className="section-header">
        <h2>关于我</h2>
        <p>一个<span className="highlight">普通人</span>的Web3开发之路，从传统互联网到区块链的<span className="highlight">全栈实践</span></p>
      </div>
      
      <div className="instructor-content">


        {/* 转行经历 */}
        <div className="career-transition-card">
          <h3 className="card-title">我的转行经历</h3>
          <div className="transition-content">
            <div className="transition-preview">
              <p>
                作为一个小镇青年，面对AI时代的35岁危机，我选择了裸辞转行。
                从迷茫试错到找到方向，从传统互联网到Web3，这是一个普通人的真实转型故事...
              </p>
              <button 
                className="expand-btn"
                onClick={() => setIsTransitionExpanded(!isTransitionExpanded)}
              >
                {isTransitionExpanded ? '收起详情' : '查看完整经历'}
                <span className={`expand-icon ${isTransitionExpanded ? 'expanded' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
            
            <div className={`transition-details ${isTransitionExpanded ? 'expanded' : ''}`}>
              <div className="transition-stage">
                <h4 className="stage-title">💼 职业困境与决定</h4>
                <p>
                  作为一个小镇青年，父母在城市工作了大半辈子没养老金，只有靠我养老。
                  似乎我更应该选择苟在之前稳定的工作中，拿着2万5的工资，稳步发展。
                  但是真的有发展吗？
                </p>
                <p>
                  AI的出现，加速了35岁危机的到来。作为一个有极强危机意识的人，我可能有点过于恐慌了，
                  总之最后我选择瞒着家人，裸辞了。我不会游泳，甚至有点害怕水，但是水注定要淹过来，
                  不可避免，所以我选择先跳到泳池里练习。
                </p>
                <p>
                  我的想法很简单，如果某些危机注定发生，就让它发生的早一点，趁我还年轻，
                  还没有那么多的负担的时候，提前把危机解决掉。
                </p>
              </div>

              <div className="transition-stage">
                <h4 className="stage-title">🌊 深水区的慌乱</h4>
                <p>
                  但是后来还是被家里人知道我离职了，各种压力随之而来，"家庭责任感"与"内心追求"的冲突，
                  同辈压力（看着身边朋友发展越来越好）让我长期的难以入眠。储蓄渐渐减少，我开始有点慌不择路，
                  就像是游到了深水区，突然害怕，失去了基本动作，开始到处乱抓。
                </p>
                <p>
                  我尝试了各种方向：<strong>前端开发，产品经理，项目经历，运营，短视频媒体，英语口语练习</strong>。
                </p>
                <p>
                  大部分都失败了。前端因为错误认识，我以为它涉及更多的UI"美学"设计，有感性的内容在，但实际并不是。
                  产品是因为我缺乏商业思维【每次面试必问，你的商业模式是什么？】；
                  项目经理考了证书，但它只是找相关工作的必要不充分条件。
                </p>
              </div>

              <div className="transition-stage">
                <h4 className="stage-title">🎯 方法论的形成</h4>
                <p>
                  这个阶段我最大的收获是意识到，当你没有方向的时候，你可以选着快速试错，
                  去尝试各种方向，快速验证可行性，可行性的验证也很简单，就是看你能不能通过面试。
                </p>
                <p>
                  <strong>这个方法的要点是快：快速学习，快速实验，快速失败，及时止损。</strong>
                </p>
                <p>
                  另一个方法就是，做那些永远都不会错但大部分人都难以坚持下来的事情，
                  这些事情通过时间的累计会让你建立独特的竞争力：比如在有压力的时候，依然规律生活；
                  将英语当作技能而不是知识，融入到自己日常学习生活中等等。
                </p>
              </div>

              <div className="transition-stage">
                <h4 className="stage-title">🗣️ 英语学习的突破</h4>
                <p>
                  很幸运的是，和已经有结果的人的交流，让我认识到了英语长期学习的必然性，于是我放弃了对立马出效果的追求，
                  转而每天坚持至少练习半小时口语，用Anki记录暴露出来的问题, 
                  并通过playphrase 以及AI工具来解决问题，并通过录制英文表达视频的形式来应用我所学的新表达。
                </p>
                <p>
                  反反复复，每天都有的小收获，经过时间累计，变成了大结果--我可以自由的表达了。
                  在方向不明确的时候，<strong>快速试错（宽度搜索+剪枝）+ 做正确事情（持续迭代）</strong>，
                  耐心地给予它们时间，你追求的答案在这个过程会越来越清晰。
                </p>
              </div>

              <div className="transition-stage">
                <h4 className="stage-title">🚀 进入Web3</h4>
                <p>
                  在做视频地过程中，有很多朋友给我介绍了web3方向，说你英语不错，结合web3，
                  能够充分发挥我的优势，提高竞争力。
                </p>
                <p>
                  自然而然地，我开始新一轮地尝试，我选择的是Dex方向，它与传统互联网有很多的交叉点，
                  我的后端技能也有用得上，入行难度低一些。
                </p>
                <p>
                  于是做项目，投简历，面试复盘，继续迭代更新，最终拿下offer。但这只是一个起点，
                  如果你深入web3，你会发现很多细分的方向，我自己在持续学习合约等其它技能，
                  它们都可以用来做很多有趣的事情~
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="main-content-grid">
          {/* 人生感悟 */}
          <div className="content-card insights-card">
            <h3 className="card-title">那些帮助我的认知</h3>
            <div className="insights-compact">
              {insights.map((insight, index) => (
                <div key={index} className="insight-item">
                  <div className="insight-title-compact">{insight.title}</div>
                  <div className="insight-content-compact">{insight.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructorSection; 
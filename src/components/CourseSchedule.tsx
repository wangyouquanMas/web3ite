import React from 'react';
import './CourseSchedule.css';

const CourseSchedule: React.FC = () => {
  const batches = [
    { id: 1, date: '2025年2月15日', slots: { total: 10, filled: 10 }, isFull: true },
    { id: 2, date: '2025年5月15日', slots: { total: 10, filled: 7 }, isFull: false },
    { id: 3, date: '2025年8月15日', slots: { total: 10, filled: 0 }, isFull: false },
    { id: 4, date: '2025年11月15日', slots: { total: 10, filled: 0 }, isFull: false },
  ];

  return (
    <div>
      <section id="fee" className="course-fee">
        <div className="section-header">
          <h2>课程费用</h2>
          <p>投资您的未来，成为专业的Solana开发者</p>
        </div>
        <div className="fee-container">
          <div className="price-card">
            <div className="price-badge">最佳选择</div>
            <h3>全栈Solana开发者课程</h3>
            <div className="price">
              <span className="amount">1024</span>
              <span className="currency">USDT</span>
            </div>
            <p className="price-description">为期两个月的系统培训</p>
            <ul className="price-features">
              <li>完整的Solana开发技能培训</li>
              <li>项目实战经验</li>
              <li>行业导师指导</li>
              <li>就业咨询服务</li>
              <li>Solana开发者认证</li>
              <li>终身学习社区</li>
            </ul>
            <button className="btn primary">立即报名</button>
          </div>
        </div>
      </section>

      <section id="schedule" className="course-schedule">
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
      </section>
    </div>
  );
};

export default CourseSchedule; 
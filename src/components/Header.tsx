import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Web3Camp</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#features">课程特征</a></li>
          <li><a href="#course-detail">课表详情</a></li>
          <li><a href="#course-outline">技术路线图</a></li>
          <li><a href="#fee">课程费用</a></li>
          <li><a href="#about-instructor">关于我</a></li>
          <li><a href="#faq">常见问题</a></li>
          {/* <li><a href="https://web3ite.tech/" target="_blank" rel="noopener noreferrer">web3资料库</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header; 
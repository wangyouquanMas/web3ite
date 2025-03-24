import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Solana培训营</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#features">课程特征</a></li>
          <li><a href="#roadmap">技术路线图</a></li>
          <li><a href="#outline">课程大纲</a></li>
          <li><a href="#fee">课程费用</a></li>
          <li><a href="#schedule">开班信息</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 
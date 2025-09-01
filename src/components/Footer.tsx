import React from 'react';
import './Footer.css';
// Using require instead of import for the image
const wechatQR = require('../assets/images/wechat.jpg');

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <h2>Web3培训营</h2>
          <p>系统学习<span className="blockchain-highlight">Solana</span>和<span className="blockchain-highlight">以太坊</span>开发，从零基础到专业开发者</p>
          <div className="social-links">
            {/* <a href="#" className="social-link">微信</a>
            <a href="#" className="social-link">知乎</a>
            <a href="#" className="social-link">GitHub</a> */}
          </div>
        </div>
        
        <div className="footer-links-section">
          <div className="footer-links-column">
            <h3>快速链接</h3>
            <ul>
              <li><a href="#features">课程特征</a></li>
              <li><a href="#course-outline">技术路线图</a></li>
              <li><a href="#course-detail">课程大纲</a></li>
              <li><a href="#fee">课程费用</a></li>
              {/* <li><a href="#faq">常见问题</a></li> */}
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>学习资源</h3>
            <ul>
              <li><a href="https://web3ite.tech/" target="_blank" rel="noopener noreferrer">Web3资料库</a></li>
              <li><a href="https://solana.com" target="_blank" rel="noopener noreferrer">Solana官网</a></li>
              <li><a href="https://docs.solana.com" target="_blank" rel="noopener noreferrer">开发文档</a></li>
              <li><a href="https://github.com/solana-labs" target="_blank" rel="noopener noreferrer">GitHub仓库</a></li>
              <li><a href="https://solanacookbook.com" target="_blank" rel="noopener noreferrer">Solana Cookbook</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>联系我们</h3>
            <ul>
              <li>微信: 1091643994</li>
            </ul>
            <div className="wechat-qr">
              <p>扫描添加微信</p>
              <img src={wechatQR} alt="WeChat QR Code" className="wechat-qr-image" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Web3开发训练营. 保留所有权利.</p>
      </div>
    </footer>
  );
};

export default Footer; 
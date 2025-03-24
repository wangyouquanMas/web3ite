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
          <h2>Solana培训营</h2>
          <p>系统学习Solana区块链开发，从零基础到专业开发者</p>
          <div className="social-links">
            <a href="#" className="social-link">微信</a>
            <a href="#" className="social-link">知乎</a>
            <a href="#" className="social-link">GitHub</a>
          </div>
        </div>
        
        <div className="footer-links-section">
          <div className="footer-links-column">
            <h3>快速链接</h3>
            <ul>
              <li><a href="#features">课程特征</a></li>
              <li><a href="#roadmap">技术路线图</a></li>
              <li><a href="#outline">课程大纲</a></li>
              <li><a href="#fee">课程费用</a></li>
              <li><a href="#schedule">开班信息</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>学习资源</h3>
            <ul>
              <li><a href="https://solana.com" target="_blank" rel="noopener noreferrer">Solana官网</a></li>
              <li><a href="https://docs.solana.com" target="_blank" rel="noopener noreferrer">开发文档</a></li>
              <li><a href="https://github.com/solana-labs" target="_blank" rel="noopener noreferrer">GitHub仓库</a></li>
              <li><a href="https://solanacookbook.com" target="_blank" rel="noopener noreferrer">Solana Cookbook</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>联系我们</h3>
            <ul>
              <li><a href="mailto:info@solanatraining.com">info@solanatraining.com</a></li>
              <li>微信: SolanaTraining</li>
              <li>工作时间: 周一至周五 9:00-18:00</li>
            </ul>
            <div className="wechat-qr">
              <p>扫描添加微信</p>
              <img src={wechatQR} alt="WeChat QR Code" className="wechat-qr-image" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Solana培训营. 保留所有权利.</p>
      </div>
    </footer>
  );
};

export default Footer; 
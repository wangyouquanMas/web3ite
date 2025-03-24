import React, { useState } from 'react';
import './HeroSection.css';

// Using require for the image
const wechatQR = require('../assets/images/wechat.jpg');

const HeroSection: React.FC = () => {
  const [showWechatQR, setShowWechatQR] = useState(false);

  const handleConsultClick = () => {
    setShowWechatQR(true);
  };

  const handleClosePopup = () => {
    setShowWechatQR(false);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Solana培训营</h1>
        <p>系统学习Solana区块链开发，从零基础到专业开发者</p>
        <div className="hero-buttons">
          <button className="btn primary">申请报名</button>
          <button className="btn secondary" onClick={handleConsultClick}>咨询课程详情</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Anime-style dream life illustration */}
        <div className="dream-lifestyle-illustration">
          <div className="room-wall"></div>
          <div className="room-floor"></div>
          
          <div className="window-frame">
            <div className="window-sill"></div>
            <div className="window-frame-vertical"></div>
            <div className="window-view">
              <div className="ocean"></div>
              <div className="sky"></div>
              <div className="sun"></div>
              <div className="clouds">
                <div className="cloud cloud-1"></div>
                <div className="cloud cloud-2"></div>
              </div>
              <div className="islands">
                <div className="island island-1"></div>
                <div className="island island-2"></div>
              </div>
            </div>
          </div>
          
          <div className="desk">
            <div className="desk-legs"></div>
            <div className="desk-items">
              <div className="coffee-cup">
                <div className="coffee-steam"></div>
              </div>
              <div className="notebook"></div>
            </div>
          </div>
          
          <div className="laptop">
            <div className="laptop-screen">
              <div className="code-snippet">
                <div className="code-line-numbers">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                </div>
                <div className="code-content">
                  <div className="code-text"><span className="keyword">use</span> <span className="namespace">solana_program::</span>account_info::AccountInfo;</div>
                  <div className="code-text"><span className="keyword">use</span> <span className="namespace">anchor_lang::</span>prelude::*;</div>
                  <div className="code-text"></div>
                  <div className="code-text"><span className="keyword">pub fn</span> <span className="function">process</span>(ctx: Context&lt;Transfer&gt;) <span className="symbol">-&gt;</span> Result&lt;<span className="keyword">()&gt;</span> <span className="symbol">&#123;</span></div>
                  <div className="code-text indent">ctx.<span className="property">accounts</span>.token_program.transfer(</div>
                  <div className="code-text indent doubled">Transfer&#123; .. &#125;</div>
                  <div className="code-text"><span className="symbol">&#125;</span></div>
                </div>
              </div>
              <div className="cursor-blink"></div>
            </div>
            <div className="laptop-keyboard"></div>
          </div>
          
          <div className="person">
            <div className="head">
              <div className="hair"></div>
              <div className="face">
                <div className="eyes"></div>
                <div className="smile"></div>
              </div>
            </div>
            <div className="body">
              <div className="arms">
                <div className="arm arm-left"></div>
                <div className="arm arm-right"></div>
              </div>
            </div>
            <div className="legs">
              <div className="leg leg-left"></div>
              <div className="leg leg-right"></div>
            </div>
          </div>
          
          <div className="potted-plant"></div>
          <div className="wall-art"></div>
          
          <div className="illustration-label">Work from anywhere</div>
        </div>
      </div>

      {/* WeChat QR Code Popup */}
      {showWechatQR && (
        <div className="wechat-popup-overlay" onClick={handleClosePopup}>
          <div className="wechat-popup" onClick={(e) => e.stopPropagation()}>
            <div className="wechat-popup-header">
              <h3>扫描添加微信咨询</h3>
              <button className="close-btn" onClick={handleClosePopup}>×</button>
            </div>
            <div className="wechat-popup-content">
              <img src={wechatQR} alt="WeChat QR Code" className="wechat-popup-image" />
              <p>扫描上方二维码添加微信，获取课程详细信息</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection; 
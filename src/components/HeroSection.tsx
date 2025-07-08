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
        <h1>Web3训练营</h1>
        <p>系统学习Solana和以太坊开发，从零基础到专业开发者</p>
        <div className="hero-buttons">
          <button className="btn secondary" onClick={handleConsultClick}>咨询课程详情</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Anime-style dream life illustration */}
        <div className="dream-lifestyle-illustration">
          <div className="room-wall"></div>
          <div className="room-floor"></div>
          <div className="window-reflection"></div>
          <div className="city-glow"></div>
          <div className="window-frame">
            <div className="window-sill"></div>
            <div className="window-frame-vertical"></div>
            <div className="window-frame-horizontal"></div>
            <div className="window-depth"></div>
            <div className="window-view">
              <div className="sky"></div>
              <div className="sun"></div>
              
              {/* Airplanes */}
              <div className="airplane airplane-1">
                <div className="airplane-body"></div>
                <div className="airplane-tail"></div>
                <div className="airplane-wing"></div>
                <div className="airplane-contrail"></div>
              </div>
              <div className="airplane airplane-2">
                <div className="airplane-body"></div>
                <div className="airplane-tail"></div>
                <div className="airplane-wing"></div>
                <div className="airplane-contrail"></div>
              </div>
              
              {/* Birds */}
              <div className="birds bird-group-1">
                <div className="bird bird-1"></div>
                <div className="bird bird-2"></div>
                <div className="bird bird-3"></div>
              </div>
              <div className="birds bird-group-2">
                <div className="bird bird-1"></div>
                <div className="bird bird-2"></div>
                <div className="bird bird-3"></div>
                <div className="bird bird-4"></div>
                <div className="bird bird-5"></div>
              </div>
              <div className="birds bird-group-3">
                <div className="bird bird-1"></div>
                <div className="bird bird-2"></div>
                <div className="bird bird-3"></div>
              </div>
              
              <div className="clouds">
                <div className="cloud cloud-1"></div>
                <div className="cloud cloud-2"></div>
              </div>
              <div className="city-skyline">
                <div className="city-silhouette"></div>
                <div className="buildings">
                  <div className="building building-1">
                    <div className="windows">
                      {[...Array(15)].map((_, i) => <div key={i} className="building-window"></div>)}
                    </div>
                  </div>
                  <div className="building building-2">
                    <div className="windows">
                      {[...Array(15)].map((_, i) => <div key={i} className="building-window"></div>)}
                    </div>
                  </div>
                  <div className="building building-3">
                    <div className="windows">
                      {[...Array(15)].map((_, i) => <div key={i} className="building-window"></div>)}
                    </div>
                  </div>
                  <div className="building building-4">
                    <div className="windows">
                      {[...Array(15)].map((_, i) => <div key={i} className="building-window"></div>)}
                    </div>
                  </div>
                  <div className="building building-5">
                    <div className="windows">
                      {[...Array(15)].map((_, i) => <div key={i} className="building-window"></div>)}
                    </div>
                  </div>
                  <div className="building building-6">
                    <div className="windows">
                      {[...Array(15)].map((_, i) => <div key={i} className="building-window"></div>)}
                    </div>
                  </div>
                </div>
                <div className="car-lights">
                  <div className="car car-1"></div>
                  <div className="car car-2"></div>
                  <div className="car car-3"></div>
                  <div className="car car-4"></div>
                  <div className="car car-5"></div>
                </div>
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
      
      {/* Transition elements */}
      <div className="hero-transition-bottom"></div>
      
      {showWechatQR && (
        <div className="wechat-popup-overlay" onClick={handleClosePopup}>
          <div className="wechat-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="wechat-popup-close" onClick={handleClosePopup}>×</button>
            <img src={wechatQR} alt="WeChat QR Code" className="wechat-popup-image" />
            <p>扫描上方二维码添加微信，获取课程详细信息</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection; 
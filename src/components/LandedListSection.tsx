import React, { useCallback, useEffect, useState } from 'react';
import './LandedListSection.css';

type ScreenshotItem = {
  id: number;
  imageUrl: string;
  alt: string;
  description: string;
};

/**
 * 截图放在 public/landed-screenshots/，在此登记路径与说明。
 * 文件名建议 image13.png、image14.png … 递增，避免与已有冲突。
 */
const screenshots: ScreenshotItem[] = [
  {
    id: 1,
    imageUrl: '/landed-screenshots/image1.png',
    alt: '学员成果截图',
    description: '原cex后端，现项目方岗位做链数据采集交易相关的后端',
  },
  {
    id: 2,
    imageUrl: '/landed-screenshots/image3.png',
    alt: '学员成果截图',
    description: '原项目方路由岗,现做gate开发岗位',
  },
  {
    id: 3,
    imageUrl: '/landed-screenshots/image4.png',
    alt: '学员成果截图',
    description: '原来做solana交易加速，现做量化相关',
  },
  {
    id: 4,
    imageUrl: '/landed-screenshots/image5.png',
    alt: '学员成果截图',
    description: '原前端开发，现Bybit web3开发岗位',
  },
  {
    id: 5,
    imageUrl: '/landed-screenshots/image6.png',
    alt: '学员成果截图',
    description: '原web2 DB岗，现链上数据开发岗位',
  },
  {
    id: 6,
    imageUrl: '/landed-screenshots/image2.png',
    alt: '学员成果截图',
    description: '原2年java后端,现做BSC链上数据分析岗位转正',
  },
  {
    id: 7,
    imageUrl: '/landed-screenshots/image7.png',
    alt: '学员成果截图',
    description: '原java后端电商业务,现做web3钱包开发',
  },
  {
    id: 8,
    imageUrl: '/landed-screenshots/image8.png',
    alt: '学员成果截图',
    description: '原java开发，现Defi开发',
  },
  {
    id: 9,
    imageUrl: '/landed-screenshots/image9.png',
    alt: '学员成果截图',
    description: '原Okx合约开发，现gate合约开发',
  },
  {
    id: 10,
    imageUrl: '/landed-screenshots/image10.png',
    alt: '学员成果截图',
    description: '原java后端，现dex开发',
  },
  {
    id: 11,
    imageUrl: '/landed-screenshots/image11.png',
    alt: '学员成果截图',
    description: '原运营商业务，现做稳定币支付',
  },
  {
    id: 12,
    imageUrl: '/landed-screenshots/image12.png',
    alt: '学员成果截图',
    description: '前数据分析岗，现隐私链开发',
  },
];

const LandedListSection: React.FC = () => {
  const [active, setActive] = useState<ScreenshotItem | null>(null);
  const [failedIds, setFailedIds] = useState<Set<number>>(() => new Set());

  const markFailed = useCallback((id: number) => {
    setFailedIds((prev) => new Set(prev).add(id));
  }, []);

  const closeModal = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, closeModal]);

  return (
    <section id="landed-list" className="landed-list" aria-labelledby="landed-heading">
      <div className="section-transition-top" aria-hidden />

      <div className="section-header">
        <h2 id="landed-heading">已上岸</h2>
        <p>部分学员成果展示（截图持续更新中）</p>
      </div>

      <div className="landed-container">
        <div className="screenshots-grid">
          {screenshots.length === 0 ? (
            <div className="screenshot-card">
              <div className="screenshot-image-wrapper" role="img" aria-label="暂无截图">
                <div className="screenshot-placeholder">将截图放入 public/landed-screenshots/ 并在本组件中登记</div>
              </div>
              <div className="screenshot-description">
                <p>暂无展示图片</p>
              </div>
            </div>
          ) : (
            screenshots.map((item) => (
              <article key={item.id} className="screenshot-card">
                <button
                  type="button"
                  className="screenshot-image-wrapper"
                  onClick={() => !failedIds.has(item.id) && setActive(item)}
                  disabled={failedIds.has(item.id)}
                  aria-label={`放大查看：${item.description}`}
                >
                  {failedIds.has(item.id) ? (
                    <div className="screenshot-placeholder">图片加载失败，请检查 {item.imageUrl}</div>
                  ) : (
                    <>
                      <img
                        className="screenshot-image"
                        src={item.imageUrl}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        onError={() => markFailed(item.id)}
                      />
                      <div className="screenshot-overlay" aria-hidden>
                        <svg className="view-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="view-text">点击查看</span>
                      </div>
                    </>
                  )}
                </button>
                <div className="screenshot-description">
                  <p>{item.description}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>

      <div className="section-transition-bottom" aria-hidden />

      {active && (
        <div
          className="image-modal-overlay"
          role="dialog"
          aria-modal
          aria-label={active.alt}
          onClick={closeModal}
        >
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="close-modal-btn" onClick={closeModal} aria-label="关闭">
              &times;
            </button>
            <img
              className="modal-image"
              src={active.imageUrl}
              alt={active.alt}
              decoding="async"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default LandedListSection;

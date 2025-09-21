<template>
  <div class="highlight-section">
    <div class="highlight-banner">
      <div class="banner-icon">🛍️</div>
      <div class="banner-content">
        <div class="banner-title">2023年双十二消费热点</div>
        <div class="banner-text">智能化家具、家电、销售额超过 <span class="highlight-number">10亿元</span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
}
.chart {
  min-height: 0;
  min-width: 0;
  height: 100%;
  width: 100%;
  display: flex;
}

.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.chart-wrapper {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.chart-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #4A90E2, #357ABD, #2E5F8F);
  border-radius: 16px 16px 0 0;
}

.chart-header {
  text-align: center;
  margin-bottom: 16px;
}

.chart-title {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #2c3e50, #4A90E2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.chart-subtitle {
  font-size: 13px;
  color: #7f8c8d;
  font-weight: 400;
}

.chart {
  border: none;
  border-radius: 12px;
  position: relative;
  background: transparent;
}

.chart-footer {
  margin-top: 24px;
  padding-top: 20px;
}

.decorative-line-main {
  height: 3px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    #FF6B6B 10%,
    #4A90E2 30%, 
    #357ABD 50%, 
    #2E5F8F 70%,
    #27AE60 90%,
    transparent 100%);
  margin-bottom: 20px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(74, 144, 226, 0.3);
}

/* 主要统计卡片网格 */
.main-stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

.stat-card {
  /* background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); */
  /* background-color: rgb(255, 255, 255, 0.1); */
  /* border-radius: 12px; */
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  /* border: 1px solid #e9ecef; */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-icon {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(74, 144, 226, 0.1);
  border-radius: 10px;
}

.stat-content {
  flex: 1;
}

.stat-label {
  font-size: 12px;
  color: #fff;
  margin-bottom: 4px;
  font-weight: 500;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: #29f;
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.unit {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}

/* 特色数据亮点区域 */
.highlight-section {
  margin-bottom: 20px;
}

.highlight-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.highlight-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 200%;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  animation: shimmer 3s infinite;
}

.banner-icon {
  font-size: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-content {
  flex: 1;
}

.banner-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.banner-text {
  font-size: 14px;
  opacity: 0.9;
}

.highlight-number {
  font-weight: 700;
  font-size: 16px;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.banner-decoration {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sparkle {
  width: 8px;
  height: 8px;
  background: #FFD700;
  border-radius: 50%;
  animation: sparkle 2s infinite;
}

.sparkle:nth-child(2) {
  animation-delay: 0.5s;
}

.sparkle:nth-child(3) {
  animation-delay: 1s;
}

/* 底部装饰区域 */
.bottom-decoration {
  text-align: center;
}

.decorative-pattern {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.pattern-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4A90E2, #357ABD);
  animation: bounce 2s infinite;
}

.pattern-diamond {
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #27AE60, #2ECC71);
  transform: rotate(45deg);
  animation: rotate 3s infinite linear;
}

.pattern-circle:nth-child(odd) {
  animation-delay: 0.2s;
}

.pattern-diamond:nth-child(even) {
  animation-delay: 0.5s;
}

.data-source {
  padding: 8px 16px;
  background: rgba(108, 117, 125, 0.1);
  border-radius: 20px;
  display: inline-block;
}

.source-text {
  font-size: 11px;
  color: #6c757d;
  font-weight: 400;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0.4;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}

/* 悬停效果 */
.chart-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chart-container {
    padding: 10px;
  }
  
  .chart-wrapper {
    padding: 16px;
  }
  
  .chart-title {
    font-size: 18px;
  }
  
  .main-stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .stat-card {
    padding: 12px;
  }
  
  .stat-icon {
    font-size: 20px;
    width: 36px;
    height: 36px;
  }
  
  .stat-value {
    font-size: 18px;
  }
  
  .highlight-banner {
    padding: 16px;
    gap: 12px;
  }
  
  .banner-icon {
    font-size: 28px;
    width: 44px;
    height: 44px;
  }
  
  .banner-title {
    font-size: 14px;
  }
  
  .banner-text {
    font-size: 13px;
  }
  
  .decorative-pattern {
    gap: 8px;
  }
}
</style>
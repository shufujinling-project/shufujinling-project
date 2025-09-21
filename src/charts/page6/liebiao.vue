<template>
  <div class="scrolling-table-container">
    <h2 class="table-title">当前研究热点</h2>
    <div class="table-wrapper">
      <table class="scrolling-table">
        <thead>
          <tr>
            <th>排名</th>
            <th>研究热点</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(row, index) in visibleRows" 
            :key="row.id"
            :class="{ 'highlight': index === highlightIndex }"
          >
            <td class="rank-cell">{{ row.index }}</td>
            <td class="content-cell">{{ row.col1 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollingTable',
  data() {
    return {
      isScrolling: true,
      currentStartIndex: 0,
      highlightIndex: 0,
      scrollInterval: null,
      highlightInterval: null,
      visibleRowCount: 5,
      scrollSpeed: 3000, // 滚动间隔（毫秒）
      highlightSpeed: 400, // 高亮间隔（毫秒）
      
      // 模拟数据
      tableData: [
        { id: 1, index: 1, col1: '聚焦数智文科与AI融合，探索跨学科前沿发展路径' },
        { id: 2, index: 2, col1: '着力大模型系统架构钻研，推动创新应用落地各行业领域' },
        { id: 3, index: 3, col1: '深入研发新型光学材料，开拓隐形技术与成像领域新可能'},
        { id: 4, index: 4, col1: '全力推进软体机器人技术革新，结合新兴材料实现突破' },
        { id: 5, index: 5, col1: '深耕智能网联汽车技术，打造"车路云一体化"智慧出行'},
        { id: 6, index: 6, col1: '加速纳米酶增强假体研究，助力产业化进程服务医疗需求' },
        { id: 7, index: 7, col1: '攻坚量子材料与器件开发，挖掘独特物理内涵引领变革' },
        { id: 8, index: 8, col1: '围绕新能源利用与储能，契合国家战略开展深度技术研发' },
      ]
    }
  },
  computed: {
    visibleRows() {
      const result = [];
      for (let i = 0; i < this.visibleRowCount; i++) {
        const dataIndex = (this.currentStartIndex + i) % this.tableData.length;
        result.push(this.tableData[dataIndex]);
      }
      return result;
    }
  },
  mounted() {
    this.startScroll();
  },
  beforeUnmount() {
    this.clearIntervals();
  },
  methods: {
    startScroll() {
      this.isScrolling = true;
      
      // 主滚动定时器
      this.scrollInterval = setInterval(() => {
        this.currentStartIndex = (this.currentStartIndex + 1) % this.tableData.length;
        this.highlightIndex = 0; // 重置高亮到第一行
      }, this.scrollSpeed);
      
      // 高亮轮播定时器
      this.highlightInterval = setInterval(() => {
        this.highlightIndex = (this.highlightIndex + 1) % this.visibleRowCount;
      }, this.highlightSpeed);
    },
    
    pauseScroll() {
      this.isScrolling = false;
      this.clearIntervals();
    },
    
    resetScroll() {
      this.clearIntervals();
      this.currentStartIndex = 0;
      this.highlightIndex = 0;
      if (this.isScrolling) {
        this.startScroll();
      }
    },
    
    clearIntervals() {
      if (this.scrollInterval) {
        clearInterval(this.scrollInterval);
        this.scrollInterval = null;
      }
      if (this.highlightInterval) {
        clearInterval(this.highlightInterval);
        this.highlightInterval = null;
      }
    },
    
    // 更新数据的方法
    updateData(newData) {
      this.tableData = newData;
      this.resetScroll();
    },
    
    // 设置滚动速度
    setScrollSpeed(speed) {
      this.scrollSpeed = speed;
      if (this.isScrolling) {
        this.pauseScroll();
        this.startScroll();
      }
    }
  }
}
</script>

<style scoped>
.scrolling-table-container {
  max-width: 900px;
  margin: 0 auto;
  /* padding: 25px; */
  background-color: 'rgba(255,255,255,0.1)';
  /* border-radius: 16px; */
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

/* .scrolling-table-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #fff, transparent, #fff);
  opacity: 0.8;
} */

.table-title {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  /* margin-bottom: 10px; */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

.table-wrapper {
  background: rgba(255, 255, 255, 0.12);
  /* border-radius: 12px; */
  overflow: hidden;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.scrolling-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Microsoft YaHei', 'PingFang SC', Arial, sans-serif;
}

.scrolling-table thead th {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
  color: #fff;
  padding: 6px;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.15);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.scrolling-table thead th:first-child {
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.9), rgba(41, 128, 185, 1));
  width: 80px;
  border-radius: 0;
}

.scrolling-table tbody tr {
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.scrolling-table tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.03);
}

.scrolling-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.scrolling-table tbody tr.highlight {
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.5), rgba(41, 128, 185, 0.6)) !important;
  transform: scale(1.02) translateY(-2px);
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
  border-radius: 8px;
  border: 1px solid rgba(52, 152, 219, 0.6);
}

.rank-cell {
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.7), rgba(41, 128, 185, 0.8));
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  padding: 4px;
  width: 80px;
  position: relative;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.rank-cell::after {
  content: '';
  position: absolute;
  right: 0;
  top: 10%;
  bottom: 10%;
  width: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
}

.scrolling-table tbody tr.highlight .rank-cell {
  background: linear-gradient(135deg, rgba(52, 152, 219, 1), rgba(30, 85, 150, 1));
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);
}

.content-cell {
  color: #fff;
  font-size: 14px;
  padding: 4px;
  text-align: left;
  line-height: 1.5;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.3px;
}

.scrolling-table tbody tr.highlight .content-cell {
  color: #fff;
  font-weight: 600;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .scrolling-table-container {
    /* margin: 10px; */
    /* padding: 20px; */
    max-width: 95%;
  }
  
  .table-title {
    font-size: 22px;
    /* margin-bottom: 20px; */
  }
  
  .scrolling-table thead th {
    /* padding: 12px 15px; */
    font-size: 14px;
  }
  
  .rank-cell {
    font-size: 14px;
    /* padding: 12px 10px; */
    width: 70px;
  }
  
  .content-cell {
    font-size: 13px;
    /* padding: 12px 15px; */
    /* line-height: 1.4; */
  }
}

@media (max-width: 480px) {
  .content-cell {
    font-size: 12px;
    /* padding: 10px 12px; */
  }
  
  .rank-cell {
    width: 60px;
    /* padding: 10px 8px; */
  }
}
</style>
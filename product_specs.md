# 产品规格说明书 (Product Specifications)

## 1. 产品概述 (Overview)
* **产品名称**：我的人生卡片 (Life Cards)
* **产品定位**：面向家庭代际传承的轻量化数字人生回忆手账。
* **核心价值**：帮助创作者（长辈）以“碎片化、无负担”的方式记录一生的故事、照片与智慧沉淀，以结构化卡片的形式完整留存并传递给子女（儿子）。
* **形态**：离线优先渐进式 Web 应用 (Offline-first PWA)。

---

## 2. 核心设计哲学 (Core Philosophy)
1. **轻量切片，拒绝沉重长篇**：打破编年体自传的沉重感，以单张独立卡片为叙事基本单元。
2. **5W1H 记忆骨架**：每张卡片锚定时间、地点、人物与核心事件，帮助清晰唤醒并沉淀回忆。
3. **关系圈层导向**：围绕个体生命中最重要的亲密关系与社会关系展开分类与管理。
4. **安心长久，主权在己**：数据完全保存在设备本地与用户私有空间，提供可导出的数据归档。

---

## 3. 信息架构与数据模型 (Information Architecture & Data Model)

### 3.1 人生圈层 (Circles / Categories)
系统支持动态圈层管理，默认内置三大基础圈层：
* **核心家庭**：家人 (儿子/老公)
* **原生家庭**：父母与兄弟姐妹
* **社会羁绊**：朋友 / 同学 / 同事
* *（支持用户自主新增、重命名与删除自定义圈层，如：教学生涯、独处时光、旅途见闻等）*

### 3.2 卡片数据实体 (Life Card Schema)
```typescript
interface LifeCard {
  id: string;               // 唯一标识符 (例如: card_1776000000000)
  category: string;         // 所属圈层分类
  title: string;            // 事件标题 (What Event)
  date: string;             // 发生时间 (When, 格式: YYYY-MM-DD)
  location?: string;        // 发生地点 (Where)
  who?: string;             // 关键关联人物 (Who)
  story: string;            // 详细回忆、心情或人生体悟 (Story / Text)
  image?: string | null;    // 压缩后的 Base64 图片数据 (Image)
  audioUrl?: string | null; // 原声录音文件路径/Base64 (可选多模态扩展)
  createdAt: number;        // 卡片创建时间戳
}
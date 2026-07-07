# 马雨秋新闻传播学生作品集

这是一个面向见习营、课程展示和新闻传播方向申请场景的个人简历/作品集网页。页面不按传统求职简历排序，而是围绕“能写、能编、能剪、能融、能跑、能析”六类能力组织经历、作品与证明材料。

## 页面内容

- Hero 首屏：身份、定位、能力标签和简历下载入口
- 核心能力地图：六类新闻传播能力与对应产出
- 代表作品集：评论、视频、H5、AIGC、数据、调研、小程序等作品卡片，支持筛选和详情展开
- 重点经历时间线：中国青年网实习、北京文化论坛、贵州选题、调研项目、赛事经历等
- 课程成绩与技能工具：新闻评论、新闻编辑、电视编辑、SPSS、Python、QGIS、微信小程序等
- 联系与下载：邮箱、电话、纸质版简历下载

## 技术栈

- Vite
- React
- lucide-react
- 纯 CSS 响应式布局

## 本地开发

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
pnpm preview
```

## GitHub Pages 部署

仓库包含 `.github/workflows/pages.yml`。推送到 GitHub 后，在仓库的 Settings → Pages 中选择 GitHub Actions 作为部署来源，之后每次推送 `main` 分支都会自动构建并发布。

如果使用项目页，Vite 已配置 `base: './'`，静态资源会以相对路径加载。

## 作品材料说明

已接入的外链包括：

- 多样评杂志：https://flbook.com.cn/c/Dc0G141gJM
- 贵州互动 H5：https://vmel6943-commits.github.io/colorful_guizhou/
- 2025北京文化论坛抖音短视频：
  - https://v.douyin.com/7nKYwKBTTgc/
  - https://v.douyin.com/tUCXpp2U13A/
- 烽火青春相关微信链接：
  - https://mp.weixin.qq.com/s/tv6risQUbNk_otwyqBtdFA
  - https://mp.weixin.qq.com/s/9xPIPXap40_byj7YzZR-Sg
- 德阳调研微信链接：https://mp.weixin.qq.com/s/sHSk1-JFdhiqOTO3kDPOCQ

没有找到公开链接的作品会在页面中显示“链接待补充”或“作品材料整理中”，没有虚构外链。

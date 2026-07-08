# 马雨秋新闻传播学生作品集

这是一个面向见习营、课程展示和新闻传播方向申请场景的个人简历/作品集网页。页面不按传统求职简历排序，而是围绕“能写、能编、能剪、能融、能跑”五类能力组织经历、作品与证明材料。

新版展示逻辑为：更现代的作品展陈式界面，每个能力模块对应真实作品截图、外部链接或视频资产链接。

## 页面内容

- Hero 首屏：身份、定位、能力标签和简历下载入口
- 五个能力模块：评论写作、编辑策划、短视频叙事、AIGC/H5融合表达、实地调研
- 代表作品证据：只使用已提供材料、已发现H5、已查到的两篇评论转载页和本地贵州图片
- 贵州红色文化互动页：新增独立静态互动页，主作品集提供跳转入口
- 经历与训练证据：中国青年网实习、北京文化论坛、贵州选题、调研项目、赛事经历等
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
- 新增贵州红色文化互动页：`public/red-guizhou/index.html`
- 蓝桥杯 AIGC 视频：https://github.com/vmel6943-commits/ma-yuqiu-news-portfolio/releases/download/portfolio-video-assets/lanqiao-aigc-video.mp4
- 大广赛 AIGC 视频：https://github.com/vmel6943-commits/ma-yuqiu-news-portfolio/releases/download/portfolio-video-assets/daguangsai-aigc-video.mp4
- 评论《没用AI赚到钱，也不能先被“AI焦虑”收割了》：https://view.inews.qq.com/a/20260319A07PPR00
- 评论《拿婴儿玩偶施暴，算哪门子解压？》：https://view.inews.qq.com/a/20260601A066H100
- 2025北京文化论坛抖音短视频：
  - https://v.douyin.com/7nKYwKBTTgc/
  - https://v.douyin.com/tUCXpp2U13A/
- 烽火青春相关微信链接：
  - https://mp.weixin.qq.com/s/tv6risQUbNk_otwyqBtdFA
  - https://mp.weixin.qq.com/s/9xPIPXap40_byj7YzZR-Sg
- 德阳调研微信链接：https://mp.weixin.qq.com/s/sHSk1-JFdhiqOTO3kDPOCQ

没有找到公开链接或真实截图的作品仅作为文字能力证据展示，没有虚构外链或伪造截图。

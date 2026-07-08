export const profile = {
  name: '马雨秋',
  identity: '中国社会科学院大学 新闻传播学院 新闻学专业 2024级本科生',
  headline: '从选题判断到融合表达的新闻作品集',
  summary:
    '这不是一页普通简历，而是一组能力证据：评论写作、编辑策划、现场短视频、AIGC视听创作、H5互动与实地调研。每个模块都对应真实截图、链接或已上传的视频材料。',
  tags: ['评论写作', '编辑策划', '短视频报道', 'AIGC视频', 'H5互动', '实地调研']
};

export const contacts = {
  email: '2388983944@qq.com',
  phone: '15125747024'
};

export const videoAssets = {
  daguangsai:
    'https://github.com/vmel6943-commits/ma-yuqiu-news-portfolio/releases/download/portfolio-video-assets/daguangsai-aigc-video.mp4',
  lanqiao:
    'https://github.com/vmel6943-commits/ma-yuqiu-news-portfolio/releases/download/portfolio-video-assets/lanqiao-aigc-video.mp4'
};

export const modules = [
  {
    id: 'writing',
    index: '01',
    label: '能写',
    title: '新闻评论与公共议题表达',
    desc: '能从热点中抓议题、从争议中提判断，用评论完成公共表达。',
    stats: ['新闻评论 92 分', '两篇评论公开转载', '议题：AI焦虑 / 平台伦理'],
    works: [
      {
        title: '没用AI赚到钱，也不能先被“AI焦虑”收割了',
        type: '新闻评论',
        role: '作者',
        desc: '聚焦AI焦虑、技术传播与媒体流量逻辑。',
        image: './images/comment-ai-qq.png',
        href: 'https://view.inews.qq.com/a/20260319A07PPR00'
      },
      {
        title: '拿婴儿玩偶施暴，算哪门子解压？',
        type: '新闻评论',
        role: '作者',
        desc: '聚焦未成年人保护、平台传播与消费伦理。',
        image: './images/comment-doll-qq.png',
        href: 'https://view.inews.qq.com/a/20260601A066H100'
      }
    ]
  },
  {
    id: 'editing',
    index: '02',
    label: '能编',
    title: '新闻编辑与专题策划',
    desc: '从单篇评论进入栏目与产品，完成选题、选稿、撰稿、排版的编辑训练。',
    stats: ['新闻编辑 97 分', '评论杂志核心成员', '专题化/栏目化表达'],
    works: [
      {
        title: '多样评（多young评）',
        type: '新闻编辑课程杂志',
        role: '核心成员',
        desc: '从选题策划、稿件筛选到原创撰稿与排版深度参与。',
        image: './images/screenshot-magazine.webp',
        href: 'https://flbook.com.cn/c/Dc0G141gJM'
      }
    ]
  },
  {
    id: 'video',
    index: '03',
    label: '能剪',
    title: '现场报道与短视频叙事',
    desc: '面向平台完成素材采集、剪辑成片、封面字幕和发布包装。',
    stats: ['电视编辑 92 分 / 第二', '北京文化论坛总获赞超 2000', '小红书二创 4 小时播放破 5 万'],
    works: [
      {
        title: '2025北京文化论坛短视频报道',
        type: '现场报道 / 抖音',
        role: '中青网学生记者',
        desc: '参与论坛现场素材采集、剪辑与平台化包装。',
        image: './images/screenshot-douyin-report.webp',
        href: 'https://v.douyin.com/7nKYwKBTTgc/',
        secondaryHref: 'https://v.douyin.com/tUCXpp2U13A/'
      },
      {
        title: '烽火青春：壮士八佰魂，忠骨今犹存',
        type: '红色主题视听传播',
        role: '剪辑与视听叙事',
        desc: '校内红色主题系列视听作品，训练素材组织和情绪表达。',
        href: 'https://mp.weixin.qq.com/s/tv6risQUbNk_otwyqBtdFA',
        secondaryHref: 'https://mp.weixin.qq.com/s/9xPIPXap40_byj7YzZR-Sg'
      }
    ]
  },
  {
    id: 'fusion',
    index: '04',
    label: '能融',
    title: 'AIGC、H5与互动新闻表达',
    desc: '把新闻选题转成视频、互动页和多平台视觉方案，突出融合表达能力。',
    stats: ['蓝桥杯 AI 短视频二等奖', '大广赛 AIGC 广告入围', '贵州 H5 与红色文化互动页'],
    works: [
      {
        title: '蓝桥杯 AIGC 视频作品',
        type: 'AI生成短视频',
        role: '创意构思 / 画面生成 / 剪辑包装',
        desc: '本地视频已上传为 GitHub Release 资产，避免仓库大文件限制。',
        href: videoAssets.lanqiao,
        video: true
      },
      {
        title: '大广赛云南白药 AIGC 广告作品',
        type: 'AIGC广告视频',
        role: '脚本 / 分镜提示词 / AI视频生成 / 后期',
        desc: '全国大学生广告艺术大赛云南白药命题入围作品。',
        href: videoAssets.daguangsai,
        video: true
      },
      {
        title: '贵州互动H5：村+我=∞',
        type: '已有 H5 项目',
        role: '互动构思 / 内容组织',
        desc: '围绕贵州“村字号”与个体命运叙事展开的移动端互动表达。',
        image: './images/guizhou-h5.webp',
        href: 'https://vmel6943-commits.github.io/colorful_guizhou/'
      },
      {
        title: '贵州红色文化互动页',
        type: '新增互动网页',
        role: '独立设计与实现',
        desc: '重新设计为成品化互动作品，主站只做跳转，不再固定窗口嵌入。',
        image: './images/guizhou-red-culture-hero.webp',
        href: './red-guizhou/'
      }
    ]
  },
  {
    id: 'field',
    index: '05',
    label: '能跑',
    title: '实地调研与现场观察',
    desc: '能进入真实场域做访谈、田野记录和资料整理，将一手材料转化为报道或项目方案。',
    stats: ['德阳罗江调研', '浙江湖州乡村文化振兴工作坊', '北京惠新南里社区调研'],
    works: [
      {
        title: 'AIGC赋能主流媒体系统性变革调研',
        type: '实地调研 / 社科报相关材料',
        role: '调研成员',
        desc: '赴四川德阳罗江调研县级融媒体与AIGC新闻生产流程。',
        image: './images/screenshot-social-sciences-news.webp',
        href: 'https://mp.weixin.qq.com/s/sHSk1-JFdhiqOTO3kDPOCQ'
      }
    ]
  }
];

export const training = [
  ['新闻评论', '92分'],
  ['新闻编辑', '97分'],
  ['电视编辑', '92分 / 第二'],
  ['卓越新闻人才课程', '贵州选题汇报'],
  ['实习实践', '中青网 / 两会工作坊']
];

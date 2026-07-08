export const profile = {
  name: '马雨秋',
  identity: '中国社会科学院大学 新闻传播学院 新闻学专业 2024级本科生',
  headline: '从选题到作品：一个新闻学生的融合表达能力档案',
  summary:
    '我希望老师在展示现场先看到能力结构，再看到作品证据：能写评论，能做编辑策划，能剪短视频，能把贵州选题转化为H5和互动网页，也能进入现场做调研、用数据和工具辅助新闻生产。',
  tags: ['新闻评论', '新闻编辑', '现场报道', '短视频剪辑', 'AIGC视听', 'H5互动', '数据分析']
};

export const contacts = {
  email: '2388983944@qq.com',
  phone: '15125747024'
};

export const abilityShowcase = [
  {
    id: 'write',
    label: '能写',
    title: '新闻评论与公共议题表达',
    intro:
      '重点展示两篇已公开转载的新闻评论。它们不是“写过”，而是能被平台接收、传播，并围绕公共议题形成清楚判断。',
    proof: ['新闻评论课程92分', '作品被腾讯新闻等平台转载', '选题涉及AI焦虑、平台传播与消费伦理'],
    works: [
      {
        title: '没用AI赚到钱，也不能先被“AI焦虑”收割了',
        meta: '评论 / 作者 / 公开转载',
        description: '聚焦AI焦虑、技术传播与媒体流量逻辑，讨论普通人在技术叙事中的焦虑生成。',
        image: './images/comment-ai-qq.png',
        link: 'https://view.inews.qq.com/a/20260319A07PPR00',
        action: '查看转载页'
      },
      {
        title: '拿婴儿玩偶施暴，算哪门子解压？',
        meta: '评论 / 作者 / 公开转载',
        description: '围绕未成年人保护、平台传播与消费伦理展开评论，强调公共表达中的价值判断。',
        image: './images/comment-doll-qq.png',
        link: 'https://view.inews.qq.com/a/20260601A066H100',
        action: '查看转载页'
      }
    ]
  },
  {
    id: 'edit',
    label: '能编',
    title: '新闻编辑与专题策划',
    intro:
      '把单篇评论组织成专题产品，体现从选题、选稿、改稿、栏目设计到排版呈现的编辑链条。',
    proof: ['新闻编辑课程97分', '全程参与《多样评（多young评）》', '完成专题化、栏目化、产品化训练'],
    works: [
      {
        title: '多样评（多young评）',
        meta: '新闻编辑课程杂志 / 核心成员',
        description: '参与选题策划、稿件筛选、原创撰稿和版面排版，完成评论类杂志作品。',
        link: 'https://flbook.com.cn/c/Dc0G141gJM',
        action: '打开电子杂志',
        note: 'FLBOOK外链已接入；若后续有PDF或高清截图，可替换为正式页面截图。'
      }
    ]
  },
  {
    id: 'cut',
    label: '能剪',
    title: '短视频剪辑与现场新媒体生产',
    intro:
      '重点呈现能在现场或平台语境下快速完成素材采集、整理、剪辑、封面和发布包装。',
    proof: ['电视编辑92分，课程综合排名第二', '中青网小红书二创作品4小时播放量破5万', '北京文化论坛抖音视频总获赞超2000'],
    works: [
      {
        title: '2025北京文化论坛短视频报道',
        meta: '中青网学生记者 / 现场报道 / 抖音',
        description:
          '参与“双向赋能：网络文化创新发展”平行论坛报道，负责素材采集、剪辑与平台化包装。',
        link: 'https://v.douyin.com/7nKYwKBTTgc/',
        secondaryLink: 'https://v.douyin.com/tUCXpp2U13A/',
        action: '打开抖音作品'
      },
      {
        title: '卓越新闻贵州“村字号”短视频封面方案',
        meta: '课程作品 / 抖音、B站、小红书平台化封面',
        description: '来自本地作品材料的三张平台封面截图，体现同一选题面向不同平台的包装思路。',
        image: './images/guizhou-douyin-original.jpg',
        gallery: ['./images/guizhou-bilibili-original.jpg', './images/guizhou-xiaohongshu-original.jpg'],
        action: '查看截图'
      }
    ]
  },
  {
    id: 'fusion',
    label: '能融',
    title: 'AIGC、H5与互动表达',
    intro:
      '贵州部分作为融合表达重点：既展示已有“村字号”H5，也新增一个贵州红色文化互动网页，形成可直接打开的作品链路。',
    proof: ['蓝桥杯AI生成短视频二等奖、海报三等奖', '大广赛云南白药AIGC广告作品入围', '贵州“村字号”选题产出H5构思与封面方案'],
    works: [
      {
        title: '贵州互动H5：村+我=∞',
        meta: '已有GitHub Pages H5 / 本地源码已发现',
        description: '以“村字号重塑微观个体的命运方程”为主题，围绕贵州乡村叙事与个体命运展开。',
        image: './images/guizhou-h5.webp',
        gallery: ['./images/guizhou-ba.webp', './images/guizhou-gt.webp', './images/guizhou-yangjiayu.webp'],
        link: 'https://vmel6943-commits.github.io/colorful_guizhou/',
        action: '打开已有H5'
      },
      {
        title: '贵州红色文化互动页',
        meta: '新增互动网页 / 已嵌入本作品集',
        description: '用“路线选择 + 传播策划卡片”的形式，把贵州红色文化转化成适合展示的互动作品。',
        image: './red-guizhou/images/first.png',
        link: './red-guizhou/index.html',
        action: '打开互动页'
      }
    ]
  },
  {
    id: 'field',
    label: '能跑',
    title: '实地调研与现场观察',
    intro:
      '保留真实调研经历作为能力证据：能进入现场，做访谈、记录和材料整理，再转化为报道或项目方案。',
    proof: ['赴四川德阳罗江开展AIGC赋能主流媒体调研', '赴浙江湖州参与乡村文化振兴暑期工作坊', '赴北京惠新南里社区开展两轮调研'],
    works: [
      {
        title: '德阳罗江AIGC赋能主流媒体调研',
        meta: '调研 / 微信链接材料',
        description: '关注AIGC技术与县级融媒体、基层传播及新闻生产流程之间的关系。',
        link: 'https://mp.weixin.qq.com/s/sHSk1-JFdhiqOTO3kDPOCQ',
        action: '查看链接'
      }
    ]
  },
  {
    id: 'analysis',
    label: '能析',
    title: '数据分析与技术辅助新闻',
    intro:
      '数据与技术能力不单独包装成作品，而是作为新闻生产的辅助能力呈现：能抓取、清洗、统计和解释材料。',
    proof: ['SPSS量化研究课程论文获课程第二', 'Python采集B站20个视频4000余条评论与弹幕', '掌握Access、QGIS、微信小程序开发等工具'],
    works: [
      {
        title: '数据分析课程论文与Python爬虫项目',
        meta: '课程成果 / 简历材料证明',
        description:
          '包含《基于HSM模型的AIGC科普视频信任生成机制研究》和B站鬼畜视频评论/弹幕分析。当前没有公开截图或链接，页面中作为能力证据呈现。',
        action: '材料待补充',
        disabled: true
      }
    ]
  }
];

export const experienceNotes = [
  '中国青年网实习与两会建设性新闻工作坊：参与议题追踪、资料检索、文稿编辑与小红书视频剪辑。',
  '新闻编辑课程《多样评（多young评）》：从选题到排版参与评论杂志全流程。',
  '卓越新闻人才课程贵州“村字号”选题：完成短视频脚本、封面方案与互动H5构思。',
  '2025北京文化论坛短视频报道：作为中青网学生记者参与现场素材采集与新媒体生产。',
  'AIGC赋能主流媒体系统性变革调研：赴德阳罗江开展访谈、田野记录和资料整理。',
  '蓝桥杯、大广赛、三创赛等赛事经历：对应AIGC视频、海报、广告创意、直播实践等训练。'
];

export const scoreCards = [
  { label: '新闻评论', value: '92分' },
  { label: '新闻编辑', value: '97分' },
  { label: '电视编辑', value: '92分 / 第二' },
  { label: '课程论文', value: '两门第二' },
  { label: '贵州选题', value: '脚本 + 封面 + H5' }
];

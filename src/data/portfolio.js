export const profile = {
  name: '马雨秋',
  identity: '中国社会科学院大学 新闻传播学院 新闻学专业 2024级本科生',
  headline: '能写、能编、能剪、能融、能跑、能析的新闻传播学生',
  theme: '从选题到作品：一个新闻学生的融合表达能力档案',
  summary:
    '具备新闻评论写作、新闻编辑策划、实地调研、短视频剪辑、AIGC视听创作、数据分析和快节奏新闻生产能力。曾参与中青网两会工作坊与平台化视频生产，评论作品被新浪财经、腾讯网等平台转载/刊发，并围绕贵州“村字号”完成短视频脚本、封面与互动H5构思。',
  tags: ['新闻评论', '新闻编辑', '现场报道', '视频剪辑', 'AIGC创作', '数据新闻', 'H5互动']
};

export const contacts = {
  email: '2388983944@qq.com',
  phone: '15125747024'
};

export const filters = ['全部', '评论', '视频', 'H5', 'AIGC', '数据', '调研', '小程序'];

export const abilities = [
  {
    key: 'write',
    title: '能写',
    subtitle: '新闻评论与公共议题表达',
    summary: '从热点判断、资料检索到观点论证，能把公共议题写成清楚、有立场、有证据的评论。',
    skills: ['热点判断', '观点论证', '评论写作', '标题制作'],
    experience: '新闻评论92分；评论作品被新浪财经、腾讯网等平台转载/刊发。',
    outputs: ['《没用AI赚到钱，也不能先被“AI焦虑”收割了》', '《拿婴儿玩偶施暴，算哪门子解压？》'],
    anchor: '#works'
  },
  {
    key: 'edit',
    title: '能编',
    subtitle: '新闻编辑与专题策划',
    summary: '能完成从选题、选稿、改稿到栏目组织和版面呈现的专题化新闻产品训练。',
    skills: ['专题策划', '选稿改稿', '栏目组织', '杂志排版'],
    experience: '新闻编辑97分；深度参与评论杂志《多样评（多young评）》全流程制作。',
    outputs: ['《多样评（多young评）》新闻编辑课程杂志'],
    anchor: '#works'
  },
  {
    key: 'cut',
    title: '能剪',
    subtitle: '短视频剪辑与视听叙事',
    summary: '能在较短周期内完成素材整理、镜头组接、封面字幕和平台化包装。',
    skills: ['短视频脚本', '镜头组接', '节奏控制', '字幕包装'],
    experience: '中青网小红书二创作品4小时播放量破5万；北京文化论坛抖音作品总获赞超2000。',
    outputs: ['2025北京文化论坛短视频报道', '“烽火青春”系列视听传播活动'],
    anchor: '#works'
  },
  {
    key: 'fusion',
    title: '能融',
    subtitle: 'AIGC、H5与融合新闻表达',
    summary: '能把新闻选题转化为AIGC短片、H5互动产品、数据表达和多平台视觉包装。',
    skills: ['AI视频生成', '提示词撰写', '互动H5', '分镜设计'],
    experience: '蓝桥杯AI生成短视频二等奖、海报三等奖；贵州“村字号”互动H5已上线。',
    outputs: ['贵州互动H5', '《天文考古，闻道天下》', '云南白药AIGC广告'],
    anchor: '#works'
  },
  {
    key: 'field',
    title: '能跑',
    subtitle: '实地调研与现场观察',
    summary: '能进入真实场域做访谈、田野记录和问题识别，并将一手材料转化为报道或项目方案。',
    skills: ['访谈记录', '田野观察', '材料整理', '现场表达'],
    experience: '赴德阳罗江、浙江湖州、北京惠新南里社区等地开展调研与实践。',
    outputs: ['AIGC赋能主流媒体系统性变革调研', '乡村文化振兴工作坊', '智达治善小程序'],
    anchor: '#timeline'
  },
  {
    key: 'analysis',
    title: '能析',
    subtitle: '数据分析与技术辅助新闻',
    summary: '能使用Python、SPSS、QGIS、Access等工具完成数据采集、清洗、分析与可视化辅助。',
    skills: ['Python爬虫', 'SPSS', 'QGIS', 'Access'],
    experience: '两门课程论文获课程第二名；采集B站20个视频4000余条评论与弹幕进行内容分析。',
    outputs: ['AIGC科普视频信任生成机制研究', 'B站鬼畜视频评论/弹幕分析'],
    anchor: '#works'
  }
];

export const works = [
  {
    title: '没用AI赚到钱，也不能先被“AI焦虑”收割了',
    type: ['评论'],
    ability: ['能写', '能析'],
    date: '2026春',
    role: '作者',
    description: '聚焦AI焦虑、技术传播与媒体流量逻辑，讨论普通人在技术叙事中的焦虑生成与被收割机制。',
    outputs: ['新闻评论作品', '被新浪财经、腾讯网等平台转载/刊发'],
    metrics: '新闻评论课程92分相关成果',
    coverImage: './images/comment-ai-anxiety.jpg',
    link: '',
    localFile: '',
    tags: ['评论', 'AI焦虑', '公共议题']
  },
  {
    title: '拿婴儿玩偶施暴，算哪门子解压？',
    type: ['评论'],
    ability: ['能写'],
    date: '2026春',
    role: '作者',
    description: '围绕未成年人保护、平台传播与消费伦理展开评论，强调公共表达中的价值判断和事实支撑。',
    outputs: ['新闻评论作品', '被新浪财经、腾讯网等平台转载/刊发'],
    metrics: '新闻评论课程训练成果',
    coverImage: './images/comment-doll.jpg',
    link: '',
    localFile: '',
    tags: ['评论', '消费伦理', '平台传播']
  },
  {
    title: '多样评（多young评）',
    type: ['杂志', '评论'],
    ability: ['能编', '能写'],
    date: '2026春',
    role: '核心成员，参与选题、选稿、原创撰稿与排版',
    description: '新闻编辑课程评论类杂志，以青年视角切入社会热点和公共议题，完成从单篇评论到专题化新闻产品的训练。',
    outputs: ['评论杂志', '栏目化编辑产品'],
    metrics: '新闻编辑课程97分相关成果',
    coverImage: './images/magazine-duoyangping.jpg',
    link: 'https://flbook.com.cn/c/Dc0G141gJM',
    localFile: '',
    tags: ['评论', '杂志', '编辑']
  },
  {
    title: '2025北京文化论坛短视频报道',
    type: ['视频'],
    ability: ['能剪', '能跑'],
    date: '2025.09',
    role: '中青网学生记者，负责现场素材采集、剪辑与平台化包装',
    description: '参与“双向赋能：网络文化创新发展”平行论坛报道，在大型文化论坛现场完成信息捕捉、画面采集、剪辑成片和新媒体发布。',
    outputs: ['中国青年网抖音短视频报道', '两条公开视频链接已接入'],
    metrics: '相关视频总获赞量超2000，为同话题下播放量、获赞量最高作品之一',
    coverImage: './images/beijing-forum.jpg',
    link: 'https://v.douyin.com/7nKYwKBTTgc/',
    secondaryLink: 'https://v.douyin.com/tUCXpp2U13A/',
    localFile: '',
    tags: ['视频', '现场报道', '抖音']
  },
  {
    title: '中国青年网小红书二创剪辑作品',
    type: ['视频'],
    ability: ['能剪'],
    date: '2025.03-2025.06',
    role: '实习生，负责二创视频剪辑与平台化转化',
    description: '将新闻素材改造成适配小红书平台的二创内容，训练快节奏新闻生产、平台语感和短视频包装能力。',
    outputs: ['小红书二创视频'],
    metrics: '发布后4小时内播放量破5万',
    coverImage: './images/xiaohongshu-edit.jpg',
    link: '',
    localFile: '',
    tags: ['视频', '新媒体', '小红书']
  },
  {
    title: '卓越新闻人才课程贵州“村字号”选题汇报',
    type: ['视频', 'H5'],
    ability: ['能融', '能剪', '能编'],
    date: '2026春',
    role: '参与选题汇报、短视频脚本、封面方案与互动H5构思',
    description: '围绕贵州“村字号”进行融合新闻表达构思，面向抖音、B站、小红书等平台设计不同内容切口。',
    outputs: ['短视频脚本', '平台封面方案', '互动H5构思'],
    metrics: '卓越新闻人才课程产出',
    coverImage: './images/guizhou-douyin.webp',
    link: '',
    localFile: '',
    tags: ['H5', '视频', '贵州', '融合新闻']
  },
  {
    title: '贵州互动H5：村+我=∞',
    type: ['H5'],
    ability: ['能融', '能编'],
    date: '2026春',
    role: '互动H5构思与页面内容组织',
    description: '以“村字号重塑微观个体的命运方程”为主题，围绕贵州乡村叙事与个体命运设计移动端互动表达。',
    outputs: ['GitHub Pages互动H5', '本地H5源文件与素材已发现'],
    metrics: 'GitHub Pages链接已验证可访问',
    coverImage: './images/guizhou-h5.webp',
    link: 'https://vmel6943-commits.github.io/colorful_guizhou/',
    localFile: '',
    tags: ['H5', '贵州', '互动产品']
  },
  {
    title: '天文考古，闻道天下',
    type: ['AIGC', '视频'],
    ability: ['能融', '能剪'],
    date: '校内融媒体实践',
    role: '参与AI视频生成、脚本构思、分镜设计与后期剪辑',
    description: 'AIGC视听创作工作坊成果之一，训练AI生成画面、分镜提示词和短片后期整合能力。',
    outputs: ['AIGC视频短片'],
    metrics: '工作坊作品',
    coverImage: './images/aigc-tianwen.jpg',
    link: '',
    localFile: '',
    tags: ['AIGC', '视频', '分镜']
  },
  {
    title: '烽火青春：壮士八佰魂，忠骨今犹存',
    type: ['视频'],
    ability: ['能剪', '能融'],
    date: '校内融媒体实践',
    role: '参与红色主题影视剪辑与视听叙事',
    description: '红色主题视听传播活动作品，关注素材组织、情绪表达和历史叙事的视听化呈现。',
    outputs: ['系列视听传播作品', '微信公众号链接已接入'],
    metrics: '校内融媒体实践成果',
    coverImage: './images/fenghuo-babai.jpg',
    link: 'https://mp.weixin.qq.com/s/tv6risQUbNk_otwyqBtdFA',
    secondaryLink: 'https://mp.weixin.qq.com/s/9xPIPXap40_byj7YzZR-Sg',
    localFile: '',
    tags: ['视频', '红色主题', '剪辑']
  },
  {
    title: '蓝桥杯AI生成短视频与海报',
    type: ['AIGC', '视频'],
    ability: ['能融', '能剪'],
    date: '赛事作品',
    role: '参赛成员，参与创意构思、画面生成、剪辑合成与视觉包装',
    description: '围绕AI生成视频和海报进行命题创作，训练AIGC生产、短视频表达和视觉设计能力。',
    outputs: ['AI生成短视频', '海报设计'],
    metrics: 'AI生成短视频二等奖；海报设计三等奖',
    coverImage: './images/lanqiao-aigc.jpg',
    link: '',
    localFile: '',
    tags: ['AIGC', '视频', '赛事']
  },
  {
    title: '大广赛云南白药AIGC广告入围作品',
    type: ['AIGC', '视频'],
    ability: ['能融', '能剪'],
    date: '赛事作品',
    role: '参与广告脚本、分镜提示词、AI视频生成、后期剪辑与创意说明',
    description: '将品牌命题、社会情绪与视听语言结合，完成AIGC广告创作与说明文本。',
    outputs: ['云南白药命题AIGC广告'],
    metrics: '全国大学生广告艺术大赛入围',
    coverImage: './images/daguangsai-yunnanbaiyao.jpg',
    link: '',
    localFile: '',
    tags: ['AIGC', '广告', '赛事']
  },
  {
    title: '智达治善社区智能治理小程序',
    type: ['小程序', '调研'],
    ability: ['能跑', '能析', '能融'],
    date: '赛事项目',
    role: '成员/开发负责人，参与调研、申报书、答辩与小程序核心功能搭建',
    description: '赴北京惠新南里社区开展两轮调研，识别基层治理中的信息碎片化、响应迟滞和隐患盲区问题。',
    outputs: ['微信小程序核心功能', '申报书与答辩展示'],
    metrics: '“青创北京”北京市一等奖',
    coverImage: './images/miniprogram-zhidazhishan.jpg',
    link: '',
    localFile: '',
    tags: ['小程序', '调研', 'AI辅助编程']
  },
  {
    title: 'AIGC科普视频信任生成机制研究',
    type: ['数据'],
    ability: ['能析'],
    date: '课程论文',
    role: '作者，使用SPSS进行描述性统计、相关分析与回归分析',
    description: '基于HSM模型研究AIGC科普视频中的信任生成机制，训练量化研究设计和统计分析能力。',
    outputs: ['课程论文', 'SPSS量化分析'],
    metrics: '课程排名第二',
    coverImage: './images/data-hsm-aigc.jpg',
    link: '',
    localFile: '',
    tags: ['数据', 'SPSS', 'AIGC']
  },
  {
    title: 'B站鬼畜视频评论与弹幕分析',
    type: ['数据'],
    ability: ['能析'],
    date: '课程论文',
    role: '作者，使用Python采集、清洗并分析评论与弹幕数据',
    description: '从青年亚文化视角分析鬼畜视频叙事结构，采集B站20个视频4000余条评论与弹幕。',
    outputs: ['Python爬虫数据集', '内容分析论文'],
    metrics: '课程排名第二',
    coverImage: './images/bilibili-danmaku.jpg',
    link: '',
    localFile: '',
    tags: ['数据', 'Python', '弹幕分析']
  },
  {
    title: 'AIGC赋能主流媒体系统性变革调研',
    type: ['调研'],
    ability: ['能跑', '能析'],
    date: '2025.06-2025.09',
    role: '成员，参与访谈、田野记录、资料整理与会议志愿工作',
    description: '赴四川德阳市罗江区调研AIGC技术与县级融媒体、基层传播及新闻生产流程的关系。',
    outputs: ['调研文章', '访谈与田野材料'],
    metrics: '调研文章发表于中国社会科学报',
    coverImage: './images/deyang-research.jpg',
    link: 'https://mp.weixin.qq.com/s/sHSk1-JFdhiqOTO3kDPOCQ',
    localFile: '',
    tags: ['调研', 'AIGC', '县级融媒体']
  }
];

export const experiences = [
  {
    date: '2026春',
    title: '新闻评论作品发表及转载/刊发',
    body: '完成《没用AI赚到钱，也不能先被“AI焦虑”收割了》《拿婴儿玩偶施暴，算哪门子解压？》等评论，聚焦AI焦虑、平台传播与消费伦理。'
  },
  {
    date: '2026春',
    title: '新闻编辑课程《多样评（多young评）》',
    body: '作为核心成员参与评论杂志制作，从选题、选稿、原创撰稿到排版均深度参与，完成专题化新闻产品训练。'
  },
  {
    date: '2026春',
    title: '卓越新闻人才课程贵州选题实践',
    body: '围绕贵州“村字号”开展选题汇报，产出短视频脚本、封面制作方案与互动H5构思，并发现已上线H5项目。'
  },
  {
    date: '2026.02-2026.03',
    title: '两会舆情监测项目',
    body: '运用布尔逻辑、站内搜索等复杂检索方法追踪重要议题，参与资料汇总与舆情分析材料整理。'
  },
  {
    date: '2025.09',
    title: '2025北京文化论坛短视频报道',
    body: '作为中青网学生记者参与现场素材采集与新媒体内容生产，相关抖音视频总获赞超2000。'
  },
  {
    date: '2025.06-2025.09',
    title: 'AIGC赋能主流媒体系统性变革实地调研',
    body: '赴四川德阳罗江开展调研，参与访谈、田野记录与资料整理，关注AIGC与县级融媒体转型。'
  },
  {
    date: '2025暑期',
    title: '乡村文化振兴暑期工作坊',
    body: '赴浙江湖州开展乡村文化振兴主题实地调研，关注地方文化资源、基层传播实践和乡村叙事方式。'
  },
  {
    date: '2025.03-2025.06',
    title: '中国青年网实习与两会建设性新闻工作坊',
    body: '参与两会议题追踪、资料检索、文稿编辑与报道协作；负责小红书平台二创视频剪辑，单条作品4小时播放量破5万。'
  },
  {
    date: '赛事经历',
    title: '蓝桥杯、大广赛、三创赛等融媒体实践',
    body: '蓝桥杯AI生成短视频二等奖、海报三等奖；大广赛云南白药AIGC广告入围；三创赛参与直播实践并获省级二等奖。'
  },
  {
    date: '项目实践',
    title: '智达治善社区智能治理小程序',
    body: '赴北京惠新南里社区两轮调研，参与申报书、答辩和小程序核心功能搭建，项目获“青创北京”北京市一等奖。'
  }
];

export const achievements = [
  { label: '新闻评论', value: '92分', note: '评论写作与公共议题表达' },
  { label: '新闻编辑', value: '97分', note: '专题策划、选稿改稿、杂志排版' },
  { label: '电视编辑', value: '92分', note: '课程综合排名第二' },
  { label: '课程论文', value: '2门第二', note: 'SPSS量化研究与Python爬虫分析' },
  { label: '卓越新闻人才课程', value: '贵州选题', note: '短视频脚本、封面、互动H5构思' }
];

export const skills = [
  { group: '文字表达', items: ['新闻评论', '报道写作', '标题制作', '资料整合'] },
  { group: '编辑策划', items: ['专题策划', '选题组织', '选稿改稿', '栏目设计', '杂志排版'] },
  { group: '视频生产', items: ['短视频脚本', '视频剪辑', '封面制作', '字幕包装', '纪实短片后期'] },
  { group: 'AIGC创作', items: ['AI视频生成', '提示词撰写', '分镜设计', 'AIGC广告与短片制作'] },
  { group: '数据技术', items: ['Python爬虫', 'SPSS', 'Access', 'QGIS', '微信小程序开发'] },
  { group: '新媒体传播', items: ['小红书内容剪辑', '抖音短视频', '直播配合', 'H5互动产品构思'] },
  { group: '检索调研', items: ['布尔逻辑检索', '站内搜索', '学术数据库检索', '访谈记录', '田野观察', '舆情监测'] }
];

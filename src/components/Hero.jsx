import { ArrowDown, Download, Mail } from 'lucide-react';

export function Hero({ profile }) {
  return (
    <section className="hero">
      <nav className="topbar" aria-label="页面导航">
        <a href="#abilities">能力</a>
        <a href="#works">作品</a>
        <a href="#timeline">经历</a>
        <a href="#skills">训练</a>
      </nav>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="folio-mark">MA YUQIU / NEWS PORTFOLIO</p>
          <h1>{profile.name}</h1>
          <p className="identity">{profile.identity}</p>
          <h2>{profile.headline}</h2>
          <p className="summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href="#works">
              <ArrowDown size={18} />
              查看作品
            </a>
            <a className="button" href="./documents/ma-yuqiu-resume.docx" download>
              <Download size={18} />
              下载简历
            </a>
            <a className="button subtle" href="#contact">
              <Mail size={18} />
              联系我
            </a>
          </div>
        </div>
        <aside className="hero-card">
          <p>核心主题</p>
          <strong>{profile.theme}</strong>
          <span>围绕能力组织经历与作品，让老师快速看到写作、编辑、现场、视听、AIGC和数据分析的完整链条。</span>
        </aside>
      </div>
      <div className="tag-ribbon" aria-label="能力标签">
        {profile.tags.map((tag, index) => (
          <a style={{ '--delay': `${index * 80}ms` }} href="#abilities" key={tag}>
            {tag}
          </a>
        ))}
      </div>
    </section>
  );
}

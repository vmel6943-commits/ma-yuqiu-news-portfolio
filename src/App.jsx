import { ArrowRight, Download, ExternalLink, Mail, Phone, PlayCircle } from 'lucide-react';
import { contacts, modules, profile, training } from './data/portfolio.js';

function WorkCard({ work }) {
  return (
    <article className={`work-card ${work.video ? 'video-work' : ''}`}>
      <a className="work-image" href={work.href || '#'} target={work.href ? '_blank' : undefined} rel="noreferrer">
        {work.image ? (
          <img src={work.image} alt={`${work.title}作品截图`} loading="lazy" />
        ) : (
          <div className="video-poster">
            <PlayCircle size={48} />
            <span>{work.type}</span>
          </div>
        )}
      </a>
      <div className="work-content">
        <p>{work.type}</p>
        <h3>{work.title}</h3>
        <span>{work.role}</span>
        <p className="work-desc">{work.desc}</p>
        <div className="work-actions">
          {work.href && (
            <a href={work.href} target="_blank" rel="noreferrer">
              <ExternalLink size={16} />
              打开作品
            </a>
          )}
          {work.secondaryHref && (
            <a href={work.secondaryHref} target="_blank" rel="noreferrer">
              <ExternalLink size={16} />
              备用链接
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Module({ item }) {
  return (
    <section className="module" id={item.id}>
      <aside className="module-copy">
        <p className="module-index">{item.index}</p>
        <h2>{item.label}</h2>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="proof-list">
          {item.stats.map((stat) => (
            <span key={stat}>{stat}</span>
          ))}
        </div>
      </aside>
      <div className="module-works">
        {item.works.map((work) => (
          <WorkCard work={work} key={work.title} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <header className="hero" id="top">
        <nav className="nav">
          <a href="#writing">能写</a>
          <a href="#editing">能编</a>
          <a href="#video">能剪</a>
          <a href="#fusion">能融</a>
          <a href="#field">能跑</a>
        </nav>

        <section className="hero-grid">
          <div className="hero-title">
            <p>MA YUQIU / JOURNALISM PORTFOLIO</p>
            <h1>{profile.name}</h1>
            <span>{profile.identity}</span>
          </div>
          <div className="hero-panel">
            <h2>{profile.headline}</h2>
            <p>{profile.summary}</p>
            <div className="tag-cloud">
              {profile.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="primary-button" href="#writing">
                进入作品集
                <ArrowRight size={18} />
              </a>
              <a href="./documents/ma-yuqiu-resume.docx" download>
                <Download size={18} />
                下载简历
              </a>
            </div>
          </div>
        </section>
      </header>

      <section className="overview">
        {training.map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      {modules.map((item) => (
        <Module item={item} key={item.id} />
      ))}

      <footer className="footer" id="contact">
        <div>
          <p>CONTACT</p>
          <h2>联系与纸质简历</h2>
          <span>页面已改为成品化作品集展示，作品链接与视频资产均已接入。</span>
        </div>
        <div className="footer-actions">
          <a href="./documents/ma-yuqiu-resume.docx" download>
            <Download size={18} />
            下载纸质版简历
          </a>
          <a href={`mailto:${contacts.email}`}>
            <Mail size={18} />
            {contacts.email}
          </a>
          <a href={`tel:${contacts.phone}`}>
            <Phone size={18} />
            {contacts.phone}
          </a>
        </div>
      </footer>
    </main>
  );
}

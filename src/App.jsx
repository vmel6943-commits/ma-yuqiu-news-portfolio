import { ArrowUp, Download, ExternalLink, Mail, Phone } from 'lucide-react';
import { abilityShowcase, contacts, experienceNotes, profile, scoreCards } from './data/portfolio.js';

function WorkPanel({ work }) {
  return (
    <article className="showcase-work">
      {work.image ? (
        <div className="work-media">
          <img src={work.image} alt={`${work.title}截图`} loading="lazy" />
        </div>
      ) : (
        <div className="work-media text-evidence">
          <span>LINK / TEXT</span>
          <strong>{work.title}</strong>
          <p>当前没有可公开使用的截图，保留为文字与链接证据。</p>
        </div>
      )}
      <div className="work-copy">
        <p className="work-meta">{work.meta}</p>
        <h3>{work.title}</h3>
        <p>{work.description}</p>
        {work.note && <p className="work-note">{work.note}</p>}
        {work.gallery && (
          <div className="evidence-strip" aria-label={`${work.title}补充截图`}>
            {work.gallery.map((src) => (
              <img key={src} src={src} alt="补充截图" loading="lazy" />
            ))}
          </div>
        )}
        <div className="work-links">
          {work.disabled ? (
            <span className="button disabled">{work.action}</span>
          ) : work.link ? (
            <a className="button primary" href={work.link} target="_blank" rel="noreferrer">
              <ExternalLink size={17} />
              {work.action}
            </a>
          ) : (
            <span className="button disabled">{work.action}</span>
          )}
          {work.secondaryLink && (
            <a className="button" href={work.secondaryLink} target="_blank" rel="noreferrer">
              <ExternalLink size={17} />
              备用链接
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function AbilitySection({ section, index }) {
  return (
    <section className="ability-showcase" id={section.id}>
      <div className="ability-left">
        <p className="section-kicker">ABILITY {String(index + 1).padStart(2, '0')}</p>
        <h2>{section.label}</h2>
        <h3>{section.title}</h3>
        <p>{section.intro}</p>
        <ul>
          {section.proof.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="ability-right">
        {section.works.map((work) => (
          <WorkPanel key={work.title} work={work} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="site-shell" id="top">
      <section className="hero">
        <nav className="topbar" aria-label="能力导航">
          {abilityShowcase.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hero-layout">
          <div>
            <p className="folio-mark">MA YUQIU / NEWS PORTFOLIO</p>
            <h1>{profile.name}</h1>
            <p className="identity">{profile.identity}</p>
          </div>
          <div className="hero-brief">
            <h2>{profile.headline}</h2>
            <p>{profile.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href="#write">查看能力作品</a>
              <a className="button" href="./red-guizhou/index.html" target="_blank" rel="noreferrer">
                <ExternalLink size={17} />
                贵州互动页
              </a>
              <a className="button subtle" href="./documents/ma-yuqiu-resume.docx" download>
                <Download size={17} />
                下载简历
              </a>
            </div>
          </div>
        </div>
        <div className="tag-ribbon">
          {profile.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      {abilityShowcase.map((section, index) => (
        <AbilitySection key={section.id} section={section} index={index} />
      ))}

      <section className="embedded-section" id="guizhou-red">
        <div className="section-heading compact">
          <p className="section-kicker">EMBEDDED H5</p>
          <h2>贵州红色文化互动页</h2>
          <p>这是本次新增的独立互动网页，部署后可单独打开，也可以在作品集里直接预览。</p>
        </div>
        <div className="iframe-shell">
          <iframe src="./red-guizhou/index.html" title="贵州红色文化互动页" loading="lazy" />
        </div>
      </section>

      <section className="notes-section">
        <div>
          <p className="section-kicker">TRAINING NOTES</p>
          <h2>经历与训练证据</h2>
        </div>
        <div className="note-list">
          {experienceNotes.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="score-row">
        {scoreCards.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <footer className="contact-section" id="contact">
        <div>
          <p className="section-kicker">CONTACT / RESUME</p>
          <h2>联系与简历下载</h2>
          <p>页面内容已按展示场景重新组织：能力在左，作品证据在右，贵州部分作为融合表达重点呈现。</p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href="./documents/ma-yuqiu-resume.docx" download>
            <Download size={18} />
            下载纸质版简历
          </a>
          <a className="button" href={`mailto:${contacts.email}`}>
            <Mail size={18} />
            {contacts.email}
          </a>
          <a className="button" href={`tel:${contacts.phone}`}>
            <Phone size={18} />
            {contacts.phone}
          </a>
          <a className="button subtle" href="#top">
            <ArrowUp size={18} />
            返回顶部
          </a>
        </div>
      </footer>
    </main>
  );
}

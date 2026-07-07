import { ExternalLink, FileText, Layers, X } from 'lucide-react';

export function WorksGallery({ filters, works, activeFilter, setActiveFilter, expandedWork, setExpandedWork }) {
  const active = expandedWork ? works.find((work) => work.title === expandedWork) : null;

  return (
    <section className="section works-section" id="works">
      <div className="section-heading">
        <p className="section-kicker">SELECTED WORKS</p>
        <h2>代表作品</h2>
        <p>每张卡片都对应一种能力证明：写出的评论、编成的产品、剪出的短视频、跑出来的调研和分析出的数据。</p>
      </div>
      <div className="filter-bar" aria-label="作品类型筛选">
        {filters.map((filter) => (
          <button
            className={filter === activeFilter ? 'active' : ''}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="works-grid">
        {works.map((work) => (
          <article className="work-card" key={work.title}>
            <button className="image-button" type="button" onClick={() => setExpandedWork(work.title)}>
              <img src={work.coverImage} alt={`${work.title}封面`} loading="lazy" />
            </button>
            <div className="work-body">
              <div className="work-types">
                {work.type.map((type) => (
                  <span key={type}>{type}</span>
                ))}
              </div>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <dl>
                <div>
                  <dt>角色</dt>
                  <dd>{work.role}</dd>
                </div>
                <div>
                  <dt>关键词</dt>
                  <dd>{work.ability.join(' / ')}</dd>
                </div>
              </dl>
              <div className="work-actions">
                <button type="button" onClick={() => setExpandedWork(work.title)}>
                  <Layers size={16} />
                  展开详情
                </button>
                {work.link ? (
                  <a href={work.link} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} />
                    打开链接
                  </a>
                ) : (
                  <span className="pending-link">
                    <FileText size={16} />
                    链接待补充
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {active && (
        <div className="modal-backdrop" onClick={() => setExpandedWork(null)} role="presentation">
          <article className="work-modal" onClick={(event) => event.stopPropagation()}>
            <button className="close-button" type="button" onClick={() => setExpandedWork(null)} aria-label="关闭">
              <X size={20} />
            </button>
            <img src={active.coverImage} alt={`${active.title}封面`} />
            <div>
              <p className="section-kicker">{active.type.join(' / ')} · {active.date}</p>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <p><strong>我的角色：</strong>{active.role}</p>
              <p><strong>成果数据：</strong>{active.metrics}</p>
              <p><strong>能力关键词：</strong>{active.tags.join(' / ')}</p>
              <ul>
                {active.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
              <div className="modal-actions">
                {active.link ? (
                  <a className="button primary" href={active.link} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} />
                    访问作品
                  </a>
                ) : (
                  <span className="button disabled">作品材料整理中</span>
                )}
                {active.secondaryLink && (
                  <a className="button" href={active.secondaryLink} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} />
                    备用链接
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

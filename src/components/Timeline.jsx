export function Timeline({ experiences }) {
  return (
    <section className="section timeline-section" id="timeline">
      <div className="section-heading">
        <p className="section-kicker">FIELD NOTES</p>
        <h2>重点经历时间线</h2>
        <p>保留最能说明能力迁移的经历，不做密集履历墙。</p>
      </div>
      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline-item" key={`${item.date}-${item.title}`}>
            <time>{item.date}</time>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';

export function AbilityMap({ abilities }) {
  return (
    <section className="section" id="abilities">
      <div className="section-heading">
        <p className="section-kicker">ABILITY MAP</p>
        <h2>六个能力入口</h2>
        <p>不是把纸质简历照搬到网页，而是把经历和作品按新闻生产链条重新归档。</p>
      </div>
      <div className="ability-grid">
        {abilities.map((ability) => (
          <article className={`ability-card ${ability.key}`} key={ability.key}>
            <div>
              <p className="ability-title">{ability.title}</p>
              <h3>{ability.subtitle}</h3>
              <p>{ability.summary}</p>
            </div>
            <div className="mini-tags">
              {ability.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div className="ability-detail">
              <strong>代表经历</strong>
              <p>{ability.experience}</p>
              <strong>代表产出</strong>
              <ul>
                {ability.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            </div>
            <a className="text-link" href={ability.anchor}>
              查看相关作品
              <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

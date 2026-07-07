export function ScoresAndSkills({ achievements, skills }) {
  return (
    <section className="section training-section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">TRAINING / TOOLS</p>
        <h2>课程成绩与专业训练</h2>
        <p>用小卡片呈现，不让成绩喧宾夺主，但让专业训练有据可查。</p>
      </div>
      <div className="score-grid">
        {achievements.map((item) => (
          <article className="score-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.note}</p>
          </article>
        ))}
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.group}>
            <h3>{group.group}</h3>
            <div className="mini-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

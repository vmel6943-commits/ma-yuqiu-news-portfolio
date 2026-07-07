import { useMemo, useState } from 'react';
import { ArrowUp, Download, Mail, Phone } from 'lucide-react';
import { abilities, achievements, contacts, experiences, filters, profile, skills, works } from './data/portfolio.js';
import { Hero } from './components/Hero.jsx';
import { AbilityMap } from './components/AbilityMap.jsx';
import { WorksGallery } from './components/WorksGallery.jsx';
import { Timeline } from './components/Timeline.jsx';
import { ScoresAndSkills } from './components/ScoresAndSkills.jsx';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [expandedWork, setExpandedWork] = useState(null);
  const visibleWorks = useMemo(() => {
    if (activeFilter === '全部') return works;
    return works.filter((work) => work.type.includes(activeFilter) || work.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="site-shell" id="top">
      <Hero profile={profile} />
      <AbilityMap abilities={abilities} />
      <WorksGallery
        filters={filters}
        works={visibleWorks}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        expandedWork={expandedWork}
        setExpandedWork={setExpandedWork}
      />
      <Timeline experiences={experiences} />
      <ScoresAndSkills achievements={achievements} skills={skills} />
      <footer className="contact-section" id="contact">
        <div>
          <p className="section-kicker">CONTACT / RESUME</p>
          <h2>纸质简历与联系</h2>
          <p>
            适合用于见习营、课程展示与新闻传播方向作品集补充。作品链接持续整理中，已接入可验证外链和本地证明材料。
          </p>
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

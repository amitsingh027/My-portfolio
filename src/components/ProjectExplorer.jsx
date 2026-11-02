import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { projects } from '../data/content';
import { profile } from '../data/profile';

const categories = ['All projects', 'Full stack', 'AI', 'Frontend'];
const category = project => project.title === 'Interview Prep AI' ? 'AI' : project.title === 'Portfolio Website' ? 'Frontend' : 'Full stack';
const features = {
  MediFlow: ['Patient and doctor management', 'Appointment scheduling and billing', 'Authentication and role-based access'],
  StudentYard: ['Campus buying and selling', 'Search, filters, and product listings', 'Authentication and order management'],
  'Interview Prep AI': ['CV and job description input', 'AI-generated interview questions', 'Interview practice and feedback'],
  'Portfolio Website': ['Responsive layouts and themes', 'Interactive project exploration', 'Accessible motion and keyboard navigation'],
};

export default function ProjectExplorer() {
  const [filter, setFilter] = useState('All projects');
  const visible = projects.filter(project => filter === 'All projects' || category(project) === filter);
  return <>
    <div className="project-toolbar">
      <div className="project-filters" role="group" aria-label="Filter projects">
        {categories.map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <span className="project-count" role="status">{visible.length} projects</span>
    </div>
    <div className="project-grid">
      {visible.map(project => {
        const index = projects.indexOf(project);
        return <article className="project-card" key={project.title}>
          <div className={'project-art art-' + (index + 1)}>
            <span>0{index + 1}</span>
            <div className="project-preview-label">{category(project)} / {project.year}</div>
            <div className="project-window" aria-hidden="true"><div className="window-dots">● ● ●</div><div className="mock-sidebar"/><div className="mock-line line-long"/><div className="mock-line"/><div className="mock-panels"><i/><i/><i/></div><div className="mock-line line-long"/></div>
          </div>
          <p className="project-year">{category(project)} · {project.year}</p>
          <h3>{project.title}</h3>
          <p>{project.text}</p>
          <div className="chips">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <details className="project-details"><summary>Explore features <ChevronDown size={16}/></summary><ul>{features[project.title].map(feature => <li key={feature}>{feature}</li>)}</ul></details>
          <a className="project-link" href={profile.github} target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={16}/></a>
        </article>;
      })}
    </div>
  </>;
}

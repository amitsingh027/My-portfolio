import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Code2, Download, Mail } from 'lucide-react';
import ProjectExplorer from './components/ProjectExplorer';
import Effects from './components/Effects';

import Nav from './components/Nav';
import Section from './components/Section';
import { profile } from './data/profile';
import { certifications, skills } from './data/content';

export default function App() {
   const [dark,setDark]=useState(() => { try { return localStorage.getItem("theme") !== "light"; } catch { return true; } }); useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light'; try { localStorage.setItem('theme', dark?'dark':'light'); } catch {} },[dark]);
  return <>
<Effects/>
<Nav dark={dark} setDark={setDark}/>
<main id="home">
<section className="hero">
<div>
<p className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</p>
<h1><small className="hero-greeting">HELLO, I’M AMIT</small><span>{profile.name}.</span>
</h1>
<p className="lede">I turn complex ideas into intuitive web experiences.</p>
<p className="intro">Full-stack developer & IT student. I build with React, Node.js, and MongoDB — backed by 400+ DSA problems and hands-on industry experience.</p>
<div className="cta">
<a className="button primary" href="#projects">View projects <ArrowDownRight size={18}/>
</a>
<a className="button secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View résumé <Download size={17}/>
</a>
</div>
<div className="recruiter-snapshot"><span>React / Node.js / MongoDB</span><span>Ghaziabad, India</span><span>B.Tech · 2027</span></div>
<div className="social">
<a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer">
<Code2/>
</a>
<a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer">
<BriefcaseBusiness/>
</a>
<a aria-label="Email Amit" href={`mailto:${profile.email}`}>
<Mail/>
</a>
</div>
</div>
<div>
<div className="portrait-wrap">
<div className="orbit orbit-one" aria-hidden="true"/><div className="orbit orbit-two" aria-hidden="true"/>
<div className="floating-label label-top">&lt;/&gt; Full-stack developer</div>
<img src="/assets/profile.jpeg" alt="Amit Kumar Singh"/>
<div className="code-card">
<span className="terminal-title">● ● ● &nbsp; developer.js</span>
<span>const developer = {'{'}</span>
<span>&nbsp; name: "Amit",</span>
<span>&nbsp; focus: "Full-stack web",</span>
<span>&nbsp; building: true</span>
<span>{'}'}</span>
</div>
</div>
</div>
</section>

<Section id="about" eyebrow="01 / ABOUT" title="A builder with a practical mindset.">
<div className="about-grid">
<p className="body-copy">{profile.bio} Currently pursuing a B.Tech in Information Technology at ABES Engineering College, I enjoy learning through hands-on projects and consistently strengthening my DSA foundation.</p>
<div className="facts">
<div>
<Code2/> <span>Full-stack web development</span>
</div>
<div>
<BriefcaseBusiness/> <span>{profile.location}</span>
</div>
</div>
</div>
<div className="stats">{profile.stats.map(s=>
<div key={s.label}>
<strong>{s.value}</strong>
<span>{s.label}</span>
</div>)}</div>
</Section>

<Section id="skills" eyebrow="02 / SKILLS" title="Tools I use to make ideas work.">
<div className="skill-grid">{skills.map(([group,items])=>
<article className="skill-card" key={group}>
<h3>{group}</h3>
<div>{items.map(item=>
<span key={item}>{item}</span>)}</div>
</article>)}</div>
</Section>

<Section id="projects" eyebrow="03 / SELECTED WORK" title="Projects built to solve real problems.">
<ProjectExplorer/>
</Section>

<Section id="experience" eyebrow="04 / EXPERIENCE" title="Learning in a real-world setting.">
<article className="timeline-card">
<p>JUN 2026 - AUG 2026</p>
<h3>Data & Systems Intern <span>· Locofly Private Limited</span>
</h3>
<ul>
<li>Managed and maintained company data across spreadsheets, dashboards, and internal systems.</li>
<li>Improved internal trackers and reporting workflows while supporting accurate data collection.</li>
</ul>
</article>
</Section>

<Section id="education" eyebrow="05 / EDUCATION" title="Building a strong technical foundation.">
<article className="timeline-card">
<p>2023 - 2027</p>
<h3>B.Tech, Information Technology <span>· ABES Engineering College</span>
</h3>
<p>Ghaziabad, India · CGPA: 7.9</p>
</article>
</Section>

<Section id="certifications" eyebrow="06 / CREDENTIALS" title="Learning beyond the classroom.">
<div className="cert-grid">{certifications.map((c,i)=>
<article key={c}>
<span>0{i+1}</span>
<h3>{c}</h3>
</article>)}</div>
</Section>

<Section id="contact" className="contact-section" eyebrow="07 / CONTACT" title="Let’s build something useful.">
<p className="body-copy">Have an opportunity, a project idea, or just want to connect? My inbox is open.</p>
<a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={22}/>
</a>
<div className="cta">
<a className="button primary" href={`mailto:${profile.email}?subject=Opportunity%20for%20Amit`}>Discuss an opportunity <Mail size={17}/></a>
<a className="button secondary" href="/resume.pdf" download>Download résumé <Download size={17}/></a>
<a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <BriefcaseBusiness size={17}/>
</a>
<a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">GitHub <Code2 size={17}/>
</a>
</div>
</Section>
</main>
<footer>
<span>© {new Date().getFullYear()} Amit Kumar Singh</span>
<span>Designed & built with React</span>
</footer>
</>}



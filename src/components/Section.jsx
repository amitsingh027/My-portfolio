export default function Section ({id, eyebrow, title, children, className = ""}) { return <section id={id} className={className}>
<p className="eyebrow">{eyebrow}</p>
<h2>{title}</h2>{children}</section>; }


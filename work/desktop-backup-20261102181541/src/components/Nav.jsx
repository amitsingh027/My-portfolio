import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Nav ({ dark, setDark }) { const [open, setOpen] = useState(false);
  const items=['About','Skills','Projects','Experience','Education','Contact'];
  return <header>
<a className="brand" href="#home">AKS<span>.</span>
</a>
<nav id="main-navigation" className={open?'open':''}>{items.map(x=>
<a onClick={()=>setOpen(false)} href={`#${x.toLowerCase()}`} key={x}>{x}</a>)}</nav>
<div className="nav-actions">
<button className="icon-button" aria-label="Toggle colour theme" onClick={()=>setDark(!dark)}>{dark?<Sun size={18}/>:<Moon size={18}/>}</button>
<button className="icon-button menu" aria-label="Toggle menu" aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
</div>
</header> };



import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type NodeKind = 'domain' | 'topic' | 'technology';
interface KnowledgeNode {
  id: string; title: string; kind: NodeKind; x: number; y: number; color: string; icon: string;
  description: string; parent?: string; tags: string[];
}

const nodes: KnowledgeNode[] = [
  { id:'cs', title:'Informatique', kind:'domain', x:50, y:50, color:'#39a7ff', icon:'computer', description:'Le domaine central qui relie développement, réseaux, données, cybersécurité et systèmes.', tags:['domaine','fondamentaux'] },
  { id:'ai', title:'Intelligence Artificielle', kind:'domain', x:21, y:25, color:'#bd5cff', icon:'neurology', description:'Modèles, apprentissage automatique, perception et systèmes intelligents.', tags:['IA','data'] },
  { id:'net', title:'Réseaux', kind:'domain', x:52, y:20, color:'#28d6b1', icon:'hub', description:'Communication numérique, protocoles, adressage et infrastructures.', tags:['réseaux','TCP/IP'] },
  { id:'sec', title:'Cybersécurité', kind:'domain', x:80, y:27, color:'#ffc42f', icon:'shield', description:'Protection des systèmes, réseaux, identités et données.', tags:['sécurité'] },
  { id:'telecom', title:'Télécommunications', kind:'domain', x:14, y:53, color:'#22d7c0', icon:'cell_tower', description:"Transmission de l'information par systèmes filaires et radio.", tags:['télécom','radio'] },
  { id:'math', title:'Mathématiques', kind:'domain', x:24, y:78, color:'#ff4f9a', icon:'functions', description:'Outils mathématiques nécessaires aux sciences informatiques et aux transmissions.', tags:['maths'] },
  { id:'dev', title:'Développement logiciel', kind:'topic', x:46, y:31, color:'#37c9ff', icon:'code', description:'Conception, implémentation et maintenance de logiciels.', tags:['software'] },
  { id:'front', title:'Frontend', kind:'topic', x:65, y:48, color:'#3a9dff', icon:'desktop_windows', description:"Interfaces utilisateur, expérience visuelle et applications web.", tags:['web','UI'] },
  { id:'back', title:'Backend', kind:'topic', x:55, y:69, color:'#b258ff', icon:'dns', description:'Services, APIs, logique métier et systèmes côté serveur.', tags:['server','API'] },
  { id:'db', title:'Bases de données', kind:'topic', x:47, y:82, color:'#ffbf29', icon:'database', description:'Stockage, modélisation, requêtage et systèmes de données.', tags:['SQL','NoSQL'] },
  { id:'data', title:'Sciences des Données', kind:'domain', x:73, y:81, color:'#21c9f5', icon:'monitoring', description:'Analyse, visualisation et exploitation de données.', tags:['data','Python'] },
  { id:'devops', title:'DevOps', kind:'topic', x:37, y:65, color:'#24d6b0', icon:'all_inclusive', description:'Automatisation, déploiement, infrastructure et fiabilité.', tags:['CI/CD','cloud'] },
  { id:'react', title:'React', kind:'technology', x:63, y:38, color:'#36d9ff', icon:'code', description:'Bibliothèque JavaScript pour construire des interfaces.', parent:'front', tags:['frontend','javascript'] },
  { id:'ts', title:'TypeScript', kind:'technology', x:72, y:42, color:'#4aa8ff', icon:'TS', description:'JavaScript avec typage statique.', parent:'front', tags:['frontend','language'] },
  { id:'js', title:'JavaScript', kind:'technology', x:76, y:53, color:'#f5d51b', icon:'JS', description:'Langage de programmation du web.', parent:'front', tags:['language'] },
  { id:'html', title:'HTML', kind:'technology', x:67, y:60, color:'#f47c37', icon:'HTML', description:'Langage de structuration des documents web.', parent:'front', tags:['web'] },
  { id:'css', title:'CSS', kind:'technology', x:61, y:57, color:'#7651d7', icon:'CSS', description:'Langage de style des interfaces web.', parent:'front', tags:['web'] },
  { id:'vite', title:'Vite', kind:'technology', x:52, y:11, color:'#8d6bff', icon:'bolt', description:"Outil moderne de développement frontend.", parent:'dev', tags:['tooling'] },
  { id:'tcp', title:'TCP/IP', kind:'topic', x:51, y:7, color:'#27d5b4', icon:'lan', description:'Suite de protocoles fondamentale pour Internet.', parent:'net', tags:['protocol','network'] },
  { id:'pentest', title:'Pentesting', kind:'topic', x:87, y:15, color:'#ffc42f', icon:'security', description:'Tests contrôlés pour identifier les vulnérabilités.', parent:'sec', tags:['security'] },
  { id:'python', title:'Python', kind:'technology', x:84, y:75, color:'#3b9ef4', icon:'terminal', description:'Langage très utilisé en data, IA et automatisation.', parent:'data', tags:['language','data'] },
];

const edges: [string,string][] = [
 ['cs','ai'],['cs','net'],['cs','sec'],['cs','telecom'],['cs','math'],['cs','dev'],['cs','front'],['cs','back'],['cs','db'],['cs','data'],['cs','devops'],
 ['front','react'],['front','ts'],['front','js'],['front','html'],['front','css'],['dev','vite'],['net','tcp'],['sec','pentest'],['data','python'],['back','db'],['devops','back'],['data','ai'],
];

function Icon({name}:{name:string}) {
  return <span className="material-symbols-rounded icon">{name}</span>;
}

function App(){
  const [selectedId,setSelectedId]=useState('cs');
  const [search,setSearch]=useState('');
  const [mobilePanel,setMobilePanel]=useState(false);
  const [view,setView]=useState<'atlas'|'structured'|'paths'>('atlas');
  const [zoom,setZoom]=useState(1);
  const selected=nodes.find(n=>n.id===selectedId) ?? nodes[0];

  const visible=useMemo(()=>{
    const q=search.trim().toLowerCase();
    return q ? nodes.filter(n=>n.title.toLowerCase().includes(q)||n.tags.some(t=>t.toLowerCase().includes(q))) : nodes;
  },[search]);

  const visibleIds=new Set(visible.map(n=>n.id));
  const connected=new Set([selected.id,...edges.filter(e=>e.includes(selected.id)).flat()]);

  const select=(id:string)=>{setSelectedId(id); setMobilePanel(true)};

  return <div className="app">
    <header className="topbar">
      <div className="brand"><div className="brandMark"><Icon name="school"/></div><span>Personal <b>CS</b></span></div>
      <div className="topSearch"><Icon name="search"/><input aria-label="Search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search topics, technologies, resources..."/></div>
      <nav className="desktopNav"><a>Home</a><a className="active">Explore</a><a>Library</a><a>Admin</a></nav>
      <button className="iconBtn" aria-label="Toggle theme"><Icon name="light_mode"/></button><div className="avatar">S</div>
      <button className="mobileMenu" aria-label="Open menu"><Icon name="menu"/></button>
    </header>

    <div className="layout">
      <aside className="sidebar">
        <h1>Explore</h1>
        <button className={view==='atlas'?'sideItem active':'sideItem'} onClick={()=>setView('atlas')}><Icon name="hub"/>Atlas</button>
        <button className={view==='structured'?'sideItem active':'sideItem'} onClick={()=>setView('structured')}><Icon name="account_tree"/>Structured View</button>
        <button className={view==='paths'?'sideItem active':'sideItem'} onClick={()=>setView('paths')}><Icon name="route"/>Learning Paths</button>
        <div className="divider"/>
        <h3>Filters</h3>
        <label>Domain</label>
        <select aria-label="Domain filter"><option>All Domains</option><option>Informatique</option><option>Réseaux</option><option>Cybersécurité</option></select>
        <label>Difficulty</label>
        {['Beginner','Intermediate','Advanced'].map((x,i)=><label className="check" key={x}><input type="checkbox"/><i className={`dot d${i}`}/>{x}</label>)}
        <label>Content Available</label>
        {['Posts','Books','Resources','Tools','Guides','Exercises','Challenges','Labs'].map(x=><label className="check" key={x}><input type="checkbox"/>Has {x}</label>)}
        <button className="reset"><Icon name="restart_alt"/>Reset Filters</button>
      </aside>

      <main className="canvasArea">
        <div className="statusPill"><span/> Exploring the knowledge universe...</div>

        {view==='atlas' ? <svg className="graph" viewBox="0 0 1000 760" role="img" aria-label="Interactive computer science knowledge graph" style={{transform:`scale(${zoom})`}}>
          <defs><filter id="glow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          {edges.map(([a,b],i)=>{
            const A=nodes.find(n=>n.id===a)!; const B=nodes.find(n=>n.id===b)!;
            const active=connected.has(a)||connected.has(b);
            return <line key={i} x1={A.x*10} y1={A.y*7.6} x2={B.x*10} y2={B.y*7.6} className={active?'edge active':'edge'}/>;
          })}
          {nodes.map(n=>{
            if(!visibleIds.has(n.id)) return null;
            const size=n.kind==='domain'?58:n.kind==='topic'?42:30;
            const active=connected.has(n.id);
            return <g key={n.id} transform={`translate(${n.x*10},${n.y*7.6})`} className={`node ${selectedId===n.id?'selected':''} ${active?'connected':''}`} onClick={()=>select(n.id)} tabIndex={0} onKeyDown={e=>e.key==='Enter'&&select(n.id)}>
              <circle r={size} fill="rgba(8,25,48,.88)" stroke={n.color} strokeWidth={n.kind==='domain'?3:2} filter={selectedId===n.id?'url(#glow)':undefined}/>
              <circle r={size-7} fill={n.color} opacity=".09"/>
              <foreignObject x={-22} y={-24} width="44" height="44"><div className="nodeIcon" style={{color:n.color}}>{n.icon.length<=4?<span className="textLogo">{n.icon}</span>:<Icon name={n.icon}/>}</div></foreignObject>
              <text y={size+20} textAnchor="middle" className="nodeLabel">{n.title}</text>
            </g>
          })}
        </svg> : <div className="structured">
          <div className="structuredHead">
            <div><p className="eyebrow">KNOWLEDGE STRUCTURE</p><h2>{view==='paths'?'Learning Paths':'Structured View'}</h2><p>Navigate the same connected knowledge without relying on the graph.</p></div>
            <button className="primary"><Icon name="play_arrow"/> Explore</button>
          </div>
          <div className="tree">
            {['Informatique','Réseaux','Cybersécurité','Intelligence Artificielle','Télécommunications','Mathématiques','Sciences des Données'].map((d,i)=><div className="treeRow" key={d}>
              <div className="treeCircle" style={{borderColor:nodes[i+1]?.color}}><Icon name={nodes[i+1]?.icon||'category'}/></div>
              <div><b>{d}</b><span>{i%2?'12 topics · 8 resources':'18 topics · 14 resources'}</span></div>
              <Icon name="chevron_right"/>
            </div>)}
          </div>
        </div>}

        <div className="graphControls"><button onClick={()=>setZoom(z=>Math.min(1.5,z+.1))} aria-label="Zoom in">+</button><button onClick={()=>setZoom(z=>Math.max(.7,z-.1))} aria-label="Zoom out">−</button></div>
        <button className="floating" aria-label="Graph filters"><Icon name="tune"/></button>
      </main>

      <aside className={`details ${mobilePanel?'mobileOpen':''}`}>
        <button className="closePanel" onClick={()=>setMobilePanel(false)} aria-label="Close details"><Icon name="close"/></button>
        <div className="detailIcon" style={{borderColor:selected.color,color:selected.color}}><Icon name={selected.icon.length<=4?'code':selected.icon}/></div>
        <h2>{selected.title}</h2>
        <span className="badge">{selected.kind==='domain'?'Domaine':selected.kind==='topic'?'Composant':'Technologie'}</span>
        <p>{selected.description}</p>
        <div className="meta">
          <div><Icon name="bar_chart"/><span>Niveau<strong>{selected.kind==='technology'?'Intermédiaire':'Tous niveaux'}</strong></span></div>
          <div><Icon name="schedule"/><span>Temps estimé<strong>{selected.kind==='technology'?'30 min':'Variable'}</strong></span></div>
        </div>
        <button className="primary full" onClick={()=>setView('structured')}><Icon name="menu_book"/>Voir le domaine <Icon name="arrow_forward"/></button>
        <section><h3>Composants principaux</h3>
          {nodes.filter(n=>n.parent===selected.id || (selected.id==='cs'&&n.kind==='topic')).slice(0,7).map(n=><button className="resourceRow" key={n.id} onClick={()=>select(n.id)}><span style={{color:n.color}}><Icon name={n.icon.length<=4?'code':n.icon}/></span>{n.title}<Icon name="chevron_right"/></button>)}
        </section>
        <section><h3>Ressources associées</h3>
          {[['description','Posts','24'],['book','Livres','12'],['link','Ressources','36'],['build','Outils','18'],['menu_book','Guides','9'],['code','Exercices','14'],['emoji_events','Challenges','6'],['science','Labs','8']].map(([i,n,c])=><div className="resourceRow" key={n}><span><Icon name={i}/></span>{n}<em>{c}</em><Icon name="chevron_right"/></div>)}
        </section>
      </aside>
    </div>

    <nav className="bottomNav"><a><Icon name="home"/>Home</a><a className="active"><Icon name="explore"/>Explore</a><a><Icon name="menu_book"/>Library</a><a><Icon name="shield"/>Admin</a></nav>
  </div>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
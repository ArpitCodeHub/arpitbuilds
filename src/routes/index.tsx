import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomCursor, Navbar, Reveal } from "@/components/portfolio-effects";
import { experience, toolkit } from "@/data/portfolio";
import automationVisual from "@/assets/ai-automation-closing.jpg";
import portraitSrc from "@/assets/arpit-toon-img.jpeg";
import heroPortraitSrc from "@/assets/arpit-hero-portrait.png";
import zopper1Src from "@/assets/img-000.png";
import zopper2Src from "@/assets/img-001.png";
import shiv1Src from "@/assets/img-003.jpg";
import shiv2Src from "@/assets/img-004.jpg";
import diggin1Src from "@/assets/img-006.jpg";
import diggin2Src from "@/assets/img-007.jpg";
import inventorySrc from "@/assets/img-010.jpg";
import digidznSrc from "@/assets/img-011.png";
import meme1Src from "@/assets/img-014.png";
import meme2Src from "@/assets/img-015.png";
import meme3Src from "@/assets/img-016.png";
import meme4Src from "@/assets/img-017.png";
import meme5Src from "@/assets/img-018.png";
import tata from "@/assets/tata-tea-placeholder.jpg";
import mamaearth from "@/assets/mamaearth-placeholder.jpg";
import aiugc from "@/assets/ai-ugc-placeholder.jpg";
import tataVideo from "@/assets/Tata-Tea-Ad.mp4.asset.json";

const asset = (url: string) => ({ url });
const portrait = asset(portraitSrc);
const heroPortrait = asset(heroPortraitSrc);
const zopper1 = asset(zopper1Src);
const zopper2 = asset(zopper2Src);
const shiv1 = asset(shiv1Src);
const shiv2 = asset(shiv2Src);
const diggin1 = asset(diggin1Src);
const diggin2 = asset(diggin2Src);
const inventory = asset(inventorySrc);
const digidzn = asset(digidznSrc);
const meme1 = asset(meme1Src);
const meme2 = asset(meme2Src);
const meme3 = asset(meme3Src);
const meme4 = asset(meme4Src);
const meme5 = asset(meme5Src);
const mamaearthVideo = asset("/videos/MamaEarth-Ad.mp4");
const aiUgcVideo = asset("/videos/ai-ugc-video.mp4");

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Arpit Jain — Applied AI × Creative Technology" },
    { name: "description", content: "Arpit Jain builds useful, creative and surprisingly capable AI experiences." },
    { property: "og:title", content: "Arpit Jain — Applied AI × Creative Technology" },
    { property: "og:description", content: "You bring the idea. I’ll figure out the AI." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const projects = [
  { id: "01", title: "ZOPPER PRINTABLES STUDIO", category: "BUILD", eyebrow: "PRODUCT / FULL-STACK / INTERNAL TOOL", copy: "An internal tool built for Zopper’s marketing team to turn design PDFs into press-ready printable files.", tags: ["PRODUCT", "FULL-STACK", "INTERNAL TOOL", "AI"], images: [zopper1.url, zopper2.url], cta: "VIEW DETAILS" },
  { id: "02", title: "DIGGIN CAFÉ", category: "DESIGN", eyebrow: "WEBSITE / DIGITAL EXPERIENCE", copy: "A complete digital experience for a café — from the interface to the ordering experience and backend setup.", tags: ["WEBSITE", "UI/UX", "FULL-STACK"], images: [diggin1.url, diggin2.url], cta: "VISIT SITE" },
  { id: "03", title: "OUTBOUND SALES AUTOMATION", category: "AUTOMATE", eyebrow: "AUTOMATION / AI VOICE / SALES", copy: "An AI-powered outbound sales workflow combining voice conversations, automation and lead processing.", tags: ["AI", "VOICE", "AUTOMATION"], images: [], cta: "WATCH WALKTHROUGH" },
  { id: "04", title: "SHIV AI", category: "CREATE", eyebrow: "AI AGENT / REAL ESTATE", copy: "A real-estate AI assistant that talks back.", tags: ["AI AGENT", "TELEGRAM", "VOICE", "n8n"], images: [shiv1.url, shiv2.url], cta: "VIEW DETAILS" },
] as const;

function SectionHead({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <div className="section-head"><span>{kicker}</span><div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></div>;
}

function OutboundVisual() {
  const nodes = ["LEAD", "AI VOICE CALL", "REAL-TIME CONVERSATION", "INTENT", "HOT / COLD", "FOLLOW-UP"];
  return <div className="outbound-visual" aria-label="Conceptual outbound sales automation flow"><div className="wave">{Array.from({length: 32}, (_, i) => <i key={i} />)}</div><div className="flow">{nodes.map((node, i) => <div key={node}><span>{String(i + 1).padStart(2, "0")}</span>{node}</div>)}</div><div className="transcript">“Hi, is this a good time?”<br/><strong>Intent detected</strong></div></div>;
}

function ProjectCard({ project, onImage }: { project: (typeof projects)[number]; onImage: (src: string, alt: string) => void }) {
  return <article className={`project project-${project.id}`} data-cursor="view"><div className="project-copy"><span className="project-no">{project.id}</span><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.copy}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Button variant="pill">{project.cta} <ArrowUpRight /></Button></div><div className="project-media">{project.images.length ? project.id === "04" ? <div className="telegram-showcase">{project.images.map((src, i) => { const alt = `Shiv AI Telegram conversation ${i + 1}`; return <Button key={src} variant="icon" className="phone-frame" onClick={() => onImage(src, alt)} aria-label={`Enlarge ${alt}`}><span className="phone-speaker"/><img src={src} alt={alt} loading="lazy"/><span className="phone-home"/></Button>; })}</div> : project.images.map((src, i) => { const alt = `${project.title} interface ${i + 1}`; return <Button key={src} variant="icon" className="project-shot" onClick={() => onImage(src, alt)} aria-label={`Enlarge ${alt}`}><img src={src} alt={alt} loading="lazy" /></Button>; }) : <OutboundVisual />}</div></article>;
}

function VideoPlaceholder({ thumbnail, title, category, videoSrc }: { thumbnail: string; title: string; category: string; videoSrc: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return <article className={`video-card${isPlaying ? " is-playing" : ""}`} data-cursor="video">
    {isPlaying ? <video src={videoSrc} poster={thumbnail} controls autoPlay playsInline aria-label={`${title} video`} onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)} /> : <img src={thumbnail} alt={`${title} artistic video cover`} loading="lazy" width={1024} height={1280}/>} 
    {!isPlaying && <><div className="video-shade"/><Button variant="icon" size="icon" aria-label={`Play ${title}`} onClick={() => setIsPlaying(true)}><Play /></Button><div><span>{category}</span><h3>{title}</h3></div></>}
  </article>;
}

function Index() {
  const [filter, setFilter] = useState("ALL");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const visible = filter === "ALL" ? projects : projects.filter(p => p.category === filter);
  return <main id="top">
    <Navbar/><CustomCursor/>{lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project image preview" onClick={() => setLightbox(null)}><Button variant="icon" size="icon" onClick={() => setLightbox(null)} aria-label="Close image preview">×</Button><img src={lightbox.src} alt={lightbox.alt}/></div>}
    <section className="hero">
      <div className="hero-glow"/><div className="hero-lines"/>
      <div className="hero-copy"><p className="eyebrow">ARPIT JAIN — APPLIED AI / CREATIVE TECHNOLOGY</p><h1>ARPIT<br/><span>JAIN</span></h1><p className="hero-line">You bring the idea.<br/>I’ll figure out the AI.</p><p className="hero-support">Building things across AI, code, automation, creative technology and whatever else the idea demands.</p><div className="hero-actions"><Button asChild variant="primary"><a href="#work">EXPLORE MY WORK <ArrowDown/></a></Button><Button asChild variant="pill"><a href="mailto:ajarpit0705@gmail.com">LET'S TALK <ArrowUpRight/></a></Button></div></div>
      <div className="hero-portrait"><img src={heroPortrait.url} alt="Illustrated portrait of Arpit Jain in an angular frame" fetchPriority="high"/><span className="scribble s1">IDEAS</span><span className="scribble s2">AUTOMATION<br/>PLAYGROUNDS<br/>PRODUCTS</span></div>
      <p className="scroll-note">SCROLL TO EXPLORE <ArrowDown/></p>
    </section>

    <Reveal><section className="manifesto"><p className="eyebrow">MANIFESTO / HOW I SEE IT</p><div className="manifesto-grid"><h2><span>IF YOU CAN</span><br/>IMAGINE IT,<small>THERE'S PROBABLY A WAY<br/>TO BUILD IT WITH AI.</small></h2><div><p>I like taking ideas that live somewhere between “wouldn’t it be cool if…” and “wait, can we actually build that?” — and figuring out how to make them real.</p><ol className="idea-flow" aria-label="Idea to launch workflow">{[
      ["01", "IDEA", "A thought worth chasing"],
      ["02", "EXPERIMENT", "Test, learn, reshape"],
      ["03", "BUILD", "Turn signals into systems"],
      ["04", "SHIP", "Put it into the world"],
    ].map(([number, title, note], index) => <li key={title} className={index % 2 ? "flow-right" : "flow-left"}>
      <span className="flow-node" aria-hidden="true"><i/></span>
      <div className="flow-card"><span>{number}</span><strong>{title}</strong><small>{note}</small></div>
    </li>)}</ol></div></div></section></Reveal>

    <section id="work" className="capabilities work"><Reveal><SectionHead kicker="03 / CAPABILITIES" title="WHAT I MAKE AI DO" copy="Different problems. Same playground."/></Reveal><div className="filters" role="group" aria-label="Project filters">{["ALL","BUILD","AUTOMATE","CREATE","DESIGN"].map(x => <Button key={x} variant={filter === x ? "primary" : "pill"} onClick={() => setFilter(x)}>{x}</Button>)}</div><div className="project-list">{visible.map(project => <Reveal key={project.id}><ProjectCard project={project} onImage={(src, alt) => setLightbox({ src, alt })}/></Reveal>)}</div></section>

    <Reveal><section className="story"><SectionHead kicker="05 / CREATIVE AI" title="STORYTELLING × AI" copy="Different brands. Different audiences. Same question: How do we make someone stop scrolling?"/><div className="video-grid"><VideoPlaceholder thumbnail={tata} title="TATA TEA" category="AI COMMERCIAL" videoSrc={tataVideo.url}/><VideoPlaceholder thumbnail={mamaearth} title="MAMAEARTH" category="AI AD" videoSrc={mamaearthVideo.url}/><VideoPlaceholder thumbnail={aiugc} title="AI UGC" category="CONCEPT SERIES" videoSrc={aiUgcVideo.url}/></div></section></Reveal>

    <Reveal><section className="meme"><div className="meme-copy"><p className="eyebrow">06 / PROJECT — CREATIVE CAMPAIGN</p><h2>SOMETIMES,<br/>SERIOUS AI<br/>NEEDS A <span>MEME.</span></h2><p>A meme-driven campaign for ZenuraTech showing that even AI and marketing content can speak the language of the internet.</p><Button variant="pill">VIEW CAMPAIGN <ArrowUpRight/></Button></div><div className="meme-stack">{[meme1,meme2,meme3,meme4,meme5].map((img,i)=><img key={img.url} src={img.url} alt={`ZenuraTech meme campaign visual ${i+1}`} loading="lazy"/>)}</div></section></Reveal>

    <Reveal><section className="process"><SectionHead kicker="08 / A GREAT PROCESS" title={'FROM “WHAT IF?”\nTO “IT’S LIVE.”'}/><div className="steps"><svg className="process-thread" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M110 105 C245 28 270 255 410 210 S620 42 715 122 S820 335 915 274"/></svg>{[["01","THINK","Understand the real problem."],["02","EXPLORE","Find where AI can genuinely help."],["03","BUILD","Prototype fast. Iterate faster."],["04","SHIP","Make the thing actually usable."]].map(x=><article key={x[0]}><span>{x[0]}</span><i aria-hidden="true"/><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div><p className="process-note">My toolkit changes. The mindset doesn’t.</p></section></Reveal>

    <section id="about" className="about"><Reveal><div className="about-image"><img src={portrait.url} alt="Arpit Jain portrait illustration" loading="lazy"/><span className="scribble">Always<br/>experimenting.</span></div></Reveal><Reveal><div className="about-copy"><p className="eyebrow">09 / ABOUT ARPIT</p><h2>HEY,<br/>I’M ARPIT.</h2><p>I’ve spent the last few years bouncing between AI creatives, automation, development, marketing and whatever interesting problem happened to land in front of me.</p><p>I like figuring things out.</p><p>Give me an idea, a problem or something that probably shouldn’t be possible yet — and I’ll start experimenting.</p></div></Reveal></section>

    <Reveal><section className="experience"><SectionHead kicker="10 / EXPERIENCE" title="PLACES I’VE WORKED"/><div className="timeline">{experience.map((item,i)=><article key={item.place}><span>0{i+1}</span><div><h3>{item.place}</h3><strong>{item.role}</strong><p>{item.detail}</p></div></article>)}</div></section></Reveal>

    <Reveal><section className="toolkit"><div><p className="eyebrow">11 / MY TOOLKIT</p><h2>THE TOOLS CHANGE.<br/><span>THE CURIOSITY DOESN’T.</span></h2></div><div className="tool-groups">{Object.entries(toolkit).map(([group,tools])=><div key={group}><h3>{group}</h3><p>{tools.map(tool=><span key={tool}>{tool}</span>)}</p></div>)}</div></section></Reveal>

    <Reveal><section id="playground" className="playground"><SectionHead kicker="12 / PLAYGROUND" title="PLAYGROUND" copy="A space for ideas, experiments and random things I’m exploring."/><div className="experiment-grid"><article><img src={inventory.url} alt="Inventory automation workflow" loading="lazy"/><h3>INVENTORY AUTOMATION</h3><p>Structured inventory workflows and AI-assisted operations.</p></article><article><img src={digidzn.url} alt="DigiDZN website interface" loading="lazy"/><h3>DIGIDZN</h3><p>Digital agency experience and admin interface.</p></article></div></section></Reveal>

    <section className="final-cta"><div className="final-visual"><img src={automationVisual} alt="Sculptural AI automation network" loading="lazy" width={1024} height={1280}/></div><div><p className="eyebrow">13 / LET’S MAKE SOMETHING</p><h2>YOU BRING<br/>THE IDEA.<br/><span>I’LL FIGURE<br/>OUT THE AI.</span></h2></div><div className="contact"><p>Have something in mind?</p><Button asChild variant="primary"><a href="mailto:ajarpit0705@gmail.com">LET’S TALK <ArrowUpRight/></a></Button><a href="mailto:ajarpit0705@gmail.com">ajarpit0705@gmail.com</a></div></section>

    <footer><div className="brand">AJ<sup>°</sup></div><div><strong>ARPIT JAIN</strong><p>Applied AI / Creative Technology</p><p>Making AI useful, creative,<br/>and surprisingly capable.</p></div><div className="footer-links"><a href="https://www.linkedin.com/in/arpit-jain-1a787a2b6" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/ArpitCodeHub" target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:ajarpit0705@gmail.com">Email ↗</a></div><p>© 2026 Arpit Jain</p></footer>
  </main>;
}

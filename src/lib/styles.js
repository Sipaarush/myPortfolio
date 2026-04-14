// src/lib/styles.js
// All original CSS preserved verbatim — injected via <style> in layout

const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500&display=swap');

:root{
  --bg:#05060f;--bg2:#080a18;--bg3:#0a0c1a;
  --surface:#0e1029;--surface2:#131630;
  --border:#1e2247;--border2:#2a3060;
  --violet:#7c6af7;--violet2:#5c4de0;--violet3:#a99dff;
  --cyan:#22d4fd;--cyan2:#0ab8e8;--cyan3:#85eeff;
  --rose:#f03e6e;--amber:#f59e0b;
  --text:#e8eaf8;--text2:#8b92c4;--text3:#4a5080;
  --accent:#a78bfa;--accent2:#22d4fd;
  --glow:rgba(124,106,247,.15);--glow2:rgba(34,212,253,.12);
  --mono:'JetBrains Mono',monospace;--sans:'Outfit',sans-serif;--code:'Space Mono',monospace;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:var(--sans);overflow-x:hidden;cursor:none}

/* ── CURSOR ── */
.cursor{position:fixed;width:8px;height:8px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:9999;transition:transform .08s;mix-blend-mode:screen;top:0;left:0}
.cursor-ring{position:fixed;width:28px;height:28px;border:1.5px solid var(--violet3);border-radius:50%;pointer-events:none;z-index:9998;transition:border-color .2s;top:0;left:0;mix-blend-mode:screen}

/* ── AURORA ── */
.aurora{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.aurora-blob{position:absolute;border-radius:50%;filter:blur(110px);opacity:.11;animation:drift 20s ease-in-out infinite}
.aurora-blob:nth-child(1){width:600px;height:600px;background:#7c6af7;top:-15%;left:-10%;animation-delay:0s}
.aurora-blob:nth-child(2){width:500px;height:500px;background:#22d4fd;top:35%;right:-12%;animation-delay:-7s}
.aurora-blob:nth-child(3){width:380px;height:380px;background:#f03e6e;bottom:-12%;left:35%;animation-delay:-14s;opacity:.07}
@keyframes drift{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(45px,-35px) scale(1.06)}66%{transform:translate(-22px,18px) scale(.96)}}
body::after{content:'';position:fixed;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(124,106,247,.007) 3px,rgba(124,106,247,.007) 6px);pointer-events:none;z-index:2}
.grid-bg{position:absolute;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:50px 50px;opacity:.28;pointer-events:none}

/* ── NAV ── */
nav{position:fixed;top:0;left:0;right:0;z-index:200;padding:1rem 3rem;display:flex;justify-content:space-between;align-items:center;backdrop-filter:blur(24px);background:rgba(5,6,15,.82);border-bottom:1px solid var(--border)}
.nav-logo{font-family:var(--code);font-size:12px;color:var(--violet3);letter-spacing:.06em}
.nav-logo span{color:var(--cyan)}
.nav-links{display:flex;gap:2.5rem}
.nav-links a{font-family:var(--mono);font-size:11px;color:var(--text3);text-decoration:none;letter-spacing:.08em;transition:color .2s;text-transform:uppercase}
.nav-links a:hover{color:var(--accent)}
.nav-status{display:flex;align-items:center;gap:.5rem;font-family:var(--mono);font-size:10px;color:var(--text3)}
.nav-dot{width:5px;height:5px;background:#4ade80;border-radius:50%;animation:pdot 2s infinite}
@keyframes pdot{0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,.5)}50%{box-shadow:0 0 0 5px rgba(74,222,128,0)}}

/* ── HERO ── */
#hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:0 4rem;position:relative;overflow:hidden;z-index:3}
#waveCanvas{position:absolute;inset:0;width:100%;height:100%;z-index:0;opacity:.75}
.hero-content{position:relative;z-index:4}
.hero-eyebrow{font-family:var(--mono);font-size:11px;color:var(--cyan2);letter-spacing:.2em;text-transform:uppercase;margin-bottom:2rem;display:flex;align-items:center;gap:1rem}
.hero-eyebrow::before{content:'';width:40px;height:1px;background:linear-gradient(to right,transparent,var(--cyan2))}
.hero-name-row{display:flex;align-items:center;gap:2.5rem;flex-wrap:wrap}
.hero-avatar{flex-shrink:0;width:clamp(90px,11vw,148px);height:clamp(90px,11vw,148px);position:relative}
.av-ring1{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(124,106,247,.5);animation:spin1 14s linear infinite}
.av-ring2{position:absolute;inset:8px;border-radius:50%;border:1px dashed rgba(34,212,253,.4);animation:spin1 9s linear infinite reverse}
.av-core{position:absolute;inset:17px;border-radius:50%;background:var(--surface2);border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;overflow:hidden}
@keyframes spin1{from{transform:rotate(0)}to{transform:rotate(360deg)}}
.hero-name{font-size:clamp(2.6rem,6.2vw,6.2rem);font-weight:900;line-height:.92;letter-spacing:-.04em}
.hero-name .ln1{display:block;color:var(--text)}
.hero-name .ln2{display:block;color:transparent;-webkit-text-stroke:1.5px var(--violet3)}
.hero-name .ln3{display:block;font-size:clamp(1.1rem,2.5vw,2.5rem);font-weight:300;color:var(--cyan);font-family:var(--mono);letter-spacing:.01em;margin-top:.4rem}
.hero-desc{font-family:var(--mono);font-size:13px;color:var(--text2);max-width:560px;line-height:1.9;margin-top:2rem;padding-left:1.25rem;border-left:2px solid var(--violet2)}
.hero-cta{margin-top:2.5rem;display:flex;gap:1rem;flex-wrap:wrap}
.btn-p{font-family:var(--mono);font-size:11px;padding:.8rem 2rem;background:linear-gradient(135deg,var(--violet2),var(--violet));color:#fff;border:none;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;transition:all .25s;position:relative;overflow:hidden;display:inline-block}
.btn-p::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--cyan2),var(--violet3));opacity:0;transition:opacity .3s}
.btn-p:hover::before{opacity:1}
.btn-p span{position:relative;z-index:1}
.btn-s{font-family:var(--mono);font-size:11px;padding:.8rem 2rem;background:transparent;color:var(--cyan);border:1px solid var(--cyan2);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;transition:all .25s;display:inline-block}
.btn-s:hover{background:rgba(34,212,253,.08);border-color:var(--cyan)}
.hero-stats{position:absolute;right:4rem;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:2rem;z-index:4}
.hs .sv{font-family:var(--code);font-size:2.1rem;font-weight:700;line-height:1;background:linear-gradient(135deg,var(--violet3),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hs .sl{font-family:var(--mono);font-size:9px;color:var(--text3);letter-spacing:.12em;text-transform:uppercase;margin-top:3px}
.scroll-hint{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:.5rem;animation:bob 2.5s ease-in-out infinite}
.scroll-line{width:1px;height:50px;background:linear-gradient(to bottom,var(--violet3),transparent)}
.scroll-txt{font-family:var(--mono);font-size:9px;color:var(--text3);letter-spacing:.18em;text-transform:uppercase}
@keyframes bob{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}

/* ── SECTIONS ── */
section{padding:7rem 4rem;position:relative;z-index:3}
.s-label{font-family:var(--mono);font-size:10px;color:var(--text3);letter-spacing:.22em;text-transform:uppercase;margin-bottom:.6rem;display:flex;align-items:center;gap:.75rem}
.s-label::before{content:'';width:20px;height:1px;background:var(--text3)}
.s-heading{font-size:clamp(2rem,4vw,3.8rem);font-weight:800;letter-spacing:-.04em;line-height:.95;margin-bottom:.4rem}
.s-heading .hl{background:linear-gradient(90deg,var(--violet3),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.s-rule{height:1px;background:linear-gradient(to right,var(--border2),transparent);margin:2.5rem 0}

/* ── ABOUT ── */
#about{display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:start}
.about-text p{font-family:var(--mono);font-size:13px;color:var(--text2);line-height:2;margin-bottom:1rem}
.about-text p strong{color:var(--violet3);font-weight:500}
.skills-orbit-wrapper{position:relative;height:360px}
.sk-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:70px;height:70px;border-radius:50%;background:var(--surface2);border:1px solid var(--violet2);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;color:var(--violet3);text-align:center;line-height:1.5;z-index:5;text-transform:uppercase}
.sk-ring{position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%)}
.sk-pill{position:absolute;font-family:var(--mono);font-size:10px;white-space:nowrap;padding:3px 9px;border-radius:20px;cursor:default;transition:transform .2s,box-shadow .2s}
.sk-pill:hover{transform:scale(1.2)!important;z-index:10}
.skills-cats{margin-top:3rem;display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.sk-cat{background:var(--surface);border:1px solid var(--border);padding:1.1rem;position:relative;overflow:hidden}
.sk-cat::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(to right,var(--violet2),var(--cyan2))}
.sk-cat-t{font-family:var(--mono);font-size:9px;color:var(--text3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:.65rem}
.sk-tags{display:flex;flex-wrap:wrap;gap:5px}
.sk-tag{font-family:var(--mono);font-size:10px;padding:2px 8px;background:var(--surface2);border:1px solid var(--border);color:var(--text2)}

/* ── PROJECTS ── */
#projects{background:var(--bg2)}
.proj-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.proj-card{background:var(--surface);border:1px solid var(--border);position:relative;cursor:pointer;transition:border-color .3s,transform .3s}
.proj-card:hover{border-color:var(--violet2);transform:translateY(-6px)}
.proj-card-inner{position:relative;overflow:hidden}
.proj-glow{position:absolute;inset:0;opacity:0;transition:opacity .3s;pointer-events:none}
.proj-card:hover .proj-glow{opacity:1}
.float-sticker{position:absolute;pointer-events:none;user-select:none;z-index:30;line-height:1;filter:drop-shadow(0 3px 10px rgba(0,0,0,.5))}
.fs-a{animation:fsa 4.5s ease-in-out infinite}
.fs-b{animation:fsb 5.5s ease-in-out infinite}
.fs-c{animation:fsc 3.8s ease-in-out infinite}
@keyframes fsa{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-10px) rotate(6deg)}}
@keyframes fsb{0%,100%{transform:translateY(0) rotate(4deg)}50%{transform:translateY(-8px) rotate(-5deg)}}
@keyframes fsc{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-12px) rotate(3deg)}}
.proj-badge{display:inline-flex;align-items:center;gap:6px;padding:5px 11px;border-radius:4px;font-family:var(--mono);font-size:10px;letter-spacing:.06em;margin-bottom:1rem;font-weight:500}
.proj-card-top{padding:1.5rem 1.5rem 1rem}
.proj-title{font-size:1.05rem;font-weight:700;line-height:1.35;margin-bottom:.4rem;letter-spacing:-.02em}
.proj-period{font-family:var(--mono);font-size:9px;color:var(--text3);letter-spacing:.1em;margin-bottom:.75rem;text-transform:uppercase}
.proj-desc{font-family:var(--mono);font-size:11.5px;color:var(--text2);line-height:1.75}
.proj-card-bot{padding:.9rem 1.5rem 1.1rem;display:flex;flex-wrap:wrap;gap:5px;border-top:1px solid var(--border)}
.proj-tool{font-family:var(--mono);font-size:9px;padding:2px 7px;border:1px solid var(--border2);color:var(--text3);transition:border-color .2s,color .2s}
.proj-tool:hover{border-color:var(--violet3);color:var(--violet3)}
.expand-wrap{max-height:0;overflow:hidden;transition:max-height .45s ease}
.proj-card.open .expand-wrap{max-height:700px}
.expand-btn{width:100%;font-family:var(--mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--text3);background:transparent;border:none;border-top:1px solid var(--border);padding:.65rem 1.5rem;cursor:pointer;text-align:left;transition:color .2s,background .2s;display:flex;align-items:center;justify-content:space-between}
.expand-btn:hover{color:var(--violet3);background:rgba(124,106,247,.05)}
.eico{transition:transform .3s;font-size:13px;font-style:normal}
.proj-card.open .eico{transform:rotate(45deg)}
.inner-exp{padding:0 1.5rem 1.5rem}
.metrics-row{display:flex;flex-wrap:wrap;gap:.65rem;margin:1rem 0}
.mc{background:var(--surface2);border:1px solid var(--border2);padding:.5rem .75rem;display:flex;flex-direction:column}
.mc .mv{font-family:var(--code);font-size:1rem;font-weight:700;line-height:1;background:linear-gradient(90deg,var(--violet3),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.mc .ml{font-family:var(--mono);font-size:8px;color:var(--text3);text-transform:uppercase;letter-spacing:.1em;margin-top:2px}
.chart-area{background:var(--bg);border:1px solid var(--border);padding:1.1rem;margin-top:1rem}
.chart-ttl{font-family:var(--mono);font-size:9px;color:var(--text3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:.65rem}
.bar-row{display:flex;flex-direction:column;gap:.35rem}
.bar-item{display:flex;align-items:center;gap:.75rem}
.bar-lbl{font-family:var(--mono);font-size:9px;color:var(--text3);width:110px;flex-shrink:0;text-align:right}
.bar-track{flex:1;height:12px;background:var(--surface2);overflow:hidden}
.bar-fill{height:100%;transition:width 1.2s cubic-bezier(.23,1,.32,1);display:flex;align-items:center;padding-right:5px;justify-content:flex-end;width:0}
.bar-fill span{font-family:var(--mono);font-size:8px;font-weight:700;color:rgba(255,255,255,.9)}
.proj-card.featured{grid-column:span 2;display:grid;grid-template-columns:1.15fr .85fr}
.proj-card.featured .proj-card-inner{border-right:1px solid var(--border)}
.feat-right{padding:1.5rem;display:flex;flex-direction:column;justify-content:space-between}

/* ── RESEARCH ── */
#research{background:var(--bg3)}
.r-nodes{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:2.5rem}
.r-node{padding:.6rem 1.1rem;border:1px solid var(--border2);background:var(--surface);font-family:var(--mono);font-size:11px;color:var(--text2);display:flex;align-items:center;gap:.5rem;transition:all .2s;cursor:default}
.r-node:hover{border-color:var(--violet);color:var(--violet3);background:rgba(124,106,247,.07);transform:translateY(-2px)}
.ri-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem;margin-top:2.5rem}
.ri-card{background:var(--surface);border:1px solid var(--border);padding:1.5rem;position:relative;overflow:hidden;transition:transform .25s,border-color .25s}
.ri-card:hover{transform:translateY(-3px);border-color:var(--border2)}
.ri-acc{position:absolute;top:0;left:0;width:3px;height:100%}
.ri-ico{font-size:1.4rem;margin-bottom:.75rem}
.ri-title{font-size:.95rem;font-weight:700;margin-bottom:.4rem;letter-spacing:-.015em}
.ri-desc{font-family:var(--mono);font-size:11px;color:var(--text2);line-height:1.75}
.ri-badge{font-family:var(--mono);font-size:9px;padding:2px 8px;margin-top:.75rem;display:inline-block;letter-spacing:.1em;text-transform:uppercase;border:1px solid}

/* ── EDUCATION ── */
.timeline{position:relative;padding-left:3rem;max-width:680px}
.timeline::before{content:'';position:absolute;left:9px;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,var(--violet),var(--cyan),transparent)}
.tl-item{position:relative;margin-bottom:3rem}
.tl-dot{position:absolute;left:-2.75rem;top:5px;width:13px;height:13px;border-radius:50%;background:var(--bg);border:2px solid var(--violet3);box-shadow:0 0 12px rgba(167,139,250,.5)}
.tl-when{font-family:var(--mono);font-size:9px;color:var(--accent2);letter-spacing:.12em;margin-bottom:.3rem;text-transform:uppercase}
.tl-inst{font-size:1rem;font-weight:700;letter-spacing:-.02em;margin-bottom:.2rem}
.tl-deg{font-family:var(--mono);font-size:11px;color:var(--text2);margin-bottom:.75rem}
.cgpa{display:inline-flex;align-items:center;gap:.5rem;background:rgba(124,106,247,.1);border:1px solid var(--violet2);padding:.3rem .85rem;margin-bottom:.65rem}
.cgpa .gv{font-family:var(--code);font-weight:700;background:linear-gradient(90deg,var(--violet3),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.cgpa .gl{font-family:var(--mono);font-size:9px;color:var(--text2);letter-spacing:.08em}
.tl-courses{display:flex;flex-wrap:wrap;gap:5px}
.tl-course{font-family:var(--mono);font-size:9px;padding:2px 7px;background:var(--surface);border:1px solid var(--border);color:var(--text3)}

/* ── ACHIEVEMENTS ── */
#achievements{background:var(--bg2)}
.ach-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:3rem}
.ach-card{background:var(--surface);border:1px solid var(--border);padding:1.75rem;display:flex;gap:1.25rem;align-items:flex-start;transition:all .25s;position:relative;overflow:hidden}
.ach-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(to right,var(--violet2),var(--cyan2));transform:scaleX(0);transform-origin:left;transition:transform .35s}
.ach-card:hover{border-color:var(--border2);transform:translateX(5px)}
.ach-card:hover::after{transform:scaleX(1)}
.ach-ico{width:50px;height:50px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0}
.ach-title{font-size:.95rem;font-weight:700;margin-bottom:.3rem;letter-spacing:-.01em}
.ach-org{font-family:var(--mono);font-size:10px;color:var(--text3);letter-spacing:.07em;margin-bottom:.5rem}
.ach-desc{font-family:var(--mono);font-size:11px;color:var(--text2);line-height:1.65;margin-bottom:.6rem}
.ach-badge{font-family:var(--mono);font-size:9px;padding:2px 9px;letter-spacing:.1em;text-transform:uppercase;border:1px solid}

/* ── CONTACT ── */
#contact{text-align:center;overflow:hidden}
.bg-word{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:min(20vw,18rem);font-weight:900;opacity:.022;white-space:nowrap;pointer-events:none;letter-spacing:-.05em;color:var(--violet3)}
.c-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin:3rem auto 0;max-width:680px}
.c-card{background:var(--surface);border:1px solid var(--border);padding:1.5rem;text-decoration:none;color:var(--text);transition:all .25s;display:block;position:relative;overflow:hidden}
.c-card::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--glow),var(--glow2));opacity:0;transition:opacity .3s}
.c-card:hover{border-color:var(--violet2);transform:translateY(-4px)}
.c-card:hover::after{opacity:1}
.c-ico{font-size:1.4rem;margin-bottom:.75rem;position:relative;z-index:1}
.c-lbl{font-family:var(--mono);font-size:9px;color:var(--text3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:.3rem;position:relative;z-index:1}
.c-val{font-family:var(--mono);font-size:11px;color:var(--cyan);position:relative;z-index:1;line-height:1.55}

/* ── FOOTER ── */
footer{padding:2rem 4rem;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;position:relative;z-index:3}
footer .fl{font-family:var(--mono);font-size:10px;color:var(--text3)}
footer .fr{font-family:var(--mono);font-size:10px;color:var(--text3);display:flex;align-items:center;gap:.5rem}

/* ── REVEAL ── */
.reveal{opacity:0;transform:translateY(24px);transition:opacity .65s ease,transform .65s ease}
.reveal.visible{opacity:1;transform:translateY(0)}

/* ── RESPONSIVE ── */
@media(max-width:960px){
  nav{padding:1rem 1.5rem}.nav-links{display:none}
  #hero,section{padding:5rem 1.5rem}
  .hero-name-row{flex-direction:column;gap:1.25rem}.hero-stats{display:none}
  .proj-grid{grid-template-columns:1fr}
  .proj-card.featured{grid-column:span 1;display:block}
  .proj-card.featured .proj-card-inner{border-right:none;border-bottom:1px solid var(--border)}
  #about{grid-template-columns:1fr}.skills-orbit-wrapper{height:280px}
  .skills-cats{grid-template-columns:1fr 1fr}
  .ri-grid,.ach-grid,.c-grid{grid-template-columns:1fr}
  footer{flex-direction:column;gap:.75rem;text-align:center}
}
`;

export default globalStyles;

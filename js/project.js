/* Project detail page: content + cinematic background + gallery + lightbox */
const projectLang=(()=>{
  try{const s=localStorage.getItem("lang");if(s&&UI[s])return s}catch(e){}
  const b=(navigator.language||"en").slice(0,2);return UI[b]?b:"en";
})();
const projectText=k=>UI[projectLang][k]??UI.en[k];
const X=v=>v&&typeof v==="object"&&!Array.isArray(v)?(v[projectLang]??v.en):v;
const E=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const $=s=>document.querySelector(s);
const selected=PROJECTS.find(p=>p.slug===new URLSearchParams(location.search).get("id"));
const dirOf=slug=>`assets/projects/${slug}/`;
const EXTS=["jpg","jpeg","png","webp","gif","avif","JPG","JPEG","PNG"];
const findImg=base=>new Promise(res=>{let i=0;const next=()=>{if(i>=EXTS.length)return res(null);const src=`${base}.${EXTS[i++]}`,im=new Image();im.onload=()=>res(src);im.onerror=next;im.src=src};next()});

document.documentElement.lang=projectLang;
document.documentElement.dir=projectLang==="ar"?"rtl":"ltr";
$("#backLink").textContent="← "+projectText("detailBack");
const content=$("#projectContent");

if(!selected){
  document.title="Project · Wissal Eddalia";
  content.innerHTML=`<h1 class="pd-notfound">${E(projectText("projectNotFound"))}</h1>`;
  CinematicBG.start($("#scene"),{slug:"",name:"",tags:[]});
}else{
  try{
    const name=X(selected.name), dir=dirOf(selected.slug), D=(typeof PROJECT_DETAILS!=="undefined"&&PROJECT_DETAILS[selected.slug])||{};
    document.title=`${name} · Wissal Eddalia`;
    CinematicBG.start($("#scene"),{slug:selected.slug,name,tags:selected.tags,scene:D.scene||selected.scene});

    const text=t=>t?`<p>${E(X(t))}</p>`:"";
    const list=l=>{const a=Array.isArray(l)?l:X(l);return Array.isArray(a)&&a.length?`<ul>${a.map(i=>`<li>${E(X(i))}</li>`).join("")}</ul>`:""};
    const metrics=m=>Array.isArray(m)&&m.length?`<div class="metrics">${m.map(x=>`<div class="metric"><strong>${E(x.value)}</strong><span>${E(X(x.label))}</span></div>`).join("")}</div>`:"";
    const card=s=>`<section class="pd-card reveal"><h2>${E(X(s.title))}</h2>${text(s.text)}${metrics(s.metrics)}${list(s.list)}</section>`;

    let secs;
    if(Array.isArray(D.sections)&&D.sections.length)secs=D.sections.map(card).join("");
    else{
      const desc=(PROJ_TR[selected.name]&&PROJ_TR[selected.name][projectLang])||X(selected.desc);
      secs=[{title:projectText("detailDescription"),text:desc},{title:projectText("detailMethod"),text:selected.method},{title:projectText("detailResults"),text:selected.results}].filter(s=>s.text).map(card).join("");
    }
    const meta=[D.role,D.period].filter(Boolean).map(x=>E(X(x))).join(" · ");
    const linkItems=(D.links||[]).map(l=>{try{const u=new URL(l.url,location.href);return(u.protocol==="https:"||u.protocol==="http:")?`<li><a href="${E(u.href)}" target="_blank" rel="noopener noreferrer">${E(X(l.label))}</a></li>`:""}catch(e){return""}}).join("");

    content.innerHTML=`
      <header class="pd-hero">
        <div class="pd-eyebrow"><span class="pd-year">${selected.year}</span>${meta?`<span>${meta}</span>`:""}</div>
        <h1>${E(name)}</h1>
        <p class="pd-lead">${E((PROJ_TR[selected.name]&&PROJ_TR[selected.name][projectLang])||X(selected.desc))}</p>
        <div class="pills">${selected.tags.map(t=>`<span class="pill">${E(t)}</span>`).join("")}</div>
      </header>
      <div id="coverBox"></div>
      <div class="pd-sections">${secs}</div>
      <section class="pd-card pd-wide reveal" id="gallerySection" hidden><h2>${E(projectText("detailGallery")||"Gallery")}</h2><div class="pd-gallery" id="galleryBox"></div></section>
      <section class="pd-card pd-wide reveal" id="demoSection"><h2>${E(projectText("detailDemo"))}</h2>
        <video class="project-video" controls preload="metadata" playsinline><source src="${dir}demo.mp4"></video></section>
      ${linkItems?`<section class="pd-card pd-wide reveal"><h2>${E(projectText("detailLinks")||"Links")}</h2><ul>${linkItems}</ul></section>`:""}`;

    findImg(dir+"0").then(src=>{if(src)$("#coverBox").innerHTML=`<div class="media pd-cover" style="--img:url('${src}')"><img src="${src}" alt="${E(name)}"></div>`});
    $("#demoSection source").addEventListener("error",()=>$("#demoSection").remove());

    /* gallery: 1.<ext>, 2.<ext> ... uniform tiles, click opens full-size viewer */
    const shots=[];
    (async()=>{
      const box=$("#galleryBox"),sec=$("#gallerySection");
      for(let i=1;i<=40;i++){
        const src=await findImg(dir+i);if(!src)break;
        const idx=shots.push(src)-1,b=document.createElement("button");
        b.className="media g-item";b.style.setProperty("--img",`url('${src}')`);b.setAttribute("aria-label",`${name} ${i}`);
        b.innerHTML=`<img src="${src}" alt="${E(name)} ${i}" loading="lazy"><span class="n">${i}/…</span>`;
        b.onclick=()=>openLB(idx);box.append(b);sec.hidden=false;revealObs.observe(sec);
      }
      box.querySelectorAll(".n").forEach((n,i)=>n.textContent=`${i+1}/${shots.length}`);
    })();

    /* lightbox */
    const lb=$("#lightbox"),lbImg=lb.querySelector("img");let cur=0;
    const show=i=>{cur=(i+shots.length)%shots.length;lbImg.src=shots[cur];lb.querySelector(".lb-count").textContent=`${cur+1} / ${shots.length}`};
    const openLB=i=>{lb.hidden=false;document.body.style.overflow="hidden";show(i)};
    const closeLB=()=>{lb.hidden=true;document.body.style.overflow=""};
    lb.querySelector(".lb-close").onclick=closeLB;lb.querySelector(".lb-prev").onclick=()=>show(cur-1);lb.querySelector(".lb-next").onclick=()=>show(cur+1);
    lb.addEventListener("click",e=>{if(e.target===lb)closeLB()});
    addEventListener("keydown",e=>{if(lb.hidden)return;if(e.key==="Escape")closeLB();if(e.key==="ArrowRight")show(cur+1);if(e.key==="ArrowLeft")show(cur-1)});

    /* reveal-on-scroll */
    var revealObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");revealObs.unobserve(e.target)}}),{rootMargin:"0px 0px -8% 0px"});
    document.querySelectorAll(".reveal").forEach(el=>revealObs.observe(el));
  }catch(err){
    console.error(err);content.innerHTML=`<p style="color:#dc2626"><strong>Error:</strong> ${E(err.message)}</p>`;
  }
}

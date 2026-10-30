const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};

/* ---------- language ---------- */
const lang="en";
const T=k=>UI.en[k];
const tr=x=>x;
const SECS = [
  "home",
  "current-work",
  "experience",
  "projects",
  "certificates",
  "about",
  "contact"
];
let tag="All", links=[];


function applyStatic(){
  document.documentElement.lang=lang;
  document.documentElement.dir="ltr";

  $$("[data-i18n]").forEach(e => {
    const key = e.dataset.i18n;

    if (key === "heroP") {
      e.textContent = T(key);
      e.style.whiteSpace = "pre-line";
    } else {
      e.textContent = T(key);
    }
  });

  $$("[data-i18n-ph]").forEach(e =>
    e.placeholder = T(e.dataset.i18nPh)
  );

  $$("[data-i18n-aria]").forEach(e =>
    e.setAttribute("aria-label", T(e.dataset.i18nAria))
  );

}

function renderAll(){
  $("#nav").innerHTML=SECS.map(id=>`<a href="#${id}">${T("nav_"+id)}</a>`).join("");
  links=$$("#nav a");
  $("#exp").innerHTML=EXPERIENCE.map(e=>`<div><div class="when">${esc(tr(e.when))}</div><h3>${esc(tr(e.role))}, ${esc(tr(e.org))}</h3><ul>${e.points.map(p=>`<li>${esc(tr(p))}</li>`).join("")}</ul></div>`).join("");
  $("#currentWork").innerHTML = CURRENT_WORK.map(e => `
  <div class="tl-item">
    <div class="when">${esc(e.when)}</div>
    <h3>${esc(e.role)}</h3>
    <p><strong>${esc(e.org)}</strong></p>
    <ul>
      ${e.points.map(p => `<li>${esc(p)}</li>`).join("")}
    </ul>
  </div>
`).join("");
  drawProjects();
  $("#certs").innerHTML=CERTS.map(c=>`<div class="cert"><h3>${esc(tr(c.name))}</h3><span>${esc(tr(c.issuer))} · ${esc(tr(c.date))}</span>${c.link?`<div><a href="${c.link}">${T("viewCred")}</a></div>`:""}</div>`).join("");
  $("#skills").innerHTML=Object.entries(SKILLS).map(([k,v],i)=>`<div class="sk"><strong>${esc(T("skcat"+i)||k)}</strong><div class="pills">${v.map(x=>`<span class="pill">${esc(x)}</span>`).join("")}</div></div>`).join("");
  $("#langs").innerHTML=T("langsText").split(/[,،]\s*/).filter(Boolean).map(l=>{const m=l.match(/^(.*?)\s*[(（](.*?)[)）]\s*$/);return m?`<li>${esc(m[1])}<span>${esc(m[2])}</span></li>`:`<li>${esc(l)}</li>`}).join("");
  $("#awards").innerHTML=AWARDS.map(a=>`<li>${esc(tr(a))}</li>`).join("");
  $("#cvSide").href=CV_FILE; $$(".cvlink,#cvSide").forEach(b=>{b.href=CV_FILE;b.setAttribute("download","Wissal_Eddalia_CV.pdf")});
  $("#sugg").innerHTML="";
  [["s_skills","skills"],["s_projects","projects"],["s_experience","experience"],["s_contact","contact"]].forEach(([k,q])=>{const b=document.createElement("button");b.className="chip";b.textContent=T(k);b.onclick=()=>ask(T(k),q);$("#sugg").append(b)});
  observe();
}
/* ---------- projects with filter + screenshots ---------- */
const coverCache={};
const coverOf=slug=>coverCache[slug]??(coverCache[slug]=findImage(PROJECT_DIR(slug)+"0"));

function drawProjects(){
  const tags=["All",...new Set(PROJECTS.flatMap(p=>p.tags))];
  $("#filters").innerHTML=tags.map(t=>`<button class="chip ${t===tag?"on":""}" data-t="${esc(t)}">${t==="All"?T("all"):esc(t)}</button>`).join("");
  $("#projs").innerHTML=PROJECTS.filter(p=>tag==="All"||p.tags.includes(tag)).map(p=>{
    const desc=(PROJ_TR[p.name]&&PROJ_TR[p.name][lang])||tr(p.desc);
    return `<article class="proj"><div class="yr">${p.year}</div><div>
      <div class="shot-box" data-slug="${esc(p.slug)}" data-alt="${esc(tr(p.name))}"></div>
      <h3>${esc(tr(p.name))}</h3><p>${esc(desc)}</p><div class="tags">${p.tags.map(esc).join(", ")}</div>
      <p><a href="project.html?id=${encodeURIComponent(p.slug)}">${T("projectDetails")}</a></p></div></article>`}).join("");
  $$("#filters .chip").forEach(b=>b.onclick=()=>{tag=b.dataset.t;drawProjects()});

  // load each project's cover (0.jpg, 0.png, 0.webp …) into its placeholder
  $$(".shot-box").forEach(async box=>{
    const src=await coverOf(box.dataset.slug);
    if(src)box.innerHTML=`<img class="shot" src="${src}" alt="${esc(box.dataset.alt)}" loading="lazy">`;
  });
}

/* ---------- active nav link ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.hash==="#"+e.target.id))}),{rootMargin:"-40% 0px -55% 0px"});
const observe=()=>SECS.forEach(id=>io.observe(document.getElementById(id)));

/* ---------- contact form (Formspree) ---------- */
const form=$("#contactForm"),status=$("#formStatus");
form.onsubmit=async e=>{
  e.preventDefault();
  const fd=new FormData(form), btn=form.querySelector("button[type=submit]");
  if(!fd.get("name").trim()||!/^\S+@\S+\.\S+$/.test(fd.get("email"))||!fd.get("message").trim()){status.className="err";status.textContent=T("errFill");return}
  if(fd.get("_gotcha"))return;
  const mailto=()=>`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Portfolio message from "+fd.get("name"))}&body=${encodeURIComponent(fd.get("message")+"\n\n"+fd.get("email"))}`;
  if(!FORM_ENDPOINT){location.href=mailto();return}
  fd.delete("_gotcha");
  fd.append("_subject","Portfolio message from "+fd.get("name"));
  fd.append("_template","table");fd.append("_captcha","false");
  status.className="";status.textContent=T("sending");btn.disabled=true;
  try{
    const r=await fetch(FORM_ENDPOINT,{method:"POST",body:fd,headers:{Accept:"application/json"}});
    const j=await r.json().catch(()=>({}));
    if(!r.ok||String(j.success)==="false")throw new Error(j.message||"");
    form.reset();status.className="ok";status.textContent=T("sent");
  }catch(err){
    status.className="err";status.innerHTML=esc(T("errSend"))+` <a href="${mailto()}">${esc(CONTACT_EMAIL)}</a>`;
    if(err&&err.message)console.warn("Form error:",err.message);
  }finally{btn.disabled=false}
};

/* ---------- back to top ---------- */
addEventListener("scroll",()=>{$("#toTop").hidden=scrollY<600},{passive:true});
$("#toTop").onclick=()=>scrollTo({top:0});

/* ---------- analytics (only after consent, only if GA_ID is set) ---------- */
function loadGA(){const s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+GA_ID;document.head.append(s);
  window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",GA_ID,{anonymize_ip:true})}
if(GA_ID){const c=store.get("ga");if(c==="yes")loadGA();else if(!c)$("#consent").hidden=false}
$("#cYes").onclick=()=>{store.set("ga","yes");$("#consent").hidden=true;loadGA()};
$("#cNo").onclick=()=>{store.set("ga","no");$("#consent").hidden=true};

/* ---------- chatbot: answers from the data in data.js ---------- */
const log=$("#log");
const say=(t,me)=>{const d=document.createElement("div");d.className="m"+(me?" me":"");d.innerHTML=t;log.append(d);log.scrollTop=log.scrollHeight};
const INTENTS=[
 [/\bcv\b|resume|résumé|سيرة/,()=>`<a href="${CV_FILE}" download>CV (PDF)</a>`],
 [/hello|\bhi\b|hey|salam|bonjour|salut|مرحبا|سلام/,()=>T("chatHi")],
 [/skill|tech|stack|compétence|competence|مهار/,()=>Object.entries(SKILLS).map(([k,v])=>`<b>${k}:</b> ${v.join(", ")}`).join("<br>")],
 [/project|built|build|portfolio/,()=>PROJECTS.slice(0,5).map(p=>"• "+esc(tr(p.name))).join("<br>")],
 [/experience|intern|stage|job|asal|space|djezzy|career/,()=>EXPERIENCE.map(e=>`<b>${esc(tr(e.role))}</b>, ${esc(tr(e.org))} (${esc(tr(e.when))})`).join("<br>")],
 [/award|prize|won|win|hackathon|honor|distinction/,()=>AWARDS.map(a=>esc(tr(a))).join("<br>")],
 [/certif|course|diploma/,()=>CERTS.filter(c=>!/Add your/.test(c.name)).map(c=>"• "+esc(tr(c.name))).join("<br>")],

 [/contact|email|mail|reach|linkedin|github|hire|phone/,()=>`<a href="mailto:wissal.eddalia@ensia.edu.dz">wissal.eddalia@ensia.edu.dz</a><br><a href="${GITHUB}">GitHub</a> · <a href="https://linkedin.com/in/wissal-eddalia-51a831292">LinkedIn</a>`],
 [/availab|open to/,()=>T("contactP")],
 [/language|speak|arabic|french|english/,()=>T("langsText")],
 [/where|locat|live|from|algier|alger/,()=>"Algiers, Algeria"],
 [/who|about|yourself|wissal/,()=>T("heroP")]
];
function answer(q){
  q=q.toLowerCase();
  const hit=PROJECTS.find(p=>String(tr(p.name)).toLowerCase().split(/[:&,]/).some(n=>n.trim().length>3&&q.includes(n.trim()))||p.tags.some(t=>t.length>3&&q.includes(t.toLowerCase())));
  if(hit&&!/skill|contact/.test(q))return `<b>${esc(tr(hit.name))}</b> (${hit.year}): ${esc(tr(hit.desc))}`;
  for(const [re,fn] of INTENTS)if(re.test(q))return fn();
  return T("noAnswer");
}
function ask(label,q){say(esc(label),true);setTimeout(()=>say(answer(q||label)),250)}
$("#f").onsubmit=e=>{e.preventDefault();const v=$("#q").value.trim();if(v){ask(v);$("#q").value=""}};
$("#toggle").onclick=()=>{const o=$("#panel").classList.toggle("open");if(o&&!log.children.length)say(T("chatHi"))};

/* ---------- start ---------- */
$("#yr").textContent=new Date().getFullYear();
applyStatic();renderAll();

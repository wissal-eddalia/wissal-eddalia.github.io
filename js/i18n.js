/* Translations for the interface (EN / FR / AR).
   Anything missing in FR or AR falls back to English, so you can translate gradually.
   Your own content in data.js can be plain text, or {en:"…", fr:"…", ar:"…"} to translate it. */
const UI = {
en:{role:"AI & Data Science Engineer",nav_home:"Home",nav_experience:"Experience",nav_projects:"Projects",nav_certificates:"Certificates",nav_blog:"Blog",nav_about:"Skills",nav_contact:"Contact",
 cv:"Download CV",heroTitle:"I build AI systems that work on real problems.",
 heroP:"Hi, I'm Wissal Eddalia, a fifth-year Artificial Intelligence & Data Science engineering student at ENSIA, passionate about building intelligent systems and solving real-world problems through technology. \n\nMy experience spans Geo-AI, Machine Learning, Reinforcement Learning (RL), Time-Series Analysis, Optimization, and Software Engineering. Through research projects and hands-on experience, I've explored satellite imagery analysis, AI-driven environmental monitoring, predictive modeling, intelligent decision-making, and software application development.\n\nI enjoy working at the intersection of AI, data, and engineering ; from developing predictive models and exploring reinforcement learning approaches to optimizing complex systems and transforming research ideas into practical solutions. I'm also interested in Large Language Models (LLMs), intelligent automation, and emerging AI technologies.",
 seeProjects:"See my projects",getInTouch:"Get in touch",h_experience:"Experience",h_projects:"Projects",h_certificates:"Certificates",h_blog:"Blog",h_about:"Skills & background",h_contact:"Contact",
 all:"All",projectDetails:"See more details",detailBack:"Back to projects",detailDescription:"Description",detailMethod:"Method",detailResults:"Results",detailDemo:"Demo",demoUnavailable:"No public demo available.",projectNotFound:"Project not found.",viewCred:"View credential",skills:"Skills",awards:"Awards",langs:"Languages",langsText:"Arabic (native), English (fluent), French (fluent)",
 skcat0:"Programming",skcat1:"AI & Data Science",skcat2:"Frameworks & Tools",
 contactP:"Open to research collaborations, internships and full-time roles. Send a message and I’ll reply by email.",f_name:"Name",f_email:"Email",f_message:"Message",f_send:"Send message",
 sending:"Sending…",sent:"Thanks! Your message was sent.",errFill:"Please fill in your name, a valid email and a message.",errSend:"Could not send. Please email me directly instead.",orReach:"Or reach me at",
 close:"Close",chatHeader:"Ask about Wissal",chatPh:"Ask about skills, projects…",chatSend:"Send",chatHi:"Hi! Ask me anything about Wissal’s work.",
 noAnswer:"I don’t have that one. Try asking about skills, projects, experience, education, awards or contact details.",
 s_skills:"Skills",s_projects:"Projects",s_experience:"Experience",s_contact:"Contact",top:"Back to top",
 cons_text:"May I use anonymous analytics to see how many people visit this site?",cons_yes:"Accept",cons_no:"Decline"},
};
/* Project descriptions in FR / AR, keyed by the project name in data.js */
const PROJ_TR = {
"Deep RL: Adaptive Traffic Signal Control":{
//  fr:"Contrôleur de feux par RL profond pour un carrefour à quatre branches sous SUMO (état à 38 dimensions). Comparaison de DQN, PPO et A2C : PPO réduit le temps d’attente moyen de 80,4 % et la file d’attente de 59,6 %.",
//  ar:"متحكّم لإشارات المرور بالتعلّم المعزَّز العميق لتقاطع رباعي في SUMO (حالة من 38 بُعدًا). قارنتُ DQN وPPO وA2C، وخفّض PPO متوسط زمن الانتظار بنسبة 80.4% وطول الطابور بنسبة 59.6%."  
},
"ACIETS: Algerian Carbon Intelligence & Emissions Tracking":{
 fr:"Plateforme nationale de suivi des GES : base de 11 tables, 5 microservices, plus de 25 composants React/Mapbox, fine-tuning de STARCOP, détection d’anomalies et prévisions multi-horizons.",
 ar:"منصة وطنية لرصد غازات الدفيئة: قاعدة بيانات من 11 جدولًا، و5 خدمات مصغّرة، وأكثر من 25 مكوّن React/Mapbox، وضبط دقيق لنموذج STARCOP، وكشف الشذوذ، وتنبؤات متعددة الآفاق."},
"Research Production Analysis System":{
 fr:"Plateforme d’analyse de l’impact scientifique basée sur les LLM. SPECTER2 affiné sur 1,4 M d’articles et définition d’un indice d’impact relatif qui normalise les citations par groupe de pairs pour corriger le biais de l’indice h.",
 ar:"منصة لتحليل الأثر العلمي مدعومة بنماذج اللغة. ضبطتُ SPECTER2 على 1.4 مليون ورقة، وابتكرتُ مؤشر الأثر النسبي الذي يطبّع الاستشهادات داخل مجموعات الأقران لتقليل انحياز مؤشر h بين المجالات."},
"ML & Data Analysis":{
 fr:"Classification et régression (prix de voitures, images), analyse SARIMA de la production américaine de gaz naturel (1973–2024) et classification des stades du sommeil par EEG avec 57 variables et SVM.",
 ar:"تصنيف وانحدار لأسعار السيارات والصور، وتحليل سلاسل زمنية بنموذج SARIMA لإنتاج الغاز الطبيعي الأمريكي (1973–2024)، وتصنيف مراحل النوم من إشارات EEG باستخدام 57 خاصية ونماذج SVM."},
"Cybersecurity Educational Tools":{
 fr:"Un gestionnaire de dépenses avec simulation de rançongiciel pour la sensibilisation, et un vérificateur de solidité des mots de passe.",
 ar:"تطبيق لتتبّع المصروفات مع محاكاة لبرمجية فدية بغرض التوعية، وأداة لفحص قوة كلمات المرور."},
"Satellite Object Detection (Hackathon)":{
 fr:"Trois projets YOLOv8 sur images satellites (stades, serres, palmiers). 3ᵉ place au hackathon LASAL/SecAI.",
 ar:"ثلاثة مشاريع باستخدام YOLOv8 على صور الأقمار الصناعية (ملاعب، بيوت محمية، نخيل). المركز الثالث في هاكاثون LASAL/SecAI."},
"AI Search: Supply Chain & Logistics":{
 fr:"Optimisation d’itinéraires entre les wilayas algériennes avec BFS, UCS, A*, Hill Climbing et CSP, visualisés sur des cartes Folium interactives.",
 ar:"تحسين مسارات النقل بين ولايات الجزائر باستخدام BFS وUCS وA* وHill Climbing وCSP، مع خرائط Folium تفاعلية."},
"Mzia.dari & Loue":{
 fr:"Mzia.dari : plateforme de mise en relation emploi (React, Node.js, Supabase, méthode Scrum). Loue : application mobile de location de voitures en Flutter.",
 ar:"Mzia.dari منصة لمطابقة الوظائف بـ React وNode.js وSupabase وفق منهجية Scrum. وLoue تطبيق جوال لتأجير السيارات بـ Flutter."}
};

/* keys the Current Work section needs (were missing, which showed "undefined") */
Object.assign(UI.en,{"nav_current-work":"Current Work",h_current_work:"Current Work"});

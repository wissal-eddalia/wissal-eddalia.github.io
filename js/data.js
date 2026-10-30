/* ============================================================
   EDIT HERE: everything on the site comes from this block.
   To add a project, certificate or  copy one line
   inside the matching list, change the text, save, refresh.
   ============================================================ */
const GITHUB = "https://github.com/wissal-eddalia";
const CV_FILE = "assets/Wissal_Eddalia_CV.pdf";   // replace this PDF when you update your CV
/* CONTACT FORM: messages are sent straight to CONTACT_EMAIL through FormSubmit (free, no account).
   One-time step: the FIRST message you send yourself triggers an activation email from FormSubmit.
   Click the confirm link in it, and every message after that lands in your inbox.
   Prefer Formspree? Paste your https://formspree.io/f/xxxx URL in FORM_ENDPOINT instead.
   Set FORM_ENDPOINT = "" to fall back to opening the visitor's mail app. */
const CONTACT_EMAIL = "wissal.eddalia@ensia.edu.dz";
const FORM_ENDPOINT = "https://formspree.io/f/mbggaozy";

/* ANALYTICS (optional): paste your Google Analytics 4 ID (looks like G-XXXXXXXXXX).
   Leave "" to disable. When set, visitors see an Accept/Decline banner first. */
const GA_ID = "";
const PROJECT_DIR = slug => `assets/projects/${slug}/`;

const IMG_EXT = ["jpg","jpeg","png","webp","gif","avif","JPG","JPEG","PNG"];
// findImage("assets/projects/aciets/1") -> Promise of "assets/projects/aciets/1.png", or null if none exists
function findImage(base){
  return new Promise(resolve=>{
    let i=0;
    const next=()=>{
      if(i>=IMG_EXT.length)return resolve(null);
      const src=`${base}.${IMG_EXT[i++]}`;
      const im=new Image();
      im.onload=()=>resolve(src);
      im.onerror=next;
      im.src=src;
    };
    next();
  });
}

const CURRENT_WORK = [
  {
    role: "Final-Year Project — LLM-Based API Integration Assistant",
    org: "ENSIA · Co-supervised by University of Nantes & Salvia",
    when: "Oct 2026 – Jun 2027",
    points: [
      "Working on final-year research project FYP/2026/244, focused on translating natural-language integration requests into executable API workflows.",
      "Collaborating with Nada Zanoun  on the project.",
      "Working with LLMs, OpenAPI/Swagger specifications, workflow generation, data mapping, and webhook configuration.",
      "Developing a framework for workflow validation, error handling, and human-in-the-loop correction to improve reliability and user control.",
      "Supervised by Prof. Fouad Dahak, Prof. Dalila Tamzalit (University of Nantes), and Jean-Philippe Gouigoux (Salvia)."
    ]
  }
];

const EXPERIENCE = [
  {role:"Research Intern & AI Developer", org:"Algerian Space Agency (ASAL)", when:"Sep 2025 – Mar 2026", points:[
    "Completed the Advanced Geo-AI & Space Technology Program and built ACIETS, Algeria’s first sovereign satellite-based GHG monitoring platform.",
    "As Development Team Leader, designed FastAPI microservices, the PostgreSQL/PostGIS schema and the React/Mapbox frontend.",
    "Fine-tuned STARCOP U-Net for methane plume detection; integrated ANN and Random Forest forecasting.",
    "Continued as an active researcher in ASAL's incubator, co-authoring the paper “Physics-Informed Spectral Masking and Deep Sequence Modeling for Operational Crop Water Stress Prediction.” Its abstract has been accepted by the scientific committee of the 7th International Electronic Conference on Applied Sciences (ASEC2026) for online presentation in mid-December 2026, after which the completed paper will be submitted for publication."]},
  {role:"Software Development Intern", org:"Algérie Poste", when:"Dec 2025 – Mar 2026", points:[
    "Building an internal dynamic audit questionnaire platform with AI-powered insights and workflow automation.",
    "Architected the questionnaire logic, automated scoring engine and AI-generated audit recommendations."]},
  {role:"AI Data Science", org:"Djezzy", when:"2025", points:[
    "Built a geographic segmentation system for telecom antenna placement (clustering, NLP, classification) with a React/GeoJSON interface.",
    "End-to-end time series forecasting of sales, network traffic and revenue with ARIMA and Prophet."]}
];

/* PROJECTS: add a new one by copying a line. "image" = screenshot (drop the file in assets/projects/; hidden if missing). "demo" = optional demo URL. */
const PROJECTS = [
  {year:2026, slug:"traffic-rl", name:"Deep RL: Adaptive Traffic Signal Control", 
    tags:["Reinforcement Learning","Python","PyTorch","SUMO",], 
   desc:"Deep RL controller for a four-way intersection in SUMO (38-dimensional state). Compared DQN, PPO and A2C: PPO cut average waiting time by 80.4% and queue length by 59.6%.",
   method:"Built a deep reinforcement learning controller for a four-way intersection in SUMO using a 38-dimensional state. Evaluated DQN, PPO and A2C under the same traffic-control task.",
   results:"PPO reduced average waiting time by 80.4% and queue length by 59.6%."},
  {year:2025, slug:"aciets", name:"ACIETS: Algerian Carbon Intelligence & Emissions Tracking", tags:["Geo-AI","FastAPI","React","PostGIS","PyTorch", 
    "Geospatial Data",], image:"assets/projects/aciets.jpg", demo:"",
   desc:"National-scale GHG monitoring platform: 11-table database, 5 microservices, 25+ React/Mapbox components, STARCOP fine-tuning, anomaly detection and multi-horizon forecasting.",
   method:"Designed a geospatial monitoring platform with a PostgreSQL/PostGIS database, FastAPI microservices and a React/Mapbox interface. The workflow incorporates STARCOP fine-tuning, anomaly detection and multi-horizon forecasting.",
   results:"Delivered a platform comprising an 11-table database, five microservices and more than 25 React/Mapbox components."},
  {year:2025, slug:"research-impact", name:"Research Production Analysis System", tags:["NLP","Transformers","Python"], image:"assets/projects/research-impact.jpg", demo:"",
   desc:"LLM-powered scholarly impact platform. Fine-tuned SPECTER2 on 1.4M papers and defined a Relative Impact Index that normalises citations within peer groups to reduce h-index field bias.",
   method:"Fine-tuned SPECTER2 on 1.4 million papers and defined a Relative Impact Index that normalises citation counts within peer groups.",
   results:"Created a scholarly-impact platform and a peer-group-normalised index designed to reduce the field bias of the h-index."},
 
{
  year: 2025,
  slug: "ml-data-analysis",
  name: "Machine Learning & Data Science Projects",
  tags: [
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
    "Time Series",
    "Computer Vision",
    "Python",
    "R"
  ],
  image: "assets/projects/ml-analysis.jpg",
  demo: "",
  desc: "A collection of machine learning and data science projects covering automobile price prediction, CIFAR-10 image classification, U.S. natural gas production forecasting, and EEG sleep-stage classification. Explored traditional ML algorithms, neural networks, CNNs, time-series models, and feature engineering.",
  method: "Compared regression and classification algorithms using preprocessing, feature engineering, cross-validation, hyperparameter tuning with GridSearchCV and Bayesian optimization. Applied Random Forest, Decision Trees, SVMs, neural networks and CNNs to tabular and image data; used SARIMA for time-series analysis and SVMs with 57 engineered features for EEG sleep-stage classification.",
  results: "Achieved an R² score of 0.958 with Random Forest for automobile price prediction and 89.12% accuracy with an advanced CNN on CIFAR-10. The projects demonstrated how algorithm selection, data preprocessing and model architecture affect performance across different data types."
},
// {year:2025, slug:"cybersecurity-tools", name:"Cybersecurity Educational Tools", tags:["Python","Security"], image:"assets/projects/cyber-tools.jpg", demo:"",
//    desc:"An expense tracker with a ransomware simulation for awareness training, and a password strength checker.",
//    method:"Developed an expense tracker that includes a ransomware simulation for security awareness, alongside a password-strength checking tool.",
//    results:"Delivered two educational tools: an expense tracker with a ransomware-awareness simulation and a password-strength checker."},
//   // {year:2024, slug:"satellite-detection", name:"Satellite Object Detection (Hackathon)", tags:["Computer Vision","YOLOv8","Remote Sensing"], image:"assets/projects/satellite-detection.jpg", demo:"",
  //  desc:"Three YOLOv8 projects on satellite imagery (stadiums, greenhouses, palm trees). 3rd place at the LASAL/SecAI Hackathon.",
  //  method:"Built three YOLOv8 object-detection projects using satellite imagery to identify stadiums, greenhouses and palm trees.",
  //  results:"The team earned 3rd place at the LASAL/SecAI Hackathon."},
  {year:2024, slug:"ai-search-logistics", name:"AI Search: Supply Chain & Logistics", tags:["Python","Algorithms","Folium"], image:"assets/projects/ai-search.jpg", demo:"",
   desc:"Route optimisation across Algerian wilayas with BFS, UCS, A*, Hill Climbing and CSP, shown on interactive Folium maps.",
   method:"Applied BFS, Uniform Cost Search, A*, Hill Climbing and Constraint Satisfaction techniques to route optimisation across Algerian wilayas.",
   results:"Presented the route-optimisation work on interactive Folium maps."},
   
{
  year: 2024,
  slug: "natural-gas-production",
  name: "Natural Gas Production Forecasting",
  tags: ["R", "Time Series Analysis", "SARIMA", "Forecasting"],
  image: "assets/projects/natural-gas.jpg",
  demo: "",
  desc: "Time-series analysis and forecasting of U.S. monthly dry natural gas production from 1973 to 2024 using SARIMA models.",
  method: "Applied the Box–Jenkins methodology, stationarity and seasonal differencing tests, ACF/PACF analysis, model diagnostics, and systematic SARIMA model selection.",
  results: "Selected SARIMA(0,1,1)(0,1,1)[12], achieving 3.76% MAPE over the 119-month test period. An expanded search of 144 candidate models confirmed the simpler model and evaluated forecasts through November 2026."
},

{
  year: 2025,
  slug: "pso-feature-selection",
  name: "Numerical Methods & Optimization: PSO",
  tags: [
    "Machine Learning",
    "Numerical Optimization",
    "Particle Swarm Optimization",
    "Feature Selection",
    "Python",
    "Scikit-learn"
  ],
 
  desc: "Implemented a Particle Swarm Optimization framework for classification feature selection, balancing predictive accuracy with dimensionality reduction using a configurable mathematical objective function.",
  method: "Developed binary PSO with inertia, cognitive and social components, cross-validated classifier evaluation, and support for Random Forest, SVM, KNN and Decision Trees.",
  results: "Built a configurable optimization pipeline with convergence curves, confusion matrices, feature-selection counts and classification performance reporting.",
 
},


{
  year: 2025,
  slug: "revenue-sales-traffic-forecasting",
  name: "Revenue, Sales & Traffic Forecasting — Djezzy",
  tags: [
    "Industry Project",
    "Time-Series Forecasting",
    "SARIMAX",
    "Random Forest",
    "Feature Engineering",
    "Python"
  ],
  image: "assets/projects/revenue-forecasting.jpg",
  demo: "",
  desc: "Collaborated on a team project for Djezzy to analyze and forecast daily revenue, sales, and data traffic using time-series analysis and machine learning.",
  method: "Combined Gregorian and Hijri calendar features, seasonal and exceptional-date analysis, and SARIMAX and Random Forest forecasting approaches.",
  results: "Evaluated forecasting performance using MAPE. The presentation reports values of 6.53%, 8.43%, 3.46%, and 3.35% across the model comparisons.",
  
}
,

{
  year: 2025,
  slug: "djezzy-geographic-segmentation",
  name: "Djezzy Geographic Segmentation",
  tags: [
    "Industry Project",
    "Geo-AI",
    "Geospatial Data",
    "NLP",
    "LLM",
    "Telecom",
    "React",
    "MongoDB",
    "PostGIS"
  ],
  image: "assets/projects/djezzy-geographic-segmentation.jpg",
  demo: "",
  desc: "Collaborated on a team project for Djezzy to develop an intelligent geographic segmentation platform supporting telecom antenna deployment through geospatial data analysis and NLP-based zone classification.",
  method: "Combined OpenStreetMap data, a 500 m grid system, geospatial feature enrichment, and XLM-RoBERTa-based classification in an interactive mapping platform.",
  results: "The presentation reports 87% average confidence for NLP-based classification and a web platform supporting geographic visualization and antenna placement planning.",
  
}
,

{
  year: 2025,
  slug: "eeg-sleep-stage-classification",
  name: "EEG Sleep Stage Classification",
  tags: [
    "Time Series Analysis",
    "Biomedical Signal Processing",
    "Machine Learning",
    "Feature Engineering",
    "Random Forest",
    "SVM",
    "XGBoost"
  ],
  image: "assets/projects/eeg-sleep-classification.jpg",
  demo: "",
  desc: "Led a team project to classify human sleep stages from EEG signals using statistical, spectral, and entropy-based feature extraction combined with machine learning.",
  method: "Analyzed sleep-stage distributions, visualized EEG signals, extracted signal features, and compared Random Forest, SVM, and XGBoost using hyperparameter tuning and cross-validation.",
  results: "Developed a machine learning workflow using 5,000 training samples and 1,000 test samples to investigate automated sleep-stage classification.",
 
}
,

{
  year: 2026,
  slug: "sanad-claim-verification",
  name: "Sanad — AI-Powered Claim Verification",
  tags: [
    "Artificial Intelligence",
    "LLM",
    "NLP",
    "Information Retrieval",
    "Evidence-Based Fact-Checking",
    "Browser Extension",
    "Media Literacy"
  ],
  image: "assets/projects/sanad.jpg",
  demo: "",
  desc: "Collaborated on Sanad, an AI-powered browser extension that helps users assess online claims using retrieved evidence, source ranking, and LLM-based verification.",
  method: "Designed an evidence-grounded verification workflow combining claim selection, evidence retrieval, source ranking, structured LLM-generated verdicts, and media-literacy feedback.",
  results: "Developed an early-stage MVP concept and implementation for in-browser claim verification, with evidence-linked explanations and graceful handling of unavailable or insufficient evidence.",
  
}
,


{
  year: 2024,
  slug: "loue-vehicle-rental-app",
  name: "LOUé — Vehicle Rental App",
  tags: [
    "Flutter",
    "Dart",
    "Flask",
    "Mobile Development",
    "HCI",
    "UI/UX Design",
    "User Research",
    "Agile Development"
  ],
  image: "assets/projects/loue.jpg",
  demo: "",
  desc: "Collaborated on a mobile vehicle and machinery rental platform designed for the Algerian market, connecting renters with providers through a streamlined digital experience.",
  method: "Combined market research, interviews with 30 participants, user personas, usability testing, and interface design with a planned Flutter frontend and Flask backend.",
  results: "Developed a team project proposal and mobile application workflow covering vehicle discovery, rental listings, booking requirements, and usability improvements.",
  
}

,
  // {year:2024, slug:"mzia-loue", name:"Mzia.dari & Loue", tags:["React","Node.js","Supabase","Flutter"], image:"assets/projects/mzia-loue.jpg", demo:"",
  //  desc:"Mzia.dari is a job-matching platform built with React, Node.js and Supabase using Scrum. Loue is a car-rental mobile app in Flutter.",
  //  method:"Built Mzia.dari as a job-matching platform with React, Node.js and Supabase using Scrum, and developed Loue as a Flutter mobile application.",
  //  results:"Produced two applications: a job-matching platform and a car-rental mobile app."}
];

/* CERTIFICATES: replace/add yours. "link" = credential URL (or ""). */
const CERTS = [
  {name:"Advanced Geo-AI & Space Technology Program", issuer:"Algerian Space Agency (ASAL)", date:"2025–2026", link:""},
  {name:"Djezzy Ideathon: Winner", issuer:"Djezzy", date:"Dec 2025", link:""},
  {name:"3rd Place, LASAL/SecAI Hackathon", issuer:"LASAL / SecAI", date:"2024", link:""},

];



const SKILLS = {
  "Programming Languages": [
    "Python", "C++", "JavaScript", "TypeScript",
    "Dart", "R", "SQL"
  ],

  "Web Technologies": [
    "HTML", "CSS", "React", "FastAPI", "Flutter"
  ],

  "AI & Data Science": [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Speech Processing",
    "Computer Vision",
    "Time Series Analysis",
    "Reinforcement Learning",
    "Data Mining",
    "Statistical Computing"
  ],

  "Data Management": [
    "Database Design",
    "Database Management",
    "SQL",
    "PostgreSQL",
    "PostGIS",
    "Data Modeling"
  ],

  "Engineering & Computing": [
    "Algorithms",
    "Optimization",
    "Distributed Systems",
    "Robotics",
    "Wireless Communication"
  ],

  "Frameworks & Tools": [
    "Git",
    "Docker",
    "QGIS"
  ]
};
const AWARDS = ["Djezzy Ideathon Winner (Dec 2025)","3rd place, LASAL/SecAI Hackathon (2024)","Baccalauréat with Honors, 17.67/20 (2022)"];

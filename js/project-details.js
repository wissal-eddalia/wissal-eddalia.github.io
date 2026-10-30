/* ============================================================
   PROJECT DETAIL PAGES: one entry per project, keyed by slug.
   Each section can have:  title, text, list, metrics
   Add as many sections as you want, in any order.
   Texts: plain string, or {en:"…", fr:"…", ar:"…"}.
   Use \n for line breaks inside a text.
   ============================================================ */
const PROJECT_DETAILS = {


"traffic-rl": {
  role: "Team project",
  period: "2026",
  sections: [
    {
      title: "Overview",
      text: "Developed and evaluated a deep reinforcement learning framework for adaptive traffic signal control at a four-way intersection using SUMO simulation. The project compared three RL algorithms against a fixed-time traffic signal controller to reduce vehicle waiting time and queue length while maintaining traffic throughput."
    },
    {
      title: "Problem",
      text: "Fixed-time traffic signal controllers follow predefined schedules regardless of real-time traffic conditions. This limits their ability to adapt to changing vehicle demand and can lead to unnecessary waiting times and congestion."
    },
    {
      title: "Approach",
      text: "Modeled traffic signal control as a Markov Decision Process (MDP), using a 38-dimensional state vector containing lane queue lengths, waiting times, occupancies, and the current signal phase. Trained and compared three deep reinforcement learning algorithms in a simulated four-way intersection.",
      list: [
        "Algorithms: Deep Q-Network (DQN), Proximal Policy Optimization (PPO), and Advantage Actor-Critic (A2C)",
        "Simulation: SUMO 1.27 with TraCI for real-time traffic monitoring and signal control",
        "Training: 200,000 environment steps per algorithm",
        "Tools: Python, PyTorch, Stable-Baselines3, SUMO",
        "Baseline: Fixed-time controller with predefined 30-second green phases"
      ]
    },
    {
      title: "Results",
      text: "PPO achieved the best overall performance in the held-out evaluation episode, substantially reducing waiting time and queue length compared with the fixed-time baseline, while maintaining approximately the same vehicle throughput.",
      metrics: [
        {
          value: "80.4%",
          label: {
            en: "reduction in average waiting time",
            fr: "de réduction du temps d’attente moyen",
            ar: "انخفاض في متوسط زمن الانتظار"
          }
        },
        {
          value: "59.6%",
          label: {
            en: "reduction in queue length",
            fr: "de réduction de la longueur des files",
            ar: "انخفاض في طول الطوابير"
          }
        },
        {
          value: "3",
          label: {
            en: "RL algorithms compared",
            fr: "algorithmes RL comparés",
            ar: "خوارزميات تعلم معزز تمت مقارنتها"
          }
        }
      ],
      list: [
        "PPO: average waiting time decreased from 1.058 s to 0.208 s",
        "A2C: 77.9% reduction in waiting time",
        "DQN: 36.1% reduction in waiting time",
        "All agents maintained approximately the same throughput as the baseline"
      ]
    },
    {
      title: "What I learned",
      list: [
        "Applying deep reinforcement learning to adaptive traffic signal control",
        "Modeling sequential decision-making problems using Markov Decision Processes",
        "Comparing value-based and policy-based reinforcement learning algorithms",
        "Designing simulation-based experiments and evaluating performance using traffic metrics",
        "Analyzing the trade-offs between waiting time, queue length, and vehicle throughput"
      ]
    }
  ],
  
},




"aciets": {
  role: "Development Team Leader (ASAL)",
  period: "Sep – Oct 2025",
  sections: [
    {
      title: "Overview",
      text: "Led the development team in building ACIETS (Algerian Carbon Intelligence and Emissions Tracking System), a satellite-based AI platform for monitoring, analyzing, and forecasting greenhouse gas emissions in Algeria. Coordinated full-stack development and integration with the AI and data engineering components of the platform."
    },
    {
      title: "Architecture",
      list: [
        "Designed and developed a PostgreSQL/PostGIS database with 11 tables for emissions and geospatial data",
        "Built 5 FastAPI backend CRUD services",
        "Developed a React/TypeScript frontend with 25+ UI components",
        "Integrated Mapbox GL for interactive geospatial visualization",
        "Coordinated a multidisciplinary team of 13 members during project development"
      ]
    },
    {
      title: "AI and Data Science",
      list: [
        "Fine-tuned the STARCOP U-Net model for methane plume detection from satellite imagery",
        "Developed emissions forecasting pipelines using Artificial Neural Networks (ANN) and Random Forest",
        "Integrated historical atmospheric satellite data from Carbon Mapper and Sentinel-5P covering 2019–2024",
        "Contributed to emissions anomaly detection and multi-horizon forecasting workflows"
      ]
    },
    {
      title: "Key Results",
      list: [
        "Delivered the foundation of a full-stack emissions intelligence platform in a five-week development period",
        "STARCOP methane detection baseline: 0.68 precision, 0.54 recall, and 0.37 Intersection over Union (IoU)",
        "Implemented forecasting workflows for 8 greenhouse gases using daily and monthly prediction horizons"
      ]
    }
  ]
},


"research-impact": {
  role: "NLP Research Team Member",
  period: "Fall 2025",
  sections: [
    {
      title: "Overview",
      text: "Contributed to the development of a Research Production Analysis System designed to support fairer, context-aware evaluation of scholarly impact. The project uses NLP and transformer-based models to classify scientific publications into research fields, providing a foundation for field-normalized researcher impact assessment."
    },
    {
      title: "Data Collection and Preprocessing",
      list: [
        "Collected scientific publication metadata through the Scopus API",
        "Personally gathered datasets associated with ASJC subject codes 1400, 1800, 2000, and 2600",
        "Contributed to cleaning and preprocessing scholarly publication data",
        "Worked with a large-scale dataset containing over 1.4 million scientific publications"
      ]
    },
    {
      title: "NLP and LLM Experiments",
      list: [
        "Contributed to fine-tuning SPECTER2 for multi-label scientific paper classification",
        "Designed and optimized prompts for research-field classification",
        "Tested LLaMA 2 and local language models using prompt-based approaches",
        "Contributed to evaluating model predictions against Scopus ASJC labels"
      ]
    },
    {
      title: "Results and Impact",
      list: [
        "Contributed to a metadata-enriched SPECTER2 classification pipeline covering 280 ASJC research categories",
        "The project's best reported model achieved 0.8728 micro-F1 and 0.8655 macro-F1",
        "Supported research into field-aware scholarly evaluation to reduce biases in traditional citation metrics",
        "Contributed to writing the Introduction, Abstract, and Results & Analysis sections of the report"
      ]
    }
  ]
},

"ml-data-analysis": {
  role: "Machine Learning Research Team Member",
  period: "May 2025",
  sections: [
    {
      title: "Overview",
      text: "A comparative study of machine learning algorithms for regression and classification tasks. Working in a five-member team, we investigated how data characteristics, preprocessing, model selection and hyperparameter tuning influence predictive performance. The study covered automobile price prediction using tabular data and image classification using CIFAR-10."
    },
    {
      title: "Objectives",
      list: [
        "Compare traditional machine learning algorithms and neural network architectures across two prediction tasks",
        "Evaluate model performance and identify the strengths and limitations of different approaches",
        "Study the impact of preprocessing, feature transformations and hyperparameter optimization",
        "Derive practical guidelines for selecting models based on data structure and task requirements"
      ]
    },
    {
      title: "Part 1 — Automobile Price Prediction",
      text: "Developed and compared regression models using the UCI Automobile dataset, containing 205 instances and 26 attributes, with vehicle price as the prediction target.",
      list: [
        "Preprocessed numerical and categorical features using median/mode imputation, one-hot encoding and standardization",
        "Applied power transformations and PCA where appropriate",
        "Evaluated Linear Regression, Ridge Regression, KNN, Decision Trees, Random Forest, SVR, Naive Bayes and neural networks",
        "Used GridSearchCV and Bayesian optimization for hyperparameter tuning",
        "Compared models using the R² score to assess predictive performance"
      ]
    },
    {
      title: "Part 2 — CIFAR-10 Image Classification",
      text: "Investigated image classification on CIFAR-10, a dataset of 60,000 RGB images across 10 object categories, comparing traditional machine learning models with neural network architectures.",
      list: [
        "Normalized image pixel values and flattened images for traditional machine learning models",
        "Evaluated Decision Trees, Random Forest, SVM, KNN and Gaussian Naive Bayes",
        "Developed and compared basic, deep and regularized artificial neural networks",
        "Implemented CNN-based approaches, including an advanced CNN with data augmentation",
        "Compared classification accuracy and analyzed the effect of spatial feature learning"
      ]
    },
    {
      title: "Results and Performance",
      text: "The experiments showed that the best-performing model depended strongly on the data structure. Random Forest performed best for automobile price regression, while CNNs substantially outperformed traditional machine learning methods on image classification.",
      metrics: [
        {
          value: "0.958",
          label: {
            en: "best R² — Random Forest regression",
            fr: "meilleur R² — régression Random Forest",
            ar: "أفضل معامل R² لنموذج Random Forest"
          }
        },
        {
          value: "89.12%",
          label: {
            en: "best CIFAR-10 accuracy — advanced CNN",
            fr: "meilleure précision CIFAR-10 — CNN avancé",
            ar: "أفضل دقة لتصنيف CIFAR-10"
          }
        }
      ],
      list: [
        "Random Forest achieved an R² score of 0.958 for automobile price prediction",
        "The advanced CNN achieved 89.12% classification accuracy on CIFAR-10",
        "Traditional machine learning models achieved approximately 30–46% accuracy on CIFAR-10",
        "Preprocessing and hyperparameter tuning improved regression performance",
        "CNN architectures benefited from learning spatial patterns directly from images"
      ]
    },
    {
      title: "Key Takeaways",
      list: [
        "Tabular regression: ensemble methods such as Random Forest can capture nonlinear relationships effectively",
        "Image classification: CNNs exploit spatial structure and outperform models trained on flattened pixels",
        "Data preprocessing and hyperparameter tuning are essential for reliable model performance",
        "Model selection requires balancing predictive accuracy, interpretability, computational cost and overfitting risk"
      ]
    },
    {
      title: "Tools and Technologies",
      list: [
        "Python",
        "Scikit-learn",
        "PyTorch",
        "NumPy and Pandas",
        "GridSearchCV and Bayesian optimization",
        "Machine learning, deep learning and data visualization"
      ]
    }
  ] ,
  links: [
    {
      label: "Source code on GitHub (Automobile) ",
      url: "https://github.com/abid-sara/Automobile"
    },
    {
      label: "Source code on GitHub (CIFAR-10)",
      url: "https://github.com/abid-sara/CIFAR-10"
    }
  ]
},

"ai-search-logistics": {
  role: "AI & Search Algorithms Team Member",
  period: "2024",
  sections: [
    {
      title: "Overview",
      text: "Developed an AI-based supply chain and logistics optimization system for agricultural product transportation across Algerian wilayas. The system identifies suitable source cities based on product availability, production quantity and season, then selects a transportation company and plans a route to the requested destination while considering transportation cost and estimated delivery time."
    },
    {
      title: "Problem",
      text: "Planning agricultural transportation requires coordinating product availability, seasonal production, truck capacity, transportation costs and routes between cities. The project addressed two connected challenges: finding a suitable source wilaya that can supply the requested quantity and identifying an appropriate transportation company to deliver the goods efficiently."
    },
    {
      title: "Data Collection and Modeling",
      text: "Collected and organized agricultural production, geographical and transportation company data to represent the supply chain as a search problem.",
      list: [
        "Gathered Algerian agricultural production data from 2019 for wheat, tomato, potato, citrus fruits and dates",
        "Organized product availability, production quantities and seasonal information into separate data files",
        "Used wilaya geographical coordinates and neighboring-city distances to construct the transportation network",
        "Collected transportation company information, including location, truck capacity, supported goods and pricing",
        "Estimated missing truck capacities and transportation prices when complete company data was unavailable",
        "Modeled the problem using states, actions, transition costs, goal tests and heuristic functions"
      ]
    },
    {
      title: "AI Search Algorithms",
      text: "Implemented and compared uninformed search, informed search and constraint satisfaction approaches to identify transportation solutions.",
      list: [
        "Breadth-First Search (BFS): explored routes based on search depth",
        "Uniform Cost Search (UCS): prioritized paths with the lowest accumulated distance cost",
        "A* Search: combined path cost with a geographical distance heuristic based on the Haversine formula",
        "Hill Climbing: used a greedy heuristic to explore promising routes",
        "Constraint Satisfaction Problem (CSP): modeled source city, transportation company and route selection as variables subject to product, capacity, cost and connectivity constraints"
      ]
    },
    {
      title: "Transportation Optimization",
      text: "Designed a decision process to select a suitable supplier, transportation company and complete route according to the requested product, quantity, destination and production season.",
      list: [
        "Filtered source wilayas according to product availability, production quantity and season",
        "Selected eligible transportation companies based on the type and quantity of goods they could carry",
        "Allowed multiple truck trips when a single trip could not transport the full requested quantity",
        "Estimated transportation time using total travel distance and an assumed average truck speed of 90 km/h",
        "Estimated transportation costs using product quantity, route distance and transportation price per kilogram per kilometer",
        "Balanced delivery time and cost by prioritizing lower cost when the estimated price difference exceeded 10%, and lower delivery time when the difference was 10% or less"
      ]
    },
    {
      title: "Results and Algorithm Comparison",
      text: "Compared search strategies in terms of route quality, execution time, memory requirements and their ability to find a complete transportation path. In the reported Adrar destination example, A* produced a complete route with a lower estimated cost than the BFS and UCS solutions, while Hill Climbing became stuck before completing the route.",
      list: [
        "BFS found a complete route but did not directly optimize total travel distance",
        "UCS considered accumulated route distance but required more execution time in the reported example",
        "A* efficiently found a complete route by combining accumulated path cost with a geographical heuristic",
        "Hill Climbing explored promising neighboring wilayas quickly but could become trapped before reaching the destination",
        "The experiments highlighted the trade-off between search efficiency, solution quality and completeness"
      ]
    },
    {
      title: "Interactive Visualization and Web Interface",
      text: "Developed an interactive map-based interface to visualize candidate suppliers, eligible transportation company locations and the selected route across Algerian wilayas.",
      list: [
        "Used Folium to display geographical information and transportation routes",
        "Highlighted eligible source cities, company locations and the destination using different map colors",
        "Displayed the selected transportation company, estimated price, travel time and number of required trips",
        "Used Flask to connect the supply chain optimization system with a web interface"
      ]
    },
    {
      title: "Tools and Technologies",
      list: [
        "Python",
        "Breadth-First Search, Uniform Cost Search and A*",
        "Hill Climbing and Constraint Satisfaction Problems",
        "Haversine geographical distance calculation",
        "Folium for interactive mapping",
        "Flask for web integration"
      ]
    },
    {
      title: "What I Learned",
      list: [
        "Applied classical AI search algorithms to a real-world logistics problem",
        "Designed heuristic functions for geographical route planning",
        "Combined data filtering, constraint satisfaction and optimization strategies",
        "Evaluated trade-offs between route quality, execution time and memory consumption",
        "Integrated algorithmic decision-making with geographical visualization and a web interface"
      ]
    }
  ],
  links: [
    {
      label: "Source code on GitHub",
      url: "https://github.com/abid-sara/Supply-chain-and-logistics"
    }
  ]
},
"natural-gas-production": {
  role: "Time Series Analysis & Forecasting Project",
  period: "2024",
  sections: [
    {
      title: "Overview",
      text: "Conducted a time-series analysis of U.S. monthly dry natural gas production from January 1973 to November 2024. The project followed the Box–Jenkins methodology to identify, estimate, validate and compare SARIMA forecasting models. It was developed in two notebooks: a full Box–Jenkins analysis, followed by an expanded model search to strengthen the final model selection."
    },
    {
      title: "Academic Scope",
      text: "This project was carried out for academic purposes, with the goal of understanding ARIMA and SARIMA modeling in depth: stationarity, differencing, order identification, estimation, diagnostics and forecast evaluation. For this reason, more advanced forecasting models (such as machine learning or deep learning approaches) were intentionally not used."
    },
    {
      title: "Problem Statement",
      text: "Natural gas production exhibits long-term trends, annual seasonality and changes in production behavior over time. The objective was to identify a suitable statistical model that captures these patterns, produces reliable forecasts, and performs better than simple forecasting benchmarks."
    },
    {
      title: "Data Collection and Exploration",
      text: "Worked with monthly U.S. dry natural gas production data covering January 1973 through November 2024, measured in quadrillion Btu. Explored the time series to understand its trend, seasonal structure, variability and suitability for statistical forecasting.",
      list: [
        "Used historical production data spanning more than five decades",
        "Examined the time-series structure and monthly seasonal patterns",
        "Checked for missing values and verified the monthly observation sequence",
        "Split the data chronologically into a training set covering 1973–2014 and a test set covering January 2015–November 2024",
        "Used 504 observations for training and 119 observations for out-of-sample evaluation"
      ]
    },
    {
      title: "Notebook 1: Box–Jenkins Analysis and Validation",
      text: "Developed the first notebook to apply the Box–Jenkins methodology to natural gas production forecasting. The workflow covered model identification, estimation, diagnostic testing and forecast evaluation, and established the statistical justification for the final model.",
      list: [
        "Identified a non-seasonal MA(1) and seasonal MA(1) structure from ACF and PACF patterns",
        "Applied one regular difference and one seasonal difference, with seasonal period 12",
        "Verified that a variance-stabilizing transformation was unnecessary",
        "Compared model specifications using AICc and BIC",
        "Checked coefficient significance and investigated unnecessary model parameters",
        "Performed Ljung–Box testing at multiple lags with appropriate degrees-of-freedom corrections",
        "Reported non-normal residuals, outliers and remaining seasonal autocorrelation as limitations",
        "Evaluated forecasts against benchmark models over the test period"
      ]
    },
    {
      title: "Stationarity and Seasonal Analysis",
      text: "Investigated the stochastic trend and annual seasonality of the production series to determine the differencing required before fitting the final model.",
      list: [
        "Used ADF and KPSS tests to investigate stationarity and regular differencing",
        "Examined the periodogram and seasonal patterns to investigate annual seasonality",
        "Used seasonal differencing tests and supporting evidence to justify D = 1",
        "Selected d = 1, D = 1 and seasonal period s = 12",
        "Analyzed ACF and PACF plots of the differenced series to guide SARIMA order identification"
      ]
    },
    {
      title: "Notebook 2: Expanded SARIMA Model Search",
      text: "Developed a second notebook to determine whether alternative SARIMA specifications could improve forecasting accuracy or provide a stronger justification for the selected model. Rather than relying solely on visual identification, the notebook systematically evaluated a broad set of candidate models using a predefined selection rule.",
      list: [
        "Estimated 144 SARIMA specifications with p and q ranging from 0 to 3, and P and Q ranging from 0 to 2, while fixing d = 1, D = 1 and s = 12",
        "Successfully estimated 142 candidate models",
        "Recorded AICc, BIC, coefficient significance, AR/MA root stability and residual diagnostics",
        "Defined eligibility criteria before evaluating the test set",
        "Required significant coefficients, a satisfactory Ljung–Box test at lag 24 and stable AR/MA roots",
        "Ranked eligible models using BIC to balance model fit and complexity",
        "Shortlisted four alternative specifications and retained a reference model for comparison",
        "Investigated log transformation, alternative differencing orders and shorter estimation periods"
      ]
    },
    {
      title: "Model Selection and Comparison",
      text: "Selected SARIMA(0,1,1)(0,1,1)[12], also known as the airline model, as the final specification. The expanded search confirmed the choice from Notebook 1: the simpler model provides competitive forecasting performance with fewer parameters than the reference model.",
      list: [
        "N1: SARIMA(0,1,1)(0,1,1)[12] — selected model with two parameters",
        "N2: SARIMA(1,1,1)(0,1,1)[12] — evaluated the addition of a non-seasonal AR term",
        "N3: SARIMA(1,1,0)(0,1,1)[12] — compared an AR term with the MA structure",
        "N4: SARIMA(0,1,1)(2,1,0)[12] — tested an alternative seasonal AR structure",
        "M0: SARIMA(1,1,1)(2,1,1)[12] — more complex reference model retained for comparison",
        "Used BIC, coefficient significance, residual diagnostics and out-of-sample performance to assess model suitability"
      ]
    },
    {
      title: "Forecast Evaluation and Results",
      text: "Evaluated the models using multi-step forecasts over the complete 119-month test period, one-step-ahead forecasts and rolling-origin validation. Compared the results with seasonal-naive and random-walk-with-drift benchmarks.",
      metrics: [
        { value: "3.76%", label: "multi-step MAPE (119-month test period)" },
        { value: "3.28%", label: "rolling-origin MAPE (12-month horizon)" },
        { value: "0.0584", label: "one-step-ahead RMSE" }
      ],
      list: [
        "Achieved a multi-step MAPE of 3.76% for the selected model over the 119-month test period",
        "Obtained a one-step-ahead RMSE of 0.0584",
        "Achieved a rolling-origin MAPE of 3.28% using 12-month forecasts across ten yearly origins with model re-estimation",
        "Compared the selected model with the reference model M0, which achieved 3.70% multi-step MAPE but had a higher one-step RMSE of 0.0606",
        "Used the Diebold–Mariano test to compare one-step forecast accuracy; the selected model performed significantly better than the reference model at the 5% level",
        "Observed that N3 performed similarly to the selected model, while N2 and N4 did not improve one-step forecast accuracy",
        "Demonstrated the value of SARIMA modeling against the seasonal-naive benchmark, which had a multi-step MAPE of 19.49%"
      ]
    },
    {
      title: "Future Forecasting",
      text: "After selecting the final specification, re-estimated SARIMA(0,1,1)(0,1,1)[12] using the full historical dataset and generated forecasts for December 2024 through November 2026.",
      list: [
        "Used the full 623-observation dataset for final model estimation",
        "Generated a 24-month point forecast",
        "Calculated 80% and 95% bootstrap prediction intervals using 2,000 simulated paths",
        "Compared the forecast with an alternative candidate as a sensitivity check",
        "Observed a nearly flat average production level in the forecast horizon, with a continuing monthly seasonal profile",
        "Highlighted that prediction intervals may underestimate uncertainty because residual variability increased in 2020–2024"
      ]
    },
    {
      title: "Limitations and Interpretation",
      text: "The analysis identified several limitations that affect the reliability of long-horizon forecasts. Although the selected model captures the main trend and seasonal structure, it cannot fully account for structural changes or all unusual production movements. Since the project focuses on classical ARIMA/SARIMA theory, no advanced models were tested to address these limitations.",
      list: [
        "Residual normality was rejected, with heavy tails and several large outliers",
        "A small residual seasonal autocorrelation remained around lag 36",
        "Production trend changes during 2016–2019 contributed to long-horizon forecast errors",
        "Residual variability increased during 2020–2024, making prediction intervals potentially too narrow",
        "Forecasts assume that the underlying production process does not undergo another major structural change",
        "Potential explanations for individual outliers, including weather events and pandemic-related disruptions, were not formally tested"
      ]
    },
    {
      title: "Tools and Technologies",
      list: [
        "R programming language",
        "Jupyter Notebook with an R kernel",
        "forecast for SARIMA estimation and forecasting",
        "tseries for time-series statistical tests",
        "ggplot2 for data visualization",
        "zoo for time-series data handling",
        "ARIMA and SARIMA modeling",
        "ADF, KPSS, ACF, PACF and residual diagnostic tests",
        "AICc and BIC model selection criteria",
        "MAPE, RMSE and Diebold–Mariano forecast comparison",
        "Rolling-origin validation and bootstrap prediction intervals"
      ]
    },
    {
      title: "What I Learned",
      list: [
        "Applied the Box–Jenkins methodology to a real-world energy production dataset",
        "Learned to identify trend, stationarity and seasonality in long historical time series",
        "Gained a deep understanding of how ARIMA and SARIMA models work, from differencing to order selection",
        "Improved model selection through coefficient testing, information criteria and residual diagnostics",
        "Understood why simpler statistical models can outperform more complex alternatives",
        "Compared forecasting models using multiple out-of-sample evaluation strategies",
        "Recognized structural changes, heavy-tailed residuals and changing variance as important forecasting limitations"
      ]
    }
  ],
  links: [
    {
      label: "Dataset on GitHub",
      url: "https://github.com/wissal-eddalia/TimeSeries"
    }
  ]
},
"pso-feature-selection": {
  role: "Machine Learning & Optimization Project",
  period: "2025",
  sections: [
    {
      title: "Overview",
      text: "Implemented a feature selection framework using Particle Swarm Optimization (PSO) to identify relevant features for machine learning classification tasks. The project applies metaheuristic optimization to reduce input dimensionality while balancing classification accuracy against the number of selected features."
    },
    {
      title: "Problem",
      text: "Machine learning datasets can contain irrelevant or redundant features that increase computational costs, complicate models and potentially contribute to overfitting. Exhaustively evaluating all possible feature subsets becomes impractical as the number of features grows. The project addresses this challenge by using a population-based optimization algorithm to search for effective feature subsets."
    },
    {
      title: "Mathematical Formulation",
      text: "Formulated feature selection as a binary optimization problem, where each candidate solution represents a subset of the available features. The objective function combines cross-validated classification performance with a penalty for selecting too many features.",
      list: [
        "Represented each candidate feature subset as a binary vector",
        "Defined a cost function combining classification error and feature-count penalty",
        "Used a weighting parameter alpha to control the trade-off between predictive accuracy and dimensionality reduction",
        "Evaluated candidate subsets using cross-validated classification accuracy"
      ]
    },
    {
      title: "Particle Swarm Optimization",
      text: "Implemented PSO as a population-based metaheuristic inspired by the collective movement of bird flocks. Each particle represents a candidate feature subset and updates its search direction using its own best solution and the best solution found by the swarm.",
      list: [
        "Initialized particles with candidate positions and velocities",
        "Evaluated feature subsets using the classification-based objective function",
        "Updated particle velocities using inertia, cognitive and social components",
        "Tracked personal-best and global-best solutions across iterations",
        "Mapped continuous particle positions to binary feature-selection decisions using a threshold"
      ]
    },
    {
      title: "Classification Models",
      text: "Designed the framework to work with multiple classification algorithms, allowing feature subsets to be evaluated across different model families.",
      list: [
        "Random Forest",
        "Support Vector Machine (SVM)",
        "K-Nearest Neighbors (KNN)",
        "Decision Tree",
        "Used a classifier factory and configurable fitness function to support different experiments"
      ]
    },
    {
      title: "Experimental Setup",
      text: "Developed a reusable Python framework supporting configurable optimization experiments on a built-in Breast Cancer dataset or user-provided classification datasets.",
      list: [
        "Implemented configurable swarm size and number of optimization iterations",
        "Supported adjustable feature-count penalty and cross-validation folds",
        "Integrated dataset loading, model evaluation and optimization into a command-line interface",
        "Provided a Python API for incorporating the optimizer into machine learning workflows"
      ]
    },
    {
      title: "Evaluation and Visualization",
      text: "Designed evaluation outputs to monitor optimization progress and analyze the trade-off between predictive performance and feature reduction.",
      list: [
        "Tracked the best objective value across PSO iterations",
        "Evaluated classification accuracy using cross-validation",
        "Reported the number of selected features and the best observed accuracy",
        "Generated convergence curves, confusion matrices and feature-importance visualizations"
      ]
    },
    {
      title: "Results and Impact",
      text: "The framework is designed to search for compact feature subsets while maintaining or improving classification performance. Its objective function explicitly balances predictive accuracy against the proportion of selected features, enabling systematic analysis of this trade-off."
    },
    {
      title: "Tools and Technologies",
      list: [
        "Python",
        "Particle Swarm Optimization (PSO)",
        "NumPy and Pandas",
        "Scikit-learn",
        "Cross-validation and classification metrics",
        "Matplotlib for result visualization",
        "Command-line interfaces and modular Python development"
      ]
    },
    {
      title: "What I Learned",
      list: [
        "Applied numerical optimization and metaheuristics to machine learning",
        "Formulated a feature selection problem using a mathematical objective function",
        "Explored the balance between model accuracy and dimensionality reduction",
        "Designed reusable optimization components for multiple classifiers",
        "Analyzed convergence behavior and evaluated candidate solutions using cross-validation"
      ]
    }
  ],
  links: [
    {
      label: "Source code on GitHub",
      url: "https://github.com/LyesHADJAR/pso-feature-selection"
    }
  ]
},


"revenue-sales-traffic-forecasting": {
  role: "Team Data Mining & Forecasting Project",
  period: "2025",

  sections: [
    {
      title: "Project Overview",
      text: "Collaborated on a team project for Djezzy focused on analyzing and forecasting daily revenue, sales, and data traffic. The project applied data mining, time-series analysis, and machine learning to identify temporal patterns and support data-driven business planning."
    },

    {
      title: "Business Objectives",
      text: "The project aimed to forecast key business indicators and investigate how seasonality, calendar effects, and exceptional events influence their daily variations.",
      list: [
        "Forecast daily revenue",
        "Predict the daily number of sales",
        "Forecast daily data consumption in terabytes",
        "Analyze seasonal patterns and exceptional-date effects",
        "Support financial planning and resource allocation"
      ]
    },

    {
      title: "Data Preparation",
      text: "Prepared daily observations for analysis and model development, checking missing values, transforming categorical variables, and examining feature correlations.",
      list: [
        "Handled missing data",
        "Transformed categorical variables",
        "Analyzed feature correlations",
        "Selected relevant features for forecasting"
      ]
    },

    {
      title: "Calendar Feature Engineering",
      text: "Integrated Gregorian and Hijri calendar information to capture recurring temporal patterns and contextual effects that could influence revenue, sales, and traffic.",
      list: [
        "Gregorian and Hijri calendar features",
        "Weekday and weekend indicators",
        "Seasonal features",
        "Scholar holidays",
        "Exceptional dates and special events"
      ]
    },

    {
      title: "Exploratory Data Analysis",
      text: "Investigated daily and seasonal variations across the three target indicators. The analysis identified revenue and sales peaks toward the end of the year, increased traffic during August and September, and variation associated with exceptional dates.",
      list: [
        "Analyzed seasonal trends",
        "Compared weekday and weekend patterns",
        "Examined the influence of special dates",
        "Compared traffic behavior across seasons"
      ]
    },

    {
      title: "Forecasting Methodology",
      text: "Compared statistical time-series forecasting with machine learning regression approaches for sales and traffic prediction. SARIMAX was used to model temporal patterns, while Random Forest provided a regression-based alternative and feature-importance analysis.",
      list: [
        "SARIMAX for time-series forecasting",
        "Random Forest for regression-based prediction",
        "Model performance comparison",
        "Feature-importance analysis"
      ]
    },

    {
      title: "Evaluation & Results",
      text: "Used Mean Absolute Percentage Error (MAPE) to evaluate forecasting performance. The project presentation reports MAPE values of 6.53%, 8.43%, 3.46%, and 3.35% across its sales and traffic model comparisons. It describes SARIMAX as stable and better-performing in the comparison discussed.",
      list: [
        "Evaluated forecasting errors using MAPE",
        "Compared SARIMAX and Random Forest",
        "Examined model stability",
        "Investigated influential features"
      ]
    },

    {
      title: "Team Collaboration",
      text: "Worked collaboratively on a business-oriented forecasting project for Djezzy, combining data preparation, temporal feature engineering, exploratory analysis, model development, and evaluation. The project required learning and applying forecasting techniques beyond the course material."
    },

    {
      title: "Challenges",
      text: "Key challenges included learning unfamiliar forecasting methods, understanding their complexity, choosing appropriate modeling approaches, and working within the available project timeline. An interface was developed but could not be integrated before the deadline."
    },

    {
      title: "Business Relevance",
      text: "Forecasting revenue, sales, and traffic can help support financial planning, operational resource allocation, and data-driven decision-making. The project also highlighted opportunities to incorporate additional external factors, such as market trends and promotions, in future forecasting work."
    },

    {
      title: "Tools & Technologies",
      list: [
        "Python",
        "Data preprocessing and exploratory data analysis",
        "Time-series forecasting",
        "SARIMAX",
        "Random Forest regression",
        "Feature engineering",
        "MAPE-based evaluation",
        "Data visualization"
      ]
    },

    {
      title: "Key Learnings",
      list: [
        "Applied data mining to an industry-oriented business problem",
        "Engineered calendar-based and seasonal features",
        "Compared statistical forecasting and machine learning approaches",
        "Evaluated models using quantitative metrics",
        "Collaborated on a data science project with a business use case"
      ]
    }
  ],

  links: [
    {
      label: "Source code on GitHub",
      url: "https://github.com/wissamlakhdari/DataMiningProject/tree/main"
    }
  ]
},

"djezzy-geographic-segmentation": {
  role: "Team Geo-AI & NLP Project",
  period: "2025",

  sections: [
    {
      title: "Overview",
      text: "Collaborated on a team project for Djezzy to develop a geographic segmentation solution for telecom antenna deployment. The project combined geospatial data processing, natural language processing, and interactive mapping to help characterize geographic zones and support infrastructure planning across Algerian urban and peri-urban areas."
    },

    {
      title: "Problem Statement",
      text: "The growing use of mobile and internet services increases the need for efficient telecom infrastructure planning. Manual planning can make it difficult to identify coverage needs, characterize heterogeneous areas, and allocate infrastructure efficiently.",
      list: [
        "Identify geographic zones with different characteristics",
        "Analyze infrastructure density and urban-rural patterns",
        "Support data-driven antenna placement decisions",
        "Improve geographic planning and resource allocation"
      ]
    },

    {
      title: "Project Objectives",
      text: "The main objective was to build an intelligent geographic segmentation platform that classifies regions according to their functional characteristics and presents the results through an interactive map.",
      list: [
        "Use open-source geospatial data and external APIs",
        "Enrich geographic zones with population, density, and land-use information",
        "Classify zones into functional categories",
        "Provide an interactive interface for exploring areas and planning antenna placement"
      ]
    },

    {
      title: "Geospatial Data Collection",
      text: "Collected geographic information from OpenStreetMap and used the GHSL dataset as part of the project's geospatial data sources. Infrastructure information included facilities and points of interest that help characterize each zone.",
      list: [
        "Administrative boundaries and road networks",
        "Schools, hospitals, police facilities, and markets",
        "Mosques and transportation hubs",
        "Coordinates, population, density, and land-use features",
        "Geographic grid representation using a 500 m grid system"
      ]
    },

    {
      title: "Data Processing & Database Design",
      text: "Prepared heterogeneous geographic information for querying, analysis, and visualization. The project used a consistent coordinate reference system and a document-oriented database to manage the collected data.",
      list: [
        "Standardized coordinates using WGS 84 / UTM Zone 31N",
        "Divided geographic areas into grid cells",
        "Enriched cells with geographic and demographic features",
        "Designed a MongoDB database for flexible data storage",
        "Supported geospatial queries and data retrieval"
      ]
    },

    {
      title: "Segmentation Approaches",
      text: "Explored traditional clustering methods before adopting an NLP-based classification approach. According to the project presentation, K-Means struggled with sparse regions, DBSCAN was affected by noise in heterogeneous data, and Gaussian Mixture Models experienced convergence issues in sparse areas.",
      list: [
        "Evaluated K-Means clustering",
        "Tested DBSCAN for density-based clustering",
        "Explored Gaussian Mixture Models",
        "Shifted toward semantic classification of geographic zones using textual metadata"
      ]
    },

    {
      title: "NLP-Based Geographic Classification",
      text: "Applied the XLM-RoBERTa transformer model to classify zones using semantic information from their metadata. The presentation reports an average confidence score of 87% for this approach.",
      list: [
        "Used transformer-based language understanding",
        "Processed textual metadata associated with geographic zones",
        "Applied a binary classification approach for each category",
        "Incorporated domain knowledge into category definitions",
        "Addressed some of the limitations encountered with traditional clustering"
      ]
    },

    {
      title: "Functional Segmentation Categories",
      text: "Organized geographic zones into functional categories intended to reflect local characteristics and potential telecom infrastructure needs.",
      list: [
        "Commercial — economic and commercial activity",
        "Agricultural — rural and agricultural areas",
        "Residential — areas with residential demand",
        "University — university-related areas with potentially high data usage",
        "Industrial — manufacturing and production areas",
        "Touristic — areas with potentially seasonal demand"
      ]
    },

    {
      title: "Interactive Web Platform",
      text: "Developed a web-based geographic interface to explore segmented areas, inspect regional information, and support antenna deployment planning.",
      list: [
        "React.js frontend with Leaflet.js mapping",
        "Python and Express.js backend components",
        "MongoDB data storage",
        "City search and map centering",
        "Insights panel displaying population, density, and infrastructure statistics",
        "Color-coded geographic segmentation layers",
        "CSV, JSON, and Excel data import/export",
        "Interactive antenna placement and configuration"
      ]
    },

    {
      title: "Results & Evaluation",
      text: "The presentation reports an average confidence score of 87% for the NLP-based classification approach and describes a working platform for geographic visualization and antenna deployment planning. It also highlights the approach's usefulness in sparse-data scenarios.",
      list: [
        "Reported 87% average classification confidence",
        "Implemented classification for the defined zone categories",
        "Integrated geospatial data with an interactive web platform",
        "Supported geographic exploration and antenna placement workflows"
      ]
    },

    {
      title: "Challenges & Limitations",
      text: "The project encountered sparse and incomplete geospatial data, overlapping characteristics between geographic zones, and limitations in traditional clustering methods. The final approach also has limitations that would need to be addressed before operational deployment.",
      list: [
        "Dependence on geospatial data quality and completeness",
        "Difficulty representing mixed-use areas with binary classifications",
        "Limited real-time updates in the current data snapshot",
        "Need for additional validation and richer data sources"
      ]
    },

    {
      title: "Future Improvements",
      text: "Potential extensions include adding real-time mobile usage information and signal propagation modeling to make the platform more useful for practical network planning.",
      list: [
        "Integrate mobile usage and network coverage data",
        "Incorporate radio signal propagation modeling",
        "Add cost-benefit analysis for deployment scenarios",
        "Combine additional geospatial and contextual data sources",
        "Track geographic changes over time"
      ]
    },

    {
      title: "Business Impact",
      text: "For Djezzy, the platform provides a foundation for data-driven infrastructure planning by helping characterize geographic zones and explore possible antenna deployment locations. The approach could support coverage planning, resource allocation, and future network optimization studies."
    },

    {
      title: "Tools & Technologies",
      list: [
        "Python",
        "XLM-RoBERTa",
        "Natural Language Processing",
        "OpenStreetMap",
        "GHSL geospatial data",
        "MongoDB",
        "React.js",
        "Leaflet.js",
        "Express.js",
        "REST APIs",
        "Geospatial data processing"
      ]
    },

    {
      title: "What I Learned",
      list: [
        "Applied Geo-AI concepts to a telecom infrastructure planning problem",
        "Worked with heterogeneous geospatial datasets",
        "Explored transformer-based NLP for geographic classification",
        "Compared clustering approaches with semantic classification",
        "Connected geospatial processing with interactive map visualization",
        "Considered data quality, classification uncertainty, and practical deployment constraints"
      ]
    }
  ],

  links: [
    {
      label: "Source code on GitHub",
      url: "https://github.com/Besmaladjb/Djezzy-Geographic-Segmentation"
    }
  ]
}
,
"eeg-sleep-stage-classification": {
  role: "Team Leader — Time Series Analysis & Classification",
  period: "2025",

  sections: [
    {
      title: "Overview",
      text: "Led a team project as part of the Time Series Analysis and Classification course, focused on automatically classifying human sleep stages using electroencephalogram (EEG) signals. The project combined biomedical signal analysis, feature engineering, and machine learning to investigate how patterns in brain activity can help distinguish sleep stages."
    },

    {
      title: "Problem Statement",
      text: "Sleep-stage classification is an important task in sleep medicine and neuroscience. Manual interpretation of EEG recordings requires specialized expertise, making automated classification a valuable research direction for studying sleep patterns and supporting sleep-disorder assessment.",
      list: [
        "Analyze EEG signals representing different sleep stages",
        "Identify signal characteristics that distinguish sleep-stage classes",
        "Develop machine learning models for automated classification",
        "Compare model performance using systematic evaluation"
      ]
    },

    {
      title: "Dataset Understanding",
      text: "Worked with a dataset already divided into 5,000 training samples and 1,000 test samples. The initial analysis focused on understanding the distribution of sleep-stage labels and examining representative EEG signals across classes.",
      list: [
        "Inspected the training and test dataset structure",
        "Analyzed the distribution of sleep-stage classes",
        "Visualized EEG signals for different classes",
        "Explored differences and patterns in the signal data"
      ]
    },

    {
      title: "Exploratory Data Analysis",
      text: "Performed exploratory analysis to better understand the dataset before model development. Class-distribution analysis and signal visualizations helped reveal the characteristics of the available data and informed subsequent feature engineering and classification experiments.",
      list: [
        "Examined sleep-stage class distributions",
        "Visualized EEG signal patterns by class",
        "Investigated differences between signal representations",
        "Used exploratory findings to guide model development"
      ]
    },

    {
      title: "EEG Feature Engineering",
      text: "Extracted a comprehensive set of features from the EEG signals to represent their characteristics in a form suitable for traditional machine learning algorithms. Multiple feature families were used to capture complementary information about signal behavior.",
      list: [
        "Statistical features describing signal distributions",
        "Spectral features representing frequency-related characteristics",
        "Entropy-based features describing signal complexity",
        "Combined extracted features into representations for classification"
      ]
    },

    {
      title: "Machine Learning Models",
      text: "Investigated several supervised learning algorithms to compare their ability to distinguish sleep stages from the extracted EEG features.",
      list: [
        "Random Forest — an ensemble of decision trees",
        "Support Vector Machine (SVM) — a margin-based classifier",
        "XGBoost — a gradient-boosted tree model",
        "Compared alternative models using a consistent evaluation workflow"
      ]
    },

    {
      title: "Model Optimization & Validation",
      text: "Applied hyperparameter tuning and cross-validation to investigate model configurations and obtain more reliable estimates of performance during development.",
      list: [
        "Tuned model hyperparameters",
        "Used cross-validation during model development",
        "Compared candidate classification approaches",
        "Used the separated test set for final evaluation"
      ]
    },

    {
      title: "Results & Evaluation",
      text: "The project established a workflow for EEG-based sleep-stage classification, combining exploratory analysis, multi-domain feature extraction, and comparisons between machine learning classifiers. Specific final accuracy or F1-score values are not included here because they have not been established from the supplied project description.",
      list: [
        "Evaluated multiple machine learning approaches",
        "Investigated the usefulness of statistical, spectral, and entropy-based features",
        "Applied hyperparameter tuning and cross-validation",
        "Studied automated classification of sleep-stage labels"
      ]
    },

    {
      title: "Team Leadership & Collaboration",
      text: "Led the team in this course project, collaborating with Nada Zanoun, Sara Abid, and Lyes Hadjar on the EEG classification task. The project involved coordinating analytical work across data exploration, feature engineering, model experimentation, and evaluation."
    },

    {
      title: "Tools & Technologies",
      list: [
        "Python",
        "Pandas and NumPy",
        "Data visualization",
        "EEG signal analysis",
        "Statistical feature extraction",
        "Spectral analysis",
        "Entropy-based feature engineering",
        "Scikit-learn",
        "Random Forest",
        "Support Vector Machine",
        "XGBoost",
        "Hyperparameter tuning and cross-validation"
      ]
    },

    {
      title: "What I Learned",
      list: [
        "Applied time-series analysis to biomedical signals",
        "Explored feature extraction from EEG data",
        "Compared statistical, spectral, and entropy-based representations",
        "Applied machine learning to a multiclass classification problem",
        "Investigated model optimization and cross-validation",
        "Developed teamwork and technical leadership skills"
      ]
    }
  ],

  links: [
    {
      label: "Source code on GitHub",
      url: "https://github.com/abid-sara/EEG"
    }
  ]
}
,

"sanad-claim-verification": {
  role: "Team Project — UNESCO Youth Hackathon 2026",
  period: "2026",

  sections: [
    {
      title: "Overview",
      text: "Collaborated on Sanad, an AI-powered browser extension developed for participation in the UNESCO Youth Hackathon 2026. The project aims to help users evaluate information encountered online by verifying selected claims against retrieved evidence. Beyond providing a verdict, Sanad explains its reasoning, links to supporting sources, and delivers claim-specific media-literacy tips to encourage independent critical thinking."
    },

    {
      title: "Problem Statement",
      text: "Online misinformation can spread through news articles, social media posts, messaging platforms, and AI-generated responses. Verifying a claim often requires users to leave the page, search for reliable sources, and evaluate the evidence themselves. Sanad explores how AI-assisted verification can make this process more accessible without interrupting the user's reading experience.",
      list: [
        "Reduce the effort required to investigate online claims",
        "Provide evidence and source links alongside verification outcomes",
        "Explain why available evidence supports or contradicts a claim",
        "Encourage users to develop independent media-literacy skills"
      ]
    },

    {
      title: "Solution & User Experience",
      text: "Sanad integrates claim verification directly into the browser. Users select a sentence on a webpage and choose the verification option from the right-click menu. A side panel presents a structured result, allowing users to inspect the verdict, examine the cited evidence, understand the explanation, and explore a recommended next step.",
      list: [
        "Select a claim from online content",
        "Launch verification through the browser context menu",
        "Display a verdict: Supported, Refuted, Misleading, Unverified, or Needs Context",
        "Present confidence information and links to retrieved sources",
        "Explain the evidence in accessible language",
        "Provide a claim-specific media-literacy tip and mini-quiz"
      ]
    },

    {
      title: "System Architecture",
      text: "The system separates the browser interface from the verification backend. The frontend handles user interaction and communicates with a FastAPI service through a single versioned JSON request/response contract. The backend manages evidence retrieval, source ranking, LLM-based verification, and media-literacy content generation.",
      list: [
        "Browser extension built around Manifest V3",
        "Content script for interacting with selected webpage text",
        "Background service worker for extension coordination",
        "React-based side panel for displaying verification results",
        "FastAPI backend for evidence processing and verification",
        "Structured JSON responses between frontend and backend"
      ]
    },

    {
      title: "Evidence Retrieval & Source Ranking",
      text: "Sanad's verification workflow retrieves evidence relevant to the selected claim and ranks sources according to their authority and relevance. This evidence provides the basis for the subsequent LLM-assisted analysis, helping connect the generated verdict to identifiable sources rather than relying solely on a model's internal knowledge.",
      list: [
        "Process the selected claim together with its page context",
        "Retrieve potentially relevant evidence",
        "Rank sources by authority and relevance",
        "Provide links to sources for further inspection",
        "Handle cases where reliable evidence cannot be found"
      ]
    },

    {
      title: "LLM-Based Verification",
      text: "The backend uses an LLM-based verification stage to analyze the retrieved evidence and generate a structured assessment of the claim. The result includes a verdict, confidence information, and a plain-language explanation. The system is designed to distinguish unsupported claims from verified conclusions and to return an Unverified outcome when the available evidence is insufficient.",
      list: [
        "Ground claim analysis in retrieved evidence",
        "Generate structured verification outcomes",
        "Explain how the available evidence relates to the claim",
        "Avoid presenting unverifiable claims as established facts",
        "Account for ambiguous claims and unavailable services"
      ]
    },

    {
      title: "Media Literacy & User Education",
      text: "A distinctive aspect of Sanad is its educational component. Instead of presenting only a judgment, the system generates a media-literacy tip and a short quiz related to the claim and its evidence. The objective is to help users strengthen transferable skills for evaluating information, identifying weak evidence, and thinking critically about online content.",
      list: [
        "Generate a claim-specific media-literacy tip",
        "Provide a short quiz related to a relevant evaluation skill",
        "Encourage users to inspect evidence independently",
        "Promote critical thinking rather than blind reliance on AI verdicts"
      ]
    },

    {
      title: "Reliability & Error Handling",
      text: "The project incorporates design principles intended to make the verification experience more reliable. The frontend communicates with the backend through a defined contract, while the backend is designed to return structured fallback responses when dependencies fail or the available evidence is insufficient. These measures aim to prevent errors from producing a blank or unusable interface.",
      list: [
        "Use a consistent request/response structure",
        "Support mock data for frontend states",
        "Allow backend testing independently of the interface",
        "Handle search and model availability failures",
        "Provide fallback responses for ambiguous or unsupported cases"
      ]
    },

    {
      title: "Development & Testing Approach",
      text: "The project README describes an early-stage MVP developed through two workstreams: frontend and backend. The architecture allows both components to be developed and tested independently. Mock responses support interface testing, while the backend can be exercised directly through HTTP requests before the complete browser interface is connected.",
      list: [
        "Separate frontend and backend development",
        "Define a versioned JSON interface contract",
        "Use mock verification responses to test interface states",
        "Test backend behavior independently using HTTP requests",
        "Consider normal and failure scenarios in the verification workflow"
      ]
    },

    {
      title: "Results & Project Status",
      text: "Sanad was developed as an early-stage MVP for participation in the UNESCO Youth Hackathon 2026. Its proposed workflow brings claim selection, evidence retrieval, source ranking, LLM-assisted verification, and media-literacy feedback into a single browser-based experience. The supplied README documents the architecture and intended behavior but does not establish benchmark accuracy, a measured reduction in misinformation, or independent validation of verdict quality.",
      list: [
        "Defined an end-to-end browser-based claim verification workflow",
        "Separated frontend interactions from backend intelligence",
        "Designed evidence-linked verification results",
        "Integrated an educational media-literacy component into the concept",
        "Documented fallback behavior for insufficient evidence and service failures"
      ]
    },

    {
      title: "Team Collaboration",
      text: "Collaborated with a team to develop Sanad for participation in the UNESCO Youth Hackathon 2026. The project combines browser-extension development, backend API design, information retrieval, LLM-assisted reasoning, and user education in response to the challenge of evaluating online information."
    },

    {
      title: "Tools & Technologies",
      list: [
        "JavaScript",
        "React",
        "Chrome Extension Manifest V3",
        "Browser content scripts",
        "Background service workers",
        "FastAPI",
        "Python",
        "REST API communication",
        "JSON request/response contracts",
        "Information retrieval",
        "Source ranking",
        "Large Language Models (LLMs)",
        "Evidence-grounded claim verification"
      ]
    },

    {
      title: "What I Learned",
      list: [
        "Explored AI-assisted approaches to online claim verification",
        "Understood the importance of evidence retrieval and source quality",
        "Learned how LLM outputs can be structured around retrieved evidence",
        "Explored browser extension and backend integration patterns",
        "Considered failure handling and uncertainty in AI applications",
        "Connected AI development with digital and media literacy",
        "Practiced teamwork and collaborative problem-solving in a hackathon context"
      ]
    }
  ],

  links: [
    {
      label: "Source code on GitHub",
      url: "https://github.com/wissal-eddalia/sanad-extension"
    },
    {
      label: "Project README",
      url: "https://github.com/wissal-eddalia/sanad-extension/blob/main/project-README.md"
    }
  ]
},

"loue-vehicle-rental-app": {
  role: "Team Project — Mobile Development & HCI",
  period: "October 2024",

  sections: [
    {
      title: "Overview",
      text: "LOUé is a mobile vehicle and machinery rental platform developed as a team project in 2024. Submitted on October 23, 2024, the project aimed to simplify the rental process in Algeria by connecting individuals and businesses looking to rent vehicles or equipment with owners and rental agencies. The project combined mobile application development, market research, user-centered design, and business planning."
    },

    {
      title: "Problem Statement",
      text: "Traditional vehicle and machinery rental processes often depend on phone calls, manual coordination, and in-person communication. Renters can spend considerable time comparing options and confirming availability, while rental providers must handle inquiries and manage their offers manually. These challenges motivated the team to explore a centralized digital platform tailored to the Algerian market.",
      list: [
        "Reduce time spent searching for rental options",
        "Simplify communication between renters and providers",
        "Improve access to vehicle and machinery rental offers",
        "Make pricing and rental conditions easier to compare",
        "Help providers organize rental listings and requests"
      ]
    },

    {
      title: "Target Audience",
      text: "The project targeted both individual renters and professional customers, recognizing that different users have different rental needs. The proposed platform also considered the operational needs of providers managing vehicle fleets or specialized equipment.",
      list: [
        "Individuals seeking vehicles for personal or occasional use",
        "Rental agencies and independent vehicle owners",
        "Businesses requiring transport vehicles",
        "Construction companies renting heavy machinery",
        "Industrial and agricultural businesses requiring equipment"
      ]
    },

    {
      title: "Market Research & Competitive Analysis",
      text: "The team investigated the local rental landscape to understand existing alternatives and opportunities for a specialized digital service. The project proposal identified general classified-ad platforms and local rental agencies as alternatives, highlighting the limited specialization of existing digital options for machinery and equipment rentals.",
      list: [
        "Examined existing rental practices in Algeria",
        "Reviewed OuedKniss as a general classified-ad platform",
        "Considered the limitations of traditional rental agencies",
        "Identified opportunities for specialized vehicle and machinery listings",
        "Explored potential subscription, advertising, and premium-feature revenue models"
      ]
    },

    {
      title: "User Research",
      text: "The Human-Computer Interaction report documented interviews with 10 rental providers and 20 renters, alongside surveys and competitive analysis. The research explored how users currently find rental options, which difficulties they encounter, and which digital features could improve the rental experience.",
      list: [
        "Interviewed 10 rental providers and 20 renters, as documented in the report",
        "Investigated common rental-search and coordination difficulties",
        "Explored user expectations for pricing transparency and trustworthy providers",
        "Collected preferences for booking, contract generation, and availability tracking",
        "Identified potential improvements based on reported user needs"
      ]
    },

    {
      title: "Key Research Findings",
      text: "The project report highlighted time-consuming rental processes, high prices, concerns about provider reliability, and limited digital solutions for machinery rentals. It also reported that 70% of surveyed users rented primarily for personal use and that all surveyed participants expressed interest in automated rental contracts and tracking. These figures reflect the team's documented research and should not be interpreted as nationally representative market statistics.",
      list: [
        "Rental discovery and coordination were identified as major pain points",
        "Users wanted more rental choices and clearer listing information",
        "Trust and transparent pricing were important considerations",
        "Participants expressed interest in automated contracts and tracking",
        "Machinery rentals emerged as an opportunity for specialized digital services"
      ]
    },

    {
      title: "User Personas",
      text: "The team developed three personas to represent different user needs and guide design decisions. Each persona focused on a specific rental scenario, helping translate research findings into practical interface and functionality requirements.",
      list: [
        "Abderrezak — an individual renter seeking clear prices and confirmed availability",
        "Adel — a rental business owner seeking better booking and inventory management",
        "Aicha — a construction company manager seeking reliable machinery and clear rental conditions"
      ]
    },

    {
      title: "Product Features & User Workflows",
      text: "The proposed application centered on making rental discovery and listing management more convenient. The product specification included search, filtering, detailed offers, booking workflows, and user profiles, with additional capabilities considered for later development.",
      list: [
        "Browse vehicles, trucks, machines, and equipment",
        "Filter offers by category, price, and location",
        "View rental details and availability",
        "Book and schedule rental requests",
        "Manage user profiles and rental history",
        "Review rental providers and service quality",
        "Explore automatic rental-contract generation",
        "Consider loyalty rewards for frequent users"
      ]
    },

    {
      title: "Mobile Application Architecture",
      text: "The project plan specified Flutter for mobile frontend development and Flask for the backend. The development roadmap included interface and logo design, backend architecture, frontend-backend integration, an initial MVP, further feature development, testing, and deployment preparation.",
      list: [
        "Flutter for the planned mobile application frontend",
        "Dart for Flutter application development",
        "Flask for the planned backend service",
        "Frontend and backend integration",
        "Iterative implementation and debugging",
        "Preparation for MVP testing and deployment"
      ]
    },

    {
      title: "Human-Computer Interaction & Usability",
      text: "The HCI report applied user-centered design principles to evaluate the proposed rental experience. It documented usability findings and considered Nielsen's heuristics to identify areas where navigation, status visibility, and information presentation could be improved.",
      list: [
        "Identified demand for interactive search filters",
        "Found confusion around navigation between booking and rental history",
        "Highlighted the need for clearer pricing breakdowns",
        "Considered visibility of rental availability and booking status",
        "Applied consistency and real-world terminology principles",
        "Recommended prioritizing essential information in the interface"
      ]
    },

    {
      title: "Accessibility & Inclusive Design",
      text: "Accessibility was considered as part of the interface design process. The report emphasized readable content and intuitive navigation while identifying further accessibility evaluation as future work. Formal accessibility testing had not yet been conducted according to the report.",
      list: [
        "Consider contrast and readability",
        "Promote simple and intuitive navigation",
        "Identify WAVE as a potential accessibility evaluation tool",
        "Plan mobile usability checks with Google Accessibility Scanner",
        "Consider screen-reader compatibility and alternative text",
        "Identify improvements to touch targets and contrast ratios"
      ]
    },

    {
      title: "Future Enhancements",
      text: "The project specification proposed additional features to improve convenience, trust, and rental management. These were presented as planned or wishlist capabilities rather than confirmed implemented functionality.",
      list: [
        "GPS tracking for vehicle and machinery owners",
        "In-app communication between renters and providers",
        "AI-based recommendations tailored to user preferences and behavior",
        "Vehicle and machinery health monitoring",
        "Automated rental contracts",
        "Loyalty rewards and premium services",
        "A specialized business-to-business experience for trucks and machinery"
      ]
    },

    {
      title: "Business Model & Product Strategy",
      text: "The project proposal explored possible revenue streams and strategies for adoption in the Algerian market. These included subscriptions for rental providers, premium features, and advertising. The team also considered partnerships with local rental businesses, referral incentives, customer feedback, and carefully timed notifications.",
      list: [
        "Potential subscriptions for individual owners and rental agencies",
        "Potential paid features such as contract generation",
        "Advertising as a possible revenue stream",
        "Partnerships with local rental providers and businesses",
        "Referral incentives and loyalty programs",
        "User feedback and retention strategies"
      ]
    },

    {
      title: "Development Roadmap",
      text: "The submission outlined an iterative development plan spanning feature definition, market research, UI/UX design, backend setup, Flutter and Flask implementation, integration, MVP development, testing, performance improvements, and deployment preparation.",
      list: [
        "Define product requirements and analyze competitors",
        "Design and refine the interface and logo",
        "Plan the backend architecture and configure Flask",
        "Implement frontend and backend components",
        "Integrate and test the initial MVP",
        "Improve functionality and performance",
        "Prepare for final testing and deployment"
      ]
    },

    {
      title: "Results & Project Status",
      text: "LOUé brought together a proposed rental marketplace, market research, business planning, mobile development planning, and HCI evaluation. The project documentation established the intended functionality, target users, technical direction, and usability improvements. The supplied reports do not independently establish that every proposed feature was implemented, that the application was deployed, or that the market and financial forecasts were achieved.",
      list: [
        "Produced a structured vehicle and machinery rental platform proposal",
        "Documented user research and three representative personas",
        "Defined a Flutter frontend and Flask backend development direction",
        "Identified usability and accessibility improvement areas",
        "Prepared a product roadmap and potential business model"
      ]
    },

    {
      title: "Team Collaboration",
      text: "Worked as part of Team G3-MD-20 with Yasmine Naima Senour, Afnane Karaoui, and Fatima-Zohra Lilia Amieur. The project combined mobile development planning, market research, product design, and human-computer interaction analysis. The HCI report was prepared under the supervision of Dr. Hayet Saadi during the 2024–2025 academic year."
    },

    {
      title: "Tools & Technologies",
      list: [
        "Flutter",
        "Dart",
        "Flask",
        "Git",
        "GitHub",
        "Mobile application development",
        "UI/UX design",
        "User interviews and surveys",
        "User personas",
        "Usability testing",
        "Nielsen's usability heuristics",
        "Accessibility evaluation planning"
      ]
    },

    {
      title: "What I Learned",
      list: [
        "Translated a real-world problem into a digital product concept",
        "Explored user research methods for understanding customer needs",
        "Applied personas and usability findings to product design",
        "Learned to plan a Flutter and Flask application architecture",
        "Considered accessibility and usability during product development",
        "Explored business models and product adoption strategies",
        "Practiced teamwork and collaborative software development"
      ]
    }
  ],

  links: [
    {
      label: "Source code on GitHub",
      url: "YOUR_LOUE_GITHUB_REPOSITORY_URL"
    }
  ]
}


  // copy a block for each of the other slugs:
  // "research-impact", "ml-data-analysis", "cybersecurity-tools",
  // "satellite-detection", "ai-search-logistics", "mzia-loue"
};
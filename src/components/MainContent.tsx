import React from 'react';
import { Telescope, Microscope, Briefcase, GraduationCap, Wrench, Folder, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

interface MainContentProps {
  isMobile?: boolean;
}

const MainContent = ({ isMobile = false }: MainContentProps) => {
  const experiences = [
    {
      title: "ML Research Intern (NLP)",
      company: "SecondBrainLabs",
      location: "Remote",
      period: "Jul 2024 – Oct 2024",
      description: [
        "Researched multi-agent LLM architectures for optimizing chatbot responses",
        "Analyzed interactions between agents and proposed performance improvements",
        "Contributed technical documentation for enhancing output coherence"
      ]
    },
    {
      title: "ML Intern",
      company: "Curriculo AI",
      location: "Remote",
      period: "Mar 2025 – May 2025",
      description: [
        "Developed FastAPI-based LLM pipelines for automated resume generation",
        "Reduced output inconsistencies by 40% through rigorous pipeline testing",
        "Built validation/fallback logic to improve semantic consistency"
      ]
    }
  ];

  const projects = [
    {
      title: "InferSafe – Self-Healing LLM Inference Infrastructure",
      description: [
        "Modular FastAPI system with GPU-aware routing and dynamic batching",
        "Token streaming via SSE for low-latency responses",
        "Prometheus/Grafana for observability + failure auto-recovery",
        "Simulated Kubernetes-style autoscaling with queued_requests",
        "Manim animation to visualize end-to-end pipeline"
      ]
    },
    {
      title: "LLMForge – Reddit-to-LoRA Fine-Tuning Pipeline",
      description: [
        "Ingestion + filtering using PRAW, Detoxify, Pandas",
        "Prefect + Modal for 12-hour LoRA finetuning jobs",
        "Hugging Face syncing of datasets & models",
        "CI/CD with pytest + GitHub Actions",
        "Minimal Streamlit interface for testing"
      ]
    },
    {
      title: "Malware Detection via Executable Image Representation",
      description: [
        "CNN-based classification of executables with 95% accuracy",
        "MLflow + Prefect for orchestration",
        "Docker + Streamlit deployed on Render"
      ]
    },
    {
      title: "Molecular Effectiveness Prediction (pIC50)",
      description: [
        "RDKit + XGBoost to predict chemical binding affinity",
        "Real-time Streamlit predictions via SMILES",
        "CI/CD with Docker, GitHub Actions, Prefect"
      ]
    }
  ];

  const skills = [
    { 
      category: "Languages", 
      items: ["Python (Primary)", "SQL (Analytical queries, joins, aggregations)", "Bash scripting"] 
    },
    { 
      category: "Frameworks & Libraries", 
      items: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "RDKit (for cheminformatics)"] 
    },
    { 
      category: "NLP & LLMs", 
      items: ["Transformers", "RNNs", "BiLSTM", "LSTMs" ,"Attention mechanisms", "Hugging Face Transformers", "LLM APIs (OpenAI, Groq)", "LoRA fine-tuning", "Tokenization (BPE, SentencePiece)", "Text classification, summarization, generation"] 
    },
    { 
      category: "MLOps & Deployment", 
      items: ["FastAPI (production-grade APIs)", "Docker (containerized ML apps)", "MLflow (tracking + orchestration)", "Prefect (task orchestration, retries, schedules)", "GitHub Actions (CI/CD)", "Hugging Face Hub (model + dataset sync)", "Token streaming (SSE)", "Render (cloud deployment)", "Prometheus (metrics)", "Grafana (dashboards)"] 
    },
    { 
      category: "Infrastructure & Cloud", 
      items: ["CI/CD pipelines", "Autoscaling simulations", "Model monitoring", "PostgreSQL", "API versioning", "GCP (basics)", "Modal (cloud jobs)"] 
    },
    { 
      category: "Data Handling & Visualization", 
      items: ["Pandas", "Matplotlib", "Seaborn", "Streamlit (interactive dashboards)", "JSON schemas"] 
    },
    { 
      category: "Others", 
      items: ["System design for ML backends", "Self-healing inference systems", "Experiment tracking", "Git/GitHub workflows"] 
    }
  ];

  const containerClass = isMobile 
    ? "max-w-4xl mx-auto px-4 py-8" 
    : "ml-80 pt-20 min-h-screen bg-gray-50";
  
  const contentClass = isMobile 
    ? "" 
    : "max-w-4xl mx-auto px-8 py-8";

  return (
    <div className={containerClass}>
      <div className={contentClass}>
        {/* Welcome Section */}
        <section id="home" className="mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              👋 Hiii! I'm <span className="text-blue-600">Hindol</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A passionate <strong>MLOps Engineer</strong> building robust, modular systems that bridge cutting-edge research and real-world impact—especially in low-resource and production-grade environments.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Passionate about bridging research and production, I believe machine learning should solve <em>real problems that matter</em>. From self-healing model servers to automating LLM fine-tuning on Reddit data, I combine engineering reliability with meaningful ML.
            </p>
          </div>
        </section>

        {/* Current Focus */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">🚀</span>
              Current Focus
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-xl">🔭</span>
                <span className="text-gray-700 text-sm md:text-base">Reimplementing state-of-the-art ML models from scratch to deepen core understanding</span>
              </div>
              <div className="flex items-start space-x-3">
              <span className="text-xl">🔬</span>
              <span className="text-gray-700 text-sm md:text-base">I'm currently learning about GNNs!</span>
            </div>

            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">🔧</span>
              Work Experience
            </h2>
            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-4 md:pl-6">
                  <div className="mb-2">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium text-sm md:text-base">{exp.company} · {exp.location} · <em>{exp.period}</em></p>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-700 text-sm md:text-base">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">🎓</span>
              Education
            </h2>
            <div className="border-l-4 border-blue-200 pl-4 md:pl-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Tripura Institute of Technology</h3>
              <p className="text-blue-600 font-medium text-sm md:text-base">BTech, Computer Science & Engineering</p>
              <p className="text-gray-600 italic text-sm md:text-base">Feb 2023 – Aug 2027</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">🧠</span>
              Skills
            </h2>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 md:p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 text-base md:text-lg">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="px-2 md:px-3 py-1 md:py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">💼</span>
              Projects
            </h2>
            <div className="space-y-6 md:space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-green-200 pl-4 md:pl-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <ul className="space-y-2">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-700 text-sm md:text-base">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">📫</span>
              Contact
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600" size={20} />
                  <a href="mailto:roychoudhuryhindol@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors text-sm md:text-base break-all">
                    roychoudhuryhindol@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700 text-sm md:text-base">Tripura, India</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Github className="text-blue-600" size={20} />
                  <a 
                    href="https://github.com/Hindolch" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-blue-600 transition-colors hover:underline text-sm md:text-base"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="text-blue-600" size={20} />
                  <a 
                    href="https://www.linkedin.com/in/hindol-choudhury/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-blue-600 transition-colors hover:underline text-sm md:text-base"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Twitter className="text-blue-600" size={20} />
                  <a 
                    href="https://x.com/Hindollllll" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-blue-600 transition-colors hover:underline text-sm md:text-base"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;

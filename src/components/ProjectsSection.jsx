import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Study Planner",
    description: "A Java application that generates personalized study plans for students using Google's Gemini API.",
    image: "/projects/smartstudyplanner.png",
    tags: ["Java", "JavaFX", "Gemini API Integration"],
    githubUrl: "https://github.com/SanjYE/AI_in_JAVA.git",
  },

  {
    id: 2,
    title: "Tic Tac Toe",
    description:
      "A simple Tic Tac Toe Game using the frontend Trioka i.e. HTML/CSS/JS",
    image: "/projects/tictactoepng.png",
    tags: ["HTML", "(CSS)", "JavaScript"],
    demoUrl: "https://ticitacatoee101.netlify.app/",
    githubUrl: "https://github.com/shank227/TicTacToe-Frontend.git",
  },

  {
    id: 3,
    title: "GitHub Repo Analyzer",
    description:
      "A Tool which gives the detail about all the stats of a Github User and built using API Integration",
    image: "/projects/github.png",
    tags: ["Python", "API Integration"],
    githubUrl: "https://github.com/shank227/github-repo-analyzer.git",
  },

  {
    id: 4,
    title: "Load Balancer URL Shortner",
    description:
      "used AWS as the hosting server and APAortener, using AWS and Kubernetes, demonstrating container orchestration and high availability cloud deployment.",
    image: "/projects/Load_balanced_url_service.jpg",
    tags: ["AWS", "Kubernetes"],
    githubUrl: "https://github.com/samyak2003-coder/498_519_533_534_URL_SHORTENER.git",
  },

  {
    id: 5,
    title: "Smart contract-based decentralized lending and borrowing platform using Ethereum",
    description:
      "the platform will allow users to lend cryptocurrency assets to earn interest or borrow assets by providing collateral.",
    image: "/projects/eth.jpeg",
    tags: ["Ethereum", "Blockchain", "Smart Contracts"],
    githubUrl: "https://github.com/samyak2003-coder/498_519_533_534_URL_SHORTENER.git",
  },


  {
    id: 6,
    title: "Content-based phishing detection program using machine learning and deep learning (in progress)",
    description:
      "built a hybrid phishing detection model leveraging LSTM for text sequence learning and GCN for relational graph analysis, implemented in Python with PyTorch and NLP preprocessing pipelines, optimizing detection accuracy and reducing false positives.",
    image: "/projects/phishing.webp",
    tags: ["NLP", "Deep Learning", "CyberSecuirty"],
    githubUrl: "#",
  },

  {
    id: 7,
    title: "AI Security Log Threat Detection (in progress)",
    description:
      "Built a deployable ML-based security log analyzer that detects anomalies and potential cyber threats using automated log parsing, anomaly detection models, and a live dashboard.",
    image: "/projects/logs.jpeg",
    tags: ["LSTM", "Feature Engineering", "CyberSecuirty", "Machine Learning"],
    githubUrl: "https://github.com/shank227/security-log-threat-detection.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/shank227"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

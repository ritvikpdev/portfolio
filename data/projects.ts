export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'other';
}

export const projects: Project[] = [

   //GoLLama
   {
    id: "go-llama",
    title: "GoLLama",
    description: "Distributed LLM inference system built in Go",
    longDescription: "GoLlama is an open-source API which uses a hub-and-spoke architecture to route requests to multiple llama.cpp workers, enabling distributed inference without relying on external LLM providers.",
    image: "/images/go_llama_project.png",
    technologies: ["Go", "LLM", "Distributed Computing","llama.cpp(via HTTP API","JWT Authentication"],
    githubUrl: "https://github.com/AntonisKotsikaris/csci_6221_GO",
    liveUrl: "",
    featured: true,
    category: "web"
  },
  // Simran Graphics Website
  {
    id: "simran-graphics-portfolio",
    title: "Simran Graphics Website",
    description: "A dynamic printing & design agency site with elegant layout and branding",
    longDescription: "A professionally built website for Simran Graphics, showcasing 25 years of printing and design expertise, client success stories, and a wide array of services—Offset Printing, Large Format, Packaging, Digital Printing, Specialty Finishes, and Design Support. Designed with a focus on readability, user trust, and service clarity.",
    image: "/images/simran_graphics_project.png",
    technologies: ["React.js", "Node.js","Tailwind CSS", "Responsive Design"],
    githubUrl: "",         // Not publicly available
    liveUrl: "https://simrangraphics.in/",
    featured: true,
    category: "web"
  },
  // Portfolio Website  
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills",
    longDescription: "A personal portfolio website showcasing my projects and skills",
    image: "/images/portfolio_project.png",
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design", "TypeScript"],
    githubUrl: "https://github.com/ritvikpdev/portfolio",
    liveUrl: "ritvikdev.vercel.app",
    featured: false,
    category: "web"
  }
 
];

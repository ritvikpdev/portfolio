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
 
  // Simran Graphics Website
  {
    id: "simran-graphics-portfolio",
    title: "Simran Graphics Website",
    description: "A dynamic printing & design agency site with elegant layout and branding",
    longDescription: "A professionally built website for Simran Graphics, showcasing 25 years of printing and design expertise, client success stories, and a wide array of services—Offset Printing, Large Format, Packaging, Digital Printing, Specialty Finishes, and Design Support. Designed with a focus on readability, user trust, and service clarity.",
    image: "/images/simran_graphics_project.png",
    technologies: ["React.js", "Tailwind CSS", "Responsive Design"],
    githubUrl: "",         // Not publicly available
    liveUrl: "https://simrangraphics.in/",
    featured: true,
    category: "web"
  },
];

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    instagram?: string;
  };
  location: string;
}

export const siteConfig: SiteConfig = {
  name: "ritvik.dev",
  title: "Portfolio | Ritvik K Panchbhaiya - Full-Stack Developer",
  description: "Full-stack developer with over 3 years of experience in creating functional applications and backend solutions.",
  email: "ritvik.kumar1104@gmail.com",
  url: "https://ritvikdev.com",
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/ritvikm10",
    linkedin: "https://www.linkedin.com/in/ritvik-kumar10/",
    instagram: "https://instagram.com/ritvik_m10",
  },
  location: "Arlington, Virginia, USA",
};

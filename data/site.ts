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
  emailjs: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "ritvik.dev",
  title: "Portfolio | Ritvik K Panchbhaiya - Full-Stack Developer",
  description: "Full-stack developer with over 3 years of experience in creating functional applications and backend solutions.",
  email: "ritvik.kumar1104@gmail.com",
  url: "https://ritvikdev.vercel.app",
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/ritvikpdev",
    linkedin: "https://www.linkedin.com/in/ritvikpanchbhaiya/",
    instagram: "https://instagram.com/ritvik_m10",
  },
  location: "Arlington, Virginia, USA",
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_z7nj9sg",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_3l9frgs",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "MaiDCmstpTruYdj0S",
  },
};

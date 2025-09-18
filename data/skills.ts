export interface Skill {
  name: string;
  level: number; // 1-5 scale
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'languages' | 'frameworks';
  icon?: string;
  logo?: string;
  description?: string;
}

export const skillLevelDescriptions = {
  1: "Just started learning",
  2: "Some practice with tutorials",
  3: "Basics - can build simple projects",
  4: "Proficient - comfortable with intermediate projects",
  5: "Expert - production-ready projects"
};

export const skills: Skill[] = [
  // Programming Languages
  { name: "Java", level: 5, category: "languages", icon: "☕", logo: "/logos/java.svg", description: "Expert in enterprise applications" },
  { name: "JavaScript", level: 4, category: "languages", icon: "🟨", logo: "/logos/javascript.svg", description: "Proficient in modern JS/ES6+" },
  { name: "TypeScript", level: 4, category: "languages", icon: "🔷", logo: "/logos/typescript.svg", description: "Strong typing for better code quality" },
  { name: "SQL", level: 4, category: "languages", icon: "🗃️", logo: "/logos/sql.svg", description: "Proficient in database queries and operations" },
  { name: "Python", level: 3, category: "languages", icon: "🐍", logo: "/logos/python.svg", description: "Basics in scripting and data analysis" },

  // Frontend Technologies
  { name: "React", level: 4, category: "frontend", icon: "⚛️", logo: "/logos/react.svg", description: "Component-based UI development" },
  { name: "Next.js", level: 4, category: "frontend", icon: "⚡", logo: "/logos/next.svg", description: "Full-stack React framework" },
  { name: "HTML", level: 5, category: "frontend", icon: "🌐", logo: "/logos/html.svg", description: "Expert in semantic markup" },
  { name: "CSS", level: 5, category: "frontend", icon: "🎨", logo: "/logos/css.svg", description: "Expert in styling" },
  { name: "Tailwind CSS", level: 4, category: "frontend", icon: "🎨", logo: "/logos/tailwindcss.svg", description: "Utility-first CSS framework" },

  // Backend Frameworks
  { name: "Spring Boot", level: 5, category: "frameworks", icon: "🍃", logo: "/logos/springboot.svg", description: "Enterprise Java applications" },
  { name: "Express.js", level: 4, category: "frameworks", icon: "🚂", logo: "/logos/express.svg", description: "Node.js web framework" },
  { name: "Flask", level: 3, category: "frameworks", icon: "🐍", logo: "/logos/flask.svg", description: "Python web microframework" },
  { name: "Thymeleaf", level: 5, category: "frameworks", icon: "🌿", logo: "/logos/thymeleaf.svg", description: "Java template engine" },

  // Backend Technologies
  { name: "Node.js", level: 4, category: "backend", icon: "🟢", logo: "/logos/node.svg", description: "Server-side JavaScript runtime" },

  // Databases
  { name: "PostgreSQL", level: 4, category: "database", icon: "🐘", logo: "/logos/postgresql.svg", description: "Advanced relational database" },
  { name: "MySQL", level: 4, category: "database", icon: "🔐", logo: "/logos/mysql.svg", description: "Relational database management" },
  { name: "SQL Server", level: 4, category: "database", icon: "🗄️", logo: "/logos/sqlserver.svg", description: "Microsoft database platform" },
  { name: "Oracle Database", level: 4, category: "database", icon: "🔶", logo: "/logos/oracle.svg", description: "Enterprise database solutions" },
  { name: "MongoDB", level: 3, category: "database", icon: "🍃", logo: "/logos/mongo.svg", description: "NoSQL document database" },

  // DevOps & Tools
  { name: "Git", level: 5, category: "devops", icon: "📝", logo: "/logos/git.svg", description: "Version control and collaboration" },
  { name: "Docker", level: 3, category: "devops", icon: "🐳", logo: "/logos/docker.svg", description: "Containerization basics" },
  { name: "Maven", level: 5, category: "devops", icon: "📦", logo: "/logos/maven.svg", description: "Java project management" },

];

export const skillCategories = [
  { id: 'languages', name: 'Programming Languages', color: 'bg-red-500', description: 'Core programming languages' },
  { id: 'frontend', name: 'Frontend Technologies', color: 'bg-blue-500', description: 'User interface development' },
  { id: 'frameworks', name: 'Frameworks & Libraries', color: 'bg-green-500', description: 'Development frameworks' },
  { id: 'backend', name: 'Backend Technologies', color: 'bg-purple-500', description: 'Server-side development' },
  { id: 'database', name: 'Databases', color: 'bg-indigo-500', description: 'Data storage and management' },
  { id: 'devops', name: 'DevOps & Tools', color: 'bg-orange-500', description: 'Development operations' },
  
];

// Group skills by level for better organization
export const getSkillsByLevel = (minLevel: number = 3) => {
  return skills.filter(skill => skill.level >= minLevel);
};

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};

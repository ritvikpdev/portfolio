export interface Role {
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface CompanyExperience {
  id: string;
  company: string;
  location: string;
  companyUrl?: string;
  roles: Role[];
}

export const companyExperiences: CompanyExperience[] = [
  {
    "id": "accenture",
    "company": "Accenture",
    "location": "Hyderabad, India",
    "companyUrl": "https://www.accenture.com/in-en",
    "roles": [
      {
        "position": "Software Engineer Analyst",
        "startDate": "2022-10",
        "endDate": "2025-07",
        "current": false,
        "description": "Developed high-performance enterprise web applications for banking clients, collaborating with cross-functional teams to deliver secure, scalable, and automated solutions.",
        "achievements": [
          "Developed a Spring application processing 300K–400K transactions daily with full accuracy and efficiency",
          "Optimized CRUD operations and database queries, improving performance and scalability in a secure banking environment",
          "Enhanced automation capabilities and configured the codebase for CI/CD deployments using Jenkins, enabling smoother releases and reducing deployment errors",
          "Delivered features in a Scrum-based Agile environment using Jira, while leveraging Bitbucket for version control, branch management, and peer code reviews"
        ],
        "technologies": ["Java", "Spring Boot", "SQL", "Oracle Database" , "Jenkins", "HTML", "CSS", "JavaScript", "Bitbucket", "Jira", "Agile/Scrum","Git","Docker","Maven",]
      },
      {
        "position": "Associate Software Engineer",
        "startDate": "2021-09",
        "endDate": "2022-10",
        "current": false,
        "description": "Supported development of secure web applications, implementing core backend and admin portal functionalities while gaining full-stack development experience.",
        "achievements": [
          "Built and enhanced web application modules, implementing secure authentication, authorization, and a feature-rich admin portal with responsive UI components",
          "Participated in code reviews, debugging, and integration testing, ensuring reliable and maintainable code",
          "Completed a 3-month Java Full Stack training program, gaining hands-on experience with Spring Boot, Hibernate, JSP/Servlets, and delivering end-to-end applications"
        ],
        "technologies": ["Java", "Spring Boot", "Hibernate", "JSP/Servlets", "MySQL", "SQL", "HTML", "CSS", "JavaScript", "Jira", "Bitbucket", "Agile/Scrum","Git","Thymeleaf"]
      }
    ]
  },
  {
    "id": "agilite-global-solutions",
    "company": "Agilite Global Solutions Company, LLC",
    "location": "Remote",
    "companyUrl": "https://www.agilite.com",
    "roles": [
      {
        "position": "Software Development Intern",
        "startDate": "2022-02",
        "endDate": "2022-06",
        "current": false,
        "description": "Designed and implemented multi-layered .NET applications, focusing on scalable architecture, business logic, and improving overall user interface modularity.",
        "achievements": [
          "Designed and developed a multi-layered .NET application with SQL Server, focusing on scalable architectural design and implementation",
          "Developed entity classes and business logic using SOLID principles and design patterns, enhancing UI modularity and improving overall codebase maintainability"
        ],
        "technologies": [".NET", "ASP.NET", "SQL Server", "Entity Framework", "HTML", "CSS", "Blazor"]
      }
    ]
  }    
];

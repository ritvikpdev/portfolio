export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  gpa?: string;
  institutionUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  issuerUrl?: string;
  certificateUrl?: string;
}

export const education: Education[] = [
  {
    id: "graduate-degree",
    institution: "George Washington University",
    degree: "Master of Science",
    field: "Computer Science",
    location: "Washington, D.C.",
    startDate: "2025-09",
    endDate: "2027-05",
    description: "Currently pursuing a Master’s in Computer Science at GWU (Fall 2025), focusing on applied AI, machine learning, and big data analytics. Passionate about AI-driven development, I aim to build real-world applications that leverage intelligent systems to solve practical business problems.",
    achievements: [
      "Awarded the International Impact Award, receiving 50% tuition scholarship for academic excellence and potential impact."
    ],
    
    gpa: "NA yet",
    institutionUrl: "https://www.gwu.edu/"
  }
  ,{
    id: "bachelor-degree",
    institution: "Sikkim Manipal Institute of Technology",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    location: "Sikkim, India",
    startDate: "2018-09",
    endDate: "2022-06",
    description: "Focused on software engineering, Data Structures and Algorithms, Object-Oriented Programming (OOP), Operating Systems, Database Management Systems (DBMS) and AI/M. Completed capstone project on software development.",
    achievements: [
      "Strong foundation in core CS subjects (DSA, OOPS, OS, Networks, DBMS, Software Engineering) with top grades.",
      "Hands-on experience in Software Development, and Web Technologies through labs, projects, and a 12-credit major project",
      "Student council member as a Gender Champion (2019-21)",
      "Led Innovision Technical Club as core team member, organizing Tech Adrishta (tech fest) and technical workshops.",
      "Completed an internship at Agilite Global solutions as a Software developer Intern",
      "Represented the university at major inter-college cricket tournaments."
    ],
    gpa: "8.94/10",
    institutionUrl: "https://smu.edu.in/smit/"
  }
];

export const certifications: Certification[] = [
  {
    id: "application-development-and-security",
    name: "Application Development & Security",
    issuer: "skillsoft",
    issueDate: "2024-08",
    credentialId: "0x39865b3b97ee18eca1720353d8065ca6be68181a8f3d7efd48f4492946b32da5",
    issuerUrl: "https://skillsoft.com",
    certificateUrl: "https://skillsoft.digitalbadges.skillsoft.com/8a173ff0-8d65-42f5-adca-5770ed80e9aa#acc.sA9ZjpDk"
  },
  {
    id: "artificial-intelligence-and-machine-learning",
    name: "Artificial Intelligence and Machine Learning",
    issuer: "skillsoft",
    issueDate: "2024-06",
    credentialId: "0xa4f39d68305095513417f6bb9971952052df1bf33c0156320fa1d7f9b4eeb266",
    issuerUrl: "https://skillsoft.com",
    certificateUrl: "https://skillsoft.digitalbadges.skillsoft.com/06ea7de1-5579-4ca9-b1c0-5bfe0be4193f#acc.OMWyxnrh"
  },
  {
    id: "agile-and-tdd-best-practices-for-apis-test-driven-development-strategy",
    name: "Agile & TDD Best Practices for APIs: Test-driven Development Strategy",
    issuer: "skillsoft",
    issueDate: "2023-02",
    credentialId: "776333",
    issuerUrl: "https://skillsoft.com",
    certificateUrl: "https://skillsoft.digitalbadges.skillsoft.com/a98c6e81-893c-4eb2-9ae0-a519dab8d939#acc.eZqLTzOH"
  },
  {
    id: "solid-and-grasp",
    name: "SOLID & GRASP",
    issuer: "skillsoft",
    issueDate: "2023-02",
    credentialId: "776474",
    issuerUrl: "https://skillsoft.com",
    certificateUrl: "https://skillsoft.digitalbadges.skillsoft.com/48d1228a-6901-49d8-817e-9f5a492bd00e#acc.pXnCQH7x"
  }
];

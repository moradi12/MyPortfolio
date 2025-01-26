// data.js

export const SKILLS = [
  {
    title: "Frontend",
    icon: "/assets/images/frontendicon.png",
    skills: [
      { skill: "HTML5", percentage: "75%" },
      { skill: "CSS", percentage: "80%" },
      { skill: "JavaScript", percentage: "80%" },
      { skill: "React.js", percentage: "80%" },
      { skill: "TypeScript", percentage: "85%" },
    ],
  },
  {
    title: "Backend",
    icon: "/assets/images/backendicon.png",
    skills: [
      { skill: "Java", percentage: "80%" },
      { skill: "Spring Framework", percentage: "80%" },
    ],
  },
  {
    title: "Tools",
    icon: "/assets/images/toolsicon.png",
    skills: [
      { skill: "Git & GitHub", percentage: "80%" },
      { skill: "Visual Studio Code", percentage: "80%" },
      { skill: "npm", percentage: "80%" },
      { skill: "MySQL", percentage: "85%" },
      { skill: "IntelliJ IDEA", percentage: "85%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "/assets/images/softskillsicon.png",
    skills: [
      { skill: "Problem-Solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "80%" },
      { skill: "Communication", percentage: "85%" },
      { skill: "Adaptability", percentage: "80%" },
      { skill: "Time Management", percentage: "80%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Procurement and Logistics Manager",
    company: "Noyhasade",
    date: "2020 - 2021",
    responsibilities: [
      "Optimized supply chain efficiency, reducing costs.",
      "Managed vendor relationships and negotiated favorable contracts.",
      "Enhanced processes and workflows to increase productivity.",
      "Implemented IT solutions to streamline operations and drive digital transformation.",
      "Focused on operational excellence to maximize organizational value.",
    ],
  },
  {
    title: "Sales Representative",
    company: "Bug Multisystem Ltd",
    date: "2018 - 2020",
    responsibilities: [
      "Consistently exceeded sales targets and contributed to revenue growth.",
      "Applied strategic thinking and in-depth product knowledge to close deals.",
      "Strengthened customer relationships and provided exceptional service.",
      "Recruited and trained new team members, boosting retention and long-term success.",
    ],
  },
  {
    title: "FP&A Specialist",
    company: "Israel Defense Forces Agency",
    date: "2015 - 2017",
    responsibilities: [
      "Served as Data Science and Analytics Lead in the Budget Department (Ministry of Defense), advising the Chief of Staff.",
      "Built financial models, performed profitability analyses, and led FP&A initiatives.",
      "Conducted effective negotiations, procurement, and vendor management to optimize resources.",
    ],
  },
  {
    title: "Education – College of Management Academic Studies",
    date: "2022 - 2023",
    responsibilities: [
      "Completed a comprehensive program in economics and business strategies, sharpening analytical and critical thinking skills.",
      "Gained a strong foundation for advanced studies and professional challenges in business and management fields.",
    ],
  },
  {
    title: "Education – John Bryce Training College",
    date: "2023 - 2024",
    responsibilities: [
      "Developed web applications using Java, Spring Boot, and React.",
      "Designed RESTful APIs and utilized Redux for state management.",
      "Implemented JWT authentication and optimized SQL/NoSQL databases.",
      "Ensured code quality through reviews and testing.",
    ],
  },
];

export const EDUCATION = [
  {
    title: "EDUCATION",
    institutions: [
      {
        name: "College of Management Academic Studies",
        date: "2022 - 2023",
        responsibilities: [
          "Preparatory Academic Program in Mathematics, Economics, and Business Administration.",
        ],
      },
      {
        name: "John Bryce Training College",
        date: "2022 - 2023",
        responsibilities: [
          "Java Full-Stack Developer Program.",
        ],
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Hotel Management System",
    description:
      "A comprehensive web application for managing hotel operations and enhancing customer experiences. Customers can book rooms, review booking history, and manage profiles, while administrators oversee room management and update services.",
    technologies: ["React.js", "Java", "Spring Boot", "MySQL", "JWT", "Notyf"],
    link: "https://github.com/moradi12/Hotel-Project.git",
    variant: "0", // Added variant
  },
  {
    title: "Coupon Management System",
    description:
      "A platform for creating, managing, and redeeming coupons. Customers can view available coupons and redeem them, while admins can create, update, and delete coupons, manage customer information, and view coupon usage analytics.",
    technologies: ["React.js", "Java", "Spring Boot", "MySQL", "JWT", "Notyf", "Redux"],
    link: "https://github.com/moradi12/Completed-Coupon-Project",
    variant: "1", // Added variant
  },
  {
    title: "Recipe Book",
    description:
      "A modern web application for browsing, creating, and managing recipes. It features secure JWT-based authentication, real-time notifications, advanced search and filtering, and a responsive design for a seamless user experience.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Material-UI",
      "Redux Toolkit",
      "Spring Boot",
      "MySQL",
      "JWT",
      "Kafka",
      "Swagger",
    ],
    link: "https://github.com/moradi12/Recipe-Book",
    variant: "3", // Added variant
  },
];

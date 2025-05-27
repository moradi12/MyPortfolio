export const SKILLS = [
  {
    id: 0,
    title: "Frontend",
    icon: "/assets/images/frontendicon.png",
    skills: [
      { skill: "HTML5", percentage: "75%" },
      { skill: "CSS", percentage: "80%" },
      { skill: "JavaScript", percentage: "80%" },
      { skill: "React", percentage: "80%" },
      { skill: "TypeScript", percentage: "85%" },
      { skill: "Tailwind CSS", percentage: "80%" },
      { skill: "Bootstrap", percentage: "80%" },
      { skill: "Vite", percentage: "80%" },
    ],
  },
  {
    id: 1,
    title: "Backend",
    icon: "/assets/images/backendicon.png",
    skills: [
      { skill: "Java", percentage: "80%" },
      { skill: "Spring Framework", percentage: "80%" },
      { skill: "Python", percentage: "70%" },
    ],
  },

  {
    id: 6,
    title: "Soft Skills",
    icon: "/assets/images/softskillsicon.png",
    skills: [
      { skill: "Leadership", percentage: "85%" },
      { skill: "Communication", percentage: "85%" },
      { skill: "Problem-Solving", percentage: "90%" },
      { skill: "Adaptability", percentage: "80%" },
    ],
  },

  {
    id: 2,
    title: "Databases & ORMs",
    icon: "/assets/images/databaseicon.png",
    skills: [
      { skill: "MySQL", percentage: "85%" },
      { skill: "PostgreSQL", percentage: "70%" },
      { skill: "Hibernate/JPA", percentage: "80%" },
    ],
  },
  {
    id: 3,
    title: "Dev & Testing Tools",
    icon: "/assets/images/dev.png",
    skills: [
      { skill: "Postman", percentage: "80%" },
      { skill: "Docker", percentage: "70%" },
      { skill: "Swagger / OpenAPI", percentage: "85%" },
      { skill: "Jest / Testing Library", percentage: "75%" },
    ],
  },
  {
    id: 4,
    title: "Cloud & CI/CD",
    icon: "/assets/images/cloud.png",
    skills: [
      { skill: "AWS", percentage: "70%" },
      { skill: "GitHub Actions", percentage: "75%" },
    ],
  },
  {
    id: 5,
    title: "AI & Emerging Tech",
    icon: "/assets/images/aiicon.png",
    skills: [
      { skill: "ChatGPT / GPT APIs", percentage: "90%" },
      { skill: "Cursor IDE", percentage: "85%" },
      { skill: "Prompt Engineering", percentage: "70%" },
      { skill: "AI-Powered Dev Tools", percentage: "70%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    id: 0,
    title: "Procurement & Logistics Manager",
    company: "Noyhasade",
    date: "2020 – 2021",
    responsibilities: [
      "Optimised supply-chain efficiency and reduced costs.",
      "Negotiated vendor contracts and managed relationships.",
      "Implemented IT solutions to streamline operations.",
    ],
  },
  {
    id: 1,
    title: "Sales Representative",
    company: "Bug Multisystem Ltd",
    date: "2018 – 2020",
    responsibilities: [
      "Consistently exceeded quarterly sales targets.",
      "Strengthened key customer relationships.",
      "Recruited and mentored new team members.",
    ],
  },
  {
    id: 2,
    title: "FP&A Specialist",
    company: "Israel Defense Forces (MoD)",
    date: "2015 – 2017",
    responsibilities: [
      "Led analytics for the Budget Department, advising the Chief of Staff.",
      "Built financial models and profitability analyses.",
      "Drove vendor negotiation and procurement strategy.",
    ],
  },
];

/* --------------------------------------------------  EDUCATION  -- */
export const EDUCATION = [
  {
    id: 0,
    institution: "College of Management Academic Studies",
    date: "2022 – 2023",
    details: [
      "Preparatory Academic Program – Mathematics, Economics & Business Administration.",
    ],
  },
  {
    id: 1,
    institution: "John Bryce Training College",
    date: "2023 – 2024",
    details: [
      "Java Full-Stack Developer Programme (Java, Spring Boot, React, REST APIs, JWT).",
    ],
  },
];

/* --------------------------------------------------  PROJECTS  -- */
export const PROJECTS = [
  {
    id: 0,
    title: "Hotel Management System",
    description:
      "Full-stack web app allowing guests to book rooms and admins to manage all hotel operations in one place.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Axios",
      "Spring Boot",
      "Hibernate",
      "JWT",
      "Swagger",
      "MySQL",
    ],
    link: "https://github.com/moradi12/Hotel-Project",
    demo: "https://sunsetqueen-hotel.netlify.app/",
    variant: "0",
    images: [
      "/assets/images/hotel1.png",
      "/assets/images/hotel2.png",
      "/assets/images/hotel3.png",
    ],
  },
  {
    id: 1,
    title: "Coupon Management System",
    description:
      "Role-based platform for businesses to create coupons and for customers to redeem them, with real-time analytics.",
    technologies: ["React", "Redux", "Spring Boot", "MySQL", "JWT", "Notyf"],
    link: "https://github.com/moradi12/Completed-Coupon-Project",
    demo: "https://frontcoupon.netlify.app/",
    variant: "1",
    images: ["/assets/images/coupon1.png", "/assets/images/coupon2.png"],
  },
  {
    id: 2,
    title: "Recipe Book",
    description:
      "Modern recipe manager featuring JWT auth, advanced filtering and a Kafka-powered notifications pipeline.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Material-UI",
      "Redux Toolkit",
      "Spring Boot",
      "MySQL",
      "Kafka",
      "Swagger",
    ],
    link: "https://github.com/moradi12/Recipe-Book",
    variant: "2",
    images: ["/assets/images/recipe1.png", "/assets/images/recipe2.png"],
  },
];

import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Diego",
  lastName: "Maldini Freyre",
  name: "Diego M. Maldini Freyre",
  role: "AI Transformation & Automation Partner",
  avatar: "/images/avatar.jpg",
  email: "diegomaldinifreyre@gmail.com",
  location: "America/Argentina/Cordoba", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish", "Portuguese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates about AI, automation, and digital transformation</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/diegommf",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/diegommf",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Catalyzing efficiency and innovation through AI & Automation</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    I'm Diego, an AI Engineer and Full-Stack Developer specializing in <Text as="span" size="xl" weight="strong">AI Agents, LLMs, and Automation</Text>. <br /> I transform businesses through intelligent solutions at the intersection of AI, DLTs, and modern development.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Villa Dolores, Córdoba, Argentina`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Diego is a Digital Transformation Executive and Technology Partner with over 5 years of experience 
        in software development and teaching. University Technician in Information Technology, passionate 
        about the convergence of AI, DLTs, and Automation, focusing on AI Agents, LLMs, Smart Contracts, 
        and n8n workflows. Published author of 4 books with proven leadership in solution identification 
        and project management.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2025 - Present",
        role: "AI Engineer",
        achievements: [
          <span key="1">
            Leading research and implementation of solutions at the intersection of AI, DLTs, and Real Estate, 
            exploring use cases for smart contracts and automation.
          </span>,
          <span key="2">
            Developing AI Agent prototypes using LLM technologies for automation and transformation tasks.
          </span>,
          <span key="3">
            Applying problem-solving approach to identify optimization opportunities in freelance projects.
          </span>,
        ],
        images: [],
      },
      {
        company: "Slik",
        timeframe: "2022 - 2025",
        role: "Senior Frontend Developer",
        achievements: [
          <span key="1">
            Responsible for development and implementation of advanced user interfaces with React and Next.js.
          </span>,
          <span key="2">
            Mentoring junior developers and applying code standards and best practices.
          </span>,
          <span key="3">
            Contributing to frontend architecture, ensuring scalability and performance.
          </span>,
        ],
        images: [],
      },
      {
        company: "Freelance / Inventa",
        timeframe: "2018 - 2022",
        role: "Software Developer / React Developer",
        achievements: [
          <span key="1">
            Software and React application development for clients, managing the full development lifecycle.
          </span>,
          <span key="2">
            Teaching experience (Full-Stack MERN) at Digital House, training the next generation of developers.
          </span>,
        ],
        images: [],
      },
      {
        company: "Networking de Emprendedores de Traslasierra",
        timeframe: "2018 - 2020",
        role: "Founding Director",
        achievements: [
          <span key="1">
            Founded and directed a networking initiative to foster business growth and community management, 
            demonstrating leadership capacity and strategic vision.
          </span>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Universidad de Palermo",
        description: <>Engineer's Degree in Artificial Intelligence (Planned: 2025 - 2029)</>,
      },
      {
        name: "Universidad Tecnológica Nacional (FRSF)",
        description: <>University Technician in Information Technology (2021 - 2024)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Key Competencies",
    skills: [
      {
        title: "Artificial Intelligence & DLT",
        description: (
          <>Expertise in Generative AI, LLMs, AI Agents, Blockchain/DLT, and Smart Contracts (Solidity, EVM). 
          Strong foundation in Data Science and Machine Learning fundamentals.</>
        ),
        tags: [
          {
            name: "AI",
            icon: "openai",
          },
          {
            name: "Blockchain",
            icon: "ethereum",
          },
        ],
        images: [],
      },
      {
        title: "Automation & DevOps",
        description: (
          <>Professional workflows with n8n, Docker (Fundamentals & Advanced), Cloud Computing (AWS: EC2, IAM, Networks; GCS), 
          and Full-Stack Development with React, Next.js, and MERN stack.</>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
      {
        title: "Strategy & Leadership",
        description: (
          <>Systems & Solutions Analysis, Project Management (Scrum), Stakeholder Management, 
          and Technology Management. Published author of 4 books with proven communication skills.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI, automation and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI, automation and development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };

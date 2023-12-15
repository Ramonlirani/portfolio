import { BACKEND_SKILLS, FRONTEND_SKILLS, OTHERS_SKILLS } from "./tech-skills";
import recordar from "@/assets/image/recordar.png";
import dreamfit from "@/assets/image/dreamfit.png";
import reactgram from "@/assets/image/reactgram.png";
import dsdelivery from "@/assets/image/dsdelivery.png";
import animaisfantasticos from "@/assets/image/animaisfantasticos.png";
import BlogNubank from "@/assets/image/blognubank.png";
import hbusca from "@/assets/image/hbusca.png";

export const PROJECT_CATEGORY = {
   ALL: "all",
   FULL_STACK: "full-stack",
   FRONT_ENT: "front-end",
};

export const TABS = [
   {
      label: "All",
      value: PROJECT_CATEGORY.ALL,
      icon: "fluent:tab-desktop-20-regular",
   },
   {
      label: "Full Stack",
      value: PROJECT_CATEGORY.FULL_STACK,
      icon: "bx:code-block",
   },
   {
      label: "Front end",
      value: PROJECT_CATEGORY.FRONT_ENT,
      icon: "ep:brush",
   },
];

const getSkillByLabel = (skills, techLabel) =>
   skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
   {
      imgSrc: recordar,
      title: "Recordar.art.br - Souvenir photo albums",
      techIcons: [
         getSkillByLabel(FRONTEND_SKILLS, "HTML"),
         getSkillByLabel(FRONTEND_SKILLS, "CSS"),
         getSkillByLabel(FRONTEND_SKILLS, "React.js"),
         getSkillByLabel(FRONTEND_SKILLS, "Next.js"),
         getSkillByLabel(FRONTEND_SKILLS, "Typescript"),
         getSkillByLabel(FRONTEND_SKILLS, "Tailwind CSS"),
         getSkillByLabel(FRONTEND_SKILLS, "React Hook Form"),
         getSkillByLabel(BACKEND_SKILLS, "Node.js"),
         getSkillByLabel(BACKEND_SKILLS, "REST Api"),
         getSkillByLabel(BACKEND_SKILLS, "Express (Node.js Framework)"),
         getSkillByLabel(BACKEND_SKILLS, "Nest.js"),
         getSkillByLabel(BACKEND_SKILLS, "PostgreSQL"),
         getSkillByLabel(BACKEND_SKILLS, "Prisma"),
         getSkillByLabel(BACKEND_SKILLS, "Docker"),
      ],
      description: `Preserving important values is what the Recordar system is all about. We preserve memory and value life. Recordar is a service that protects humanity and fights to preserve the memory and values that people and institutions consider important.`,
      repoLink: "",
      sourceLink: "https://recordar.art.br",
      category: [PROJECT_CATEGORY.FULL_STACK],
   },
   {
      imgSrc: dreamfit,
      title: "DreamFit - E-commerce Project",
      techIcons: [
         getSkillByLabel(FRONTEND_SKILLS, "HTML"),
         getSkillByLabel(FRONTEND_SKILLS, "CSS"),
         getSkillByLabel(FRONTEND_SKILLS, "React.js"),
         getSkillByLabel(FRONTEND_SKILLS, "Next.js"),
         getSkillByLabel(FRONTEND_SKILLS, "Typescript"),
         getSkillByLabel(FRONTEND_SKILLS, "Tailwind CSS"),
         getSkillByLabel(FRONTEND_SKILLS, "React Hook Form"),
         getSkillByLabel(BACKEND_SKILLS, "Node.js"),
         getSkillByLabel(BACKEND_SKILLS, "REST Api"),
         getSkillByLabel(BACKEND_SKILLS, "Express (Node.js Framework)"),
         getSkillByLabel(BACKEND_SKILLS, "Nest.js"),
         getSkillByLabel(BACKEND_SKILLS, "PostgreSQL"),
         getSkillByLabel(BACKEND_SKILLS, "Prisma"),
         getSkillByLabel(BACKEND_SKILLS, "Docker"),
      ],
      description: `Fitness clothing e-commerce with a customer, employee and administrator registration system where you have the autonomy to register products and maintain the site through the system.`,
      repoLink: "https://github.com/Ramonlirani/projeto-ecommerce",
      sourceLink: "",
      category: [PROJECT_CATEGORY.FULL_STACK],
   },
   {
      imgSrc: reactgram,
      title: "Reactgram project",
      techIcons: [
         getSkillByLabel(FRONTEND_SKILLS, "HTML"),
         getSkillByLabel(FRONTEND_SKILLS, "CSS"),
         getSkillByLabel(FRONTEND_SKILLS, "React.js"),
         getSkillByLabel(FRONTEND_SKILLS, "Redux"),
         getSkillByLabel(FRONTEND_SKILLS, "React Router"),
         getSkillByLabel(BACKEND_SKILLS, "REST Api"),
         getSkillByLabel(BACKEND_SKILLS, "Mongodb"),
         getSkillByLabel(BACKEND_SKILLS, "Express (Node.js Framework)"),
      ],
      description:
         "This Reactgram project is a system similar to instagram with login, registration, and registration of photos, comments and likes. Professor Matheus Battisti course - React from Zero to Mastery (w/ hooks, router, API, Projects)",
      repoLink: "https://github.com/dhavalCode/dev-portfolio",
      sourceLink: "https://dhavalcode.com/",
      category: [PROJECT_CATEGORY.FULL_STACK],
   },
   {
      imgSrc: dsdelivery,
      title: "Dsdelivery  - Restaurant menu",
      techIcons: [
         getSkillByLabel(FRONTEND_SKILLS, "HTML"),
         getSkillByLabel(FRONTEND_SKILLS, "CSS"),
         getSkillByLabel(FRONTEND_SKILLS, "Typescript"),
         {
            label: "Java",
            icon: "logos:java",
         },
      ],
      description:
         "The backend of this project was developed in java with Springboot it is an ordering project with a restaurant menu",
      repoLink: "https://github.com/Ramonlirani/dsdeliver-sds2",
      sourceLink: "https://ramonliranisds2.netlify.app/",
      category: [PROJECT_CATEGORY.FULL_STACK],
   },
   {
      imgSrc: animaisfantasticos,
      title: "Animais fantásticos - TMDB API Project",
      techIcons: [
         getSkillByLabel(FRONTEND_SKILLS, "HTML"),
         getSkillByLabel(FRONTEND_SKILLS, "CSS"),
         getSkillByLabel(FRONTEND_SKILLS, "Javascript"),
      ],
      description:
         "This project was from a JavaScript course Complete ES6 from Origamid, it's just a landing page.",
      repoLink: "https://github.com/Ramonlirani/AnimaisFantasticos",
      sourceLink: "",
      category: [PROJECT_CATEGORY.FRONT_ENT],
   },
   {
      imgSrc: BlogNubank,
      title: "BlogNubank - University Project",
      techIcons: [
         getSkillByLabel(FRONTEND_SKILLS, "HTML"),
         getSkillByLabel(FRONTEND_SKILLS, "Chakra UI"),
         getSkillByLabel(FRONTEND_SKILLS, "React.js"),
      ],
      description:
         "This project was made for the subject Applied Communication, where it is just a landing page to represent some important points of a company.",
      repoLink: "https://github.com/Ramonlirani/BlogNubank",
      sourceLink: "https://blog-nubank.vercel.app",
      category: [PROJECT_CATEGORY.FRONT_ENT],
   },
   {
      imgSrc: hbusca,
      title: "Hbusca - Challenge Clicksoft",
      techIcons: [
         getSkillByLabel(FRONTEND_SKILLS, "React Native"),
         getSkillByLabel(FRONTEND_SKILLS, "Styled Components"),
         getSkillByLabel(OTHERS_SKILLS, "Expo"),
         getSkillByLabel(OTHERS_SKILLS, "Android Studio"),
      ],
      description:
         "Technical challenge for a mobile internship position, includes use of the github api.",
      repoLink: "https://github.com/Ramonlirani/HUBusca",
      sourceLink:
         "https://drive.google.com/file/d/1PfOiEkJRv0YNeK17kj9F2aXsRsJU9EOO/view?usp=drive_link",
      category: [PROJECT_CATEGORY.FRONT_ENT],
   },
];

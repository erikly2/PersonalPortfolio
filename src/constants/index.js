import {
  javascript,
  html,
  css,
  cplusplus,
  sql,
  c,
  python,
  java,
  reactjs,
  git,
  syllabestie,
  madlib,
  SAP,
} from "../assets";

export const navLinks = [
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "SyllaBestie",
    description:
      "Web-based platform that allows users to gather crutial dates from their syllabi and import those dates to a calender application of their choice.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: syllabestie,
    source_code_link: "https://github.com/CS222-UIUC/course-project-group-14",
  },
  {
    name: "Social Media API",
    description:
      "Application Programming Interface that edits information from a database. Allows user to register, login, and send, recieve, and edit messages.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
    ],
    image: SAP,
    source_code_link: "https://github.com/erikly2/erikly2-pep-project",
  },
  {
    name: "Sentiment Analysis Program",
    description:
      "A program that takes a tweet and determines the sentiment of that tweet. Utilizes decision trees and tweets from the Twitter API to formulate a response",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Natural Language Programming",
        color: "green-text-gradient",
      },
    ],
    image: SAP,
    source_code_link: "https://github.com/erikly2/LING490-Hate-Speech-Detection",
  },
  {
    name: "Madlib API",
    description:
      "Web application that allows users to construct a Mad Libs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: madlib,
    source_code_link: "https://github.com/erikly2/MadLib-API",
  },
];

export { technologies, projects };
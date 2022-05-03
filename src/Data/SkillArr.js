import {
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaReact,
  FaPython,
} from "react-icons/fa";

import {
  SiHandlebarsdotjs,
  SiThreedotjs,
  SiBulma,
  SiMaterialui,
  SiWebpack,
} from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io";
import { GrGraphQl, GrMysql } from "react-icons/gr";

export const SkillArr = [
  {
    technology: "Node.js",
    icon: <FaNodeJs />,
    type: "Foundamental",
    proficiency: 60,
  },
  {
    technology: "JavaScript",
    icon: <IoLogoJavascript />,
    type: "Foundamental",
    proficiency: 80,
  },
  {
    technology: "Handlebars",
    icon: <SiHandlebarsdotjs />,
    type: "Frontend",
    proficiency: 60,
  },
  {
    technology: "HTML5",
    icon: <FaHtml5 />,
    type: "Frontend",
    proficiency: 80,
  },
  {
    technology: "CSS3",
    icon: <FaCss3 />,
    type: "Frontend",
    proficiency: 80,
  },
  {
    technology: "Git",
    icon: <FaGitAlt />,
    type: "Foundamental",
    proficiency: 60,
  },
  { technology: "MySQL", icon: <GrMysql />, type: "Backend", proficiency: 60 },

  { technology: "React", icon: <FaReact />, type: "Frontend", proficiency: 60 },

  {
    technology: "GraphQL",
    icon: <SiWebpack />,
    type: "Frontend",
    proficiency: 60,
  },
  {
    technology: "Webpack",
    icon: <GrGraphQl />,
    type: "Backend",
    proficiency: 60,
  },
  {
    technology: "Bulma",
    icon: <SiBulma />,
    type: "Frontend",
    proficiency: 60,
  },
  {
    technology: "Material-UI",
    icon: <SiMaterialui />,
    type: "Frontend",
    proficiency: 30,
  },
  {
    technology: "Python",
    icon: <FaPython />,
    type: "Backend",
    proficiency: 60,
  },
  {
    technology: "Three.js",
    icon: <SiThreedotjs />,
    type: "Learning",
    proficiency: 10,
  },
];

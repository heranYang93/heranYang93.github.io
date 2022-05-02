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
    icon: FaNodeJs,
    type: "Foundamental",
  },
  {
    technology: "JavaScript",
    icon: IoLogoJavascript,
    type: "Foundamental",
  },
  {
    technology: "Handlebars",
    icon: SiHandlebarsdotjs,
    type: "Frontend",
  },
  {
    technology: "HTML5",
    icon: FaHtml5,
    type: "Frontend",
  },
  {
    technology: "CSS3",
    icon: FaCss3,
    type: "Frontend",
  },
  {
    technology: "Git",
    icon: FaGitAlt,
    type: "Foundamental",
  },
  { technology: "MySQL", icon: GrMysql, type: "Backend" },
  { technology: "React", icon: FaReact, type: "Frontend" },
  {
    technology: "GraphQL",
    icon: SiWebpack,
    type: "Frontend",
  },
  {
    technology: "Webpack",
    icon: GrGraphQl,
    type: "Backend",
  },
  {
    technology: "Bulma",
    icon: SiBulma,
    type: "Frontend",
  },
  {
    technology: "Material-UI",
    icon: SiMaterialui,
    type: "Frontend",
  },
  {
    technology: "Python",
    icon: FaPython,
    type: "Backend",
  },
  {
    technology: "Three.js",
    icon: SiThreedotjs,
    type: "Learning",
  },
];

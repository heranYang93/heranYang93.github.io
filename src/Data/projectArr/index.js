const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAANlBMVEXp7vG6vsHs8fS2ur3c4eTU2dzm6u3P1Ne4vL/u8/a4vL67v8G0ubzDx8rY3eDEyMvh5unKz9Izr04MAAADb0lEQVR4nO2c63KrIBRGFY1CY4x5/5c93nKiICZGGOvuWj86adowYc0HWxgxSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC3oiJwdJ/2oJr6Epy6Sc4qxeTXKtNPfoYfP9NXDj//f0xfv97oX2X6cU4l5pGl6TWNgdbF0b37AnPXUWwMVEd37wvqLKKQNnzm6A5uxcRMSEuWH93DrTRV/8XbaVBnQdFj9u4nm13Vpc+ILk3wy5FCn3LYqHL43hG+9ti0PqmRCNGO2HRMVJlGNqIx8mpakpEQyzRBRlSSd+u0vT0RY8Tkt6rq1mnXcl9fpBjp130DOt2Vk8HI9exG1G16VV81u5qWkBF7Ibxn6SrDSF5ZC7UdqxIRRoyzcZR9P25EGCnsiLRLwK87JMGIqt3NkjdL15VdQxFGSkfIm+v7Irt7jUmovm0f3B3o1Q7pVHuViMjIZeOo6aYdffP8hwQjSePuQq+U33Ee9ikRYcQ4tSar/Z996vMoEWHkue31wTSiJpV6WYkII4myjFS5rz/FdIAtKpFhxJpJqod3Xp3POEtKJFTf7vdGv2KSeYU4F7cLSoRkJFHJvRqcZDr3CnFrkntdIsVIW3CK8tam/ZEbb1+ckrSUEjlG2jeNUsbvw10PjimZf0KSkfVPLAyZxYHzV4woT0LcgSOk1rylWLu7YpaSv5KR9ftvpin5G0ZWhoyjRKIRU1tvF9XbO5JeSgQaMXU1nyrfJmSmRJ6RVkia3iZ/+CAhaVdcRiXijPRCpoPAex3iSYm06qvq+Q7ZZ0NmVDIxIiYjTyGdkv5vG4SINGIm9/32Kfl4yAg1YuppIlolWxIi0Yip7R2ybTdGizNiC9mMFlZr1O6zA8Iysjsh0oy0ZXf36SNRRsxlU1WRb8RcQpw/EmSkuw4JcGJPkJE6wJBJJVXfxXuMdho5d0YwkmDEBSM2GLGJboRaYxs5d0YSjNgZeVRBjoNXYowkTR6GsWkBRgI3jRG7aYzYTWPEbvqkRqI97sCc1MiwaaYfSRGa/JzPH3k+oyYNciEyZ2j4dE8Ac49vhmXHYdCjyOM+68p3QusXY8owm6uL6LPNqz0RlWTXozv3Haq5R5hXW66XMyakxwRb400p/IcNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4FD+AZS0NBe99dfKAAAAAElFTkSuQmCC";

const Lego0 = require("./resources/Legogram.gif");
const Lego1 = require("./resources/legogram-0.png");
const Lego2 = require("./resources/legogram-1.png");

const ISS = require("./resources/ISSExplore.gif");
const ISS0 = require("./resources/ISSExplorer-0.png");
const ISS1 = require("./resources/ISSExplorer-1.png");
const ISS2 = require("./resources/ISSExplorer-2.png");

const EBabylon0 = require("./resources/eBabylon-0.png");
const EBabylon1 = require("./resources/eBabylon-1.png");
const EBabylon2 = require("./resources/eBabylon-2.png");
const EBabylon3 = require("./resources/eBabylon-3.png");
const EBabylon4 = require("./resources/eBabylon-4.png");
const EBabylon5 = require("./resources/eBabylon-5.png");

const TechBlog0 = require("./resources/techBlog-0.png");
const TextEditor0 = require("./resources/textEditor-0.png");
const TextEditor1 = require("./resources/textEditor-1.png");
const Quiz0 = require("./resources/quiz-0.gif");
const WeatherDashboard = require("./resources/weatherDashboard0.gif");
const Password = require("./resources/passwordGenerator-0.png");

export const ProjectArr = [
  {
    isMain: true,
    name: "eBabylon",
    technologyArr: [
      "React",
      "MUI",
      "GraphQL",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe",
      "Cloudinary",
      "Node.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
    ],
    images: [EBabylon0, EBabylon2, EBabylon3, EBabylon5],
    github: "https://github.com/heranYang93/babylon",
    deployLink: "https://ebabylon.herokuapp.com/",
    description:
      "The concept for this project was to create an e-commerce platform for brands, influencers and sellers that is open source and offers a valuable resource for the dev community interested in building an full-stack e-commerce app with trending and state-of-the-art technologies.",
  },
  {
    isMain: true,
    name: "legogram",
    technologyArr: [
      "Node.js",
      "JavaScript",
      "Handlebars",
      "Cloudinary",
      "HTML5",
      "CSS3",
      "Git",
      "MySQL",
      "Bulma",
    ],
    images: [Lego0, Lego1, Lego2],
    github: "https://github.com/heranYang93/Leg-it",
    deployLink: "https://legogrammy.herokuapp.com/",
    description:
      "The concept for this project was to provide lego creators with a social media platform similar to Instagram where they could share their love for everything to do with Lego.",
  },
  {
    isMain: true,
    name: "ISS Space Explorer",
    technologyArr: ["JavaScript", "HTML5", "CSS3", "Git"],
    images: [ISS, ISS0, ISS1, ISS2],
    github: "https://github.com/heranYang93/go-go-space",
    deployLink: "https://heranyang93.github.io/go-go-space/",
    description:
      "SS Space Explorer Web Application that gives its users the full access to monitor the ISS and also have access to the ISS's flight data. In additon, it also provides all the necessary information about the ISS and space such as the bulid of the space craft and current astronauts that are currently onboard the ISS.",
  },
  {
    isMain: false,
    name: "Tech Blog",
    technologyArr: ["Node.js", "JavaScript", "HTML5", "CSS3", "MySQL", "Bulma"],
    images: [TechBlog0],
    github: "https://github.com/heranYang93/tech-blog",
    deployLink: "https://tech-blog-practise.herokuapp.com",
  },
  {
    isMain: false,
    name: "Text Editor",
    technologyArr: ["Node.js", "Webpack", "HTML5", "CSS3"],
    images: [TextEditor0, TextEditor1],
    github: "https://text-editor-hy.herokuapp.com",
    deployLink:
      "https://drive.google.com/file/d/1KAaGDYgHObkcrLzAKw4rKIMEY04-3JRm/view",
  },
  {
    isMain: false,
    name: "Flash Card Quiz",
    technologyArr: ["JavaScript", "HTML5", "CSS3"],
    images: [Quiz0],
    github: "https://heranyang93.github.io/quiz-flash-card/",
    deployLink: "https://github.com/heranYang93/quiz-flash-card",
  },
  {
    isMain: false,
    name: "Weather Dashboard",
    technologyArr: ["JavaScript", "HTML5", "CSS3"],
    images: [WeatherDashboard],
    github: "https://github.com/heranYang93/password-generator",
    deployLink: "https://heranyang93.github.io/password-generator/",
  },
  {
    isMain: false,
    name: "Password Generator",
    technologyArr: ["JavaScript", "HTML5", "CSS3"],
    images: [Password],
    github:
      "https://drive.google.com/file/d/1KAaGDYgHObkcrLzAKw4rKIMEY04-3JRm/view",
    deployLink: "https://moedaaboul.github.io/password-generator/",
  },
];

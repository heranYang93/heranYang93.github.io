import { useEffect, useState } from "react";

const introLiners = [
  "I'm a full stack web developer coming from a consulting engineer background",
  "I'm good at delivering technical and graphical designs and design intention",
  " ... assessing clients aspiration against technical standards",
  " ... and finding innovative and feasible solutions",
  "I'm a life-learner and a self-driving team player",
  "I'm passionate about creating user-centric web-based service that can change the way we work and connect",
  "I'm currently exploring ThreeJs, WebGL and graphic-related algorithms and data structures",
  "I wish to further my tech skill both in front-end and back-end",
];

const [cycle, disappear, changeContent] = [8, 6, 7];

const defaultIntro = (
  <p className="intro column subtitle is-6 has-text-centered animate__animated animate__fadeInDown">
    {introLiners[0]}
  </p>
);
export default function Intro() {
  const [sec, setSec] = useState(0);
  const [id, setId] = useState(0);
  const [intro, setIntro] = useState(defaultIntro);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSec(sec + 1);
      updateIntroLine();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [sec]);

  function updateIntroLine() {
    if (sec % cycle === 0) {
      setIntro(
        <p className="intro column subtitle is-6 has-text-centered animate__animated animate__fadeInDown">
          {introLiners[id]}
        </p>
      );
    } else if (sec % cycle === disappear) {
      setIntro(
        <p className="intro column subtitle is-6 has-text-centered animate__animated animate__fadeOutDown">
          {introLiners[id]}
        </p>
      );
      setId(id + 1);
    } else if (sec % cycle === changeContent) {
      setId((id + 1) % introLiners.length);
    }
  }
  return <>{intro}</>;
}

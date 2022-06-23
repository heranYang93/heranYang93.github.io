import * as React from "react";
import { AppData } from "../../Data";

export default function Footer() {
  return (
    <section className="section-footer is-small animate__animated animate__fadeInUp">
      <div className="social-media-banner has-text-centered">
        {AppData.SocialMediaArr.map((singleSocialMediaInfo, index) => {
          return (
            // <icon >
            <a
              key={index}
              className="icon is-large"
              alt={singleSocialMediaInfo.description}
              href={singleSocialMediaInfo.link}
            >
              {singleSocialMediaInfo.icon}
            </a>
            // </icon>
          );
        })}
      </div>

      <div className="content is-small has-text-centered">
        Copyright © <a href="https://github.com/heranYang93">Heran Yang</a>.
      </div>
    </section>
  );
}

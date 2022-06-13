import * as React from "react";
import { AppData } from "../../Data";

export default function Footer() {
  return (
    <section className="section-footer is-small animate__animated animate__fadeInUp">
      <div className="columns">
        <div className="column is-2"></div>
        <div className="column has-text-centered">
          {AppData.SocialMediaArr.map((singleSocialMediaInfo, index) => {
            return (
              <icon>
                <a
                  className="icon is-large"
                  alt={singleSocialMediaInfo.description}
                  href={singleSocialMediaInfo.link}
                >
                  {singleSocialMediaInfo.icon}
                </a>
              </icon>
            );
          })}
        </div>
        <div className="column is-2"></div>
      </div>
      <div className="content is-small has-text-centered">
        <p>
          Copyright © <a href="https://github.com/heranYang93">Heran Yang</a>.
        </p>
      </div>
    </section>
  );
}

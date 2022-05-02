import * as React from "react";
import { AppData } from "../../Data";

export default function Footer() {
  return (
    <section className="section-footer is-small">
      <div className="columns">
        <div className="column is-2"></div>
        <div className="column has-text-centered">
          {AppData.SocialMediaArr.map((singleSocialMediaInfo, index) => {
            return (
              <a>
                <icon
                  className="icon is-large"
                  alt={singleSocialMediaInfo.description}
                  href={singleSocialMediaInfo.link}
                >
                  {singleSocialMediaInfo.icon}
                </icon>
              </a>
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

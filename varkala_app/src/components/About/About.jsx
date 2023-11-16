import React from "react";
import "../about/About.scss";
const About = () => {
  return (
    <section>
      <div className="about">
        <div className="container py-6">
          <div className="row">
            <div className="about__border col-xl-2"></div>
            <div className="about__title col-xl-6">
              <h6 className="text-primary text-uppercase letter-spacing-5 mb-3">
                ABOUT US
              </h6>
              <h2 className="display-3 font-weight-bold mb-5">
                We are Varkala{" "}
              </h2>
              <p className="text-lg text-muted">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections
              </p>
            </div>
          </div>
          <div className="about__under ">
            <div className="row ">
              <div className="about__border col-xl-2"></div>
              <div className="about__title col-xl-6">
                <h6 className="text-primary text-uppercase letter-spacing-5 mb-3">
                  ABOUT US
                </h6>
                <h2 className="display-3 font-weight-bold mb-5">
                  We are Varkala{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
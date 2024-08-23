import React from 'react';

function Services() {
  return (
    <section className="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd">
      <div className="container ontop">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Where I have Worked</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Work <span className="fw-200">Experience.</span>
                </span>
              </h3>
            </div>
            {/* <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div> */}
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">01</span>
                <div>
                  <span className="sub-title main-color mb-10">BlackBOX FDS</span>
                  <h2>
                    IT <span className="fw-200">Support</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                As an IT Support professional at Blackbox FDS, I not only provide technical assistance and troubleshoot issues but also create custom software solutions to streamline operations and improve system efficiency.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/1.jpg" alt="" />
                <a href="https://theblackbox.co.ke/">
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">02</span>
                <div>
                  <span className="sub-title main-color mb-10">Intern- Web</span>
                  <h2>
                    Macangira <span className="fw-200">Africa</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                During my internship at Macangira Africa, I developed web solutions that addressed business needs, enhancing user experiences and optimizing online platforms for better performance.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/2.jpg" alt="" />
                <a href="https://m.facebook.com/p/Macangira-Africa-100083111029784/">
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item pb-0">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">03</span>
                <div>
                  <span className="sub-title main-color mb-10">Alvicreative</span>
                  <h2>
                    WEB / <span className="fw-200">DESIGN</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                I developed web solutions and created graphic designs that helped businesses establish a strong online presence and visually communicate their brand identity.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/3.jpg" alt="" />
                <a href="https://www.facebook.com/alvicreativ/">
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

import React from 'react';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/imgs/intro/i1.jpg" alt="" />
                  <div className="img-icon">
                    <img src="/assets/imgs/arw0.png" alt="" />
                  </div>
                </div>
                <div className="col-6 mt-40">
                  <img src="/assets/imgs/intro/i2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
                Sifuna Donnex is a Developer{' '}
                <span className="fw-200">and Designer</span> creating
                beautiful <span className="fw-200">digital experiences</span> &
                products.
              </h3>
              <p>
              My web development and design services are driven by a strategic approach that elevates brands. I create and optimize online stores, helping businesses expand globally while ensuring a seamless and enjoyable customer experience.
              </p>
              <a href="/sifuna-portfolio" className="underline main-color mt-40">
                <span className="text">
                  My Works <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

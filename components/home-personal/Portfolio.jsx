'use client';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">My Portfolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/portfolio-grid"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="https://sokonet.co.ke/" className="tag">
                        Next JS
                      </a>
                      <a href="https://sokonet.co.ke/" className="tag">
                        Web Development
                      </a>
                    </div>
                    <h4>Sokonet</h4>
                  </div>
                  <div>
                    <p>
                      Built a shop web application for users to list the items and also buy from other users by contacting them on various products.
                    </p>
                    <a href="https://sokonet.co.ke/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="https://www.mmuchristianunion.org/" className="tag">
                        Framer
                      </a>
                      <a href="https://www.mmuchristianunion.org/" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>MMU CU</h4>
                  </div>
                  <div>
                    <p>
                      I was involved in developing of the oficial website for the Multimedia University Christian Union. Realy loved the work of the Lord.
                    </p>
                    <a href="https://www.mmuchristianunion.org/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="https://mbuzi24.vercel.app/" className="tag">
                        Figma
                      </a>
                      <a href="https://mbuzi24.vercel.app/" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Mbuzi24</h4>
                  </div>
                  <div>
                    <p>
                      Was involved in creating of the Mbuzi24 site that is a platform to get meat and poultry products among other butchery accompaniments.
                    </p>
                    <a href="https://mbuzi24.vercel.app/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="https://trello-two-beta.vercel.app/" className="tag">
                        Figma
                      </a>
                      <a href="https://trello-two-beta.vercel.app/" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Trello Clone</h4>
                  </div>
                  <div>
                    <p>
                    I created a clone for the Trello website using Next Js. This work of art was a show of my love for web development.
                    </p>
                    <a href="https://trello-two-beta.vercel.app/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="https://www.postermywall.com/index.php/d/sifuna-donnex" className="tag">
                        Postermywall
                      </a>
                      <a href="https://www.postermywall.com/index.php/d/sifuna-donnex" className="tag">
                        Design
                      </a>
                    </div>
                    <h4>Graphic Designs</h4>
                  </div>
                  <div>
                    <p>
                    Here is my Postermywall page, I have created numerous grahic designs for you to have a look. Design is by love at heart.
                    </p>
                    <a href="https://www.postermywall.com/index.php/d/sifuna-donnex" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            Many projects completed in 5 years of experience.
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

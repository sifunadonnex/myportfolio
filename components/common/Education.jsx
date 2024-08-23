'use client';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Education() {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 'auto',

    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 'auto',
      },
    },

    navigation: {
      nextEl: '.testim-modern .swiper-button-next',
      prevEl: '.testim-modern .swiper-button-prev',
    },
  };
  return (
    <section className="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">School & Certifications</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                EDUCATION <span className="fw-200"></span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testim-swiper3 out-right"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container"
          >
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Digital Marketing </h6>
                  <div className="text">
                    <p>
                    Completed a digital marketing masterclass at Digital4Africa, gaining comprehensive skills in digital strategy, marketing techniques, and campaign management
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div className="ml-20">
                      <h6 className="fz-18">Digital 4 Africa</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Computer Science</h6>
                  <div className="text">
                    <p>
                    Graduated with a degree in Computer Science from Multimedia University, I have developed a strong foundation in web development, design, and software solutions.
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div className="ml-20">
                      <h6 className="fz-18">Multimedia University of Kenya</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        2019 - 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">React.js Certification</h6>
                  <div className="text">
                    <p>
                    Completed a React.js certification course at Andela, enhancing my expertise in building dynamic and responsive web applications
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div className="ml-20">
                      <h6 className="fz-18">Andela</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Design Quality</h6>
                  <div className="text">
                    <p>
                    Achieved an A- at Goseta Boys High School, showcasing a strong academic foundation and dedication to excellence.
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div className="ml-20">
                      <h6 className="fz-18">Goseta Boys High School</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        2014 - 2018
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Education;

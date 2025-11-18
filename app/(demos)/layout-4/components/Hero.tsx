import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import shape from "@/assets/images/shape/circle-wave.svg";
import shapeline from "@/assets/images/shape/line-wave.svg";
import finance from "@/assets/images/finance.png";
import user1 from "@/assets/images/user/client-01.jpg";
import user2 from "@/assets/images/user/client-02.jpg";
import user3 from "@/assets/images/user/client-03.jpg";
import user4 from "@/assets/images/user/client-04.jpg";

const Hero = () => {
  return (
<div>
        <section
          className="relative pt-32 pb-20 bg-[url(../images/home/bg-4.svg)] bg-no-repeat bg-cover overflow-hidden"
          id="home"
        >
          <div className="absolute top-0 start-0 -ml-8 -mt-10 xl:inline-block hidden">
            <Image src={shape} alt="" />
          </div>
          <figure className="absolute top-0 end-0 -me-20 -mt-72 xl:inline-block hidden">
            <Image src={shapeline} alt="" />
          </figure>
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
              <div className="">
                <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-black tracking-normal capitalize leading-normal font-bold max-w-2xl">
                  Manage your finance with Evea app.
                </h1>
                <p className="text-base font-medium text-muted mt-3 capitalize">
                  Our app provides a multitude of features tailored to your
                  needs. From personalized recommendations to exclusive offers.
                </p>
                <div className="flex flex-wrap mt-9 text-center gap-3">
                  <a
                    className="inline-block px-6 py-2 rounded-md text-white text-base border border-primary hover:bg-primaryDark bg-primary hover:border-primaryDark transition-all duration-300 items-center justify-center text-center font-medium"
                    href="javascript:void(0)"
                  >
                    <IconifyIcon
                      icon="mdi:apple"
                      className="mdi mdi-apple text-base text-white me-1"
                    />
                    Download for iOS
                  </a>
                  <a
                    className="inline-block py-2 px-6 text-black rounded-md border border-primary text-base hover:border-white hover:bg-white group hover:text-primary transition-all duration-500 font-medium"
                    href="javascript:void(0)"
                  >
                    <IconifyIcon
                      icon="mdi:play"
                      className="mdi mdi-play text-base text-black me-1 hover:text-primary transition-all duration-500"
                    />
                    Download for Android
                  </a>
                </div>
              </div>
              <div className="relative z-10">
                <Image
                  src={finance}
                  className="md:h-[700px] lg:ms-auto mx-auto"
                  alt=""
                  width={331}
                  height={700}
                />
                <div className="absolute flex justify-between items-center bottom-16 md:start-2 -start-2 p-4 rounded-lg shadow-md bg-black/40 backdrop-blur-lg w-60 m-3">
                  <div className="items-center">
                    <div className="inline-flex items-center">
                      <h6 className="text-white text-2xl mb-0 me-2">5K+</h6>
                      <div className="flex -space-x-2">
                        <Image
                          className="inline-block size-9 rounded-full"
                          src={user1}
                          alt="Image Description"
                        />
                        <Image
                          className="inline-block size-9 rounded-full"
                          src={user2}
                          alt="Image Description"
                        />
                        <Image
                          className="inline-block size-9 rounded-full"
                          src={user3}
                          alt="Image Description"
                        />
                        <Image
                          className="inline-block size-9 rounded-full"
                          src={user4}
                          alt="Image Description"
                        />
                      </div>
                    </div>
                    <div className="flex-1 mt-2">
                      <h6 className="text-white">Total visitors per month</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative">
          <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
            <svg
              className="w-full h-auto scale-[2.0] origin-top"
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>  )
}

export default Hero
import Image from 'next/image'
import React from 'react'
import iterior from "@/assets/images/interior.png";


const Hero = () => {
  return (
    <section
    className="relative pt-32 pb-20 bg-gray-200/40 bg-[url(../images/home/bg-3.png)] bg-no-repeat bg-cover"
    id="home"
  >
    <div className="container">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
        <div className="">
          <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-black tracking-normal capitalize leading-normal font-bold max-w-2xl">
            The Best Approach To Consent To Interior Design
          </h1>
          <p className="text-base font-medium text-muted mt-3 capitalize">
            You one stop finance empower platform Manage all your business
            expenses with our supafast app.
          </p>
          <div className="flex flex-wrap mt-9 text-center gap-3">
            <button className="py-2 px-6 rounded-md text-white text-base bg-primary hover:bg-primaryDark border border-primary hover:border-primaryDark transition-all duration-500 font-medium">
              Get A Free Demo
            </button>
            <button className="py-2 px-6 text-primary rounded-md border border-primary text-base hover:border-primary hover:bg-primary hover:text-white transition-all duration-500 font-medium">
              See Pricing
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={iterior}
            className="md:h-[700px] lg:ms-auto mx-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>  )
}

export default Hero
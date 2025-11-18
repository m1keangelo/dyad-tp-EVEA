import Image from 'next/image'
import dashboard from "@/assets/images/dashboard-1.png";
import React from 'react'

const Hero = () => {
  return (
    <section
        className="relative pt-44 from-slate-500/10 bg-[url(../images/home/bg-2.png)] bg-no-repeat bg-cover"
        id="home"
      >
        <div className="container">
          <div className="grid grid-cols-1 items-center justify-center">
            <div className="text-sm max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-white tracking-normal capitalize leading-normal font-semibold max-w-2xl">
                All your business expenses in one place.
              </h1>
              <div className="max-w-xl mx-auto">
                <p className="text-base font-medium text-white leading-7 mt-2 capitalize">
                  You one stop finance empower platform Manage all your business
                  expenses with our supafast app.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-9 text-center gap-3">
                <button className="py-2 px-6 rounded-md text-white text-base bg-primary hover:bg-primaryDark border border-primary hover:border-primaryDark transition-all duration-500 font-medium">
                  Get A Free Demo
                </button>
                <button className="py-2 px-6 text-white rounded-md border border-white text-base hover:border-white hover:bg-white hover:text-primary transition-all duration-500 font-medium">
                  See Pricing
                </button>
              </div>
            </div>
            <div className="bg-white/40 px-4 pt-4 mt-16 rounded-t-xl mx-auto max-w-full">
              <Image
                src={dashboard}
                className="rounded-t-lg mx-auto w-full lg:min-w-[950px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
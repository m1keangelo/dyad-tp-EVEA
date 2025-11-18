import Image from 'next/image'
import React from 'react'
import statistical from '@/assets/images/statistical.png'

export const Hero = () => {
  return (
<section
        className="relative pt-32 pb-20 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
        id="home"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
            <div className="relative">
              <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-white tracking-normal capitalize leading-normal font-bold max-w-2xl mt-4">
                Make Your Life Even Easier with Statistical{" "}
                <span className="text-primary">Progress</span>
              </h1>
              <p className="text-base text-white font-medium max-w-lg mt-6 capitalize">
                Our app provides a multitude of features tailored to your needs.
                From personalized recommendations to exclusive offers.
              </p>
              <div className="flex flex-wrap mt-9 text-center gap-3">
                <button className="py-2 px-6 rounded-md text-white text-base bg-primary hover:bg-primaryDark border border-primary hover:border-primaryDark transition-all duration-500 font-medium">
                  Get Started
                </button>
                <button className="py-2 px-6 text-white rounded-md border border-white text-base hover:border-white hover:bg-white hover:text-primary transition-all duration-500 font-medium">
                  See Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={statistical}
                className="md:h-[600px] lg:ms-auto mx-auto"
                alt=""
                width={290} height={600}
              />
            </div>
          </div>
        </div>
      </section>
  )
}

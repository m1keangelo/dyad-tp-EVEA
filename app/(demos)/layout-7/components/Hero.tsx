import Image from 'next/image'
import React from 'react'
import img from '@/assets/images/dashboard-2.png'
import store from '@/assets/images/store.png'
import google from '@/assets/images/google.png'

const Hero = () => {
  return (
<section className="relative pt-40 pb-40 bg-primary/10" id="home">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
            <div className="relative">
              <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-black tracking-normal capitalize leading-normal font-bold max-w-2xl mt-4">
                Make Your Life Even Easier with Statistical{" "}
                <span className="text-primary">Progress</span>
              </h1>
              <p className="text-base text-muted font-medium max-w-lg mt-6 capitalize">
                Our app provides a multitude of features tailored to your needs.
                From personalized recommendations to exclusive offers.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-normal gap-3 mt-10">
                <Image
                  src={store}
                  className="h-14"
                  alt="apple image"
                  width={190} height={56}
                />
                <Image
                  src={google}
                  className="h-14"
                  alt="google image"
                  width={189} height={56}
                />
              </div>
            </div>
            <div className="relative">
              <Image
                src={img}
                className="lg:ms-auto mx-auto rounded-xl"
                alt=""
                width={628} height={424}
              />
            </div>
          </div>
        </div>
      </section>  )
}

export default Hero
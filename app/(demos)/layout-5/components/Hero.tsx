import Image from 'next/image'
import React from 'react'
import shape1 from '@/assets/images/shape/shape-1.png'
import shape2 from '@/assets/images/shape/shape-2.png'
import payment from '@/assets/images/payment.png'


const Hero = () => {
  return (
    <section
    className="relative pt-32 pb-20 bg-[url(../images/home/bg-5.png)] bg-no-repeat bg-cover"
    id="home"
  >
    <div className="container">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
        <div className="relative">
          <span className="absolute end-48 -top-16 text-xl -rotate-45">
            <Image src={shape1} alt="image" />
          </span>
          <span className="absolute end-32 top-40 text-xl rotate-90">
            <Image src={shape2} alt="image" />
          </span>
          <span className="inline-flex py-2 px-5 text-sm text-black font-medium rounded-full border border-primary/30 mb-8 lg:mb-2">
            App in App Store 😋
          </span>
          <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-black tracking-normal capitalize leading-normal font-bold max-w-2xl mt-4">
            Best Way to Make Online Payments
          </h1>
          <p className="text-base text-muted font-medium max-w-lg mt-6 capitalize">
            Our app provides a multitude of features tailored to your needs.
            From personalized recommendations to exclusive offers.
          </p>
          <div className="mt-12">
            <form className="relative max-w-lg">
              <input
                type="email"
                id="subcribe"
                name="email"
                className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black rounded-md bg-white border border-gray-300"
                placeholder="Your Email Address :"
              />
              <button
                type="submit"
                className="py-2 px-5 inline-flex font-semibold items-center justify-center duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-primary hover:bg-primaryDark border border-primary hover:border-primaryDark text-white rounded-md"
              >
                Try it for free <i className="uil uil-arrow-right" />
              </button>
            </form>
          </div>
        </div>
        <div className="relative">
          <Image
            src={payment}
            className="md:h-[700px] lg:ms-auto mx-auto"
            alt=""
            width={628} height={700}
          />
        </div>
      </div>
    </div>
  </section>  )
}

export default Hero
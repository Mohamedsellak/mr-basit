import React from 'react'
import Image from 'next/image'
export default function BgImages() {
  return (
    <>
    {/* Top Section */}
    <div className="fixed top-0 right-0 -z-10 md:top-5">
        <Image
          src="/images/1.png"
          alt=""
          width={400}
          height={400}
          className="w-[160px] opacity-30 md:w-[220px] lg:w-[300px] xl:opacity-40"
          priority
        />
      </div>
      
      <div className="fixed top-10 left-[20%] hidden -z-10 md:block">
        <Image
          src="/images/2.png"
          alt=""
          width={200}
          height={200}
          className="w-[120px] opacity-20 md:w-[180px] rotate-45"
          priority
        />
      </div>

      <div className="fixed top-20 right-[45%] hidden -z-10 lg:block">
        <Image
          src="/images/3.png"
          alt=""
          width={200}
          height={200}
          className="w-[120px] opacity-25 md:w-[160px] rotate-12"
          priority
        />
      </div>

      {/* Upper Middle Section */}
      <div className="fixed top-[25%] left-0 -z-10">
        <Image
          src="/images/2.png"
          alt=""
          width={300}
          height={300}
          className="w-[150px] opacity-30 md:w-[200px] lg:w-[300px] xl:opacity-40"
          priority
        />
      </div>

      <div className="fixed top-[30%] right-[20%] hidden -z-10 md:block">
        <Image
          src="/images/4.png"
          alt=""
          width={250}
          height={250}
          className="w-[110px] opacity-25 md:w-[140px] rotate-90"
          priority
        />
      </div>

      {/* Middle Section */}
      <div className="fixed top-[45%] right-[8%] hidden -z-10 md:block">
        <Image
          src="/images/1.png"
          alt=""
          width={250}
          height={250}
          className="w-[130px] opacity-30 md:w-[160px] rotate-180"
          priority
        />
      </div>

      <div className="fixed top-[50%] left-[35%] hidden -z-10 lg:block">
        <Image
          src="/images/3.png"
          alt=""
          width={180}
          height={180}
          className="w-[120px] opacity-20 md:w-[150px] -rotate-45"
          priority
        />
      </div>

      {/* Lower Middle Section */}
      <div className="fixed bottom-[35%] right-[5%] -z-10">
        <Image
          src="/images/3.png"
          alt=""
          width={350}
          height={350}
          className="w-[160px] opacity-30 md:w-[200px] lg:w-[280px] xl:opacity-40"
          priority
        />
      </div>

      <div className="fixed bottom-[40%] left-[20%] hidden -z-10 md:block">
        <Image
          src="/images/1.png"
          alt=""
          width={220}
          height={220}
          className="w-[130px] opacity-25 md:w-[180px] rotate-90"
          priority
        />
      </div>

      {/* Bottom Section */}
      <div className="fixed bottom-20 left-[40%] hidden -z-10 lg:block">
        <Image
          src="/images/2.png"
          alt=""
          width={200}
          height={200}
          className="w-[150px] opacity-25 md:w-[200px] rotate-45"
          priority
        />
      </div>

      <div className="fixed bottom-10 right-[32%] hidden -z-10 md:block">
        <Image
          src="/images/4.png"
          alt=""
          width={180}
          height={180}
          className="w-[100px] opacity-20 md:w-[130px] -rotate-90"
          priority
        />
      </div>

      <div className="fixed bottom-0 left-0 -z-10">
        <Image
          src="/images/4.png"
          alt=""
          width={250}
          height={250}
          className="w-[150px] opacity-30 md:w-[200px] lg:w-[250px] xl:opacity-40"
          priority
        />
      </div>

      {/* Additional Upper Right Corner */}
      <div className="fixed top-[15%] right-[28%] hidden -z-10 xl:block">
        <Image
          src="/images/2.png"
          alt=""
          width={160}
          height={160}
          className="w-[100px] opacity-20 md:w-[140px] -rotate-12"
          priority
        />
      </div>

      {/* Additional Middle Left */}
      <div className="fixed top-[38%] left-[28%] hidden -z-10 lg:block">
        <Image
          src="/images/4.png"
          alt=""
          width={180}
          height={180}
          className="w-[120px] opacity-20 md:w-[160px] rotate-45"
          priority
        />
      </div>

      {/* Additional Center */}
      <div className="fixed top-[55%] left-[50%] hidden -z-10 xl:block">
        <Image
          src="/images/1.png"
          alt=""
          width={200}
          height={200}
          className="w-[120px] opacity-15 md:w-[150px] -rotate-90"
          priority
        />
      </div>

      {/* Additional Bottom Right Corner */}
      <div className="fixed bottom-[15%] right-[38%] hidden -z-10 lg:block">
        <Image
          src="/images/3.png"
          alt=""
          width={170}
          height={170}
          className="w-[100px] opacity-20 md:w-[130px] rotate-180"
          priority
        />
      </div>

      {/* Additional Small Bottom Left */}
      <div className="fixed bottom-[8%] left-[15%] hidden -z-10 md:block">
        <Image
          src="/images/2.png"
          alt=""
          width={140}
          height={140}
          className="w-[90px] opacity-20 md:w-[120px] rotate-12"
          priority
        />
      </div>

    </>
  )
}

import React from 'react'
import Image from 'next/image'
import heroImage from "../public/hero.png"

type Props = {}

const SiteHero = (props: Props) => {
  return (
    <div className='relative w-full hero-bg h-[280px] md:h-[600px]'>
      <div className="font-semibold text-gray-800 pl-2 min-[500px]:pl-5 md:pl-8 lg:pl-40">
        <h1 className='max-[350px]:text-2xl text-3xl min-[500px]:text-4xl md:text-6xl lg:text-7xl'>One-Stop</h1>
        <h4 className='max-[350px]:text-2xl text-3xl min-[500px]:text-4xl md:text-6xl lg:text-7xl'>Tuck Shop</h4>
        <p className='mt-3 font-normal text-gray-700 min-[500px]:text-xl md:text-2xl lg:text-3xl'>Every students <br className='hidden max-[280px]:block'/>needs, <br/> we deliver</p>
      </div>
    </div>
  )
}

export default SiteHero
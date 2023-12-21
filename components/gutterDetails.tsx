import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface StaticRequire {
    default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;
type Props = {
    src: string | StaticImport;
    name?: string
    desc?: string
}

const Gutter = ({ src, name, desc }: Props) => {
  return (
    <div >
        <Image 
        alt="footer"
        src={src}
        className='mb-3 gutterImg'
        />
        <h2 className='font-semibold text-lg mb-2'>{name}</h2>
        <h4 className='text-gray-500 gutter'>{desc}</h4>
    </div>
  )
}

export default Gutter
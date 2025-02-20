"use client";
import Image  from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';
const HeroImage = () => {
  return (
    <Tilt>
        <div className='hidden lg:block'>
            <Image src="/images/hero.png" alt="Hero Image" width={800} height={600} />
        </div>
    </Tilt>
  );
}

export default HeroImage;
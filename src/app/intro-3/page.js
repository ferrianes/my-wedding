'use client'

import { Alex_Brush, Marcellus } from 'next/font/google'
import Image from 'next/image'
import { motion, AnimateSharedLayout, useAnimation } from "framer-motion"
import { useEffect, useState } from 'react'
import Link from 'next/link'

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alex-brush',
})

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-marcellus',
})

const animationVariantsFadeRight = {
  initial: {
    opacity: 0,
    x: 70,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
      ease: 'backInOut',
    },
  },
}


const animationVariantsFadeLeft = {
  initial: {
    opacity: 0,
    x: -70,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
      ease: 'backInOut',
    },
  },
}


const animationVariantsFadeUp = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 3,
      ease: 'backInOut',
    },
  },
}

const animationVariantsTextLeft = {
  initial: {
    opacity: 0,
    x: -70
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const animationVariantsTextCenter = {
  initial: {
    opacity: 0,
    y: -10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const animationVariantsTextRight = {
  initial: {
    opacity: 0,
    x: 70
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const TypingEffect = ({ text, speed, className, animationVariant }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return <motion.div
    variants={animationVariant}
    initial="initial"
    animate="animate"
    className={className}
  >
    {typedText}
  </motion.div>;
};

// make backward
const TypingEffectBackward = ({ text, speed, className, animationVariant }) => {
  const [typedText, setTypedText] = useState('');
  const [displayIndex, setDisplayIndex] = useState(text.length - 1);

  useEffect(() => {
    if (displayIndex < 0) return;

    const typingInterval = setInterval(() => {
      setTypedText((prevTypedText) => text[displayIndex] + prevTypedText);
      setDisplayIndex((prevIndex) => prevIndex - 1);
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }
    , [text, speed, displayIndex]);

  return <motion.div
    variants={animationVariant}
    initial="initial"
    animate="animate"
    className={className}
  >
    {typedText}
  </motion.div>;
};


export default function Home() {

  return (
    <div>
      <div>
        <motion.div className='w-full' variants={animationVariantsFadeUp} initial="initial" animate="animate">
          <Image src="/assets/top-flower-2.png" width={100} height={100} layout='responsive' alt="backdrop flower" />
        </motion.div>
      </div>
      <div className="flex flex-col -mt-[4%]">
        <div className='mx-auto relative'>
          <motion.div variants={animationVariantsFadeRight} initial="initial" animate="animate">
            <Image src="/assets/backdrop-flower.webp" width="250" height="250" alt="backdrop flower" />
          </motion.div>
          <motion.div className='absolute -top-[10px] right-[6.5px]' variants={animationVariantsFadeUp} initial="initial" animate="animate">
            <Image src="/assets/we.png" width="230" height="230" alt="we" />
          </motion.div>
        </div>
      </div>
      <div className="flex w-max mx-auto my-3">
        <motion.p className={`${marcellus.variable} font-alex-brush text-lg text-[#5A5F4F] text-center`} initial="initial" animate="animate" variants={animationVariantsTextLeft}>
          Save The Date
        </motion.p>
      </div>
      <div className="flex w-max mx-auto">
        <div className='w-[300px] flex flex-col gap-3 justify-center'>
          <motion.p className={`${marcellus.variable} font-marcellus text-lg text-[#5A5F4F] text-center`} initial="initial" animate="animate" variants={animationVariantsTextLeft}>
            Desember
          </motion.p>
          <div className='flex gap-4 mx-auto'>
            <motion.div initial="initial" animate="animate" variants={animationVariantsTextRight} className='border-y-2 border-[#F1CEAD]'>
              <p className={`${marcellus.variable} mt-1 font-marcellus text-lg text-[#5A5F4F] text-left`}>
                &nbsp;SUNDAY&nbsp;
              </p>
            </motion.div>
            <motion.p className={`${marcellus.variable} font-marcellus text-4xl font-bold text-[#5A5F4F] text-center`} initial="initial" animate="animate" variants={animationVariantsTextRight}>
              24
            </motion.p>
            <motion.div initial="initial" animate="animate" variants={animationVariantsTextRight} className='border-y-2 border-[#F1CEAD]'>
              <p className={`${marcellus.variable} mt-1 font-marcellus text-lg text-[#5A5F4F] text-left`}>
                AT 10 AM
              </p>
            </motion.div>
          </div>
          <motion.p className={`${marcellus.variable} font-marcellus text-lg text-[#5A5F4F] text-center`} initial="initial" animate="animate" variants={animationVariantsTextLeft}>
            2023
          </motion.p>
        </div>
      </div>
      <div className='flex flex-col mx-auto w-[300px] mt-6'>
        <motion.span variants={animationVariantsFadeRight} initial="initial" animate="animate" className={`${marcellus.variable} font-marcellus text-center font-medium text-[#5A5F4F] w-[300px] mx-auto`}>MASJID RAMLIE MUSOFA</motion.span>
        <Link href={'https://maps.app.goo.gl/RABYeKv41gSmx8DE8'} target='_blank' passHref={true} className='text-center'>
          <motion.span variants={animationVariantsFadeRight} initial="initial" animate="animate" className={`${marcellus.variable} font-marcellus text-sm text-center text-[#5A5F4F] w-[300px] mx-auto underline`}>Jl. Danau Sunter Utara Raya Selatan No.12C - 14A, RT.13/RW.16, Sunter Agung, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta</motion.span>
        </Link>
      </div>
      <div className="text-center mt-4 z-50 relative">
        <Link href='/gallery'>
          <motion.button type="button" className="inline-flex items-center text-white bg-gradient-to-r from-stone-500 via-stone-600 to-stone-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-stone-300 shadow-lg shadow-stone-500/50 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" variants={animationVariantsFadeRight} initial="initial" animate="animate">
            <span>
              Our Gallery
            </span>
            <svg className="w-3.5 h-3.5 ms-1 mt-[0.2px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

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
        <TypingEffect key={1} text="Save The Date" speed={200} className={`${marcellus.variable} font-alex-brush text-lg text-[#5A5F4F] text-center`} animationVariant={animationVariantsTextLeft} />
      </div>
      <div className="flex w-max mx-auto">
        <div className='w-[300px] flex flex-col gap-3 justify-center'>
          <TypingEffect key={4} text="Desember" speed={100} className={`${marcellus.variable} font-marcellus text-lg text-[#5A5F4F] text-center`} animationVariant={animationVariantsTextLeft} />
          <div className='flex gap-4 mx-auto'>
            <div className='border-y-2 border-[#F1CEAD]'>
              <TypingEffect key={5} text="&nbsp;SUNDAY&nbsp;" speed={200} className={`${marcellus.variable} mt-1 font-marcellus text-lg text-[#5A5F4F] text-left`} animationVariant={animationVariantsTextRight} />
            </div>
            <TypingEffect key={5} text="24" speed={100} className={`${marcellus.variable} font-marcellus text-4xl font-bold text-[#5A5F4F] text-center`} animationVariant={animationVariantsTextRight} />
            <div className='border-y-2 border-[#F1CEAD]'>
              <TypingEffect key={5} text="AT 10 AM" speed={200} className={`${marcellus.variable} mt-1 font-marcellus text-lg text-[#5A5F4F] text-left`} animationVariant={animationVariantsTextRight} />
            </div>
          </div>
          <TypingEffect key={4} text="2023" speed={100} className={`${marcellus.variable} font-marcellus text-lg text-[#5A5F4F] text-center`} animationVariant={animationVariantsTextLeft} />
        </div>
      </div>
      <div className='flex flex-col mx-auto w-[300px] mt-6'>
        <motion.span variants={animationVariantsFadeRight} initial="initial" animate="animate" className={`${marcellus.variable} font-marcellus text-center font-medium text-[#5A5F4F] w-[300px] mx-auto`}>MASJID RAMLIE MUSOFA</motion.span>
        <Link href={'https://maps.app.goo.gl/RABYeKv41gSmx8DE8'} target='_blank' passHref={true} className='text-center'>
          <motion.span variants={animationVariantsFadeRight} initial="initial" animate="animate" className={`${marcellus.variable} font-marcellus text-sm text-center text-[#5A5F4F] w-[300px] mx-auto underline`}>Jl. Danau Sunter Utara Raya Selatan No.12C - 14A, RT.13/RW.16, Sunter Agung, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta</motion.span>
        </Link>
      </div>
    </div>
  )
}

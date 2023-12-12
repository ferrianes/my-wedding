'use client'

import { Alex_Brush, Marcellus } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image'
import { motion, AnimateSharedLayout, useAnimation, delay } from "framer-motion"
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

const granada = localFont({
  src: './../Granada-Regular.ttf',
  variable: '--font-granada',
})

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

const first = {
  initial: {
    opacity: 0,
    y: -70,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

const second = {
  initial: {
    opacity: 0,
    x: -70
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2,
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const third = {
  initial: {
    opacity: 0,
    x: 70,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

const fourth = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

const fifth = {
  initial: {
    opacity: 0,
    x: -70,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 4,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

const sixth = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 5,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

export default function Intro() {

  return (
    <div className=''>
      <motion.div variants={first} initial="initial" animate="animate">
        <Image className='absolute top-0 left-[120px]' src="/assets/top-flower.png" height="150" width="200" alt="flower" />
      </motion.div>
      <div className="flex flex-col pt-[22%] z-50 relative">
        <motion.h1 variants={second} initial="initial" animate="animate" className={`${granada.variable} font-granada text-3xl text-center text-[#5A5F4F]`}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</motion.h1>
        <motion.span variants={third} initial="initial" animate="animate" className={`${marcellus.variable} font-marcellus leading-7 text-sm text-center text-[#5A5F4F] w-[320px] mx-auto mt-6`}>Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i dalam acara pernikahan kami</motion.span>
        <motion.div variants={fourth} initial="initial" animate="animate" className='w-[300px] text-center mx-auto mt-8 space-y-1 '>
          <p className={`${alexBrush.variable} font-alex-brush text-[#AA6C42] text-2xl`}>Chintia Aprilini S.M <br /> (Tia)</p>
          {/* <p className={`${marcellus.variable} font-marcellus text-[#5A5F4F] text-sm`}>Putri pertama dari <br /> Bapak Taufik & Ibu Sutini</p> */}
          <p className={`${alexBrush.variable} font-alex-brush text-[#AA6C42] text-2xl`}>&</p>
          <p className={`${alexBrush.variable} font-alex-brush text-[#AA6C42] text-2xl`}>Ferrian Eka Septiawan S.Kom <br /> (Rian)</p>
          {/* <p className={`${marcellus.variable} font-marcellus text-[#5A5F4F] text-sm`}>Putra pertama dari <br /> Bapak Ichwan & Ibu Sri Handayani</p> */}
        </motion.div>
      </div>
      <div className="text-center mt-4 z-50 relative">
        <Link href="/intro-3">
          <motion.button type="button" className="inline-flex items-center text-white bg-gradient-to-r from-stone-500 via-stone-600 to-stone-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-stone-300 shadow-lg shadow-stone-500/50 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" variants={fifth} initial="initial" animate="animate">
            <span>
              Next
            </span>
            <svg className="w-3.5 h-3.5 ms-1 mt-[0.2px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
          </motion.button>
        </Link>
      </div>

      <div className='absolute bottom-0'>
        <motion.div variants={sixth} initial="initial" animate="animate">
          <Image className='' src="/assets/bottom-flower.png" height="150" width="500" alt="flower" />
        </motion.div>
      </div>
    </div >
  )
}

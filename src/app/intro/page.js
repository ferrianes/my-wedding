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

const first = {
  initial: {
    opacity: 0,
    x: 70,
  },
  animate: {
    opacity: 1,
    x: 0,
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
    x: 70,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 3,
      ease: 'backInOut',
    },
  },
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
      delay: 1,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

const fourth = {
  initial: {
    opacity: 0,
    x: -70
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 3,
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const fifth = {
  initial: {
    opacity: 0,
    y: -10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3,
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const sixth = {
  initial: {
    opacity: 0,
    x: 70
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 3,
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const seventh = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

const eighth = {
  initial: {
    opacity: 0,
    // x: -70,
  },
  animate: {
    opacity: 1,
    // x: 0,
    transition: {
      delay: 5,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

const ninth = {
  initial: {
    opacity: 0,
    x: -70,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

export default function Intro() {
  return (
    <div className=''>
      <motion.div variants={first} initial="initial" animate="animate">
        <Image className='absolute top-0 right-0' src="/assets/top-right-flower.png" height="150" width="150" alt="flower" />
      </motion.div>
      <div className="flex flex-col pt-28 relative">
        <motion.h1 variants={second} initial="initial" animate="animate" className={`${marcellus.variable} font-marcellus text-3xl text-center text-[#5A5F4F]`}>The Wedding Of</motion.h1>
        <div className='mx-auto relative mt-3'>
          <motion.div variants={third} initial="initial" animate="animate">
            <Image src="/assets/backdrop-flower.webp" width="300" height="300" alt="backdrop flower" />
          </motion.div>
          <div className='w-[160px] absolute top-[55px] right-[70px]'>
            <TypingEffect key={1} text="Tia" speed={200} className={`${alexBrush.variable} font-alex-brush text-6xl text-[#5A5F4F] text-left`} animationVariant={fourth} />

            <TypingEffect key={2} text="&" speed={200} className={`${alexBrush.variable} font-alex-brush text-4xl leading-[0.6] text-[#AA6C42] text-center`} animationVariant={fifth} />

            <TypingEffectBackward key={3} text="Rian" speed={200} className={`${alexBrush.variable} font-alex-brush text-6xl text-[#5A5F4F] text-right mt-1`} animationVariant={sixth} />
          </div>
        </div>
      </div>
      <div className="flex w-max mx-auto">
        <div className="w-[300px]">
          <motion.p className={`${marcellus.variable} font-marcellus text-base text-[#5A5F4F] text-center`} variants={seventh} initial="initial" animate="animate">
            “Tidak ada solusi yang lebih sempurna dari pernikahan untuk dua orang yang saling mencintai” <br />
            (HR. Ibnu Majah)
          </motion.p>
        </div>
      </div>
      <div className="text-center mt-4 z-50 relative">
        <Link href='/intro-2'>
          <motion.button type="button" className="inline-flex items-center text-white bg-gradient-to-r from-stone-500 via-stone-600 to-stone-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-stone-300 shadow-lg shadow-stone-500/50 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" variants={eighth} initial="initial" animate="animate">
            <span>
              Next
            </span>
            <svg className="w-3.5 h-3.5 ms-1 mt-[0.2px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
          </motion.button>
        </Link>
      </div>

      <div className=''>
        <motion.div variants={ninth} initial="initial" animate="animate">
          <Image className='' src="/assets/bottom-left-flower.png" height="150" width="150" alt="flower" />
        </motion.div>
      </div>
    </div>
  )
}

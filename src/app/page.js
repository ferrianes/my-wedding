'use client'

import { Alex_Brush, Marcellus } from 'next/font/google'
import Image from 'next/image'
import { motion, AnimateSharedLayout, useAnimation } from "framer-motion"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

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
    y: 70,
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
    y: 70,
  },
  animate: {
    opacity: 0.5,
    y: 0,
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

const fourth = {
  initial: {
    opacity: 0,
    y: -10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const fifth = {
  initial: {
    opacity: 0,
    x: 70
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

const sixth = {
  initial: {
    opacity: 0,
    // x: -70
  },
  animate: {
    opacity: 1,
    // x: 0,
    transition: {
      delay: 3.5,
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const seventh = {
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

const eighth = {
  initial: {
    opacity: 0,
    // y: 70,
  },
  animate: {
    opacity: 1,
    // y: 0,
    transition: {
      delay: 3.5,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

const ninth = {
  initial: {
    opacity: 0,
    x: -70
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 3.5,
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const tenth = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3.7,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

export default function Home(props) {
  // get query params
  const params = useSearchParams();
  const router = useRouter();

  const onClick = () => {
    audio.play()
    router.push('/intro');
  }

  return (
    <div>
      <div className="flex flex-col pt-[4%]">
        <div className='mx-auto relative'>
          <motion.div className="-ml-7" variants={first} initial="initial" animate="animate">
            <Image src="/assets/we.webp" width="300" height="300" alt="backdrop flower" />
          </motion.div>
        </div>
      </div>
      <div className="flex w-max mx-auto">
        <div className="w-[200px]">
          <TypingEffect key={1} text="Chintia" speed={200} className={`${alexBrush.variable} font-alex-brush text-6xl text-[#5A5F4F] text-left`} animationVariant={third} />

          <TypingEffect key={2} text="&" speed={200} className={`${alexBrush.variable} font-alex-brush text-4xl leading-[0.6] text-[#AA6C42] text-center`} animationVariant={fourth} />

          <TypingEffectBackward key={3} text="Ferrian" speed={200} className={`${alexBrush.variable} font-alex-brush text-6xl text-[#5A5F4F] text-right`} animationVariant={fifth} />
        </div>
      </div>
      <motion.div variants={sixth} initial="initial" animate="animate" className="flex flex-col mt-2">
        <span text="Dear:" className={`${marcellus.variable} font-marcellus text-2xl text-[#5A5F4F] text-center`}>
          Dear:
        </span>
        <span className={`${marcellus.variable} font-marcellus text-2xl text-[#5A5F4F] text-center`}>{params.get('to')}</span>
      </motion.div>
      <div className="text-center mt-4 z-50 relative">
        <div onClick={onClick}>
          <motion.button type="button" className="text-white bg-gradient-to-r from-stone-500 via-stone-600 to-stone-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-stone-300 shadow-lg shadow-stone-500/50 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" variants={eighth} initial="initial" animate="animate">
            <TypingEffect key={6} text="Open Invitation" speed={200} animationVariant={ninth} />
          </motion.button>
        </div>
      </div>
      <motion.div className='' variants={tenth} initial="initial" animate="animate">
        <Image src="/assets/bottom-home.webp" height="300" width="500" alt="flower" />
      </motion.div>
    </div>
  )
}

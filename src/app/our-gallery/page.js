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
    // y: 70,
  },
  animate: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.5,
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
    y: 70,
  },
  animate: {
    opacity: 1,
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
      delay: 3,
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const fourth = {
  initial: {
    opacity: 0,
    // y: -10
  },
  animate: {
    opacity: 1,
    // y: 0,
    transition: {
      delay: 4,
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const fifth = {
  initial: {
    opacity: 0,
    // x: 70
  },
  animate: {
    opacity: 1,
    // x: 0,
    transition: {
      delay: 4,
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
      delay: 4,
      duration: 2,
      ease: 'easeOut',
    }
  }
}

const seventh = {
  initial: {
    opacity: 0,
    // x: 70
  },
  animate: {
    opacity: 1,
    // x: 0,
    transition: {
      delay: 4,
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
      delay: 5,
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
      delay: 5.5,
      duration: 3,
      ease: 'backInOut',
    },
  },
}

const eleventh = {
  initial: {
    opacity: 0,
    // y: 70,
  },
  animate: {
    opacity: 1,
    // y: 0,
    transition: {
      delay: 7,
      duration: 3,
      ease: 'backInOut',
    },
  },
}


export default function Home() {

  return (
    <div>
      <motion.div className='w-full relative' variants={animationVariantsFadeUp} initial="initial" animate="animate">
        <motion.span variants={animationVariantsFadeRight} initial="initial" animate="animate" className='bg-[#b3c4c2bc] shadow-md absolute p-3 mx-8 mt-8 rounded-xl'>
          <p className={`${marcellus.variable} font-marcellus text-center  text-[#5A5F4F]`}>
            Terima kasih atas dukungan, doa, serta restu yang diberikan. <br />
            Semoga kebaikan serta keberkahan <br />
            senantiasa menyertai kita semua. <br />
            Aamiin Ya Rabball Alamin.
          </p>
        </motion.span>
        <Image src="/assets/bg-gallery.webp" width={100} height={100} layout='responsive' alt="backdrop flower" />
      </motion.div>
    </div>
  )
}

import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingY} absolute inset-0 top-[170px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Name</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>This is a bio to be edited later.</p>
        </div> 
      </div>
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[59px] rounded-3xl border-4 border-[#7fffd4] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-[#7fffd4] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
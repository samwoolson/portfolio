import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-stone-50">
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="uppercase text-2xl tracking-widest text-neutral-600"
      >
        Design Engineer
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mt-6 max-w-4xl"
      >
        Bridging clinical experience, UX, and frontend code.
      </motion.h1>

      <motion.p
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.4, duration: 0.6 }}
       className="text-xl tracking-widest text-neutral-600 m-6"
      >
        Informed by patients struggling with the technology meant to help them.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 bg-orange-800 text-white px-6 py-3 rounded-full hover:bg-stone-950 transition"
      >
        View My Work
      </motion.a>

    </section>
  )
}

export default Hero
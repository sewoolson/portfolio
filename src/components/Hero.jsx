import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="uppercase text-md tracking-widest text-neutral-600"
      >
        Product Designer who Builds Experiences
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mt-6 max-w-4xl"
      >
        I craft intuitive interfaces and translate them into clean, performant frontend experiences.
      </motion.h1>

      <a
        href="#projects"
        className="mt-8 bg-stone-600 text-white px-6 py-3 rounded-full hover:bg-violet-400 transition"
      >
        View My Work
      </a>

    </section>
  )
}

export default Hero
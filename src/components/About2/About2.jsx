import { motion, useScroll, useTransform } from 'framer-motion';

const About2 = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax shift for content
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.div 
      style={{ y: yTranslate }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="relative w-full min-h-screen bg-transparent text-white px-6 md:px-20 py-40 overflow-hidden font-sans"
    >
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col items-center text-center mb-52">
        <motion.h1 
          variants={itemVariants}
          className="text-[12vw] md:text-[10rem] font-black uppercase leading-[0.8] tracking-tighter"
        >
          PURE <br /> 
          <span 
            className="text-transparent" 
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}
          >
            CREATIVE
          </span> <br />
          INSTINCT
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="mt-16 max-w-3xl text-lg md:text-2xl font-light opacity-60 leading-relaxed"
        >
          We operate at the intersection of raw emotion and technical mastery. 
          Dogstudio is a sanctuary for those who believe digital experiences 
          should be felt, not just seen.
        </motion.p>
      </section>

      {/* --- GRID INFO SECTION --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-60 border-t border-white/10 pt-24">
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-[0.5em] text-zinc-500 font-bold">The Journey</h2>
          <p className="text-3xl font-light leading-tight">
            From audacious concepts to pixel-perfect execution, our mission is to redefine human-digital interaction.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-[0.5em] text-zinc-500 font-bold">The Vision</h2>
          <p className="text-3xl font-light leading-tight opacity-40">
            We forge a future where technology is not just a tool, but an extension of pure artistry and soul.
          </p>
        </motion.div>
      </section>

      {/* --- CORE VALUES GRID --- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-60">
        {[
          { id: "01", title: "BOLD", desc: "We don't follow trends. We break them to create new standards." },
          { id: "02", title: "RAW", desc: "Technology is cold; our job is to make it breathe and bleed emotion." },
          { id: "03", title: "ALPHA", desc: "We lead the pack in technical innovation and aesthetic bravery." }
        ].map((val, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            whileHover={{ y: -15, backgroundColor: "rgba(255,255,255,0.03)" }}
            className="group p-12 border border-white/5 backdrop-blur-md transition-all duration-500"
          >
            <span className="block text-zinc-700 font-mono mb-6 group-hover:text-white transition-colors">{val.id}</span>
            <h3 className="text-4xl font-serif italic mb-6">{val.title}</h3>
            <p className="text-sm opacity-40 leading-loose group-hover:opacity-70">{val.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* --- FINAL CTA --- */}
      <section className="text-center py-32 border-y border-white/5">
        <motion.div variants={itemVariants}>
          <h2 className="text-6xl md:text-[7vw] font-black mb-16 uppercase leading-none">
            READY TO JOIN <br /> THE PACK?
          </h2>
          
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-16 py-6 border border-white text-white font-bold tracking-[0.3em] text-sm hover:bg-white hover:text-black transition-all duration-700 uppercase"
          >
            Become Alpha →
          </motion.a>
        </motion.div>
      </section>

      {/* --- FOOTER BRANDS --- */}
      <motion.footer 
        variants={itemVariants}
        className="flex justify-between items-center mt-20 opacity-20 text-[10px] tracking-widest uppercase"
      >
        <p>© 2026 Art & Tech</p>
        <p>Redefining Experience</p>
      </motion.footer>
    </motion.div>
  );
};

export default About2;
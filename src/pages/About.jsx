import React from 'react';
import { motion } from 'framer-motion';

function About() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#080808', 
      color: '#fff',
      fontFamily: '"Pirata One", system-ui',
      overflowX: 'hidden'
    }}>
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        style={{ 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          padding: '0 10%',
          position: 'relative' 
        }}
      >
        <motion.small 
          variants={fadeInUp}
          style={{ letterSpacing: '0.4rem', color: '#555', marginBottom: '2rem', display: 'block' }}
        >
          WHO WE ARE — 01
        </motion.small>
        
        <motion.h1 
          variants={fadeInUp}
          style={{ 
            fontSize: 'clamp(3.5rem, 10vw, 8rem)', 
            fontWeight: '900', 
            lineHeight: '0.9',
            margin: '0',
            letterSpacing: '-0.03em'
          }}
        >
          WE ARE <br />
          <motion.span 
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ color: 'transparent', WebkitTextStroke: '1px #fff', display: 'inline-block' }}
          >
            DOGSTUDIO.
          </motion.span>
        </motion.h1>

        <motion.div 
          variants={fadeInUp}
          style={{ position: 'absolute', bottom: '15%', right: '10%', maxWidth: '400px', textAlign: 'right' }}
        >
          <p style={{ fontSize: '1.2rem', color: '#888', lineHeight: '1.6' }}>
            A multidisciplinary creative sanctuary where art meets the digital pulse of technology.
          </p>
        </motion.div>
      </motion.section>

      {/* Philosophy Section - White Background */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{ 
          padding: '12rem 10%', 
          background: '#fff', 
          color: '#000',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '6rem',
          borderRadius: '4rem 4rem 0 0'
        }}
      >
        <motion.div variants={fadeInUp}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            Pushing the <br /> boundaries of <br /> human interaction.
          </h2>
        </motion.div>
        
        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p style={{ fontSize: '1.6rem', lineHeight: '1.4', fontWeight: '500' }}>
            We don't just build websites; we create digital emotions that linger long after the tab is closed.
          </p>
          <p style={{ color: '#555', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Through cutting-edge technology and a soul-driven design process, we inspire audiences worldwide. 
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button style={{
              padding: '1.2rem 3rem',
              borderRadius: '3rem',
              border: '1px solid #000',
              background: '#000',
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              letterSpacing: '0.1rem'
            }}>
              OUR MANIFESTO
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Parallax Image Section */}
      <div style={{ overflow: 'hidden', background: '#fff', padding: '0 2rem' }}>
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ 
            height: '80vh', 
            background: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070") center/cover no-repeat',
            filter: 'grayscale(100%)',
            borderRadius: '2rem'
          }}
        />
      </div>

      {/* Footer Info */}
      <footer style={{ padding: '10rem 10%', textAlign: 'center', background: '#fff', color: '#000' }}>
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ fontSize: '0.9rem', color: '#888', letterSpacing: '0.3rem', marginBottom: '3rem' }}
        >
          JOIN THE PACK
        </motion.h3>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', maxWidth: '900px', margin: '0 auto', lineHeight: '1.3', fontWeight: '600' }}
        >
          We are always looking for brave designers and technical wizards to join our journey.
        </motion.p>
      </footer>
    </div>
  );
}

export default About;
import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div style={{ 
      padding: '10vh 8%', 
      minHeight: '100vh', 
      background: '#080808', 
      color: '#fff',
      fontFamily: '"Pirata One", system-ui',
      position: 'relative',
      overflow: 'hidden' 
    }}>
      
      {/* ব্যাকগ্রাউন্ড অ্যানিমেশন (মডেলের বিকল্প হিসেবে) */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #ff3e3e 0%, transparent 70%)',
          filter: 'blur(120px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Header with Mask Effect */}
        <motion.div variants={itemVariants} style={{ marginBottom: '6rem' }}>
          <h1 style={{ 
            fontSize: 'clamp(4rem, 15vw, 12rem)', 
            fontWeight: '900', 
            lineHeight: '0.8', 
            letterSpacing: '-0.05em',
            margin: 0
          }}>
            SAY <br />
            <span style={{ 
              color: 'transparent', 
              WebkitTextStroke: '1px rgba(255,255,255,0.2)',
              fontStyle: 'italic' 
            }}>HELLO.</span>
          </h1>
        </motion.div>

        {/* Contact Info Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '5rem',
          maxWidth: '1200px'
        }}>
          
          {/* New Project Section */}
          <motion.div variants={itemVariants}>
            <p style={{ color: '#444', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '2rem', fontWeight: 'bold' }}>NEW PROJECTS</p>
            <motion.a 
              whileHover={{ x: 10 }}
              href="mailto:hello@dogstudio.co" 
              style={{ 
                fontSize: '1.8rem', 
                color: '#fff', 
                textDecoration: 'none',
                display: 'block',
                borderBottom: '1px solid #222',
                paddingBottom: '1rem'
              }}
            >
              hello@dogstudio.co
            </motion.a>
          </motion.div>

          {/* Careers Section */}
          <motion.div variants={itemVariants}>
            <p style={{ color: '#444', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '2rem', fontWeight: 'bold' }}>CAREERS</p>
            <motion.a 
              whileHover={{ x: 10 }}
              href="mailto:jobs@dogstudio.co" 
              style={{ 
                fontSize: '1.8rem', 
                color: '#fff', 
                textDecoration: 'none',
                display: 'block',
                borderBottom: '1px solid #222',
                paddingBottom: '1rem'
              }}
            >
              join@thepack.co
            </motion.a>
          </motion.div>

          {/* Socials Section */}
          <motion.div variants={itemVariants}>
            <p style={{ color: '#444', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '2rem', fontWeight: 'bold' }}>FOLLOW</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {['INSTAGRAM', 'TWITTER', 'LINKEDIN'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ color: '#ff3e3e' }}
                  style={{ 
                    fontSize: '0.9rem', 
                    color: '#888', 
                    textDecoration: 'none', 
                    fontWeight: 'bold',
                    transition: 'color 0.3s'
                  }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Footer Section */}
        <motion.div 
          variants={itemVariants}
          style={{ 
            marginTop: '15vh', 
            paddingTop: '5rem',
            borderTop: '1px solid #1a1a1a',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '3rem'
          }}
        >
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '300', margin: 0 }}>
              Based in Namur, <br /> Chicago & Mexico.
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '2rem 4rem',
              borderRadius: '5rem',
              border: '1px solid #333',
              background: 'transparent',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.4s ease'
            }}
          >
            LET'S CHAT
          </motion.button>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Contact;
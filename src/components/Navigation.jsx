import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navigation() {
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navStyle = {
    position: 'fixed',
   
    top: isMobile ? 'auto' : '2rem',
    bottom: isMobile ? '1.5rem' : 'auto',
    right: isMobile ? '50%' : '2rem',
    left: isMobile ? '50%' : 'auto',
  
    transform: isMobile ? 'translateX(-50%)' : 'none',
    
    zIndex: 1000,
    display: 'flex',
    gap: isMobile ? '0.5rem' : '1rem',
    background: 'rgba(0, 0, 0, 0.7)',
    padding: isMobile ? '0.6rem' : '0.8rem 1.5rem',
    borderRadius: '50px',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    width: isMobile ? '90%' : 'auto',
    justifyContent: 'center',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  }

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: isMobile ? '0.6rem 1rem' : '0.5rem 1.2rem',
    borderRadius: '25px',
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    flex: isMobile ? 1 : 'none',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  }

  const activeLinkStyle = {
    ...linkStyle,
    background: '#fff',
    color: '#000',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
     { name: 'More', path: '/more' }
  ]

  return (
    <nav style={navStyle}>
      {navItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path} 
          style={location.pathname === item.path ? activeLinkStyle : linkStyle}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
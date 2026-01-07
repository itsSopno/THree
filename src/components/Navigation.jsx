import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()

  const navStyle = {
    position: 'fixed',
    top: '2rem',
    right: '2rem',
    zIndex: 1000,
    display: 'flex',
    gap: '2rem',
    background: 'rgba(0, 0, 0, 0.8)',
    padding: '1rem 2rem',
    borderRadius: '50px',
    backdropFilter: 'blur(10px)',
  }

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    transition: 'all 0.3s ease',
  }

  const activeLinkStyle = {
    ...linkStyle,
    background: '#fff',
    color: '#000',
  }

  return (
    <nav style={navStyle}>
      <Link 
        to="/" 
        style={location.pathname === '/' ? activeLinkStyle : linkStyle}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        style={location.pathname === '/about' ? activeLinkStyle : linkStyle}
      >
        About
      </Link>
      <Link 
        to="/work" 
        style={location.pathname === '/work' ? activeLinkStyle : linkStyle}
      >
        Work
      </Link>
      <Link 
        to="/contact" 
        style={location.pathname === '/contact' ? activeLinkStyle : linkStyle}
      >
        Contact
      </Link>
    </nav>
  )
}

export default Navigation
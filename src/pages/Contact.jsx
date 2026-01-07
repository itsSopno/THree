function Contact() {
  return (
    <div style={{ padding: '2rem', minHeight: '100vh', background: '#000', color: '#fff' }}>
      <h1>Contact Us</h1>
      <div style={{ maxWidth: '600px', marginTop: '2rem' }}>
        <h2>Let's build something great together</h2>
        
        <div style={{ marginTop: '3rem' }}>
          <h3>Get in touch</h3>
          <p>
            <strong>Email:</strong> <a href="mailto:hello@dogstudio.co" style={{ color: '#fff' }}>hello@dogstudio.co</a>
          </p>
          <p>
            <strong>Phone:</strong> +32 81 22 55 11
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>Offices</h3>
          <p>Namur / Chicago / Mexico</p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>Follow us</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: '#fff' }}>Instagram</a>
            <a href="#" style={{ color: '#fff' }}>Twitter</a>
            <a href="#" style={{ color: '#fff' }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
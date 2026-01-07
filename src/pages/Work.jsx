function Work() {
  const projects = [
    { name: 'Tomorrowland', year: '2020 - ONGOING', image: '/tommorowland.png' },
    { name: 'Navy Pier', year: '2020 - ONGOING', image: '/navy-pier.png' },
    { name: 'MSI Chicago', year: '2020 - ONGOING', image: '/msi-chicago.png' },
    { name: "This Was Louise's Phone", year: '2020 - ONGOING', image: '/phone.png' },
    { name: 'KIKK Festival 2018', year: '2020 - ONGOING', image: '/kikk.png' },
    { name: 'The Kennedy Center', year: '2020 - ONGOING', image: '/kennedy.png' },
    { name: 'Royal Opera Of Wallonia', year: '2020 - ONGOING', image: '/opera.png' },
  ]

  return (
    <div style={{ padding: '2rem', minHeight: '100vh', background: '#000', color: '#fff' }}>
      <h1>Our Work</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #333', padding: '1rem', borderRadius: '8px' }}>
            <img 
              src={project.image} 
              alt={project.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <small style={{ color: '#888', display: 'block', marginTop: '1rem' }}>{project.year}</small>
            <h3 style={{ margin: '0.5rem 0' }}>{project.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
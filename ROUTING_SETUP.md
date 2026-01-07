# React Router Setup

This project now uses React Router DOM v7.11.0 for client-side routing.

## Structure

```
src/
├── App.jsx              # Main app with routing setup
├── main.jsx             # Entry point with BrowserRouter
├── components/
│   └── Navigation.jsx   # Floating navigation component
└── pages/
    ├── Home.jsx         # Original homepage with 3D dog
    ├── About.jsx        # About page
    ├── Work.jsx         # Portfolio/work showcase
    └── Contact.jsx      # Contact information
```

## Routes

- `/` - Home page (original content with 3D dog)
- `/about` - About Dogstudio
- `/work` - Portfolio showcase
- `/contact` - Contact information

## Features

- **Floating Navigation**: Fixed navigation in top-right corner
- **Active Route Highlighting**: Current page highlighted in navigation
- **3D Scene**: Three.js dog model on homepage
- **Responsive Design**: Works across different screen sizes

## Usage

The app automatically handles routing. Users can navigate between pages using the floating navigation or by typing URLs directly.

To add new routes:
1. Create a new page component in `src/pages/`
2. Import it in `App.jsx`
3. Add a new `<Route>` element
4. Update `Navigation.jsx` if needed
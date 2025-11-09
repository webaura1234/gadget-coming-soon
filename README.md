# GADGET 360 Landing Page

A high-fashion landing page for GADGET 360, featuring an elegant design with a full-screen background texture.

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Replacing Images

### Background Image
Replace `/public/background-texture.svg` with your high-fashion background image (textured leather, brushed titanium, marble, etc.). You can use:
- `.jpg`, `.png`, or `.webp` formats
- Recommended size: 1920x1080px or larger
- Update the CSS in `src/LandingPage.css` line 9 if you change the filename

### Logo
Replace `/public/logo.svg` with your custom logo. The current logo is a placeholder SVG.

## Project Structure

```
latprac/
├── public/
│   ├── logo.svg              # Logo file (replace with your logo)
│   └── background-texture.svg # Background image (replace with your image)
├── src/
│   ├── LandingPage.jsx        # Main landing page component
│   ├── LandingPage.css        # Landing page styles
│   ├── App.jsx                # App component
│   ├── App.css                # App styles
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html                  # HTML entry point
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts
```

## Features

- ✅ Full-screen background with overlay
- ✅ Elegant centered layout
- ✅ Responsive design
- ✅ Email capture form
- ✅ Clean, modern typography (Inter font)
- ✅ Smooth transitions and hover effects

## Customization

- **Colors**: Edit `src/LandingPage.css` to change colors, opacity, and styling
- **Text**: Edit `src/LandingPage.jsx` to modify headlines and copy
- **Layout**: Adjust spacing and sizing in `src/LandingPage.css`

## Supabase Row Level Security (RLS)

### Why INSERT Policies Use WITH CHECK Only

INSERT policies only need `WITH CHECK` because there's no existing row to check against during insert. The `USING` clause is for checking existing rows, which only applies to SELECT, UPDATE, and DELETE.

### Common Issues Checklist

1. Environment Variables
   - No whitespace in VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY
   - URL ends with .supabase.co (no trailing slash)
   - Using anon key (starts with eyJ...), never service_role
   - Restart Vite after changing .env

2. RLS Policy Debug
   - Check policy names match exactly
   - Verify RLS is enabled on table
   - Test with psql: SET ROLE anon; INSERT INTO subscribers...

3. Sequences (if using SERIAL)
   - Ensure anon has USAGE on sequences
   - Not needed for IDENTITY columns

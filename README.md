# ADESA - Bringing the future of design to market

A minimalist, modern website featuring an animated ADESA logo with interactive audio controls and responsive design.

## 🎯 Features

- **Interactive ADESA Logo**: Click to start/stop background music
- **Advanced Audio System**: Smooth fade in/out, auto-loop at 2:10
- **Responsive Design**: Perfect scaling across all devices
- **Linear Typography**: Smooth text scaling without jumps
- **Modern UI**: Clean, professional aesthetic

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/adesa.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Deploy automatically

3. **Custom Domain**:
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your GoDaddy domain (e.g., odessa.world)
   - Change nameservers to ns1.vercel-dns.com and ns2.vercel-dns.com
   - Wait 2-4 hours for DNS propagation

4. **Upload Audio File**:
   - Audio file is included in the repository and automatically deployed
   - No manual upload needed

## 📁 Project Structure

```
Adesa/
├── index.html          # Main HTML file
├── styles.css          # Responsive CSS with linear scaling
├── script.js           # Audio controls and interactions
├── Graphik-Regular.ttf # Custom font
├── intodotmatrix.ttf   # Dot matrix font
├── README.md           # This file
└── Interdimensional Fiume(Ambient Fiume).mp3 # Background audio (included in deployment)
```

## 🎵 Audio Controls

- **Click ADESA logo**: Start/stop music
- **Console commands**:
  ```javascript
  ADESA.startMusic()    // Start music
  ADESA.stopMusic()     // Stop music
  ADESA.setAudio("file.mp3") // Change audio file
  ```

## 📱 Responsive Breakpoints

- **Desktop**: 1rem text, responsive logo
- **Tablet (768px)**: 0.8rem text, medium logo
- **Mobile (480px)**: 0.7rem text, large logo
- **Landscape**: 0.65rem text, largest logo

## 🎨 Design Features

- **Linear Typography**: No size jumps across breakpoints
- **Dot Matrix Effect**: Subtle texture on ADESA letters
- **Smooth Animations**: Professional transitions
- **Modern Color Palette**: Slate blue background (#8b9ab1)

## 🔧 Technical Details

- **Vanilla JavaScript**: No frameworks required
- **HTML5 Audio**: Modern audio API with error handling
- **CSS Grid/Flexbox**: Modern layout techniques
- **Custom Fonts**: Graphik and Into Dot Matrix
- **Responsive Images**: Optimized for all devices

## 🌐 Live Demo

Visit: [odessa.world](https://odessa.world) (DNS propagation in progress)

## 📄 License

© 2024 ADESA. All rights reserved. 
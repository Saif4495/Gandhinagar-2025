# World Police Fire Games 2029

A modern, responsive website for the World Police Fire Games 2029, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Beautiful, responsive UI with smooth animations
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **TypeScript**: Fully typed for better development experience
- **Responsive**: Mobile-first design that works on all devices
- **SEO Friendly**: Optimized for search engines
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.2
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.14
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Saif4495/World-Police-Fire-Games.git
cd World-Police-Fire-Games
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables (optional):
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🚀 Deployment on Vercel

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect it's a Next.js project
4. Deploy with one click!

### Manual Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

## 📁 Project Structure

```
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components
│   ├── AboutSection.tsx
│   ├── CountdownTimer.tsx
│   ├── Footer.tsx
│   ├── GamesSection.tsx
│   ├── HeroSection.tsx
│   ├── LoadingAnimation.tsx
│   ├── Navbar.tsx
│   ├── NewsSection.tsx
│   └── ScrollIndicator.tsx
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/               # Static assets
└── ...config files
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

The website uses Tailwind CSS for styling. You can customize:

- **Colors**: Update the color palette in `tailwind.config.ts`
- **Fonts**: Modify fonts in `app/layout.tsx`
- **Content**: Update text and images in respective component files
- **Animations**: Customize Framer Motion animations in component files

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you have any questions or need help, please open an issue on GitHub.

---


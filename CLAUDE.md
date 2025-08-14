# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal presentation website built with Next.js 15, TypeScript, and Tailwind CSS. The site is optimized for deployment on Vercel and features a modern, responsive design with smooth scrolling navigation.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with dark mode support
- **Typography**: Geist font family (sans and mono)
- **Language**: Czech (cs) with TypeScript
- **Deployment**: Optimized for Vercel (zero-config deployment)

## Key Features

- Responsive single-page design with smooth scrolling
- Dark/light mode support via Tailwind CSS
- Fixed navigation header with backdrop blur
- Sections: Hero, About, Skills, Contact
- Czech language content with professional presentation layout

## File Structure

- `src/app/page.tsx` - Main presentation page with all content sections
- `src/app/layout.tsx` - Root layout with metadata and fonts
- `src/app/globals.css` - Global styles with smooth scrolling

## Customization Notes

To personalize the website:
- Update contact information in the Contact section (page.tsx:151-167)
- Modify personal details in Hero and About sections
- Adjust skills lists to match your expertise
- Change color scheme by modifying Tailwind classes (currently blue-focused)
- Update metadata in layout.tsx for SEO
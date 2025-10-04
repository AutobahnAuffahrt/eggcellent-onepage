# 🥚 Eggcellent Onepage 🥚

A **Vue.js single-page website** that introduces the chicken breeds I keep and my chicken coop.  
The project is built as part of my learning journey with **Vue.js**, **scroll-triggered animations**, and **modern frontend workflows**.

**Live URL**: `farm.schuchardt.cloud` (coming soon)

## Project Goals

- Create a **single-page website** with smooth scrolling and animations
- Showcase **3 chicken breeds** (Orpington, Deutsches Buschhuhn, Brahma)
- Present the **chicken coop** with photos and construction details
- Learn and apply **Vue.js fundamentals**
- Implement **scroll-triggered animations** with animated chickens
- Build a clean **developer workflow** and deployment pipeline

## Project Structure

### Sections (Top to Bottom)

1. **Hero Section**
   - Welcoming title/tagline
   - Scroll indicator

2. **Chicken Breeds (3 Sections)**
   - **Orpington**: Name, image, description + animated chicken
   - **Deutsches Buschhuhn**: Name, image, description + animated chicken
   - **Brahma**: Name, image, description + animated chicken

3. **Chicken Coop Section**
   - Photos of the blue & white coop
   - Construction details and information

### Technical Stack

- **Framework**: Vue.js 3 (Composition API)
- **Routing**: Vue Router
- **Build Tool**: Vite
- **Testing**: Vitest
- **Animations**: CSS animations + Vue transitions (scroll-triggered)
- **Styling**: Custom CSS with Farmhouse-style design

### Design Guidelines

- **Style**: Farmhouse-style (rustic, cozy, welcoming)
- **Colors**:
  - Primary: Earth tones (browns, beiges, greens)
  - Accent: Blue & white (matching the coop)
- **Layout**: Vertical full-screen sections
- **Responsive**: Desktop-first, mobile-compatible
- **Animations**: Each breed section features an animated chicken walking across the screen

## Detailed Implementation Plan

### Phase 1: Content Preparation (Week 1)

- [ ] Take photos of all 3 chicken breeds
- [ ] Take photos of the chicken coop (exterior, interior, details)
- [ ] Write descriptions for each breed (character, egg production, special traits)
- [ ] Write text about coop construction and features
- [ ] Create/find chicken sprite/silhouette for walking animation

### Phase 2: Basic Structure (Week 1-2)

- [ ] Remove template components (HelloWorld, TheWelcome, etc.)
- [ ] Create new component structure:
  - [ ] `HeroSection.vue`
  - [ ] `BreedSection.vue` (reusable for all 3 breeds)
  - [ ] `CoopSection.vue`
  - [ ] `AnimatedChicken.vue` (reusable animation component)
- [ ] Set up Vue Router for smooth scrolling
- [ ] Create basic layout with full-screen sections

### Phase 3: Styling & Design (Week 2-3)

- [ ] Define color palette (earth tones + blue/white accents)
- [ ] Create farmhouse-style typography
- [ ] Design and style Hero section
- [ ] Style BreedSection component (consistent layout)
- [ ] Style CoopSection with image gallery
- [ ] Add background textures/patterns (wood, fabric, etc.)
- [ ] Ensure mobile responsiveness

### Phase 4: Animations (Week 3-4)

- [ ] Implement scroll-triggered fade-in for sections
- [ ] Create walking chicken animation (CSS keyframes)
- [ ] Add chicken animation to each breed section
- [ ] Implement smooth scroll behavior
- [ ] Add entrance animations for text and images
- [ ] Polish timing and easing functions

### Phase 5: Content Integration (Week 4)

- [ ] Optimize and add all chicken breed photos
- [ ] Optimize and add chicken coop photos
- [ ] Add all text content
- [ ] Fine-tune image placements
- [ ] Add alt texts for accessibility

### Phase 6: Testing & Optimization (Week 5)

- [ ] Test on different desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Optimize images (WebP format, lazy loading)
- [ ] Optimize animation performance
- [ ] Test scroll behavior and animations
- [ ] Fix any bugs or issues

### Phase 7: Deployment (Week 5-6)

- [ ] Build production version (`npm run build`)
- [ ] Set up subdomain `farm.schuchardt.cloud` at Hetzner
- [ ] Configure web server (nginx/apache)
- [ ] Upload build files to server
- [ ] Test live deployment
- [ ] Set up CI/CD pipeline (optional)

## Planned File Structure

```
src/
├── assets/
│   ├── base.css
│   ├── main.css
│   ├── farmhouse-theme.css          # New: Theme variables
│   ├── images/
│   │   ├── breeds/
│   │   │   ├── orpington.jpg
│   │   │   ├── buschhuhn.jpg
│   │   │   └── brahma.jpg
│   │   ├── coop/
│   │   │   ├── exterior-1.jpg
│   │   │   ├── exterior-2.jpg
│   │   │   └── interior.jpg
│   │   └── animations/
│   │       └── chicken-sprite.png   # For walking animation
│   └── logo.svg
├── components/
│   ├── HeroSection.vue              # New
│   ├── BreedSection.vue             # New
│   ├── CoopSection.vue              # New
│   ├── AnimatedChicken.vue          # New
│   └── ScrollIndicator.vue          # New (optional)
├── composables/
│   └── useScrollAnimation.js        # New: Scroll detection logic
├── data/
│   └── breeds.js                    # New: Breed data (name, description, etc.)
├── router/
│   └── index.js                     # Update for smooth scrolling
├── views/
│   └── HomeView.vue                 # Main landing page
├── App.vue
└── main.js
```

## Current Progress

- [x] Set up Vue.js project structure
- [x] Define project scope and requirements
- [x] Create detailed implementation plan
- [ ] Content preparation
- [ ] Component development
- [ ] Styling & design
- [ ] Animation implementation
- [ ] Testing & optimization
- [ ] Deployment

## Design References & Inspiration

- Farmhouse color palette with earth tones
- Blue & white accents (matching the chicken coop)
- Clean, readable typography
- Full-screen sections for immersive experience
- Playful animated chickens for personality

## Notes

- This project is for **learning purposes** and portfolio building
- Desktop-first approach, but mobile-compatible
- Focus on smooth animations and user experience
- Deployment target: `farm.schuchardt.cloud` on Hetzner

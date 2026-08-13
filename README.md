# Remix of Pixel Perfect Polish

Create a modern, production-ready website by recreating the visual design, layout, animations, interactions, and overall user experience shown in the reference video I provide.

IMPORTANT:

Use the reference video ONLY as a visual and interaction reference. Do not copy copyrighted text, logos, images, or proprietary assets. Recreate the design concept and user experience with original implementation and assets.

TECH STACK:

- React

- Vite

- JavaScript

- SCSS

- PHP backend/API

- Do NOT use Tailwind CSS

- Do NOT use TypeScript

- Keep the frontend and backend clearly separated

PROJECT REQUIREMENTS:

1. GENERAL DESIGN

- Carefully analyze the reference video before implementing the UI.

- Recreate the same overall visual hierarchy, spacing, proportions, section structure, animations, transitions, and interaction patterns.

- Make the website feel polished, premium, modern, and production-ready.

- Pay close attention to typography, whitespace, alignment, borders, shadows, gradients, cards, buttons, and section transitions.

- Use a consistent design system throughout the entire website.

- Do not create a generic template. The final result should closely reproduce the visual experience of the reference.

2. RESPONSIVE DESIGN

Create fully responsive layouts for:

- Desktop

- Laptop

- Tablet

- Mobile

The design should adapt naturally rather than simply shrinking desktop elements.

Pay special attention to:

- Navigation on mobile

- Typography scaling

- Section spacing

- Card layouts

- Images/video proportions

- Button sizes

- Horizontal overflow

- Touch interactions

3. ANIMATIONS & INTERACTIONS

Recreate the animations visible in the reference video, including where appropriate:

- Smooth scroll animations

- Fade-in animations

- Slide-in animations

- Scale animations

- Hover effects

- Button micro-interactions

- Card hover effects

- Image reveal effects

- Navigation transitions

- Sticky/fixed navigation behavior

- Scroll-based transformations

- Section entrance animations

Animations should be smooth and performant.

Do not overuse animations. They should feel intentional and premium.

4. REACT ARCHITECTURE

Use reusable React components.

Recommended structure:

src/

├── components/

│ ├── Navbar.jsx

│ ├── Hero.jsx

│ ├── Section.jsx

│ ├── Button.jsx

│ ├── Card.jsx

│ ├── Footer.jsx

│ └── ...

├── pages/

│ ├── Home.jsx

│ └── ...

├── data/

│ └── content.js

├── styles/

│ ├── main.scss

│ ├── variables.scss

│ ├── mixins.scss

│ ├── components/

│ └── pages/

├── services/

│ └── api.js

├── App.jsx

└── main.jsx

Keep components modular and maintainable.

5. SCSS

Use SCSS for all styling.

Create:

- Variables

- Mixins

- Reusable utility patterns where appropriate

- Component-specific styles

- Responsive breakpoints

Avoid putting a huge amount of CSS into a single file.

Use meaningful class names.

Example:

styles/

├── main.scss

├── variables.scss

├── mixins.scss

├── components/

│ ├── navbar.scss

│ ├── hero.scss

│ ├── cards.scss

│ └── footer.scss

└── pages/

    └── home.scss

6. PHP BACKEND

Create a clean PHP REST API structure.

Example:

backend/

├── config/

│ └── database.php

├── controllers/

├── models/

├── routes/

├── services/

├── middleware/

└── index.php

Use PHP for:

- Form submissions

- Contact forms

- Newsletter subscriptions

- Dynamic content where required

- Database operations

- Authentication if required

The React frontend should communicate with PHP through API endpoints using fetch/AJAX.

Create a reusable API service in React.

Example:

src/services/api.js

Use environment variables for API URLs.

7. DATABASE

If persistent data is required:

- Use MySQL

- Use PDO

- Use prepared statements

- Never directly concatenate user input into SQL queries

- Keep database credentials in environment/config files

- Create clean database tables and relationships

8. NAVIGATION

Implement:

- Smooth scrolling where appropriate

- Active navigation states

- Sticky navigation if shown in the reference

- Mobile hamburger menu

- Animated mobile menu

- Correct routing if multiple pages exist

9. ACCESSIBILITY

Implement:

- Semantic HTML

- Keyboard navigation

- Proper button elements

- Accessible forms

- Alt text for images

- Sufficient color contrast

- ARIA attributes where necessary

10. PERFORMANCE

Optimize the website for:

- Fast initial loading

- Lazy-loaded images

- Optimized assets

- Minimal unnecessary React re-renders

- Efficient animations

- No blocking JavaScript

- Responsive images

Avoid unnecessary dependencies.

11. CODE QUALITY

Write clean, maintainable production-quality code.

Do not:

- Put everything inside App.jsx

- Create one huge component

- Use inline styles everywhere

- Hardcode repeated content

- Use unnecessary libraries

- Use Tailwind

- Use TypeScript

Use reusable components and data-driven rendering.

12. CONTENT

If the reference video contains text, replace it with appropriate original placeholder/content that matches the same visual length and hierarchy.

Do not copy exact copyrighted text from the reference.

If images or icons are required and no assets are provided, use suitable royalty-free/placeholder assets and structure the code so they can easily be replaced later.

13. FINAL RESULT

The final website should feel like a real professional website rather than a generated demo.

Prioritize:

1. Visual accuracy to the reference

2. Smooth animations

3. Responsive behavior

4. Clean React architecture

5. SCSS organization

6. PHP API integration

7. Performance

8. Accessibility

Before finishing:

- Check every section against the reference video.

- Check desktop and mobile layouts.

- Check all buttons and interactions.

- Check navigation.

- Check forms.

- Check console errors.

- Fix responsive issues.

- Fix overflow issues.

- Remove unnecessary code and dependencies.

Start by analyzing the reference video and identifying:

- Page structure

- Sections

- Navigation behavior

- Typography

- Colors

- Spacing

- Components

- Animations

- Scroll behavior

- Responsive behavior

Then implement the website in React + Vite + SCSS with a PHP API backend.

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

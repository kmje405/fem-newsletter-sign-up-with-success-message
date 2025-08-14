# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the
[Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen
  size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Newsletter sign-up form solution](./preview.jpg)

### Links

- Solution URL:
  [GitHub Repository](https://github.com/yourusername/fem-newsletter-sign-up-with-success-message)
- Live Site URL: [Live Demo](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (CSS variables)
- CSS Grid
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- CSS Layers for better organization
- Responsive typography with CSS custom properties

### What I learned

This project reinforced several key concepts and introduced me to some advanced
CSS techniques:

**Responsive Typography with CSS Custom Properties:**

```css
/* Smart responsive font sizing */
--fs-display-current: var(--fs-display-mobile);

@media (min-width: 48rem) {
  :root {
    --fs-display-current: var(--fs-display-desktop);
  }
}
```

**CSS Layers for Better Organization:**

```css
@layer tokens, global, components, responsive;
```

**Form Validation with JavaScript:**

```js
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

**State Management for UI Transitions:**

```js
function showSuccessMessage() {
  newsletterSection.style.display = "none";
  successWrapper.style.display = "flex";
}
```

The most interesting learning was implementing a responsive typography system
using CSS custom properties that automatically adjusts font sizes based on
screen size without needing multiple media queries for each element.

### Continued development

Areas I want to continue focusing on in future projects:

- **Advanced CSS Grid layouts** - Exploring more complex grid patterns and
  subgrid
- **CSS Container Queries** - For more component-based responsive design
- **Web Accessibility** - Implementing better ARIA attributes and keyboard
  navigation
- **CSS Animation** - Adding smooth transitions and micro-interactions
- **Progressive Enhancement** - Building forms that work without JavaScript

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor -
  [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

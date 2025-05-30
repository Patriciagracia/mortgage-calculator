# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [GitHub repository](https://github.com/Patriciagracia/mortgage-calculator/tree/main)
- Live Site URL: [Live site](https://mortgage-calculator-five-snowy.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (variables)
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vite.dev/) – Lightning-fast dev server and bundler
- [Bootstrap](https://getbootstrap.com/) - Grid and utility-first styling

### What I learned

- Conditional use of `className` to manage styles and visual feedback based on state. CSS has been the most challenging part of this project, especially without access to a Figma design reference.

- Implementing client-side form validation with `useState`, including error feedback and required field logic.

- Improving accessibility by ensuring the app is keyboard-navigable (e.g. fixing radio button focus issues and using `role="button"` and `tabIndex` where needed).

- Managing lifted state between components (from `MortgageCalculator` to `App` and `Results`) to separate logic from presentation.

### Continued development

I’d like to rebuild this same project without relying on Bootstrap. This would help me strengthen my layout and styling skills using plain CSS, particularly with Flexbox and CSS Grid.

## Author

- Website - [Visit my portfolio](https://personal-portfolio-nu-black.vercel.app/)
- Github - [@Patriciagracia](https://github.com/Patriciagracia)

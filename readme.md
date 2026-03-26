# Profile Page

A simple personal profile page built with HTML, CSS, and a touch of JavaScript.

## Features

- Personal profile card with image, description, and social links
- Basic layout and styling using raw CSS
- Interactive “Change!” button that dynamically updates the page colors
- Hover animation with a rainbow effect for visual feedback

## Tech Stack

- HTML5
- CSS3 (basic styling)
- JavaScript (Fetch API)

## How It Works

The page displays a simple personal profile with structured HTML and manually styled CSS.

A custom “Change!” button was added to enhance interactivity:
- When clicked, it sends a request to a color API
- The API returns random colors
- These colors are dynamically applied to different elements of the page
- A rainbow hover animation provides visual feedback when interacting with the button

The result is a playful, constantly changing UI.

## Implementation Note

This project was originally built at the very beginning of learning front-end development.

As such:
- CSS is intentionally simple and manually handled (margins, padding, alignment, etc.)
- No layout frameworks (e.g., Flexbox/Grid-heavy patterns or Bootstrap) were used
- The focus was on understanding core HTML structure and basic styling fundamentals

The dynamic color feature was added as an experiment to extend the original project beyond its initial scope.

## Setup

```bash
git clone <your-repo-url>
cd profile
serve
```

Then open:
http://localhost:8000

## Learnings

- Structuring a webpage using semantic HTML
- Applying basic CSS styling without frameworks
- Managing spacing and layout manually
- Handling user interactions with JavaScript
- Fetching data from an external API
- Dynamically updating the DOM

## Notes

This project is a solution to a bootcamp coding challenge and represents an early-stage implementation of front-end fundamentals, extended with a small interactive feature for experimentation.

# 📌 Journal Calendar

A minimal, calendar-based journaling system focused on daily reflection, visual time awareness, and aesthetic seasonal themes.

# 🛠 Tech Stack

![Vercel](https://img.shields.io/badge/Vercel-4B6A88?style=flat-square&logo=vercel&logoColor=ffffff)
![Astro](https://img.shields.io/badge/Astro-E0B64A?style=flat-square&logo=astro&logoColor=000000)
![TypeScript](https://img.shields.io/badge/TypeScript-7C8F63?style=flat-square&logo=typescript&logoColor=ffffff)
![JavaScript](https://img.shields.io/badge/JavaScript-4B6A88?style=flat-square&logo=javascript&logoColor=ffffff)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-E0B64A?style=flat-square&logo=tailwind-css&logoColor=000000)
![HTML5](https://img.shields.io/badge/HTML5-7C8F63?style=flat-square&logo=html5&logoColor=ffffff)
![CSS3](https://img.shields.io/badge/CSS3-4B6A88?style=flat-square&logo=css3&logoColor=ffffff)

# ✨ Overview

This project is a visual-first journaling experience built around a calendar interface.  
Instead of long-form writing, it emphasizes lightweight daily entries, visual feedback, and emotional consistency over time.

It blends:

- calendar navigation
- theme-based UI system
- streak + progress tracking
- expressive journal entries
- custom 404 experience

# 🗓 Calendar View

The core interface is a monthly calendar where each day represents a possible journal entry.

- Filled days link to existing journal entries
- Empty days are visible but non-interactive and have no entry
- The current day is visually highlighted
- Users can navigate between months using previous/next controls

The calendar is also enhanced with a seasonal visual layer that changes throughout the year to create a subtle sense of time and atmosphere:

- 🌸 Spring — cherry blossoms
- ⚪ Summer — floating bubbles
- 🍂 Autumn — falling leaves
- ❄️ Winter — snow particles

This seasonal overlay adds a gentle environmental context to the journaling experience without interfering with usability.

![calendar](/public/screenshots/calendar.png)

<div align="center">

_Monthly calendar view with marked journal entries and seasonal background._

</div>

# 🎨 Theme System & Visual Stats

The interface is driven by a unified theme system that dynamically controls both the calendar and the dashboard statistics, creating a consistent visual language across the entire experience.

Each theme affects:

- calendar entry indicators (small colored indicators on journal days)
- progress visualization (monthly and yearly entry bars)
- streak tracker (daily consistency visualization)

Beneath the calendar, a compact HUD-style status panel summarizes journaling activity in real time:

- Monthly entries — how many days were recorded in the current month
- Yearly entries — total activity within the current year
- Current streak — consecutive days of journaling activity

This combination of theme + statistics turns the calendar into a living interface that reflects both time and personal consistency.

![themes-stats](/public/screenshots/themes-stats.png)

<div align="center">

_Theme system dynamically controls calendar indicators, progress bars, and streak tracking._

</div>

# 📓 Journal Page

Each journal entry is intentionally minimal and atmospheric:

- Left: ASCII-style visual element
- Right: quote + daily reflection
- Focused on mood rather than long writing

The design encourages quick, low-friction daily logging.

![journal](/public/screenshots/journal.png)

<div align="center">

_Minimal journal layout featuring ASCII visuals and short reflective writing._

</div>

# 🚀 404 Page

A custom animated 404 page with a space-themed design, including:

- particle animation background
- interactive home button
- immersive “lost in space” visual concept

![404](/public/screenshots/404.png)

<div align="center">

_A space-themed animated 404 page with particle effects and a home button._

</div>

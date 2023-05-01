[Online demo](https://activity-scheduler-app.netlify.app/)

## OVERVIEW 
  This is a simple web application which can be used to schedule activities and display weather data for your chosen location.

## REQUIRED FEATURES  
1. User should be able to schedule a new activity:
  a. 4 activity types are allowed - Mowing, Fertilisation, Irrigation and Aeration
  b. Each activity has a date and time associated with it
  c. Each activity has a “task performer/user” associated with it. These can be John, Tom or Tony.
  d. Each activity is associated with one of 3 Pitches (Pitch 1, 2 and 3) 
     and there can only be one activity done on a pitch at one time.
2. User should be able to change the details of the activities (e.g. change the time)
3. User should be able to delete the activity
4. The weather data should show current temperature and have some indication about
   expected rain/precipitation for the rest of the day. 
   Use the [https://openweathermap.org/api](https://openweathermap.org/api) API to get weather data


## Dependencies
- [tailwindcss](https://tailwindcss.com/): A utility-first CSS framework packed with classes like Bootstrap.
- [@headlessui/react](https://www.npmjs.com/package/@headlessui/react):A set of completely unstyled, fully 
  accessible UI components for React, designed to integrate beautifully with Tailwind CSS.
- [axios](https://github.com/axios/axios): A promise-based HTTP Client for node.js and the browser.
- [postcss](https://www.npmjs.com/package/postcss): PostCSS is a tool for transforming styles with JS plugins.
- [autoprefixer](https://github.com/postcss/autoprefixer): The Autoprefixer PostCSS plugin is one of the most popular CSS processors.

## Setup and Run
1. Run `npm install` to install required dependencies
  (Run `npm install --legacy-peer-deps` in case of facing error)
2. Run `npm start` to run the project and Open http://localhost:3005

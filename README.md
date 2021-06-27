# reactHooksLesson

### This repo was created to assist in learning React hooks.

1. Counter Button:
  *simple counter buttons to increment/decrement a value.*
2. Weather App:
  *weather app connects with backend API to grab weather data based on searches.*
  **For this to work, you will need an API key!**
    - [How To Get API key] (https://openweathermap.org/faq)
    - In the root folder create a file named config.js. The config.js file should look like this:
    <br> ```const API_KEY = <your_api_key_here>;``` <br> ```module.exports = API_KEY;```
    - Remember not to check API keys into git! Make sure config.js is inside .gitignore

### Installing dependencies
- You must run **npm install** in each root directory (root, frontend, backend)

### How to run
  - In your terminal, navigate to the root folder and enter **npm run dev**.
    -  To run just the backend enter: **cd backend && npm run server-dev**.
    - To run just the frontend (webpack/babel) enter: **cd frontend && npm run build-watch**. Alternatively, you can run **npm run build** if you would not like webpack/babel to watch for changes.

### Resources
- [React Docs] https://reactjs.org/docs/getting-started.html
- [Weather API] https://openweathermap.org/

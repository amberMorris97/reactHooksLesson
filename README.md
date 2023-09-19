# reactHooksLesson

### This repo was created to assist with learning React hooks.

1. Counter Button:
  *your final product should be a counter with buttons that will increase and decrease the value displayed on the screen.*
2. Weather App:
   *your final product should be a feature that allows you to search for a city and display its weather data.*
   
  **For the weather app to work, you will need an API key to have access from your local environment.**
    - [How to get an API key](https://openweathermap.org/faq) <br> <br>
    Inside the root directory, create a file named config.js. The config.js file should look like this:
    
    const API_KEY = <your_api_key_here>;
    module.exports = API_KEY;
    
**Remember not to check your API keys into git! Make sure config.js is written inside .gitignore before committing your work.**

### Installing dependencies
- You must run **npm install** in each root directory (root, frontend, backend)
- [More on dependencies from the npm docs](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)

### How to run
  - In your terminal, navigate to the root folder and enter **npm run dev**.
    -  To run just the backend enter: **cd backend && npm run server-dev**.
    - To run just the frontend (webpack/babel) enter: **cd frontend && npm run build-watch**. Alternatively, you can run **npm run build** if you would not like webpack/babel to watch for changes.
    - Tip: In general, if you don't know how to launch a React app, you can check that project's ```package.json``` file for build and run scripts. [Learn more here](https://www.letsreact.org/package-json-explained/)

### Resources
- [React Docs] https://reactjs.org/docs/getting-started.html
- [Weather API] https://openweathermap.org/

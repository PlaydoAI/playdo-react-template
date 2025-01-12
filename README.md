# An app that acts exactly like google maps but you can input your cars make and model and whenever you are on route to somewhere at the end of your drive it can calculate how much carbon you emited

## Project Overview
1. PROJECT OVERVIEW

- Brief description of what the app does  
This app serves as a navigation tool similar to Google Maps, allowing users to plan routes. During the drive, it tracks information about the user's car make and model and uses this data to calculate the carbon emissions produced over a trip.  

- Key features and functionality  
  - Route planning and map navigation interface.  
  - User input to specify car make and model.  
  - Calculation of carbon emissions based on distance traveled and car details.  
  - Display of trip statistics, including total distance and emissions.  

- Main technologies used  
React, React Router for navigation, Google Maps API for maps and directions, and a third-party emissions calculation API for estimating carbon emissions.  

---

2. DEVELOPMENT INSTRUCTIONS  

- How to run and test the application  
  1. Clone the repository from GitHub.  
  2. Navigate to the project folder and run `npm install` to install dependencies.  
  3. Set up a Google Maps API Key and an API Key for the emissions calculation service (e.g., Carbon Interface or similar). Add these keys to the `.env` file.    
  4. Start the application using `npm start` and access it at `http://localhost:3000` in your browser.  
  5. Test the application by planning a route and entering your car details to view the calculated carbon emissions.  

- Key files and their purposes  

  - `src/App.js`: Main component where the route planner, car input, and carbon calculator logic resides.  
  - `src/index.js`: Renders the application and initializes global configurations like API integrations.  
  - `src/App.css`: Styling for the application interfaces.  
  - `public/index.html`: Base HTML file for rendering the React app.  

- Any important configuration needed  
You need to configure the `.env` file for environment variables, including your `REACT_APP_GOOGLE_MAPS_API_KEY` and your desired API key for the emissions service configured within the app code.  

---
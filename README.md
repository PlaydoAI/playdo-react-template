# basically a google maps clone that tracks carbon emmisions based on users car make/model

## Project Overview
1. PROJECT OVERVIEW  
- The app is a Google Maps clone that enables users to track their carbon emissions based on their selected car make and model. Users can explore a map, input their car details, and get an estimate of carbon emissions for given travel distances. It integrates map functionality and a carbon emission calculator.  
- Key features and functionality:
  - Interactive map using the Google Maps API for geolocation-based tracking.
  - Car make/model selection to compute average emissions using a third-party API (e.g. FuelEconomy.gov).
  - Real-time carbon emission calculation based on travel distances.  
- Main technologies used:
  - React for the front-end framework.
  - Google Maps API for map functionality.
  - Axios for API requests.
  - Tailwind CSS for styling.
  - Create React App as the project scaffold.

2. DEVELOPMENT INSTRUCTIONS  
- How to run and test the application:  
  1. Clone the repository and run `npm install` to install dependencies.  
  2. Set up API keys for the Google Maps API and the emissions API in the `.env` file.  
  3. Run `npm start` to launch the development server.  
  4. Open the browser at `http://localhost:3000` to test the application.  
- Key files and their purposes:  
  - `src/App.js`: Main application logic that integrates maps and emission calculations.  
  - `src/index.js`: Renders the React application into the DOM.  
  - `src/App.css`: Additional styling specific to the app.  
  - `public/index.html`: The entry point HTML file.  
- Any important configuration needed:
  - Create a `.env` file in the project root to hold API keys:  
    REACT_APP_GOOGLE_MAPS_API_KEY=YourGoogleMapsAPIKey  
    REACT_APP_EMISSIONS_API_KEY=YourEmissionsAPIKey
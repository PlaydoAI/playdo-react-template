# ai code helper using openai api

## Project Overview
1. PROJECT OVERVIEW
- **Brief description of what the app does**: The application provides an AI-powered code helper tool that allows users to input prompts requesting code snippets or assistance. It interacts with the OpenAI API to generate code suggestions and explanations.
- **Key features and functionality**:  
  - A user-friendly interface to input a programming-related prompt.
  - Fetches AI-generated responses from the OpenAI API.
  - Displays the AI response in a readable and formatted way.
  - Handles errors gracefully when interacting with the API.
- **Main technologies used**:
  - React for the frontend.
  - OpenAI API for AI integration.
  - Axios for API requests.
  - React components and hooks for application logic.

2. DEVELOPMENT INSTRUCTIONS
- **How to run and test the application**:
  1. Clone the repository and navigate to the project folder.
  2. Run `npm install` in the root directory to install dependencies.
  3. Create a `.env` file in the root directory and add the OpenAI API key as `REACT_APP_OPENAI_API_KEY=your_api_key`.
  4. Start the application with `npm start`.
  5. Open the app in the browser at `http://localhost:3000`.
  6. To test, enter any prompt (like "Write a React function for a counter") and observe the AI's response.

- **Key files and their purposes**:
  - **src/App.js**: Main application logic, including API calls and user interactions.
  - **src/App.css**: Styling for the app.
  - **public/index.html**: Renders the React app and sets up the DOM structure.
  - **src/index.js**: React's entry point.
  - **.env** (not listed above, but required): Enables environment variable configuration for sensitive data, e.g., API keys.

- **Any important configuration needed**:  
  - The OpenAI API requires an API key. You must configure this key in the `.env` file as described above.
  - Ensure network access to OpenAI endpoints.
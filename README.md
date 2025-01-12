# ai code helper using openai api

## Project Overview
1. PROJECT OVERVIEW
- This React application is a fully functional AI Code Helper that utilizes the OpenAI API to assist developers by generating, debugging, or refactoring code snippets. Users input a request (e.g., "Generate a React functional component for a todo list"), and the app interacts with the OpenAI API to deliver AI-generated code as a response.
- Key Features:
  - A text input to describe the desired code-related query.
  - A submit button to send the user query to the OpenAI API.
  - A response display area showcasing the AI-generated result.
  - Simple, responsive user interface with error handling for failed API calls.
- Main Technologies:
  - React (Frontend)
  - OpenAI API
  - Axios (HTTP client)
  - CSS for styling and responsive layout

2. DEVELOPMENT INSTRUCTIONS
- How to run and test the application:
  1. Clone the repository and navigate to the root directory.
  2. Install dependencies with `npm install`.
  3. Create a `.env` file in the root directory and add your OpenAI API key as `REACT_APP_OPENAI_API_KEY=<your-openai-api-key>`.
  4. Start the development server with `npm start`.
  5. Test by entering a query and verifying the AI-generated output.

- Key Files and their purposes:
  - `src/App.js`: Contains the main application logic including form submission, API call, and response rendering.
  - `src/App.css`: Styles used to design the application layout.
  - `src/index.js`: Entry point to render the React App in the DOM.

- Important configuration: 
  - Ensure you have a valid OpenAI API key and configure it in the `.env` file.
  - Add `dotenv` support to manage environment variables securely.
  - Handle rate limits and errors from the OpenAI API gracefully.
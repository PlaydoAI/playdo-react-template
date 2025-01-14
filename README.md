# AI skin cancer detection using webcam

## Project Overview
1. PROJECT OVERVIEW  
- This React application uses a webcam to capture skin images and sends the image to an AI-based skin cancer detection API for analysis. The app provides users with the diagnostic result in real-time.  
- Key features include:  
  - Real-time access to the webcam for capturing skin images.  
  - Integration with a machine learning API for skin cancer detection.  
  - Displaying diagnostic results to the user.  
  - A responsive and user-friendly interface.  
- Main technologies used: React.js for the frontend, TensorFlow.js for any lightweight image preprocessing, and a backend AI model (API integration).

2. DEVELOPMENT INSTRUCTIONS  
- To run and test the application:  
  1. Clone the repository and ensure all dependencies are installed using `npm install`.  
  2. Start the application with `npm start`. Ensure you have a functioning webcam.  
  3. Set up an environment variable `.env` in the root for the AI API's endpoint via `REACT_APP_API_URL`. For now, a placeholder service that simulates the response is added.  
  4. Test the image capture and detection functionality, ensuring results are displayed correctly.  
  5. Use `npm test` to run automated tests for components and utility functions.  

- Key files and their purposes:  
  - `src/App.js`: Primary React component handling routing and UI logic.  
  - `src/components/WebcamCapture.js`: Handles webcam integration to capture images.  
  - `src/services/api.js`: Contains logic for calling the AI skin cancer detection API.  
  - Other essential React setup files (e.g., `src/index.js`).  

- Important configuration:  
  - The `.env` file must be properly configured with the AI service endpoint.  
  - Enable HTTPS if API requires a secure connection.
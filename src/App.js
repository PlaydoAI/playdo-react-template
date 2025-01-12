import React, { useState } from 'react';  
import './App.css';  
import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';  

function App() {  
  const [mapLoaded, setMapLoaded] = useState(false);  
  const [directions, setDirections] = useState(null);  
  const [carDetails, setCarDetails] = useState({ make: '', model: '' });  
  const [distance, setDistance] = useState(0);  
  const [emissions, setEmissions] = useState(0);  

  const handleRoute = (response) => {  
    if (response && response.status === 'OK') {  
      setDirections(response);  
      const routeDistance = response.routes[0].legs.reduce((acc, leg) => acc + leg.distance.value, 0) / 1000;  
      setDistance(routeDistance);  
    }  
  };  

  const calculateEmissions = async () => {  
    const response = await fetch(`https://api.example.com/emissions`, {  
      method: 'POST',  
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer [API-KEY]` },  
      body: JSON.stringify({ make: carDetails.make, model: carDetails.model, distance })  
    });  
    const data = await response.json();  
    setEmissions(data.emissions);  
  };  

  return (  
    <div className="App">  
      <h1>Carbon Route Planner</h1>  
      <GoogleMap onLoad={() => setMapLoaded(true)} zoom={10} center={{ lat: 37.7749, lng: -122.4194 }} />  
      {mapLoaded && (  
        <DirectionsService  
          options={{ origin: 'San Francisco, CA', destination: 'Los Angeles, CA', travelMode: 'DRIVING' }}  
          callback={handleRoute}  
        />  
      )}  
      {directions && <DirectionsRenderer directions={directions} />}  

      <div>  
        <label>Car Make: <input type="text" value={carDetails.make} onChange={(e) => setCarDetails({ ...carDetails, make: e.target.value })} /></label>  
        <label>Car Model: <input type="text" value={carDetails.model} onChange={(e) => setCarDetails({ ...carDetails, model: e.target.value })} /></label>  
        <button onClick={calculateEmissions}>Calculate Emissions</button>  
      </div>  

      <div>  
        <p>Total Distance: {distance} km</p>  
        <p>Carbon Emissions: {emissions} kg CO₂</p>  
      </div>  
    </div>  
  );  
}  

export default App;  

---
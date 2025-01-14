import React, { useState } from 'react';  
import axios from 'axios';  
import './App.css';  

function App() {  
  const [map, setMap] = useState(null);
  const [carModel, setCarModel] = useState('');  
  const [distance, setDistance] = useState('');  
  const [carbonEmission, setCarbonEmission] = useState(null);  

  const handleCalculateEmission = async () => {  
    try {  
      const carData = await axios.get(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/model`, {  
        params: { model: carModel }
      });  

      const emissionFactor = carData.data.emissionFactor;  
      const emission = distance * emissionFactor;  
      setCarbonEmission(emission);  
    } catch (error) {  
      console.error('Error calculating emissions', error);  
    }  
  };  

  return (  
    <div className="App">  
      <h1>Carbon Emission Tracker</h1>  
      <div id="map" ref={(elem) => setMap(elem)} style={{ width: '100%', height: '500px' }}></div>  
      <div>  
        <label>Car Model:</label>  
        <input type="text" value={carModel} onChange={(e) => setCarModel(e.target.value)} />  
        <label>Distance (in miles):</label>  
        <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />  
        <button onClick={handleCalculateEmission}>Calculate Emission</button>  

        {carbonEmission !== null && (  
          <p>Estimated Carbon Emission: {carbonEmission.toFixed(2)} kg CO2</p>  
        )}  
      </div>  
    </div>  
  );  
}  

export default App;
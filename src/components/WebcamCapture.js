import React, { useState } from 'react';  
import Webcam from 'react-webcam';  
import { sendImageToAPI } from '../services/api';  
function WebcamCapture() {  
  const [result, setResult] = useState(null);  
  const webcamRef = React.useRef(null);  

  const capture = React.useCallback(() => {  
    const imageSrc = webcamRef.current.getScreenshot();  
    sendImageToAPI(imageSrc).then((response) => setResult(response.result));  
  }, [webcamRef]);  

  return (  
    <div>  
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />  
      <button onClick={capture}>Capture Image</button>  
      {result && <p>Result: {result}</p>}  
    </div>  
  );  
}  
export default WebcamCapture;
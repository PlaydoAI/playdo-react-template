export async function sendImageToAPI(imageData) {  
  const response = await fetch(process.env.REACT_APP_API_URL, {  
    method: 'POST',  
    headers: {  
      'Content-Type': 'application/json'  
    },  
    body: JSON.stringify({ image: imageData })  
  });  
  const data = await response.json();  
  return data;  
}
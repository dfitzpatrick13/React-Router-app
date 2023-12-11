
const BASE_URL = 'https://swapi.dev/api';


export async function getAllStarships() {
  try {
    const response = await fetch(`${BASE_URL}/starships`);
    if (!response.ok) {
       Error('Error');
    }
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('error:', error);
    return []; 
  }
}

export default {
  getAllStarships,
  
};

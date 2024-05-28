const axios = require('axios');

// Yelp API credentials
const API_KEY = 'NB-dA9E3lTJw7DqtkZe-0RZtgudI9AMxp4qOPO0etdRVuaJLrV-u7eR5gmIuQ_Wqv1g8XARICBTWtuQya0OzC80BRdGFQtLHO3ciu7cbeQWmrPfIX0COzv_EfGNVZnYx';
const HEADERS = {
    Authorization: `Bearer ${API_KEY}`};

// Function to get business details by ID
async function getBusinessDetails(businessId) {
    const businessUrl = `https://api.yelp.com/v3/businesses/${businessId}`;

    try {
        const response = await axios.get(businessUrl, { headers: HEADERS });
        return response.data;
    } catch (error) {
        console.error('Error getting business details:', error);
    }
}

// Main function to retrieve photos of the business
async function getBusinessPhotos(businessId) {
  try {
      const businessDetails = await getBusinessDetails(businessId);
      const photos = businessDetails.photos;
      console.log('Business Photos URLs:');
      photos.map((photo, index) => {
          console.log(`${index + 1}: ${photo}`);
      });
  } catch (error) {
      console.error('Error retrieving business photos:', error);
  }
}

// Example usage
getBusinessPhotos('yen-nail-n-spa-georgetown-3');

import api from '../api'; // adjust path if needed

const fetchBanner = async () => {
  try {
    const response = await api.get('/api/banner');
    return response.data;
  } catch (error) {
    // handle error
    throw error;
  }
};

export default fetchBanner;
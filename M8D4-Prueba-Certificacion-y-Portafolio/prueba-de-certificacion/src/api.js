import axios from 'axios';

const api = {
  async fetchHomeData() {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/home.json');
      return response.data.home;
    } catch (error) {
      console.error('Error fetching home data:', error);
      return null;
    }
  },
};

export default api;

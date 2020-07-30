import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID E5wbG_GmvtqYDk_VZYfdZZMF2Hv3o9Xp4LLcbmNQGDI',
  },
});

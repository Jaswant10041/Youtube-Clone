import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// const API_KEY = 'AIzaSyBi9x44g7VKYjle7Ys8SSzYhhfLXz99mCs';
// const baseURL = 'https://youtube.googleapis.com/youtube/v3';

// async function fetchYouTubeVideos(query) {
//     const url = `${baseURL}/search?part=snippet&maxResults=20&q=${encodeURIComponent(query)}&key=${API_KEY}`;
    
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//         console.log("HELLO");
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// }

// fetchYouTubeVideos('your search query');


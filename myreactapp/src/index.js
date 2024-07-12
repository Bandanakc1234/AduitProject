import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import $ from 'jquery';
window.jQuery = $;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />

);

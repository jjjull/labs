import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Image from './components/Image';
import Content from './components/Content'; 
import Gallery from './components/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Content />
    <Image />
    <Gallery />
  </React.StrictMode>
);


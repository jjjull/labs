import React from 'react';
import GoodsCard from './GoodsCard';

function Gallery() {
    
  const goods = [
    {
      id: 1,
      image: '/img/apple.jpeg',
      name: 'Яблуко',
      price: 30,
    },
    {
      id: 2,
      image: '/img/pear.png',
      name: 'Груша',
      price: 36,
    },
    {
      id: 3,
      image: '/img/grape.jpg',
      name: 'Виноград',
      price: 250,
    },
    {
      id: 4,
      image: '/img/strawberry.jpg',
      name: 'Полуниця',
      price: 150,
    },
    {
      id: 5,
      image: '/img/banana.png',
      name: 'Банан',
      price: 70,
    },
    {
      id: 6,
      image: '/img/kiwi.jpg',
      name: 'Ківі',
      price: 160,
    },
    {
        id: 7,
        image: '/img/peach.webp',
        name: 'Персик',
        price: 200,
      },
  ];

  return (
    <div style={galleryStyle}>
      {goods.map((item) => (
        <GoodsCard key={item.id} image={item.image} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

const galleryStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '50px'
  
};

export default Gallery;

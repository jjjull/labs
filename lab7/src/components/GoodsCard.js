import React from 'react';

function GoodsCard(props) {
  const { image, name, price } = props;
 
  return (
    
    <div style={cardStyle}>
      <img src={image} 
      alt={name} 
      style={imageStyle} />
      <h3>{name}</h3>
      <p>Ціна: {price} грн за 1 кг</p>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '10px',
  textAlign: 'center',
  width: '200px',
};

const imageStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
};

export default GoodsCard;

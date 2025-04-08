import React, { useState } from 'react';
import './DressSelector.css';

export const DressSelector = ({ onDressChange, onGenderChange, currentGender, currentDress }) => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  
  const dressOptions = [
    { id: 'default', name: 'Default', image: '/shopping.webp' },
    { id: 'casual', name: 'Casual', image: '/shopping1.jpg' },
    { id: 'formal', name: 'Formal', image: '/shopping3.jpg' },
    { id: 'party', name: 'Party', image: '/shopping.jpg' },
    { id: 'summer', name: 'Summer', image: '/shopping.jpg' },
    { id: 'winter', name: 'Winter', image: '/shopping.jpg' },
  ];

  const colorOptions = [
    { id: 'white', name: 'White', value: '#ffffff' },
    { id: 'black', name: 'Black', value: '#000000' },
    { id: 'red', name: 'Red', value: '#ff0000' },
    { id: 'blue', name: 'Blue', value: '#0000ff' },
    { id: 'green', name: 'Green', value: '#00ff00' },
    { id: 'yellow', name: 'Yellow', value: '#ffff00' },
    { id: 'purple', name: 'Purple', value: '#800080' },
    { id: 'pink', name: 'Pink', value: '#ffc0cb' },
  ];

  const handleDressClick = (dressId) => {
    onDressChange(dressId);
  };

  const handleColorClick = (colorValue) => {
    console.log('Color selected:', colorValue);
    setSelectedColor(colorValue);
  };

  return (
    <div className="dress-selector">
      <h2>Avatar Customization</h2>
      
      <div className="gender-selector">
        <h3>Select Gender</h3>
        <div className="gender-options">
          <button 
            className={`gender-option ${currentGender === 'male' ? 'active' : ''}`}
            onClick={() => onGenderChange('male')}
          >
            Male
          </button>
          <button 
            className={`gender-option ${currentGender === 'female' ? 'active' : ''}`}
            onClick={() => onGenderChange('female')}
          >
            Female
          </button>
        </div>
      </div>
      
      <div className="dress-options">
        <h3>Select Dress Style</h3>
        <div className="dress-grid">
          {dressOptions.map((dress) => (
            <div
              key={dress.id}
              className={`dress-option ${currentDress === dress.id ? 'active' : ''}`}
              onClick={() => handleDressClick(dress.id)}
            >
              <img src={dress.image} alt={dress.name} />
              <span>{dress.name}</span>
            </div>
          ))}
        </div>
      </div>

      <h3>Select Color</h3>
      <div className="color-options">
        {colorOptions.map((color) => (
          <div
            key={color.id}
            className={`color-option ${selectedColor === color.value ? 'active' : ''}`}
            style={{ backgroundColor: color.value }}
            onClick={() => handleColorClick(color.value)}
          >
            <span className="color-name">{color.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}; 
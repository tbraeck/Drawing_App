import { useState } from 'react';
import React  from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({chosenColor, onColorChange}) => {
const [selectedColor, setSelectedColor] = useState(chosenColor)

const handleColorChange = (color) => {
  setSelectedColor(color.hex);
  onColorChange(color.hex); 
};
  return (
    <>
      <SketchPicker color={selectedColor} onChange={handleColorChange} style={{width: "40px"}}/>
    </>
  )
}

export default ColorPicker

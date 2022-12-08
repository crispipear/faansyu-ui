import React, { useMemo, useState } from 'react'
import { lighten, darken } from 'faansyu-ui';
import './theming.css'

export const ShadeDemo = () => {
  const [inputValue, setInputValue] = useState("#1975ff");
  const [colorValues, setColorValues] = useState({
    main: "#1975ff",
    dark: "#0f4699",
    light: "#dae9ff"
  })

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const colorValue = e.target.value;
    setInputValue(colorValue);
    setColorValues({
      main: colorValue,
      dark: darken(colorValue),
      light: lighten(colorValue)
    });
  }

  const colorBlocks = useMemo(() => {
    return Object.keys(colorValues).map(v => (
      <div
        key={`${v}ColorContainer`}
        className='shadeDemo__colorContainer'
      >
        <div 
          className='shadeDemo__colorBlock'
          style={{ backgroundColor: colorValues[v] }}
        />
        { v }
      </div>
    ))
  }, [colorValues]);

  return (
    <div className='shadeDemo__container'>
      <input
        value={inputValue}
        onChange={handleInputValueChange}
      />
      {colorBlocks}
    </div>
  )
}
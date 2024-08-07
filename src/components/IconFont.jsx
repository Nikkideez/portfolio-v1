import React, { useState } from 'react';

const IconFont = ({ className, ...props }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`devicon ${className} ${hovered ? 'hovered' : ''}`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onClick={() => console.log('clicked')}
      style={{ fontSize: '48px', color: hovered ? 'green' : 'red', transition: 'color 0.3s' }}
      {...props}
    />
  );
};

export default IconFont;

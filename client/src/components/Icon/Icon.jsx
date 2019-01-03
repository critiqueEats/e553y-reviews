import React from 'react';
import './reviews-icons.svg';

const Icon = ({name, width, height, fill}) => (
    <svg className={`icon-${name}`} width={width || 18} height={height || 18} fill={fill || "#000"}>
      <use xlinkHref={`#reviews-icons_${name}`} />
    </svg>
  )
  
export default Icon
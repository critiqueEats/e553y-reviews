import React from 'react';
import './icons.svg';

const Icon = ({name, width, height}) => (
    <svg className={`icon-${name}`} width={width || 18} height={height || 18}>
      <use xlinkHref={`#icons_${name}`} />
    </svg>
  )
  
export default Icon
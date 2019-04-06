import React from 'react';
import PropTypes from 'prop-types'
import './reviews-icons.svg';

const Icon = ({name, width, height, fill}) => (
    <svg className={`icon-${name}`} width={width} height={height} fill={fill}>
      <use xlinkHref={`#reviews-icons_${name}`} />
    </svg>
  )
Icon.propType = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Icon.defaultProps = {
  height: 18,
  width: 18,
  fill: '#000'
}
export default Icon
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';

const Icon = ({ iconName, size, iconType }) => {
  let icon;
  if (iconType === 'brand') {
    icon =
      BrandIcons[`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`];
  } else {
    // default to solid if iconType is not 'brand'
    icon =
      SolidIcons[`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`];
  }

  // Fallback to a default icon if icon is not found
  const defaultIcon = SolidIcons.faQuestionCircle;
  icon = icon || defaultIcon;

  return <FontAwesomeIcon icon={icon} size={size} />;
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconType: PropTypes.oneOf(['solid', 'brand']),
};

Icon.defaultProps = {
  size: '1x', // Default size
  iconType: 'solid', // Default icon type
};

export default Icon;

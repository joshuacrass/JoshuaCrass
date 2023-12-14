import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const Icon = ({ iconName, size }) => {
  const defaultIcon = Icons.faQuestionCircle;
  const formattedIconName = `fa${
    iconName.charAt(0).toUpperCase() + iconName.slice(1)
  }`;
  const icon = Icons[formattedIconName] || defaultIcon;

  return <FontAwesomeIcon icon={icon} size={size} />;
};

Icon.propTypes = {
  iconName: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
  iconName: 'question-circle',
  size: '1x',
};

export default Icon;

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Icon = (name) => <FontAwesomeIcon icon={name} />;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

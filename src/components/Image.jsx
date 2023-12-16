import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Styled components using Emotion
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.round ? '50%' : '0')};
`;

const ProfilePicture = ({ src, round }) => (
  <div>
    <Image src={src} round={round} />
  </div>
);

ProfilePicture.propTypes = {
  src: PropTypes.string.isRequired,
  round: PropTypes.bool,
};

ProfilePicture.defaultProps = {
  round: false,
};

export default ProfilePicture;

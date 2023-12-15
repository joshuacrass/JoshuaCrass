import React from 'react';
import styled from '@emotion/styled';
import Icon from './Icon';

const StyledHeader = styled.div`
  color: #595959;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const Header = () => {
  const size = 'xl';

  const icons = [
    {
      id: 1,
      iconName: 'LinkedinIn',
      iconType: 'brand',
      url: 'https://www.linkedin.com/in/joshuacrass/',
    },
    {
      id: 2,
      iconName: 'Github',
      iconType: 'brand',
      url: 'https://github.com/joshuacrass',
    },
  ];

  return (
    <StyledHeader>
      {icons.map((icon) => (
        <a href={icon.url} key={icon.id} aria-label={`${icon.iconName}link`}>
          <Icon iconName={icon.iconName} size={size} iconType={icon.iconType} />
        </a>
      ))}
    </StyledHeader>
  );
};

export default Header;

import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import Icon from './Icon';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

const SectionMain = styled.div`
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const SectionIcon = styled.div`
  background-color: ${({ color }) => color};
  color: #ffffff;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SectionMarker = styled.div`
  background-color: ${({ color }) => color};
  width: 8px;
  height: 60px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = styled.div`
  min-height: 60px;
  background-color: #ffffff;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

const SectionTitleWrapper = styled.div``;

const SectionTitle = styled.div`
  padding: 0 2rem;
  font-size: 2rem;
  background-color: transparent;
  min-width: 150px;
  display: flex;
  justify-content: flest-start;
  align-items: center;
  text-transform: capitalize;
  position: absolute;
  height: 60px;
  z-index: 1;
  color: ${({ visible }) => (visible ? '#ffffff' : '#000000')};
  transition: color 0.3s ease-in-out;
`;

const SectionTitleActive = styled(animated.div)`
  padding: 0 1rem;
  font-size: 2rem;
  background-color: ${({ color }) => color};
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  position: absolute;
  left: 0px;
  height: 60px;
  z-index: 0;
`;

const SectionToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  color: #6d6d6d;
  transform: rotate(${({ visible }) => (visible ? '180deg' : '0deg')});
  transition: transform 0.4s ease-in-out;
`;

const SectionContent = styled(animated.div)`
  div {
    background-color: #ffffff;
    padding: 20px;
  }
`;

const Section = ({ title, color, icon }) => {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Measure the height of the content
  useLayoutEffect(() => {
    setContentHeight(contentRef.current.clientHeight);
  }, []);

  // Animate the height
  const animationProps = useSpring({
    height: visible ? contentHeight : 0,
    overflow: 'hidden',
    config: { tension: 300, friction: 50 },
  });

  const animationTitleProps = useSpring({
    left: visible ? 0 : -200,
    config: { tension: 300, friction: 50 },
  });

  return (
    <SectionWrapper>
      <SectionIcon color={color} onClick={() => setVisible(!visible)}>
        <Icon iconName={icon} size='2x' />
      </SectionIcon>
      <SectionMarker visible={visible} color={color} />
      <SectionMain>
        <Header onClick={() => setVisible(!visible)}>
          <SectionTitleWrapper>
            <SectionTitle visible={visible}>{title}</SectionTitle>
            <SectionTitleActive style={animationTitleProps} color={color} />
          </SectionTitleWrapper>
          <SectionToggle visible={visible}>
            <Icon iconName='ChevronDown' />
          </SectionToggle>
        </Header>
        <SectionContent style={animationProps}>
          <div ref={contentRef}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              nulla nisi praesentium possimus, iusto minus dolores quasi aut
              illum iste. Tempore libero qui fuga, ipsum nobis nihil vitae eaque
              officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              nulla nisi praesentium possimus, iusto minus dolores quasi aut
              illum iste. Tempore libero qui fuga, ipsum nobis nihil vitae eaque
              officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              nulla nisi praesentium possimus, iusto minus dolores quasi aut
              illum iste. Tempore libero qui fuga, ipsum nobis nihil vitae eaque
              officiis!
            </p>
          </div>
        </SectionContent>
      </SectionMain>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
};

Section.defaultProps = {
  title: 'Section Title',
  color: '#000000',
  icon: 'QuestionCircle',
};

export default Section;

import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';
import Icon from './Icon';
import Joshua from '../assets/Joshua.jpeg';
import Image from './Image';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

const SectionMain = styled.div`
  background-color: #fff;
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

const Header = styled.div`
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
`;

const ProfilePreview = styled.div`
  display: flex;
  position: relative;
  height: 200px;
  width: 100%;
`;

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ visible }) => (visible ? '80px' : '50px')};
  margin-left: 30px;
  transition: margin-top 0.4s ease-in-out;
`;

const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
`;

const SectionTitleActive = styled(animated.div)`
  padding: 0 1rem;
  font-size: 2rem;
  background-color: ${({ color }) => color};
  color: #ffffff;
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
  margin-top: 20px;
`;

const SectionContent = styled(animated.div)`
  div {
    background-color: #ffffff;
    padding: 20px;
  }
`;

const ProfileSection = () => {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const color = '#1bc9e4';
  const title = 'Profile';
  const icon = 'User';
  const iconType = 'solid';

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
        <Icon iconName={icon} iconType={iconType} size='2x' />
      </SectionIcon>
      <SectionMain>
        <Header onClick={() => setVisible(!visible)}>
          <ProfilePreview>
            <PreviewWrapper visible={visible}>
              <ImageWrapper>
                <Image round src={Joshua} alt='Joshua' />
              </ImageWrapper>
            </PreviewWrapper>
            <SectionTitleActive style={animationTitleProps} color={color}>
              {title}
            </SectionTitleActive>
          </ProfilePreview>
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

export default ProfileSection;

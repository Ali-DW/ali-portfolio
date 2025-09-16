// src/components/Hero/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Container, Button, GradientText } from '../Styles/GlobalStyles';
import meImg from './me.jpg';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AliCV from '../Assets/Ali_CV.pdf'; 


const greetings = [
  { text: "👋 Hello, I'm", key: 'en' },
  { text: "👋 مرحباً، أنا", key: 'ar' },
  { text: "👋 Hola, soy", key: 'es' },
  { text: "👋 こんにちは、私は", key: 'jp' },
  { text: "👋 Bonjour, je suis", key: 'fr' },
  { text: "👋 Hallo, ich bin", key: 'de' },
];

const GREETING_INTERVAL = 2200; // ms


const HeroSection = styled.section`
  min-height: 100vh;
  background: ${props => props.theme.gradients.dark};
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(108, 99, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(0, 212, 170, 0.1) 0%, transparent 50%);
    z-index: 1;
  }
`;

const HeroContent = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};
  align-items: center;
  z-index: 2;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
    text-align: center;
  }
`;



const HeroText = styled.div`
  z-index: 3;
`;

const Greeting = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const Title = styled(motion.h1)`
  font-size: ${props => props.theme.fontSizes['5xl']};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.1;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.lg};
  font-weight: ${props => props.theme.fontWeights.normal};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

const Description = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  line-height: 1.6;
  max-width: 500px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing['2xl']};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.mediumGray};
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.text};
  transition: ${props => props.theme.animations.transition};

  &:hover {
    background: ${props => props.theme.gradients.primary};
    color: ${props => props.theme.colors.dark};
    transform: translateY(-2px);
  }
`;

const HeroVisual = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    order: -1;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes['6xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.dark};
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
    font-size: ${props => props.theme.fontSizes['5xl']};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 250px;
    height: 250px;
    font-size: ${props => props.theme.fontSizes['4xl']};
  }

  &::before {
    position: absolute;
    inset: 3px;
    background: ${props => props.theme.colors.dark};
    border-radius: ${props => props.theme.borderRadius.full};
    z-index: 1;
  }

  &::after {
    position: relative;
    z-index: 2;
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
const ProfileImageTag = styled.img`
  width: 96%;
  height: 96%;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.full};
  position: relative;
  z-index: 100;
  `

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '20px'};
  height: ${props => props.size || '20px'};
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  opacity: 0.6;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${props => props.theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  cursor: pointer;
  z-index: 3;
`;

const ScrollText = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Hero = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, GREETING_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const scrollToAboutMe = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
   const downloadCV = () => {
      // You can replace this with actual CV download link
      const link = document.createElement('a');
      link.href = AliCV; // Replace with your actual CV path
      link.download = 'Ali_Slil_CV.pdf';
      link.click();
    };

  return (
    <HeroSection>
      <HeroContent>
        <HeroText>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              <Greeting
                key={greetings[greetingIndex].key}
                variants={itemVariants}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {greetings[greetingIndex].text}
              </Greeting>
            </AnimatePresence>
            
            <Title variants={itemVariants}>
              <GradientText>Ali Slil</GradientText>
            </Title>
            
            <Subtitle variants={itemVariants}>
              Full-Stack Developer
            </Subtitle>
            
            <Description variants={itemVariants}>
              Passionate about creating innovative web solutions that solve real-world problems. 
              Specialized in React.js, Laravel, and modern web technologies.
            </Description>
            
            <ButtonGroup variants={itemVariants}>
              <Button primary onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </Button>
              <Button onClick={()=>downloadCV()}>
                <Download size={20} style={{ marginRight: '8px' }} />
                Download CV
              </Button>
            </ButtonGroup>
            
            <SocialLinks variants={itemVariants}>
              <SocialLink href="https://github.com/Ali-DW" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/ali-slil-3799a5298" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </HeroText>

        <HeroVisual>
          <ProfileImage
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
          <ProfileImageTag src={meImg} alt="Ali Slil" />
          </ProfileImage>
          
          <FloatingElements>
            <FloatingElement
              size="30px"
              style={{ top: '10%', left: '10%' }}
              animate={floatingAnimation}
            />
            <FloatingElement
              size="20px"
              style={{ top: '20%', right: '15%' }}
              animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
            />
            <FloatingElement
              size="25px"
              style={{ bottom: '15%', left: '20%' }}
              animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
            />
            <FloatingElement
              size="15px"
              style={{ bottom: '25%', right: '10%' }}
              animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 } }}
            />
          </FloatingElements>
        </HeroVisual>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
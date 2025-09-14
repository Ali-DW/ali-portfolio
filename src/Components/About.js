// src/components/About/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Section, Container, GradientText } from '../Styles/GlobalStyles';

const AboutSection = styled(Section)`
  background: ${props => props.theme.colors.darkGray};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(108, 99, 255, 0.05) 0%, transparent 50%);
    z-index: 1;
  }
`;

const AboutContainer = styled(Container)`
  position: relative;
  z-index: 2;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};
  align-items: start;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
`;

const AboutText = styled.div``;

const AboutTitle = styled(motion.h2)`
  font-size: ${props => props.theme.fontSizes['4xl']};
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
    text-align: center;
  }
`;

const AboutDescription = styled(motion.div)`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${props => props.theme.spacing.xl};

  p {
    margin-bottom: ${props => props.theme.spacing.md};
    font-size: ${props => props.theme.fontSizes.lg};

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.semibold};
  }
`;

const AboutStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.lg};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: ${props => props.theme.animations.transition};

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const StatNumber = styled.div`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AboutInfo = styled.div``;

const InfoCard = styled(motion.div)`
  background: ${props => props.theme.gradients.card};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.lg};
  transition: ${props => props.theme.animations.transition};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.large};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.dark};
`;

const InfoTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
  margin: 0;
`;

const InfoContent = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.md};

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '▶';
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

const HighlightText = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <AboutText>
            <AboutTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About <GradientText>Me</GradientText>
            </AboutTitle>

            <AboutDescription
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                I'm a passionate <strong>Full-Stack Developer</strong> with a strong foundation in modern web technologies 
                and a genuine enthusiasm for creating innovative digital solutions. My journey began with a 
                high school diploma in Physical Science, where I developed the analytical thinking skills 
                that now enhance my problem-solving approach in software development.
              </p>
              
              <p>
                During my two-year diploma program at <strong>ISTA Driouch (2023-2025)</strong>, I immersed myself 
                in both frontend and backend technologies, mastering React.js, Laravel, PHP, and JavaScript. 
                What sets me apart is my ability to bridge the gap between technical implementation and 
                real-world applications.
              </p>

              <p>
                I believe that the best solutions come from combining <strong>technical expertise with genuine passion</strong>. 
                Whether I'm building a sports car rental platform that reflects my automotive interests or 
                creating an interactive movie discovery site that showcases API integration skills, I approach 
                each project with enthusiasm and attention to detail.
              </p>
            </AboutDescription>

            <AboutStats
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <StatItem>
                <StatNumber>2+</StatNumber>
                <StatLabel>Years Learning</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>4+</StatNumber>
                <StatLabel>Projects Built</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>8+</StatNumber>
                <StatLabel>Technologies</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>100%</StatNumber>
                <StatLabel>Motivated</StatLabel>
              </StatItem>
            </AboutStats>
          </AboutText>

          <AboutInfo>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <InfoCard variants={itemVariants}>
                <InfoHeader>
                  <InfoIcon>
                    <User size={24} />
                  </InfoIcon>
                  <InfoTitle>Personal Info</InfoTitle>
                </InfoHeader>
                <InfoContent>
                  <InfoList>
                    <InfoListItem>
                      <MapPin size={16} />
                      <span>Driouch Ben-Taieb, Morocco</span>
                    </InfoListItem>
                    <InfoListItem>
                      <Calendar size={16} />
                      <span>Available for opportunities</span>
                    </InfoListItem>
                    <InfoListItem>
                      <Award size={16} />
                      <span>Fresh Graduate - Ready to contribute</span>
                    </InfoListItem>
                  </InfoList>
                </InfoContent>
              </InfoCard>

              <InfoCard variants={itemVariants}>
                <InfoHeader>
                  <InfoIcon>
                    <GraduationCap size={24} />
                  </InfoIcon>
                  <InfoTitle>Education</InfoTitle>
                </InfoHeader>
                <InfoContent>
                  <InfoList>
                    <InfoListItem>
                      <HighlightText>Diploma in Full-Stack Development</HighlightText> - ISTA Driouch (2023-2025)
                    </InfoListItem>
                    <InfoListItem>
                      <HighlightText>High School Diploma in Physical Science</HighlightText> - Mohamed VI High School (2022-2023)
                    </InfoListItem>
                  </InfoList>
                </InfoContent>
              </InfoCard>

              <InfoCard variants={itemVariants}>
                <InfoHeader>
                  <InfoIcon>
                    <Briefcase size={24} />
                  </InfoIcon>
                  <InfoTitle>Experience</InfoTitle>
                </InfoHeader>
                <InfoContent>
                  <InfoList>
                    <InfoListItem>
                      <HighlightText>Web Developer Intern</HighlightText> - Driouch Prefecture (2024-2025)
                    </InfoListItem>
                    <InfoListItem>
                      <HighlightText>Academic Projects</HighlightText> - ISTA Driouch (2023-2025)
                    </InfoListItem>
                    <InfoListItem>
                      <HighlightText>Teaching Assistant</HighlightText> - Cloud Computing Basics (School Project)
                    </InfoListItem>
                  </InfoList>
                </InfoContent>
              </InfoCard>
            </motion.div>
          </AboutInfo>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
// src/components/Skills/Skills.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Code, Database, Server, Smartphone, Cloud, GitBranch, 
  Zap, Users, Puzzle, Target, Brain, Lightbulb 
} from 'lucide-react';
import { Section, Container, GradientText } from '../Styles/GlobalStyles';

const SkillsSection = styled(Section)`
  background: ${props => props.theme.colors.dark};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 80% 20%, rgba(0, 212, 170, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(108, 99, 255, 0.05) 0%, transparent 50%);
    z-index: 1;
  }
`;

const SkillsContainer = styled(Container)`
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${props => props.theme.fontSizes['4xl']};
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing['3xl']};
`;

const TechnicalSkills = styled.div``;

const SkillCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.gradients.card};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  transition: ${props => props.theme.animations.transition};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const CategoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.dark};
`;

const CategoryTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
  margin: 0;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const SkillTag = styled(motion.div)`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: rgba(0, 212, 170, 0.1);
  color: ${props => props.theme.colors.primary};
  border: 1px solid rgba(0, 212, 170, 0.2);
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: ${props => props.theme.animations.transition};
  cursor: pointer;

  &:hover {
    background: rgba(0, 212, 170, 0.2);
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const ProgressSkills = styled.div`
  background: ${props => props.theme.gradients.card};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
`;

const ProgressHeader = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
`;

const ProgressList = styled.div`
  display: grid;
  gap: ${props => props.theme.spacing.lg};
`;

const ProgressItem = styled(motion.div)``;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ProgressName = styled.span`
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.white};
`;

const ProgressPercentage = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin-left: auto;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.sm};
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.sm};
`;

const SoftSkills = styled.div``;

const SoftSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const SoftSkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
  transition: ${props => props.theme.animations.transition};

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const SoftSkillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  color: ${props => props.theme.colors.dark};
  margin: 0 auto ${props => props.theme.spacing.md};
`;

const SoftSkillTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const SoftSkillDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 1.5;
  margin: 0;
`;

const Skills = () => {
  const [progressInView, setProgressInView] = useState(false);
  const progressRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgressInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "Blade Templates"]
    },
    {
      title: "Backend Development", 
      icon: <Server size={24} />,
      skills: ["PHP", "Laravel", "Python", "MVC Architecture", "RESTful APIs", "Server Administration"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL", "Database Design", "PgAdmin"]
    },
    {
      title: "Development Tools",
      icon: <GitBranch size={24} />,
      skills: ["Git", "GitHub", "VS Code", "XAMPP", "Postman", "Browser DevTools"]
    },
    {
      title: "Specialized Technologies",
      icon: <Zap size={24} />,
      skills: ["GIS & Mapping", "GeoServer", "QGIS", "Cloud Computing", "Agile/Scrum", "API Integration"]
    }
  ];

  const progressSkills = [
    { name: "React.js", percentage: 85 },
    { name: "Laravel", percentage: 90 },
    { name: "PHP", percentage: 88 },
    { name: "JavaScript", percentage: 82 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "MySQL", percentage: 80 },
    { name: "Git/GitHub", percentage: 85 }
  ];

  const softSkills = [
    {
      title: "Problem Solving",
      icon: <Puzzle size={24} />,
      description: "Analytical approach to complex technical challenges with creative solutions"
    },
    {
      title: "Team Collaboration", 
      icon: <Users size={24} />,
      description: "Experience working in collaborative development environments and cross-functional teams"
    },
    {
      title: "Project Management",
      icon: <Target size={24} />,
      description: "Meeting deadlines, managing requirements, and delivering quality results on time"
    },
    {
      title: "Adaptability",
      icon: <Brain size={24} />,
      description: "Quick learner with ability to master new technologies and adapt to changing requirements"
    },
    {
      title: "Communication",
      icon: <Lightbulb size={24} />,
      description: "Clear technical documentation and effective stakeholder interaction skills"
    },
    {
      title: "Attention to Detail",
      icon: <Zap size={24} />,
      description: "Quality-focused development with clean, maintainable, and well-documented code"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My <GradientText>Skills</GradientText>
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of my technical expertise and professional capabilities 
            developed through education, projects, and real-world experience.
          </SectionSubtitle>
        </SectionHeader>

        <SkillsContent>
          <TechnicalSkills>
            <SkillCategories>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillCategories.map((category, index) => (
                  <SkillCategory
                    key={category.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <CategoryHeader>
                      <CategoryIcon>{category.icon}</CategoryIcon>
                      <CategoryTitle>{category.title}</CategoryTitle>
                    </CategoryHeader>
                    <SkillsList>
                      {category.skills.map((skill, skillIndex) => (
                        <SkillTag
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: skillIndex * 0.1 
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill}
                        </SkillTag>
                      ))}
                    </SkillsList>
                  </SkillCategory>
                ))}
              </motion.div>
            </SkillCategories>

            <ProgressSkills ref={progressRef}>
              <ProgressHeader>Proficiency Levels</ProgressHeader>
              <ProgressList>
                {progressSkills.map((skill, index) => (
                  <ProgressItem
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProgressLabel>
                      <ProgressName>{skill.name}</ProgressName>
                      <ProgressPercentage>{skill.percentage}%</ProgressPercentage>
                    </ProgressLabel>
                    <ProgressBar>
                      <ProgressFill
                        initial={{ width: 0 }}
                        animate={{ 
                          width: progressInView ? `${skill.percentage}%` : 0 
                        }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.2,
                          ease: "easeOut" 
                        }}
                      />
                    </ProgressBar>
                  </ProgressItem>
                ))}
              </ProgressList>
            </ProgressSkills>
          </TechnicalSkills>

          <SoftSkills>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
              Soft <GradientText>Skills</GradientText>
            </SectionTitle>

            <SoftSkillsGrid>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {softSkills.map((skill, index) => (
                  <SoftSkillCard
                    key={skill.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <SoftSkillIcon>{skill.icon}</SoftSkillIcon>
                    <SoftSkillTitle>{skill.title}</SoftSkillTitle>
                    <SoftSkillDescription>{skill.description}</SoftSkillDescription>
                  </SoftSkillCard>
                ))}
              </motion.div>
            </SoftSkillsGrid>
          </SoftSkills>
        </SkillsContent>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
// src/components/Projects/Projects.js
// Use the complete Projects component we created earlier
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users,ArrowDown } from 'lucide-react';
import { Section, Container, Button, GradientText } from '../Styles/GlobalStyles';
import { projects } from '../Data/Projects';

const ProjectsSection = styled(Section)`
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
    background: radial-gradient(circle at 70% 30%, rgba(0, 212, 170, 0.05) 0%, transparent 50%);
    z-index: 1;
  }
`;

const ProjectsContainer = styled(Container)`
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

const FilterTabs = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  flex-wrap: wrap;
`;

const FilterTab = styled(motion.button)`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  background: ${props => props.active ? props.theme.gradients.primary : 'transparent'};
  color: ${props => props.active ? props.theme.colors.dark : props.theme.colors.text};
  border: 2px solid ${props => props.active ? 'transparent' : props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  cursor: pointer;
  transition: ${props => props.theme.animations.transition};

  &:hover {
    background: ${props => props.active ? props.theme.gradients.primary : 'rgba(108, 99, 255, 0.1)'};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.gradients.card};
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: ${props => props.theme.animations.transition};
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  background: ${props => props.theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.dark};
  position: relative;
  overflow: hidden;

  &::after {
    content: '${props => props.title}';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: ${props => props.theme.animations.transition};
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
`;

const ProjectHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ProjectCategory = styled.span`
  display: inline-block;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background: rgba(108, 99, 255, 0.2);
  color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ProjectTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.white};
`;

const ProjectSubtitle = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const TechTag = styled.span`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background: rgba(0, 212, 170, 0.1);
  color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: ${props => props.theme.fontSizes.xs};
  border: 1px solid rgba(0, 212, 170, 0.2);
`;

const ProjectActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.primary ? props.theme.gradients.primary : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.dark : props.theme.colors.primary};
  border: ${props => props.primary ? 'none' : `1px solid ${props.theme.colors.primary}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: ${props => props.theme.animations.transition};
  flex: 1;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
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


  const scrollToMySkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  const ScrollText = styled.span`
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 1px;
  `;


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filters = ['All', 'Featured', 'Full-Stack', 'Frontend', 'Backend'];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else if (filter === 'Featured') {
      setFilteredProjects(projects.filter(project => project.featured));
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  };

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
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured <GradientText>Projects</GradientText>
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my technical skills through real-world projects, 
            from government mapping systems to interactive web applications.
          </SectionSubtitle>
        </SectionHeader>

        <FilterTabs
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <FilterTab
              key={filter}
              active={activeFilter === filter}
              onClick={() => handleFilterChange(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </FilterTab>
          ))}
        </FilterTabs>

        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                layout
              >
                <ProjectImage title={project.title.split(' ')[0]} />
                
                <ProjectContent>
                  <ProjectHeader>
                    <ProjectCategory>{project.category}</ProjectCategory>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                  </ProjectHeader>

                  <ProjectDescription>
                    {project.description}
                  </ProjectDescription>

                  <ProjectMeta>
                    <MetaItem>
                      <Calendar size={16} />
                      {project.duration}
                    </MetaItem>
                    <MetaItem>
                      <Users size={16} />
                      {project.team}
                    </MetaItem>
                  </ProjectMeta>

                  <TechStack>
                    {project.technologies.slice(0, 4).map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                    {project.technologies.length > 4 && (
                      <TechTag>+{project.technologies.length - 4} more</TechTag>
                    )}
                  </TechStack>

                  <ProjectActions>
                    {project.liveUrl ? (
                      <ActionButton 
                        primary
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </ActionButton>
                    ) : (
                      <ActionButton primary disabled>
                        <ExternalLink size={16} />
                        Private Project
                      </ActionButton>
                    )}
                    
                    <ActionButton 
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                      Source Code
                    </ActionButton>
                  </ProjectActions>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
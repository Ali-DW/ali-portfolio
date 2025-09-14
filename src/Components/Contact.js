// src/components/Contact/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Github, Linkedin, 
  MessageSquare, User, FileText, CheckCircle, XCircle 
} from 'lucide-react';
import { Section, Container, Button, GradientText } from '../Styles/GlobalStyles';

const ContactSection = styled(Section)`
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
    background: radial-gradient(circle at 30% 70%, rgba(108, 99, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(0, 212, 170, 0.05) 0%, transparent 50%);
    z-index: 1;
  }
`;

const ContactContainer = styled(Container)`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
`;

const ContactInfo = styled.div``;

const ContactForm = styled.div``;

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
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const InfoTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const InfoSubtitle = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.02);
  border-radius: ${props => props.theme.borderRadius.md};
  transition: ${props => props.theme.animations.transition};
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(4px);
  }
`;

const MethodIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.dark};
  flex-shrink: 0;
`;

const MethodInfo = styled.div``;

const MethodLabel = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: 2px;
`;

const MethodValue = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
  margin-top: ${props => props.theme.spacing.lg};
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
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const FormCard = styled(motion.div)`
  background: ${props => props.theme.gradients.card};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const FormLabel = styled.label`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
`;

const FormInput = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.md};
  transition: ${props => props.theme.animations.transition};

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 212, 170, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }

  &.error {
    border-color: #FF6B6B;
    box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.md};
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: ${props => props.theme.animations.transition};

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 212, 170, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }

  &.error {
    border-color: #FF6B6B;
    box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.2);
  }
`;

const ErrorMessage = styled.span`
  color: #FF6B6B;
  font-size: ${props => props.theme.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
`;

const SuccessMessage = styled.div`
  background: rgba(0, 212, 170, 0.1);
  border: 1px solid rgba(0, 212, 170, 0.3);
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SubmitButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fontSizes.lg};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

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
    <ContactSection id="contact">
      <ContactContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get In <GradientText>Touch</GradientText>
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to bring your next web project to life? Let's connect and discuss 
            how my full-stack development skills can contribute to your team's success.
          </SectionSubtitle>
        </SectionHeader>

        <ContactContent>
          <ContactInfo>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <InfoCard variants={itemVariants}>
                <InfoHeader>
                  <InfoTitle>Let's Connect</InfoTitle>
                  <InfoSubtitle>
                    I'm always excited to discuss new opportunities, collaborate on 
                    interesting projects, or simply connect with fellow developers.
                  </InfoSubtitle>
                </InfoHeader>

                <ContactMethods>
                  <ContactMethod onClick={() => copyToClipboard('slilali022@gmail.com')}>
                    <MethodIcon>
                      <Mail size={20} />
                    </MethodIcon>
                    <MethodInfo>
                      <MethodLabel>Email</MethodLabel>
                      <MethodValue>slilali022@gmail.com</MethodValue>
                    </MethodInfo>
                  </ContactMethod>

                  <ContactMethod onClick={() => copyToClipboard('+212-638-995-012')}>
                    <MethodIcon>
                      <Phone size={20} />
                    </MethodIcon>
                    <MethodInfo>
                      <MethodLabel>Phone</MethodLabel>
                      <MethodValue>+212-638-995-012</MethodValue>
                    </MethodInfo>
                  </ContactMethod>

                  <ContactMethod>
                    <MethodIcon>
                      <MapPin size={20} />
                    </MethodIcon>
                    <MethodInfo>
                      <MethodLabel>Location</MethodLabel>
                      <MethodValue>Driouch Ben-Taieb, Morocco</MethodValue>
                    </MethodInfo>
                  </ContactMethod>
                </ContactMethods>

                <SocialLinks>
                  <SocialLink 
                    href="https://github.com/Ali-DW" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                  </SocialLink>
                  <SocialLink 
                    href="https://linkedin.com/in/ali-slil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={24} />
                  </SocialLink>
                </SocialLinks>
              </InfoCard>
            </motion.div>
          </ContactInfo>

          <ContactForm>
            <FormCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {submitSuccess && (
                <SuccessMessage>
                  <CheckCircle size={20} />
                  <span>Thank you for your message! I'll get back to you soon.</span>
                </SuccessMessage>
              )}

              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel>
                    <MessageSquare size={16} />
                    Message
                  </FormLabel>
                  <FormTextarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, questions, or just say hello!"
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && (
                    <ErrorMessage>
                      <XCircle size={14} />
                      {errors.message}
                    </ErrorMessage>
                  )}
                </FormGroup>

                <SubmitButton
                  type="submit"
                  primary
                  disabled={isSubmitting}
                  as={motion.button}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send size={20} />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </SubmitButton>
              </Form>
            </FormCard>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
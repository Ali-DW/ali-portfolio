// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from './Styles/Theme';
import { GlobalStyles } from './Styles/GlobalStyles';

// Import components (we'll create these next)
import Header from './Components/Header.js';
import Hero from './Components/Hero.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';
import Skills from './Components/Skills.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
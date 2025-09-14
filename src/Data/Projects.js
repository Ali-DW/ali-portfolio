// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Geographic Mapping System",
    subtitle: "Government Administrative Tool",
    description: "Interactive mapping solution for Driouch Prefecture featuring geographic data visualization, spatial analysis, and administrative management tools.",
    longDescription: "Developed a comprehensive interactive mapping solution for Driouch Prefecture to enhance administrative decision-making through geographic data visualization and analysis. Collaborated with a team of 3 developers to deliver multiple versions of a web-based cartographic system.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "PostgreSQL", "GeoServer", "QGIS"],
    features: [
      "Advanced Geographic Visualization",
      "Spatial Analysis Tools",
      "Intelligent Zone Search",
      "Layer Management System",
      "Demographic Filtering",
      "Drawing & Annotation Tools"
    ],
    duration: "3 weeks (May 2025)",
    role: "Full-Stack Developer",
    team: "3 developers",
    client: "Driouch Prefecture",
    status: "Completed",
    image: "/assets/images/geographic-mapping.jpg",
    images: [
      "/assets/images/mapping-1.jpg",
      "/assets/images/mapping-2.jpg",
      "/assets/images/mapping-3.jpg"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Ali-DW/geographic-mapping",
    category: "Full-Stack",
    featured: true,
    challenges: "Managing complex geographic data with multiple layers and performance optimization for large datasets.",
    solution: "Implemented GeoServer for efficient map tile serving and PostgreSQL spatial extensions for optimized geographic queries."
  },
  {
    id: 2,
    title: "Car Rental Platform",
    subtitle: "Laravel E-commerce Solution",
    description: "Full-featured car rental platform with booking system, admin dashboard, and sports car showcase built with Laravel framework.",
    longDescription: "Developed a comprehensive car rental platform as my final year project, combining passion for sports cars with web development skills. Features complete e-commerce functionality with user management and administrative controls.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade Templates", "JavaScript", "CSS3", "HTML5"],
    features: [
      "Vehicle Catalog Management",
      "Sports Car Showcase",
      "Booking System",
      "User Authentication",
      "Admin Dashboard",
      "Responsive Design",
      "Search & Filtering"
    ],
    duration: "Academic Year 2024-2025",
    role: "Full-Stack Developer",
    team: "Individual Project",
    client: "Final Year Project",
    status: "Completed",
    image: "/assets/images/car-rental.jpg",
    images: [
      "/assets/images/car-rental-1.jpg",
      "/assets/images/car-rental-2.jpg",
      "/assets/images/car-rental-3.jpg"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Ali-DW/car-rental-platform",
    category: "Full-Stack",
    featured: true,
    challenges: "Implementing complex booking logic with date conflicts and creating engaging user experience for car enthusiasts.",
    solution: "Developed robust availability checking system using Laravel's validation and integrated personal passion into design for enhanced user engagement."
  },
  {
    id: 3,
    title: "Movie Discovery Website",
    subtitle: "React.js & API Integration",
    description: "Dynamic movie discovery platform using React.js and TMDb API with real-time search, pagination, and interactive movie cards.",
    longDescription: "Built a dynamic movie discovery platform using React.js and The Movie Database (TMDb) API to create an interactive movie browsing experience. Demonstrates proficiency in API integration and React component architecture.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Axios", "TMDb API"],
    features: [
      "Dynamic Movie Listings",
      "Top Rated Movies Section",
      "Real-time Search",
      "Pagination System",
      "Movie Card Components",
      "External Navigation",
      "Responsive Interface"
    ],
    duration: "Academic Project 2023-2025",
    role: "Frontend Developer",
    team: "Individual Project",
    client: "Academic Project",
    status: "Completed",
    image: "/assets/images/movie-discovery.jpg",
    images: [
      "/assets/images/movie-1.jpg",
      "/assets/images/movie-2.jpg",
      "/assets/images/movie-3.jpg"
    ],
    liveUrl: "https://Ali-DW.github.io/movie-discovery",
    githubUrl: "https://github.com/Ali-DW/movie-discovery",
    category: "Frontend",
    featured: true,
    challenges: "Managing large datasets with efficient pagination and real-time search performance with large movie database.",
    solution: "Used React hooks and Axios for efficient API calls with debouncing for search optimization and proper state management."
  },
  {
    id: 4,
    title: "Personal Portfolio",
    subtitle: "React.js & Styled Components",
    description: "Modern, responsive portfolio website built with React.js, Styled Components, and Framer Motion animations.",
    longDescription: "Current project showcasing my skills and experience through a modern, interactive portfolio website. Built with cutting-edge technologies and modern design principles.",
    technologies: ["React.js", "Styled Components", "Framer Motion", "JavaScript", "GitHub Pages"],
    features: [
      "Modern Dark Theme",
      "Smooth Animations",
      "Responsive Design",
      "Project Showcase",
      "Skills Visualization",
      "Contact Form",
      "SEO Optimized"
    ],
    duration: "September 2025",
    role: "Full-Stack Developer",
    team: "Individual Project",
    client: "Personal Brand",
    status: "In Progress",
    image: "/assets/images/portfolio.jpg",
    images: [
      "/assets/images/portfolio-1.jpg",
      "/assets/images/portfolio-2.jpg",
      "/assets/images/portfolio-3.jpg"
    ],
    liveUrl: "https://Ali-DW.github.io/ali-portfolio",
    githubUrl: "https://github.com/Ali-DW/ali-portfolio",
    category: "Full-Stack",
    featured: true,
    challenges: "Creating engaging animations and modern design while maintaining performance and accessibility.",
    solution: "Using Framer Motion for smooth animations and Styled Components for maintainable, theme-based styling system."
  }
];

// Filter functions for project categories
export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectsByCategory = (category) => projects.filter(project => project.category === category);
export const getCompletedProjects = () => projects.filter(project => project.status === 'Completed');
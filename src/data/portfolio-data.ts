// Portfolio data for Tejasri Gottipati

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'ml';
  proficiency: number; // 1-10
}

// Personal Details
export const personalDetails = {
  name: "Tejasri Gottipati",
  title: "Full-Stack Developer & ML Enthusiast",
  email: "tejasrigottipati0912@gmail.com",
  location: "Vijawada, India",
  about: "I'm a fresher in Computer Science with a strong passion for building innovative solutions using full-stack development, machine learning, and artificial intelligence. I thrive on creating applications that solve real-world problems and am driven by the impact technology can have on society. As a highly enthusiastic learner, I'm constantly exploring new tools, frameworks, and emerging technologies. I enjoy taking on challenges that push me to grow, whether through personal projects, online courses, or collaborative development. My curiosity and commitment to continuous improvement fuel my desire to stay at the forefront of the tech world",
  socialLinks: {
    github: "https://github.com/teju09-code",
    linkedin: "https://www.linkedin.com/in/tejasri2004",
    twitter: " https://x.com/tejasrigottipa9",
  }
};

// Projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Weather Forecast ",
    description: "Developed a real-time weather forecasting dashboard with dynamic temperature, humidity, wind speed, and 5-day forecast display, including location search, geolocation support, and light/dark mode toggle",
    image: "/weather.png",
    tags: [ "React" ,"Javascript","Html","CSS"],
    demoLink: "https://weather-forcast-app-one.vercel.app/",
    codeLink: "https://github.com/teju09-code/weather-forcast-app"
  },
  {
    id: 2,
    title: "Movie Recommendaer System",
    description: "Developed a content-based movie recommender system using Python, Pandas, and NLP. Extracted features from metadata and overviews, applied vectorization, and used cosine similarity to suggest similar movies effectively",
    image: "/movie.png",
    tags: ["Python", "Pandas", "Streamlit"],
    demoLink: "https://movie-recommendation-system-cwgevw9f5wm2vdmzn5ln4d.streamlit.app/",
    codeLink: "https://github.com/teju09-code/Movie-recommendation-system"

  },
  {
    id: 3,
    title: "Research Work-Cervical Cancer Detection",
    description: "Developed a deep learning tool using customized SqueezeNet with attention for multi-class cervical cell classification, enhancing diagnostic accuracy and aiding early detection using the SIPaKMeD dataset",
    image: "/cervical.jpeg",
    tags: ["Python", "Sklearn","Keras"],
    demoLink: "",
    codeLink: "https://github.com/teju09-code/cervical-cancer-screening-through-enhanced-squeez-net"
  },
  {
    id: 4,
    title: "ToDo List",
    description: "Built a responsive to-do list app with task creation, editing, and deletion features. Integrated local storage for persistence and intuitive UI to help users manage daily tasks efficiently",
    image: "/taskflow.png",
    tags: ["Javascript", "CSS", "Html"],
    demoLink: "https://task-flow-blue.vercel.app/",
    codeLink: "https://github.com/teju09-code/Task-Flow"
  }
];

// Skills
export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", icon: "code", category: "frontend", proficiency: 9 },
  { name: "React.js", icon: "code", category: "frontend", proficiency: 8 },
  { name: "HTML5", icon: "code", category: "frontend", proficiency: 9 },
  { name: "CSS3", icon: "code", category: "frontend", proficiency: 8 },
  { name: "Tailwind CSS", icon: "code", category: "frontend", proficiency: 7 },
  
  // Backend
  { name: "Node.js", icon: "server", category: "backend", proficiency: 8 },
  { name: "MongoDB", icon: "database", category: "backend", proficiency: 7 },
  { name: "SQL", icon: "database", category: "backend", proficiency: 7 },
  { name: "Firebase", icon: "server", category: "backend", proficiency: 7 },
  
  // ML/AI
  { name: "Python", icon: "code", category: "ml", proficiency: 9 },
  { name: "TensorFlow", icon: "brain", category: "ml", proficiency: 7 },
  { name: "scikit-learn", icon: "brain", category: "ml", proficiency: 8 },
  { name: "Computer Vision", icon: "eye", category: "ml", proficiency: 7 },
  
  //tools
  { name: "Git", icon: "git-branch", category : "tools", proficiency: 8 },
  { name: "AWS", icon: "cloud", category: "tools", proficiency: 6 },
  { name: "VSCode", icon: "code", category: "tools", proficiency: 9 },
  { name: "PowerBI", icon: "database", category: "tools", proficiency: 7 }
];

// Education
export const education: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "XYZ Institute of Technology",
    duration: "2020 - 2024",
    description: "Graduated with First Class honors. Specialized in Artificial Intelligence and Machine Learning. Completed capstone project on 'Predictive Analysis of Student Performance using ML'."
  },
  {
    degree: "Machine Learning Specialization",
    institution: "Coursera (Stanford University)",
    duration: "2023",
    description: "Completed comprehensive specialization covering supervised learning, unsupervised learning, and deep learning fundamentals."
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "Udemy",
    duration: "2022",
    description: "Intensive 12-week bootcamp covering modern web development technologies including React, Node.js, Express, and MongoDB."
  }
];

// Certifications
export const certifications = [
  "AWS Certified Cloud Practitioner",
  "TensorFlow Developer Certificate",
  "MongoDB Database Administrator",
  "Responsive Web Design - freeCodeCamp",
  "JavaScript Algorithms and Data Structures - freeCodeCamp"
];
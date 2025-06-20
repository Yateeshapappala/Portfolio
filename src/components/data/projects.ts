// src/data/projects.ts

export type FrontendProject = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  features: string[];
  challenges: string[];
  screenshots: string[];
};

export const projects: FrontendProject[] = [
  {
    id: '1',
    title: 'Movie Recommender System',
    description: 'A content-based recommendation engine that suggests similar movies using NLP techniques and displays real-time posters via TMDB API.',
    techStack: ['Python', 'Streamlit', 'Scikit-learn', 'NLTK', 'TMDB API'],
    liveDemoUrl: 'https://movie-recommendationn.streamlit.app/',
    githubUrl: 'https://github.com/Yateeshapappala/Movie-recommender-System',
    features: ['Suggests top 5 similar movies using content-based filtering',
    'Interactive Streamlit UI with search and instant recommendations',
    'Displays real-time movie posters using TMDB API',
    'Uses TF-IDF, cosine similarity, and NLP stemming',
    'Optimized for missing posters and retry logic for robustness'],
    challenges: ['Efficient vectorization and similarity calculations on large datasets',
    'Poster image fallbacks for better UX',
    'Maintaining performance with increasing dataset size'],
    screenshots: ['/assets/image.png'],
  },
  {
    id: '2',
    title: 'Personal Portfolio',
    description: 'A personal portfolio website to showcase my work and projects.',
    techStack: ['React', 'TypeScript', 'MUI', 'CSS'],
    liveDemoUrl: 'https://yateesha-portfolio.vercel.app/',
    githubUrl: 'https://github.com/username/portfolio',
    features: ['Responsive design', 'Dark mode', 'Smooth animations'],
    challenges: ['Integrating dark mode', 'Making the layout responsive'],
    screenshots: ['/assets/screenshot1.jpg', '/assets/screenshot2.jpg'],
  },
  {
    id: '3',
    title: 'QR Code Generator',
    description: 'A lightweight QR code generator built using vanilla HTML, CSS, and JavaScript. It allows users to generate and download QR codes for any input text.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveDemoUrl: 'https://yateeshapappala.github.io/QR-Code-Generator/',
    githubUrl: 'https://github.com/Yateeshapappala/QR-Code-Generator',
    features: ['Generates QR codes using QRServer API', 'User input validation with alerts', 'Downloadable QR code image via FileSaver.js'],
    challenges: ['Ensuring proper image download via URL', 'User input validation for QR size'],
    screenshots: ['/assets/qr-code-screenshot.png'],
  },
  {
    id: '4',
    title: 'Task Manager',
    description: 'A task management app with drag-and-drop functionality.',
    techStack: ['React', 'Redux', 'TypeScript'],
    liveDemoUrl: 'https://example.com/task-manager',
    githubUrl: 'https://github.com/PappalaYateesha/HiringHood/tree/main/S1_01_Apr_86cyckxpu',
    features: ['Drag-and-drop', 'Task filtering', 'Task prioritization'],
    challenges: ['State management with Redux', 'Performance optimizations'],
    screenshots: ['/assets/screenshot1.png', '/assets/screenshot2.png'],
  },
  {
    id: '5',
    title: 'Memory Matrix',
    description:
      'A fun browser-based memory game where players flip cards to find matching image pairs.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveDemoUrl: 'https://yateeshapappala.github.io/Memory-Matrix/',
    githubUrl: 'https://github.com/Yateeshapappala/Memory-Matrix',
    features: [
      '4x4 interactive memory grid',
      'Timer to track completion time',
      'Confetti animation on game completion',
      '"Play Again" button to reset',
      'Responsive layout and clean UI',
    ],
    challenges: [
      'Handling card flipping and match logic efficiently',
      'Triggering animations only on correct win condition',
      'Preventing rapid clicks during animations',
    ],
    screenshots: ['/assets/memory-matrix-preview.png'], // Replace with your actual screenshot path
  },
];

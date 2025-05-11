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
    title: 'Job BoardX',
    description: 'A responsive  Job Portal with React & MUI',
    techStack: ['React', 'TypeScript', 'MUI','MongoDB'],
    liveDemoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/PappalaYateesha/JobBoardX',
    features: ['Build and manage Profile', 'Responsive layout', 'View Application status'],
    challenges: ['Status of Job', 'Performance optimization'],
    screenshots: ['/assets/screenshot1.png', '/assets/screenshot2.png'],
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
  // {
  //   id: '3',
  //   title: 'Blog Platform',
  //   description: 'A blogging platform where users can create and manage posts.',
  //   techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
  //   liveDemoUrl: 'https://example.com/blog',
  //   githubUrl: 'https://github.com/username/blog-platform',
  //   features: ['CRUD functionality', 'User authentication', 'Markdown support'],
  //   challenges: ['User authentication', 'Error handling'],
  //   screenshots: ['/assets/screenshot1.png', '/assets/screenshot2.png'],
  // },
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
  // More projects can be added here
];


import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
 
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,

  postgresql,
  python,
  nextjs,
  typescript,
  cpp,
  ici,
  qmi,
  nci,
  adi,
  emi,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/alpixn.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programming",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    web: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS 3",
    icon: css,
    web: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: javascript,
    web: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React JS",
    icon: reactjs,
    web: "https://reactjs.org",
  },
  {
    name: "Figma",
    icon: figma,
    web: "https://figma.com",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    web: "https://redux-toolkit.js.org/",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    web: "https://tailwindcss.com",
  },
  {
    name: "Material UI",
    icon: mui,
    web: "https://mui.com",
  },
  {
    name: "Node JS",
    icon: nodejs,
    web: "https://nodejs.org",
  },
  {
    name: "Express JS",
    icon: express,
    web: "https://expressjs.com",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    web: "https://mongodb.com",
  },
  {
    name: "MySQL",
    icon: mysql,
    web: "https://www.mysql.com",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    web: "https://www.postgresql.org",
  },
  {
    name: "Python",
    icon: python,
    web: "https://python.org",
  },
  {
    name: "Next.js",
    icon: nextjs,
    web: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    icon: typescript,
    web: "https://www.typescriptlang.org",
  },
  {
    name: "C++",
    icon: cpp,
    web: "https://isocpp.org",
  },
  {
    name: "Git",
    icon: git,
    web: "https://git-scm.com",
  },
];


const experiences = [
  {
    title: "Frontend-Developer",
    company_name: "Alpixn-Technology",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jun 2025 - present",
    points: [
      
    "  Developed and maintained modern web applications using React and related MERN stack technologies.",

"Collaborated closely with designers, product managers, and backend developers to build high-quality, user-friendly products.",

"Implemented responsive designs, ensuring seamless performance across devices and cross-browser compatibility.",
"Participated in code reviews, shared best practices, and provided constructive feedback to enhance code quality and team learning."


    ],
  },
];
const testimonials = [
  {
    testimonial:
      "Working with Surya was a game changer for our platform. His expertise in full-stack development and eye for detail brought our vision to life.",
    name: "Ravi Sharma",
    designation: "Product Manager",
    company: "QuickMart",
  },
  {
    testimonial:
      "Surya delivered our project ahead of schedule with clean, scalable code. His work on integrating payment and authentication systems exceeded expectations.",
    name: "Anjali Verma",
    designation: "Founder",
    company: "GearXpert",
  },
  {
    testimonial:
      "Surya’s ability to combine modern design with backend efficiency helped us launch a seamless streaming platform used by hundreds of users daily.",
    name: "Rahul Mehta",
    designation: "CTO",
    company: "Netflix Clone Project",
  },
];


const projects = [
  {
    name: "Instagram Clone",
    description:
      "A full-stack social media app with real-time messaging, post interactions (like/comment), notifications, and secure user authentication. Supports image uploads and file handling with a clean, modern UI.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "white-text-gradient" },
    ],
    image: ici, // replace with your actual import
    source_code_link: "https://github.com/suryapratap64/instagram",
     live_link:"https://instagram-3-r3kd.onrender.com/",
  },
  {
    name: "QuickMart",
    description:
      "A modern e-commerce platform with product listings, secure dashboards for sellers and customers, role-based access, and background workflows like order tracking. Integrated with Razorpay payments and Clerk authentication.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Clerk", color: "white-text-gradient" },
      { name: "Razorpay", color: "green-text-gradient" },
    ],
    image: qmi, // replace with your actual import
    source_code_link: "https://github.com/suryapratap64/QuickMart",
     live_link:"https://thekaservice.vercel.app/"
  },
  {
    name: "Netflix Clone",
    description:
      "A full-stack streaming platform with HD playback, chunked buffering for large video uploads, and a responsive design. Built to handle multiple video entries and user interactions efficiently.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "white-text-gradient" },
    ],
    image: nci, // replace with your actual import
    source_code_link: "https://github.com/suryapratap64/Netflix",
     live_link:"https://netflix-sk1e.onrender.com/",
  },
  {
  name: "Add Edit Task",
  description:
    "A task management web app where users can add, edit, and delete tasks, with an extra feature to summarize notes using OpenAI API. Features a clean dark-themed UI and is built for fast, modern workflows.",
  tags: [
    { name: "Next.js", color: "blue-text-gradient" },
    { name: "MongoDB", color: "green-text-gradient" },
    { name: "OpenAI API", color: "pink-text-gradient" },
    { name: "Tailwind CSS", color: "white-text-gradient" },
    { name: "JavaScript", color: "yellow-text-gradient" },
  ],
  image: adi, 
  source_code_link: "https://github.com/suryapratap64/Add-edit-task",
  live_link: "https://add-edit-task.vercel.app/",
 
},
{
  name: "Emotion Reflector",
  description:
    "A modern full-stack AI-powered web app that analyzes user reflections and predicts emotion, confidence score, and emoji in real time. Features a beautiful glassmorphism UI, real-time FastAPI backend, and cloud deployment.",
  tags: [
    { name: "Next.js", color: "blue-text-gradient" },
    { name: "TypeScript", color: "green-text-gradient" },
    { name: "FastAPI", color: "pink-text-gradient" },
    { name: "Tailwind CSS", color: "white-text-gradient" },
    { name: "Python", color: "yellow-text-gradient" },
  ],
  image: emi, 
  source_code_link: "https://github.com/suryapratap64/Response-frontend",
  live_link: "https://response-frontend.vercel.app",
 
}

];


export { services, technologies, experiences, testimonials, projects };

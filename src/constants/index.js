// import {
//   mobile,
//   backend,
//   creator,
//   web,
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   docker,
//   meta,
//   starbucks,
//   tesla,
//   shopify,
//   carrent,
//   jobit,
//   tripguide,
//   threejs,
// } from "../assets";

import {
  saslogo,
  squidlylogo,
  pImg,
  // surveyR,
  // squidly,
  // squidlyLight,
  // robotSVG,
  robotLTL,
  // squidlyEyeGaze,
  squidlyHomepage,
  deepERVHome,
  // deepERV,
  autoCalHome,
  proctorUTS,
  schoolAtHome,
  mobile,
  backend,
  creator,
  web,
} from "../assets/"


export const navLinks = [
  {
    id: "/",
    title: "Top",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const iconList = {
  aws: ['devicon-amazonwebservices-plain-wordmark', 'https://aws.amazon.com/', 'Amazon Web Services'],
  anaconda: ['devicon-anaconda-original', 'https://www.anaconda.com/', 'Anaconda'],
  archlinux: ['devicon-archlinux-plain', 'https://archlinux.org/', 'Arch Linux'],
  azure: ['devicon-azure-original', 'https://azure.microsoft.com/', 'Microsoft Azure'],
  bash: ['devicon-bash-plain', 'https://www.gnu.org/software/bash/', 'Bash'],
  blender: ['devicon-blender-original', 'https://www.blender.org/', 'Blender'],
  c: ['devicon-c-plain', 'https://en.wikipedia.org/wiki/C_(programming_language)', 'C'],
  centos: ['devicon-centos-plain', 'https://www.centos.org/', 'CentOS'],
  cmake: ['devicon-cmake-plain', 'https://cmake.org/', 'CMake'],
  css3: ['devicon-css3-plain', 'https://developer.mozilla.org/en-US/docs/Web/CSS', 'CSS3'],
  django: ['devicon-django-plain', 'https://www.djangoproject.com/', 'Django'],
  djangorest: ['devicon-djangorest-plain-wordmark', 'https://www.django-rest-framework.org/', 'Django REST Framework'],
  docker: ['devicon-docker-plain', 'https://www.docker.com/', 'Docker'],
  fastapi: ['devicon-fastapi-plain', 'https://fastapi.tiangolo.com/', 'FastAPI'],
  figma: ['devicon-figma-plain', 'https://www.figma.com/', 'Figma'],
  firebase: ['devicon-firebase-plain', 'https://firebase.google.com/', 'Firebase'],
  git: ['devicon-git-plain', 'https://git-scm.com/', 'Git'],
  github: ['devicon-github-original', 'https://github.com', 'GitHub'],
  go: ['devicon-go-original-wordmark', 'https://golang.org/', 'Go'],
  hadoop: ['devicon-hadoop-plain', 'https://hadoop.apache.org/', 'Hadoop'],
  html5: ['devicon-html5-plain', 'https://developer.mozilla.org/en-US/docs/Web/HTML', 'HTML5'],
  java: ['devicon-java-plain', 'https://www.java.com/', 'Java'],
  javascript: ['devicon-javascript-plain', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 'JavaScript'],
  jira: ['devicon-jira-plain', 'https://www.atlassian.com/software/jira', 'Jira'],
  jupyter: ['devicon-jupyter-plain', 'https://jupyter.org/', 'Jupyter'],
  keras: ['devicon-keras-plain', 'https://keras.io/', 'Keras'],
  kubernetes: ['devicon-kubernetes-plain', 'https://kubernetes.io/', 'Kubernetes'],
  linux: ['devicon-linux-plain', 'https://www.linux.org/', 'Linux'],
  next: ['devicon-nextjs-plain', 'https://nextjs.org/', 'Next.js'],
  nginx: ['devicon-nginx-original', 'https://www.nginx.com/', 'Nginx'],
  nodejs: ['devicon-nodejs-plain', 'https://nodejs.org/', 'Node.js'],
  postgresql: ['devicon-postgresql-plain', 'https://www.postgresql.org/', 'PostgreSQL'],
  python: ['devicon-python-plain', 'https://www.python.org/', 'Python'],
  pytorch: ['devicon-pytorch-original', 'https://pytorch.org/', 'PyTorch'],
  rabbitmq: ['devicon-rabbitmq-original', 'https://www.rabbitmq.com/', 'RabbitMQ'],
  react: ['devicon-react-original', 'https://reactjs.org/', 'React'],
  redhat: ['devicon-redhat-plain', 'https://www.redhat.com/en', 'Red Hat'],
  sas: ['icon-sas-logo', 'https://www.sas.com/', 'SAS'],
  scikitLearn: ['devicon-scikitlearn-plain', 'https://scikit-learn.org/stable/', 'scikit-learn'],
  solidity: ['devicon-solidity-plain', 'https://soliditylang.org/', 'Solidity'],
  tailwindcss: ['devicon-tailwindcss-original', 'https://tailwindcss.com/', 'Tailwind CSS'],
  tensorflow: ['devicon-tensorflow-original', 'https://www.tensorflow.org/', 'TensorFlow'],
  threejs: ['devicon-threejs-original', 'https://threejs.org/', 'Three.js'],
  vuejs: ['devicon-vuejs-plain', 'https://vuejs.org/', 'Vue.js'],
};

const toolbox = {
  "core": ['bash', 'css3', 'docker', 'git', 'html5', 'javascript', 'kubernetes', 'linux', 'python', 'postgresql', 'react', 'sas'],
  "exclude": []
}

const socials = [
  { className: 'icon-mail4', link: 'mailto:n.deo@hotmail.co.uk' },
  { className: 'icon-github', link: 'https://github.com/Nikkideez' },
  { className: 'icon-linkedin', link: 'https://www.linkedin.com/in/ndeo' },
]

const jobs = [
  {
    // iconClass: 'icon-image2vector',
    logoSrc: saslogo,
    company: 'SAS Institute',
    title: 'Technical Support Engineer',
    period: 'Feb 2022 - Present',
    type: 'Fulltime',
    responsibilities: [
      "Troubleshooting, debugging and root cause analysis for applications based on monolithic and microservices architecture using proven problem-solving methodologies.",
      "Achieving outstanding customer satisfaction by employing effective prioritization, communication, business-impact analysis and teamwork.",
      "Continuously upskilling and sharing knowledge in alignment with company goals.",
      "Becoming the voice of the customer to build user stories and improve the product.",
      "Handling Follow-The-Sun issues to provide support past local business hours.",
      "Reading and writing SAS, Python, Java, Golang, C and BASH code for debugging and automation."
    ],
  },
  {
    logoSrc: squidlylogo,
    company: 'Squidly',
    title: 'Software Engineer',
    period: 'May 2024 - Present',
    type: 'Contract',
    responsibilities: [
      "HR approved side project that I work on outside of my regular work hours at SAS - Started this because it was a good opportunity to progress as a Software Engineer and build a product that could help people.",
      "Currently designing and improving an eye-gaze tracking system for people of disabilities.",
      "Creating pipelines in Python to streamline R&D of Machine and Deep Learning models.",
      "Exporting Python models into production with TensorFlowJS to run on client browsers.",
    ],
  }
  // Add more job objects here as needed
];

const projects = [
  {
    title: 'This Portfolio',
    date: '2024',
    role: 'Frontend Developer/Designer',
    text: 'Vite-React build that uses TailwindCSS for styling. The design was inspired by Brittany Chiangs portfolio, and the 3D animations were inspired by JavaScript Mastery and the ThreeJS documentation. The project was built to help showcase my work.',
    img: pImg,
    icons: ['react', 'javascript', 'html5', 'css3', 'tailwindcss', 'threejs'],
    gitLink: 'https://github.com/Nikkideez/portfolio-v1',
    readMoreLink: '',
    websiteLink: '',
    ytlink: ''
  },
  {
    title: 'Squidly Eye-Gaze Tracker',
    date: '2024',
    role: 'Software Engineer / Lead Investigator',
    text: 'Patented eye-gaze tracking system for people with disabilities. The platform uses a camera to track the users eyes, and then translates the movement into a cursor on the screen.',
    img: squidlyHomepage,
    icons: ['javascript', 'tensorflow', 'python', 'keras', 'html5', 'css3'],
    gitLink: '',
    readMoreLink: 'localhost:5173/works',
    websiteLink: 'https://www.squidly.com.au/',
    ytlink: ''
  },
  {
    title: 'Survey Robot LLM',
    date: '2023',
    role: 'Software Engineer',
    text: 'Pipeline to translate unstructured, English utterances into Linear-Time Temporal Logic (LTL) for path planning. A form of semantic passing that allows a robot to follow instructions though natural langauge. Built with Python, Pytorch and the HuggingFace API.',
    img: robotLTL,
    icons: ['python', 'pytorch', 'docker', 'linux'],
    gitLink: 'https://github.com/Nikkideez/bart-hf-model',
    readMoreLink: 'localhost:5173/works',
    ytlink: ''
  },
  {
    title: 'AutoCal',
    date: '2022',
    role: 'Team Lead / Fullstack Engineer',
    text: 'Smart calendar that uses K-Means clustering to predict your schedule based off historical data. Built with VueJS, NodeJS, Firebase and Python',
    img: autoCalHome,
    icons: ['vuejs', 'nodejs', 'firebase', 'python', 'fastapi', 'scikitLearn', 'javascript', 'html5', 'css3'],
    gitLink: 'https://github.com/Nikkideez/SIS-Frontend',
    readMoreLink: 'localhost:5173/works',
    ytlink: ''
  },
  {
    title: 'DeepERV',
    date: '2023',
    role: 'Fullstack Engineer',
    text: 'Realtime object-detection system that could identify active emergency response vehicles, pin their locations on a map and predict the direction they were going. Proof-of-concept for building a WAZE-maps inspired network powered by object detection. Built with the React, TensorflowJS, YOLOV5, and Python',
    img: deepERVHome,
    icons: ['react', 'javascript', 'tensorflow', 'python'],
    gitLink: 'https://github.com/Nikkideez/DeepERV',
    readMoreLink: 'localhost:5173/works',
    ytlink: 'https://www.youtube.com/watch?v=48AqYaWqvLI&themeRefresh=1'
  },
  {
    title: 'ProctorUTS',
    date: '2021',
    role: 'Frontend Lead',
    text: 'Realtime invigilator system to detect plagiarism for students taking exams as home. Built with NextJS, Firebase, WebRTC, Tensorflow and Nodejs.',
    img: proctorUTS,
    icons: ['next', 'react', 'javascript', 'html5', 'css3', 'firebase', 'tensorflow', 'nodejs'],
    gitLink: 'www.github.com',
    readMoreLink: 'localhost:5173/works',
    websiteLink: 'https://proctor-uts.vercel.app/',
    ytlink: 'https://www.youtube.com/watch?v=XOIBIbUZjek'
  },
  {
    title: 'School@Home',
    date: '2021',
    role: 'Frontend Lead',
    text: 'An online school platform that was made during covid to create a virtual classroom for students. Built with React, MaterialUI, and NodeJS',
    img: schoolAtHome,
    icons: ['react', 'javascript', 'html5', 'css3', 'nodejs'],
    gitLink: 'https://github.com/13613118/2A-Team-5',
    readMoreLink: 'localhost:5173/works',
    ytlink: 'https://www.youtube.com/watch?v=kvJBomJKSvM'
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

export { jobs, projects, services, iconList, toolbox, socials };
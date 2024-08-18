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
  pImg,
  surveyR,
  squidly,
  squidlyLight,
  robotSVG,
  robotLTL,
  squidlyEyeGaze,
  squidlyHomepage,
  deepERVHome,
  deepERV,
  autoCalHome,
  proctorUTS,
  schoolAtHome
} from "../assets/"


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

const jobs = [
  {
    // iconClass: 'icon-image2vector',
    logoSrc: saslogo,
    company: 'SAS Institute',
    title: 'Technical Support Engineer',
    period: 'Feb 2022 - Present',
    type: 'Fulltime',
    responsibilities: [
      "Troubleshooting, debugging and root cause analysis for web applications based on microservices architecture using proven problem-solving methodologies.",
      "Achieving outstanding customer satisfaction by employing effective prioritization, communication, business-impact analysis and teamwork.",
      "Continuously upskilling and sharing knowledge in alignment with company goals.",
      "Becoming the voice of the customer to build user stories and improve the product.",
      "Handling Follow-The-Sun issues to provide support past local business hours.",
      "Reading and writing SAS, Python, Java, Golang, C and BASH code for debugging and automation."
    ],
  },
  {
    logoSrc: saslogo,
    company: 'Squidly',
    title: 'Software Engineer',
    period: 'May 2024 - Present',
    type: 'Contract',
    responsibilities: [
      "HR approved side project - Started this because I missed working on projects as a team to build out solutions.",
      "Designing and improving an eye-gaze tracking system for people of disabilities.",
      "Creating pipelines in Python to streamline R&D of Machine and Deep Learning models.",
      "Exporting Python models into production with TensorFlowJS to run on client browsers.",
    ],
  }
  // Add more job objects here as needed
];

const projects = [
  {
    title: 'This Portfolio',
    text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well.',
    img: pImg,
    icons: ['devicon-react-original', 'devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-tailwindcss-plain', 'devicon-threejs-original'],
    gitLink: 'https://www.github.com',
    readMoreLink: 'http://localhost:5173/#work'
  },
  {
    title: 'Survey Robot',
    text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well. Adding more random text here to take up more space and text my theory about how columns determins where the next div will be placed.',
    img: robotLTL,
    icons: ['devicon-react-original', 'devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-tailwindcss-plain', 'devicon-threejs-original'],
    gitLink: 'www.github.com',
    readMoreLink: 'localhost:5173/works'
  },
  {
    title: 'Squidly',
    text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well.',
    img: squidlyHomepage,
    icons: ['devicon-react-original', 'devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-tailwindcss-plain', 'devicon-threejs-original'],
    gitLink: 'www.github.com',
    readMoreLink: 'localhost:5173/works'
  },
  {
    title: 'AutoCal',
    text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well.',
    img: autoCalHome,
    icons: ['devicon-react-original', 'devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-tailwindcss-plain', 'devicon-threejs-original'],
    gitLink: 'www.github.com',
    readMoreLink: 'localhost:5173/works'
  },
  {
    title: 'DeepERV',
    text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well.',
    img: deepERVHome,
    icons: ['devicon-react-original', 'devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-tailwindcss-plain', 'devicon-threejs-original'],
    gitLink: 'www.github.com',
    readMoreLink: 'localhost:5173/works'
  },
  {
    title: 'ProctorUTS',
    text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well.',
    img: proctorUTS,
    icons: ['devicon-react-original', 'devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-tailwindcss-plain', 'devicon-threejs-original'],
    gitLink: 'www.github.com',
    readMoreLink: 'localhost:5173/works'
  },
  {
    title: 'School@Home',
    text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well.',
    img: schoolAtHome,
    icons: ['devicon-react-original', 'devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-tailwindcss-plain', 'devicon-threejs-original'],
    gitLink: 'www.github.com',
    readMoreLink: 'localhost:5173/works'
  },
  // {
  //   title: 'School@Home',
  //   text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well.',
  //   img: schoolAtHome,
  //   icons: ['devicon-react-original', 'devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-tailwindcss-plain', 'devicon-threejs-original'],
  //   gitLink: 'www.github.com',
  //   readMoreLink: 'localhost:5173/works'
  // },
  // {
  //   title: 'School@Home',
  //   text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well.',
  //   img: schoolAtHome,
  //   icons: ['devicon-react-original', 'devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-tailwindcss-plain', 'devicon-threejs-original'],
  //   gitLink: 'www.github.com',
  //   readMoreLink: 'localhost:5173/works'
  // },
]

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export { jobs, projects };
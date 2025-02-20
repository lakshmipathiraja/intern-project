export const coursesData = [
  {
    id: 1,
    image: "/images/c1.jpg",
    title: "Introduction to JavaScript",
    author: "John Doe",
    reviewNumber: 450,
    lessons: 25,
    students: 150,
    category: "Programming",
    description: "Learn the fundamentals of JavaScript, including variables, functions, and basic syntax.",
    difficulty: "Beginner",
    duration: "3 hours",
    prerequisites: "None",
  },
  {
    id: 2,
    image: "/images/c2.jpg",
    title: "Advanced Python Programming",
    author: "Jane Smith",
    reviewNumber: 670,
    lessons: 25,
    students: 120,
    category: "Programming",
    description: "Master advanced Python concepts such as decorators, generators, and multi-threading.",
    difficulty: "Advanced",
    duration: "4.5 hours",
    prerequisites: "Basic Python knowledge",
  },
  {
    id: 3,
    image: "/images/c3.jpg",
    title: "UI/UX Design Fundamentals",
    author: "Emily Johnson",
    reviewNumber: 460,
    lessons: 30,
    students: 90,
    category: "Design",
    description: "Understand the core principles of user interface and experience design, and apply them in real projects.",
    difficulty: "Intermediate",
    duration: "5 hours",
    prerequisites: "None",
  },
  {
    id: 4,
    image: "/images/c4.jpg",
    title: "Ethical Hacking Basics",
    author: "Michael Brown",
    reviewNumber: 440,
    lessons: 18,
    students: 110,
    category: "Hacking",
    description: "Learn ethical hacking techniques, penetration testing, and how to secure networks.",
    difficulty: "Intermediate",
    duration: "6 hours",
    prerequisites: "Basic networking knowledge",
  },
  {
    id: 5,
    image: "/images/c5.jpg",
    title: "Full Stack Web Development",
    author: "Chris Lee",
    reviewNumber: 480,
    lessons: 40,
    students: 200,
    category: "Programming",
    description: "Become a full stack developer by mastering both frontend (React) and backend (Node.js) development.",
    difficulty: "Advanced",
    duration: "8 hours",
    prerequisites: "Basic HTML, CSS, and JavaScript knowledge",
  },
  {
    id: 6,
    image: "/images/c6.jpg",
    title: "Software Testing and QA",
    author: "Alex Wilson",
    reviewNumber: 430,
    lessons: 22,
    students: 80,
    category: "Software",
    description: "Learn software testing techniques including unit testing, integration testing, and automated testing.",
    difficulty: "Beginner",
    duration: "4 hours",
    prerequisites: "None",
  },
  {
    id: 7,
    image: "/images/c7.jpg",
    title: "Machine Learning Basics",
    author: "Sarah Thompson",
    reviewNumber: 500,
    lessons: 35,
    students: 180,
    category: "Programming",
    description: "Learn the basics of machine learning, including supervised and unsupervised learning algorithms.",
    difficulty: "Advanced",
    duration: "6 hours",
    prerequisites: "None",
  },
];



export const lessonsData = [
  {
    courseId: 1,  // Refers to the "Introduction to JavaScript" course
    lessons: [
      { id: 1, title: "Lesson 1: Introduction to JavaScript", duration: "15 mins", description: "Overview of JavaScript, its history, and basic concepts.", iframe:"https://www.youtube.com/embed/zofMnllkVfI?si=u9rRWQ0zNFPwweUo" },
      { id: 2, title: "Lesson 2: Variables and Data Types", duration: "20 mins", description: "Introduction to variables, constants, and data types in JavaScript.", iframe:"https://www.youtube.com/embed/7xStNKTM3bE?si=7PQe8dB3G59U_Sma" },
      { id: 3, title: "Lesson 3: Functions", duration: "25 mins", description: "Learn how to define and use functions in JavaScript.", iframe:"https://www.youtube.com/embed/zofMnllkVfI?si=u9rRWQ0zNFPwweUo" },
      { id: 4, title: "Lesson 4: Loops and Conditional Statements", duration: "30 mins", description: "Understanding loops (for, while) and conditional statements (if, else).", iframe:"https://www.youtube.com/embed/zofMnllkVfI?si=u9rRWQ0zNFPwweUo" },
      { id: 5, title: "Lesson 5: Arrays and Objects", duration: "40 mins", description: "Understanding arrays, objects, and how to manipulate them in JavaScript.", iframe:"https://www.youtube.com/embed/zofMnllkVfI?si=u9rRWQ0zNFPwweUo" },
      { id: 6, title: "Lesson 6: DOM Manipulation", duration: "45 mins", description: "Learn how to manipulate the Document Object Model (DOM) using JavaScript.", iframe:"https://www.youtube.com/embed/zofMnllkVfI?si=u9rRWQ0zNFPwweUo" }
    ],
  },
  {
    courseId: 2,  // Refers to the "Advanced Python Programming" course
    lessons: [
      { id: 1, title: "Lesson 1: Introduction to Advanced Python", duration: "25 mins", description: "Overview of advanced Python features." },
      { id: 2, title: "Lesson 2: Decorators in Python", duration: "35 mins", description: "Understanding Python decorators and how to use them effectively." },
      { id: 3, title: "Lesson 3: Python Generators", duration: "30 mins", description: "Learn how to create and use Python generators." },
      { id: 4, title: "Lesson 4: Multi-threading in Python", duration: "40 mins", description: "An introduction to multi-threading and concurrency in Python." },
      { id: 5, title: "Lesson 5: Python’s Memory Management", duration: "50 mins", description: "Learn about Python’s memory management, garbage collection, and references." }
    ],
  },
  {
    courseId: 3,  // Refers to the "UI/UX Design Fundamentals" course
    lessons: [
      { id: 1, title: "Lesson 1: Introduction to UI/UX", duration: "30 mins", description: "Overview of UI/UX design principles and concepts." },
      { id: 2, title: "Lesson 2: User Research", duration: "40 mins", description: "Learn how to conduct user research for effective design." },
      { id: 3, title: "Lesson 3: Wireframing and Prototyping", duration: "45 mins", description: "An introduction to wireframing and prototyping techniques." },
      { id: 4, title: "Lesson 4: Visual Design Principles", duration: "50 mins", description: "Learn the principles of color theory, typography, and layout in design." },
      { id: 5, title: "Lesson 5: Interaction Design", duration: "60 mins", description: "Explore interaction design principles and how they enhance usability." }
    ],
  },
  {
    courseId: 4,  // Refers to the "Ethical Hacking Basics" course
    lessons: [
      { id: 1, title: "Lesson 1: Introduction to Ethical Hacking", duration: "30 mins", description: "Learn what ethical hacking is and its importance in cybersecurity." },
      { id: 2, title: "Lesson 2: Penetration Testing", duration: "35 mins", description: "Introduction to penetration testing tools and techniques." },
      { id: 3, title: "Lesson 3: Network Security Basics", duration: "40 mins", description: "Understand basic network security concepts, including firewalls and encryption." },
      { id: 4, title: "Lesson 4: Ethical Hacking Tools", duration: "45 mins", description: "Explore the tools used in ethical hacking for penetration testing." },
      { id: 5, title: "Lesson 5: Vulnerability Assessment", duration: "50 mins", description: "Learn how to assess system vulnerabilities and potential security gaps." }
    ],
  },
  {
    courseId: 5,  // Refers to the "Full Stack Web Development" course
    lessons: [
      { id: 1, title: "Lesson 1: Introduction to Full Stack Development", duration: "40 mins", description: "Overview of the full stack development process and technologies." },
      { id: 2, title: "Lesson 2: Frontend Development with React", duration: "50 mins", description: "Learn the fundamentals of frontend development using React.js." },
      { id: 3, title: "Lesson 3: Backend Development with Node.js", duration: "60 mins", description: "Understand how to build the backend of an application using Node.js." },
      { id: 4, title: "Lesson 4: Connecting Frontend and Backend", duration: "55 mins", description: "Learn how to integrate frontend and backend with APIs." },
      { id: 5, title: "Lesson 5: Databases in Full Stack", duration: "65 mins", description: "Learn how to work with databases in full stack applications (SQL & NoSQL)." }
    ],
  },
  {
    courseId: 6,  // Refers to the "Software Testing and QA" course
    lessons: [
      { id: 1, title: "Lesson 1: Introduction to Software Testing", duration: "30 mins", description: "An overview of the software testing process and types of testing." },
      { id: 2, title: "Lesson 2: Unit Testing", duration: "35 mins", description: "Learn the basics of unit testing and why it’s important." },
      { id: 3, title: "Lesson 3: Integration Testing", duration: "40 mins", description: "Understand the concept of integration testing and its applications." },
      { id: 4, title: "Lesson 4: Automated Testing", duration: "50 mins", description: "Learn how to automate your tests and use testing frameworks." },
      { id: 5, title: "Lesson 5: Test-Driven Development", duration: "60 mins", description: "Explore the Test-Driven Development (TDD) approach for writing software tests." }
    ],
  },
  {
    courseId: 7,  // Refers to the "Machine Learning Basics" course
    lessons: [
      { id: 1, title: "Lesson 1: Introduction to Machine Learning", duration: "45 mins", description: "Overview of machine learning, its history, and applications.", },
      { id: 2, title: "Lesson 2: Supervised Learning", duration: "50 mins", description: "Learn the basics of supervised learning algorithms like linear regression." },
      { id: 3, title: "Lesson 3: Unsupervised Learning", duration: "55 mins", description: "Explore unsupervised learning algorithms like clustering and k-means." },
      { id: 4, title: "Lesson 4: Neural Networks", duration: "60 mins", description: "An introduction to neural networks and deep learning concepts." },
      { id: 5, title: "Lesson 5: Machine Learning Models Evaluation", duration: "65 mins", description: "Learn about different methods of evaluating machine learning models." }
    ],
  },
];

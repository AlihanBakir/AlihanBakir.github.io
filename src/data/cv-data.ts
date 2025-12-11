export const personalInfo = {
  name: "Alihan BAKIR",
  title: "PhD Candidate in Robotics, Control, and Intelligent Systems",
  summary: "Robotics researcher focused on full-body interaction with surface-based robots. Expertise in mechatronic system design, controller design, programming, signal processing, dynamics and kinematics. Currently pursuing PhD at EPFL's Reconfigurable Robotics Laboratory.",
  email: "alihan.bakir@epfl.ch",
  phone: "+41 21 693 57 37",
  // Relative path to a downloadable CV file placed in `public/` (e.g. `public/Alihan_BAKIR_CV.pdf`)
  // Use an absolute URL if hosting the file elsewhere.
  cv: "/cv_alihanbakir.pdf",
  website: "www.alihanb.com",
  location: "EPFL STI IGM RRL, MED 1 2313 (Batiment MED) Station 9, 1015 Lausanne, Switzerland",
  github: "https://www.github.com/AlihanBakir",
  linkedin: "https://www.linkedin.com/in/alihanbakir/",
};

export const skills = {
  advanced: ["Platform IO", "Arduino", "MATLAB", "Python", "SolidWorks", "Eagle", "Slic3r PE", "PCB design", "Soldering"],
  good: ["Java", "LaTeX", "Shotcut", "Premier Pro", "Illustrator"],
  intermediate: ["Pronterface", "Cura", "AutoCAD"],
  basic: ["COMSOL", "ANSYS", "Meshmixer", "Machine Learning", "ROS"],
};

export const skillCategories = [
  { key: "advanced", label: "Advanced" },
  { key: "good", label: "Good" },
  { key: "intermediate", label: "Intermediate" },
  { key: "basic", label: "Basic" },
] as const;

export const education = [
  {
    institution: "EPFL - Reconfigurable Robotics Laboratory",
    degree: "PhD Candidate, Robotics, Control, and Intelligent Systems",
    period: "August 2023 - Present",
    thesis: "Full-body Interaction with surface based robots",
    advisor: "Dr. Jamie Paik",
    highlights: ["Mechatronic system design", "Controller design", "Programming", "Signal processing", "Dynamics and kinematics"],
  },
  {
    institution: "Bilkent University - Miniature Robotics Laboratory",
    degree: "MSc, Mechanical Engineering",
    period: "September 2020 - July 2023",
    thesis: "A Miniature, Foldable, Collision Resilient Quadcopter",
    advisor: "Dr. Onur Ozcan",
    highlights: ["Engineering electrical/mechanical design", "Mobile robotics", "Linear system theory", "Dynamics of aerospace vehicles", "Flying robot control", "Autonomous flight", "Path planning", "Signal processing"],
  },
  {
    institution: "Bilkent University - Department of Mechanical Engineering",
    degree: "BSc, Mechanical Engineering",
    period: "September 2016 - June 2020",
    prepSchool: "English Language Prep School (September 2015 - May 2016)",
    highlights: ["Engineering electrical/mechanical design", "Mobile robotics", "Controller design", "Mechatronic system manufacturing and programming", "Signal processing", "Dynamics and control"],
  },
];

export const publications = [
  {
    authors: "Bakir A., Ozbek D., Abazari A., Ozcan O.",
    year: "2022",
    title: "SCoReR: A Sensored, Collision Resilient, Foldable Quadcopter",
    venue: "IEEE International Conference on Soft Robotics (RoboSoft 2023)",
    location: "Singapore, April 3-7, 2023",
  },
  {
    authors: "Ugur M., Uygun M., Bakir A., Ozcan O.",
    title: "Path Tracking and Connection Mechanism of a Reconfigurable, Foldable, Legged, and Miniature Robot",
    venue: "Hittite Journal of Science and Engineering",
    details: "vol. 9, no. 3, pp. 205-211, Sep. 2022",
    doi: "10.17350/HJSE19030000272",
  },
  {
    authors: "Mahkam, N., Bakir, A., Ozcan, O.",
    title: "Miniature Modular Legged Robot with Compliant Backbones",
    venue: "IEEE Robotics & Automation Letters",
    details: "vol. 5, no. 3, pp. 3923-3930, 2020",
    doi: "10.1109/LRA.2020.2982362",
  },
];

export const projects = [
  {
    id: "aerial-robot-team",
    title: "Affordable, Miniature, and Coordinated Aerial Robot Team for Infrastructure Inspection",
    period: "September 2020 - August 2022",
    location: "Miniature Robotics Laboratory, Bilkent University",
    objective: "To design and manufacture a flying robot team consisting of at least 3 robots, to be used in infrastructure inspection",
    responsibilities: [
      "All tasks related to autonomous robot controls, such as designing the attitude, altitude, position and heading controllers of the robot",
      "All tasks related to autonomous flight such as path planning",
    ],
    category: "Research",
  },
  {
    id: "modular-robot",
    title: "Modular Miniature Foldable Robot Analysis and Design",
    period: "May 2018 - August 2020",
    location: "Miniature Robotics Laboratory, Bilkent University",
    objective: "To have a perfectly functioning PCB under many different circumstances, which is easy to program, and easy and cheap to build.",
    responsibilities: [
      "General design of robots",
      "All tasks related to PCBs, such as design, component selection, and soldering",
      "Design of the foldability aspect of robots (Since the robots are produced from PET sheets, the main task is to think and design the robots in 2-D, which will function as desired when folded to 3-D.)",
    ],
    category: "Research",
  },
  {
    id: "senior-design",
    title: "Senior Design Project: Designing and Building a Half-Autonomous Drone",
    period: "September 2019 - June 2020",
    location: "Bilkent University",
    objective: "To design a half-autonomous drone which can detect the child from a designated altitude by a thermal camera and inform the authorities.",
    responsibilities: [
      "All tasks related to electronics, such as design, component selection, and soldering",
      "Checking the whole system and troubleshooting",
    ],
    category: "Academic",
  },
  {
    id: "mech-society",
    title: "Bilkent University Mechanical Engineering Society Projects",
    period: "2015 - 2018",
    location: "Bilkent University",
    subProjects: [
      { title: "Designing/Building a CNC plane cutting machine", period: "September 2015 - June 2016" },
      { title: "Designing/Building an RC plane", period: "September 2016 - June 2017" },
      { title: "Designing/Building a CNC egg painting robot", period: "September 2017 - June 2018" },
    ],
    category: "Society",
  },
  {
    id: "tubitak",
    title: "TUBITAK Efficiency Challenge Electric Vehicle",
    period: "February - October 2018",
    location: "Bilkent University Team",
    category: "Competition",
  },
  {
    id: "term-projects",
    title: "Term Projects",
    location: "Bilkent University",
    subProjects: [
      { title: "Designing and building a compressed air engine", semester: "2nd Semester" },
      { title: "Designing and building a crane made of spaghetti", semester: "3rd Semester" },
      { title: "Designing and building a cup holder suitable for all cups available in Starbucks", semester: "4th Semester" },
      { title: "Modeling the cooling behavior of a vacuum flask using the principles of heat transfer", semester: "4th Semester" },
      { title: "Designing and modeling a compression and tension load cell", semester: "5th Semester" },
      { title: "Designing and building a rover which can cross a gap as large as its length", semester: "6th Semester" },
    ],
    category: "Academic",
  },
];

export const experience = [
  {
    id: 1,
    company: "EPFL",
    role: "Teaching Assistant",
    period: "August 2023 - Present",
    location: "Lausanne, Switzerland",
    courses: [
      "ME410 - Mechanical Product Design and Development",
      "ME420 - Advanced Design for Sustainable Future",
    ],
    type: "teaching",
  },
  {
    id: 2,
    company: "Bilkent University",
    role: "Teaching Assistant",
    period: "September 2020 - July 2023",
    location: "Ankara, Turkey",
    courses: [
      "ME101 - Fundamentals of Mechanical Engineering",
      "ME384 - Mechatronic Systems",
      "ME342 - Dynamics and Control II",
    ],
    supervisor: "Dr. Onur Ozcan (onurozcan@bilkent.edu.tr)",
    type: "teaching",
  },
  {
    id: 3,
    company: "Bronix Engineering Solutions",
    role: "Embedded Systems and Control",
    period: "July 2021 - July 2023",
    location: "Turkey",
    type: "startup",
  },
  {
    id: 4,
    company: "Bilkent University - Miniature Robotics Laboratory",
    role: "Undergraduate Researcher",
    period: "May 2018 - August 2020",
    location: "Ankara, Turkey",
    supervisor: "Dr. Onur Ozcan (onurozcan@bilkent.edu.tr)",
    type: "research",
  },
  {
    id: 5,
    company: "Gaziantep University",
    role: "Summer Orientation Intern",
    period: "July 2016 - August 2016",
    location: "Gaziantep, Turkey",
    advisor: "Prof. Dr. Canan Dulger (canan.dulger@ieu.edu.tr)",
    type: "internship",
  },
  {
    id: 6,
    company: "Altinay Robot Technologies",
    role: "Summer Practice 1 Intern",
    period: "June 2018 - July 2018",
    location: "Turkey",
    coordinator: "Dr. Sakir Baytaroglu (sakir.baytaroglu@bilkent.edu.tr)",
    type: "internship",
  },
  {
    id: 7,
    company: "ASELSAN",
    role: "Summer Practice 2 Intern",
    period: "July 2019 - August 2019",
    location: "Turkey",
    coordinator: "Dr. Sakir Baytaroglu (sakir.baytaroglu@bilkent.edu.tr)",
    type: "internship",
  },
];

export const awards = [
  {
    title: "Bilkent University Full Scholarship (M.Sc.)",
    period: "September 2020 - Present",
  },
  {
    title: "Bilkent University 50% Scholarship (B.Sc.)",
    period: "September 2015 - June 2020",
  },
];

export const languages = [
  { language: "Turkish", level: "Native" },
  { language: "English", level: "Fluent" },
];

export const affiliations = [
  {
    title: "Active member, Bilkent University Miniature Robotics Laboratory",
    period: "May 2018 - July 2023",
  },
  {
    title: "Active member, Bilkent University Mechanical Engineering Society",
    period: "Sept. 2016 - Sept. 2019",
  },
  {
    title: "Team member, TUBITAK Efficiency Challenge Bilkent University Team",
    period: "Feb. - Oct. 2018",
  },
  {
    title: "Active member, Bilkent University IEEE Student Branch",
    period: "Sept. 2015 - June 2016",
  },
];

export const interests = [
  "DIY projects",
  "Skiing",
  "Drones",
  "Basketball",
  "Water polo",
  "Electric guitar",
];

export const references = [
  {
    name: "Jamie Paik",
    title: "Associate Professor",
    institution: "Institute of Mechanical Engineering, Ecole Polytechnique Federale de Lausanne",
    phone: "+41 21 693 59 48",
    email: "jamie.paik@epfl.ch",
  },
  {
    name: "Onur Ozcan",
    title: "Associate Professor",
    institution: "Department of Mechanical Engineering, Bilkent University",
    phone: "+90 (312) 290-2893",
    email: "onurozcan@bilkent.edu.tr",
  },
  {
    name: "Ali Javili",
    title: "Associate Professor",
    institution: "Department of Mechanical Engineering, Bilkent University",
    phone: "+90 (312) 290-2897",
    email: "ajavili@bilkent.edu.tr",
  },
  {
    name: "Billur Barshan",
    title: "Professor",
    institution: "Department of Electrical and Electronics Engineering, Bilkent University",
    phone: "+90 (312) 290-2161",
    email: "billur@ee.bilkent.edu.tr",
  },
];

export type Project = typeof projects[number];
export type Experience = typeof experience[number];

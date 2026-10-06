/**
 * PORTFOLIO DATA CONFIGURATION
 * Edit this file to easily update your portfolio information, projects, skills, education, and achievements.
 */

window.PORTFOLIO_DATA = {
  personal: {
    name: "Piyush Pareek",
    title: "B.Tech Mechanical Engineering Student",
    university: "JECRC University",
    location: "Jaipur, Rajasthan, India",
    currentStatus: "B.Tech Mechanical Engineering Student (Pre-final / Final Year)",
    tagline: "Engineering ideas into practical solutions.",
    bioShort: "Passionate B.Tech Mechanical Engineering student dedicated to bridging theoretical mechanics with cutting-edge computer-aided design, automation, and sustainable manufacturing practices.",
    bioLong: "I am a dedicated B.Tech Mechanical Engineering student at JECRC University, Jaipur, deeply passionate about engineering design, mechanical innovation, problem solving, and hands-on fabrication. My focus spans 3D CAD modeling, finite element analysis (FEA), kinematic mechanism design, and the integration of smart computing into mechanical systems. Driven by curiosity and a commitment to practical engineering excellence, I actively build prototypes and analyze technical challenges to deliver reliable, efficient solutions.",
    profileImage: "assets/images/piyush-profile.jpg",
    email: "piyushpareek.work@gmail.com", // Replace with your primary email
    linkedin: "https://linkedin.com/in/piyush-pareek", // Replace with your LinkedIn profile URL
    github: "https://github.com/piyush-pareek", // Replace with your GitHub profile URL
    resumePath: "assets/resume/Piyush_Pareek_Resume.pdf", // Link to your actual PDF file in assets/resume/
    availabilityStatus: "Open for Internships & Engineering Roles",
    metrics: [
      { label: "Degree Focus", value: "B.Tech Mech" },
      { label: "CAD & Modeling", value: "350+ Hrs" },
      { label: "Core Projects", value: "6+ Completed" },
      { label: "Academic University", value: "JECRC Univ" }
    ]
  },

  // SKILLS SECTION - Attractive categorized cards with proficiency levels
  skills: [
    {
      id: "mech-fundamentals",
      name: "Mechanical Engineering Fundamentals",
      category: "core",
      proficiency: 90,
      icon: "cog",
      description: "Strength of materials, thermodynamics, fluid dynamics, kinematics of machines, and heat transfer.",
      tags: ["Thermodynamics", "SOM", "Fluid Mechanics", "Kinematics"]
    },
    {
      id: "cad-autocad",
      name: "CAD & AutoCAD",
      category: "design",
      proficiency: 92,
      icon: "drafting-compass",
      description: "2D drafting, parametric 3D modeling, GD&T tolerancing, assembly constraints, and technical drawing standards.",
      tags: ["AutoCAD", "SolidWorks", "Parametric 3D", "GD&T"]
    },
    {
      id: "eng-drawing",
      name: "Engineering Drawing / Graphics",
      category: "design",
      proficiency: 88,
      icon: "ruler-combined",
      description: "Orthographic projections, isometric views, sectional views, component dimensioning, and standard drafting conventions.",
      tags: ["Orthographic", "Isometric", "Sectioning", "ISO Standards"]
    },
    {
      id: "eng-math",
      name: "Engineering Mathematics",
      category: "core",
      proficiency: 85,
      icon: "binary",
      description: "Calculus, differential equations, linear algebra, numerical methods, and statistical analysis for engineering modeling.",
      tags: ["Differential Equations", "Linear Algebra", "Calculus", "Numerical Methods"]
    },
    {
      id: "problem-solving",
      name: "Problem Solving",
      category: "professional",
      proficiency: 94,
      icon: "lightbulb",
      description: "Analytical root-cause analysis, mechanical fault diagnostic, rapid prototyping, and empirical testing methodologies.",
      tags: ["Root Cause Analysis", "System Design", "Iterative Testing", "Critical Thinking"]
    },
    {
      id: "basic-programming",
      name: "Basic Programming & Computing",
      category: "technical",
      proficiency: 80,
      icon: "code",
      description: "Computational logic, Python/C basics for engineering calculations, MATLAB / numerical computation, and Arduino robotics interfacing.",
      tags: ["Python Basics", "C Programming", "MATLAB / SciPy", "Arduino Embedded"]
    },
    {
      id: "communication",
      name: "Technical Communication",
      category: "professional",
      proficiency: 88,
      icon: "message-square",
      description: "Preparation of technical reports, engineering documentation, design presentations, and technical documentation.",
      tags: ["Report Writing", "Technical Demos", "Project Proposals", "Client Reviews"]
    },
    {
      id: "teamwork",
      name: "Teamwork & Project Management",
      category: "professional",
      proficiency: 92,
      icon: "users",
      description: "Cross-functional collaboration, design sprint coordination, peer review leadership, and workshop team management.",
      tags: ["Cross-functional", "Agile Sprints", "Peer Review", "Leadership"]
    },
    {
      id: "ms-office",
      name: "MS Office & Productivity Tools",
      category: "technical",
      proficiency: 95,
      icon: "file-spreadsheet",
      description: "Advanced Excel for engineering calculations and data charting, technical PowerPoint presentations, and Word document structuring.",
      tags: ["Excel Data Analysis", "PowerPoint", "Technical Word", "Google Workspace"]
    }
  ],

  // PROJECTS SECTION - Project cards with role, tools, modal details & images
  projects: [
    {
      id: "gearbox-design",
      title: "Design & Structural FEA of a 4-Speed Manual Gearbox",
      category: "Mechanical Design",
      shortDescription: "Complete parametric 3D CAD modeling, gear tooth stress analysis, and bearing load distribution calculation for a compact automotive transmission.",
      role: "Lead Mechanical Designer & FEA Analyst",
      technologies: ["SolidWorks", "AutoCAD", "FEA Analysis", "Gear Kinematics", "Material Selection"],
      image: "assets/images/project-gearbox.jpg",
      featured: true,
      year: "2025 - 2026",
      details: {
        objective: "To engineer a resilient, compact 4-speed manual gearbox capable of handling high input torque with minimal vibrational energy loss and optimal contact ratio.",
        keyFeatures: [
          "Calculated Lewis bending equation and AGMA contact stress parameters for hardened spur & helical gears.",
          "Modeled full 3D assembly including input/output shafts, sync sleeves, bearings, and ribbed casing.",
          "Conducted Finite Element Analysis (FEA) to detect stress concentrations under maximum rated torque load (220 Nm).",
          "Generated complete standard 2D drafting sheets conforming to ISO dimensional tolerancing."
        ],
        toolsUsed: "AutoCAD 2024, SolidWorks Mechanical Design, ANSYS Structural Simulation, Microsoft Excel",
        outcome: "Achieved a 14% mass reduction in casing geometry while keeping safety factor above 2.1 across all gear teeth mesh points."
      }
    },
    {
      id: "autonomous-robotics",
      title: "Autonomous Quadcopter Chassis & Robotic Manipulator Mechanism",
      category: "Robotics & CAD",
      shortDescription: "Structural frame synthesis, aerodynamic propeller clearance layout, and lightweight robotic gripper mechanism for precision payload delivery.",
      role: "Mechanism Design & Rapid Prototyping Lead",
      technologies: ["3D Printing", "SolidWorks", "Kinematic Simulation", "Arduino", "Carbon Fiber CAD"],
      image: "assets/images/project-robotics.jpg",
      featured: true,
      year: "2025",
      details: {
        objective: "To design a rigid, vibration-damped multi-rotor frame integrated with a lightweight 2-DOF robotic picking arm for sample retrieval.",
        keyFeatures: [
          "Synthesized multi-linkage mechanical gripper driven by micro-servo actuators with compliant silicone fingertips.",
          "Conducted modal analysis to isolate chassis natural frequencies from motor RPM resonance zones.",
          "Rapidly prototyped structural brackets using FDM 3D printing with PETG and PLA+ filaments.",
          "Interfaced PWM motion controls with Arduino microcontroller board."
        ],
        toolsUsed: "SolidWorks Motion, FDM 3D Printing, Arduino IDE, FEA Modal Analysis",
        outcome: "Verified functional payload transport of up to 450 grams with zero frame flutter during stable hover flight tests."
      }
    },
    {
      id: "ev-chassis-spaceframe",
      title: "Formula Student Tubular Spaceframe Chassis & Double Wishbone",
      category: "Automotive Engineering",
      shortDescription: "Torsional rigidity optimization, suspension hardpoint geometry, and crash-attenuation front bulkhead modeling for an electric student prototype vehicle.",
      role: "Chassis & Suspension Team Member",
      technologies: ["CAD Wireframe", "Torsional Analysis", "Double Wishbone", "AISI 4130 Chromoly", "GD&T"],
      image: "assets/images/project-ev-chassis.jpg",
      featured: true,
      year: "2025",
      details: {
        objective: "Develop a compliant, high-rigidity tubular spaceframe chassis adhering to collegiate formula safety regulations.",
        keyFeatures: [
          "Triangulated steel chassis members ensuring direct load paths between suspension pick-up brackets.",
          "Synthesized front and rear double wishbone suspension geometry minimizing camber variation over wheel travel.",
          "Integrated ergonomic driver cockpit enclosure with removable safety harness and pedal box mounting.",
          "Simulated front impact crash decelerations on front attenuator crash box."
        ],
        toolsUsed: "AutoCAD Mechanical, SolidWorks Weldments, Suspension Kinematics Calculator",
        outcome: "Attained over 1,450 Nm/degree torsional stiffness with an estimated chassis unladen weight under 38 kg."
      }
    },
    {
      id: "solar-irrigation",
      title: "Solar-Powered Dual-Axis Automated Irrigation Mechanism",
      category: "Engineering Technology",
      shortDescription: "Eco-friendly tracking mechanism utilizing LDR sensors and a worm-gear drive to maximize photovoltaic yield for agricultural drip-irrigation pumps.",
      role: "System Designer & Hardware Integrator",
      technologies: ["Solar Tracking", "Worm Gear Drive", "Fluidics", "Sensors", "CAD Drafting"],
      image: "assets/images/project-gearbox.jpg",
      featured: false,
      year: "2024",
      details: {
        objective: "Design an affordable mechanical dual-axis solar positioning mount driven by high-torque low-RPM worm reduction gears.",
        keyFeatures: [
          "Calculated daily solar zenith and azimuth angles to size gearbox gear reduction ratio (60:1).",
          "Engineered weather-sealed bearing housing for dusty rural environments.",
          "Configured sensor-driven automated tilt mechanism coupled with low-energy centrifugal submersible pump."
        ],
        toolsUsed: "AutoCAD, Mechanical Design Handbook, Arduino, Prototyping Workshop",
        outcome: "Demonstrated 28% higher solar power harvesting efficiency compared to static angle panels under identical seasonal sunlight."
      }
    }
  ],

  // EDUCATION SECTION - Timeline with degree and placeholder for Class 12 & 10
  education: [
    {
      degree: "B.Tech in Mechanical Engineering",
      institution: "JECRC University",
      location: "Jaipur, Rajasthan, India",
      duration: "2023 - 2027 (Expected)",
      status: "Current Student (Pre-final / Final Year)",
      score: "CGPA: [8.X / 10.0] (Editable)", // Placeholder to update
      highlights: [
        "Core Coursework: Thermodynamics, Mechanics of Solids, Fluid Mechanics, Kinematics & Dynamics of Machines, Manufacturing Technology, Engineering Graphics & CAD.",
        "Active member of University Mechanical Engineering Club & Robotics Society.",
        "Participated in hands-on workshops in machine shop operations (Lathe, Milling, CNC, Shaper, Welding)."
      ]
    },
    {
      degree: "Senior Secondary Education (Class 12 - Science PCM)",
      institution: "Senior Secondary School [School Name Placeholder]",
      location: "Jaipur, Rajasthan, India",
      duration: "2022 - 2023",
      status: "Completed",
      score: "Score: [XX.X]% (Editable)", // Placeholder to update
      highlights: [
        "Majored in Physics, Chemistry, and Mathematics (PCM).",
        "Participated in regional Science Exhibitions and Mathematics Olympiads.",
        "Developed early enthusiasm for applied physics and engineering systems."
      ]
    },
    {
      degree: "Secondary School Education (Class 10)",
      institution: "High School [School Name Placeholder]",
      location: "Jaipur, Rajasthan, India",
      duration: "2020 - 2021",
      status: "Completed",
      score: "Score: [XX.X]% (Editable)", // Placeholder to update
      highlights: [
        "Excelled in General Science, Mathematics, and Computer Basics.",
        "Active participant in extracurricular sports, science fairs, and school tech clubs."
      ]
    }
  ],

  // ACHIEVEMENTS SECTION - Academic, Certifications, Workshops, Competitions, Events, Internships
  achievements: [
    {
      id: "cert-autocad",
      category: "Certifications",
      title: "AutoCAD Certified Professional / Drafting Training",
      organization: "Autodesk / Authorized Partner",
      date: "2024",
      icon: "award",
      description: "Mastered 2D engineering drafting, parametric dimensions, layer protocols, and GD&T tolerancing per industrial guidelines."
    },
    {
      id: "cert-solidworks",
      category: "Certifications",
      title: "SolidWorks Mechanical Design Associate (CSWA Prep)",
      organization: "Dassault SystÃ¨mes / University Certification",
      date: "2024 - 2025",
      icon: "award",
      description: "Certified proficiency in 3D part modeling, multi-component assemblies, drawing creation, and engineering mass calculations."
    },
    {
      id: "workshop-3d-print",
      category: "Workshops",
      title: "Advanced 3D Printing & Additive Manufacturing Workshop",
      organization: "JECRC University Innovation Hub",
      date: "2024",
      icon: "layers",
      description: "Hands-on experience in slicing parameters, infill optimization, support structures, filament properties, and post-processing."
    },
    {
      id: "competition-designathon",
      category: "Competitions",
      title: "Inter-College CAD Modeling Designathon Finalist",
      organization: "Regional Technical Symposium",
      date: "2025",
      icon: "trophy",
      description: "Recognized among top teams for rapid 3D modeling and reverse-engineering of an industrial mechanical pump under time constraints."
    },
    {
      id: "internship-placeholder",
      category: "Internships",
      title: "Mechanical Engineering Industrial Trainee / Intern",
      organization: "[Industrial Company / Firm Placeholder]",
      date: "Summer 2025 / Upcoming",
      icon: "briefcase",
      description: "Observed industrial manufacturing floor operations, assembly lines, quality inspection testing, and maintenance procedures."
    },
    {
      id: "event-techfest",
      category: "Technical Events",
      title: "JECRC University Technical Festival Coordinator",
      organization: "JECRC University Tech Committee",
      date: "2024 - 2025",
      icon: "calendar",
      description: "Organized technical events, CAD competitions, and mentored junior engineering students on 3D software workflows."
    },
    {
      id: "academic-merit",
      category: "Academic",
      title: "Dean's Academic Merit Recognition (Placeholder)",
      organization: "JECRC University Faculty of Engineering",
      date: "Academic Year 2024",
      icon: "star",
      description: "Recognized for consistent semester academic performance in fundamental engineering subjects and laboratory assessments."
    }
  ],

  // CAREER INTERESTS SECTION
  interests: [
    {
      title: "Mechanical Design",
      icon: "compass",
      description: "Translating functional requirements into robust, manufacturable physical assemblies through iterative prototyping and mechanical simulation."
    },
    {
      title: "CAD (Computer-Aided Design)",
      icon: "box",
      description: "Precision 3D solid modeling, surfacing, parametric sheet metal design, and detailed manufacturing drawings."
    },
    {
      title: "Manufacturing & Production",
      icon: "cpu",
      description: "Understanding modern machining processes, CNC milling, additive manufacturing, casting, and lean manufacturing standards."
    },
    {
      title: "Automotive Engineering",
      icon: "gauge",
      description: "Vehicle dynamics, chassis structures, transmission systems, powertrain optimization, and sustainable electric mobility."
    },
    {
      title: "Robotics & Automation",
      icon: "bot",
      description: "Kinematic linkages, sensor integration, robotic end-effectors, servo actuation, and automated industrial workflows."
    },
    {
      title: "Engineering Technology",
      icon: "settings",
      description: "Exploring state-of-the-art computational tools, materials science innovations, and IoT sensors in mechanical engineering."
    },
    {
      title: "AI in Engineering",
      icon: "sparkles",
      description: "Applying generative design algorithms, predictive maintenance models, and machine learning to optimize mechanical designs."
    }
  ],

  // RESUME HIGHLIGHT SUMMARY (For quick in-page viewer)
  resumeSummary: {
    title: "Curriculum Vitae Preview",
    lastUpdated: "Academic Session 2026",
    sections: [
      {
        heading: "Professional Profile",
        content: "B.Tech Mechanical Engineering student with strong fundamentals in design, thermodynamics, mechanics, and CAD software. Eager to contribute technical proficiency to real-world engineering teams."
      },
      {
        heading: "Primary Competencies",
        content: "CAD & AutoCAD, SolidWorks 3D Modeling, Engineering Graphics, FEA Basics, Kinematic Analysis, Technical Report Writing, Problem Solving."
      },
      {
        heading: "Education",
        content: "B.Tech Mechanical Engineering (JECRC University, Jaipur) | Class 12 PCM | Class 10."
      }
    ]
  }
};

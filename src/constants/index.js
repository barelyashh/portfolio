import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,hoops,cesium,
    hf,bny,holopin,
    clg,school,
    crypto,oop,yml,crud,dwld,onetomany,proto,
  
  } from "../assets";

  const achievements = [
    {
      title: "Upgraded legacy JavaScript code to modern ES6+ standards..",
    },
    {
      title: "eading Three.js and JS Reports teams; mentoring devs and driving feature delivery.",
    },
    {
      title: "Developed reusable Three.js rendering templates to standardize 3D setups",
    },
    {
      title: "Created Rotate By feature for glTF Exporter in Autodesk Inventor 2021.",
    },
    {
      title: "Built a 3D crane configurator using Three.js with real-time geometry updates, textures, lighting, and glTF support",
    },
    {
      title: "Acted as Scrum Master at CADT India, streamlining team workflows.",
    },
    {
      title: "Delivered UI and visualization features using Hoops, CesiumJS, and TerriaJS.",
    }
  ]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name: "three.js",
      icon: threejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Cesium",
      icon: cesium,
    },
    {
      name: "Hoops",
      icon: hoops,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
  ];


  export const javaProject = [
    {
      name: "3D-Configurator",
      description:
        "Built a web-based 3D configurator that lets users create step-by-step work instructions with animations, exploded views, annotations, material settings, custom lights, and camera viewpoints. Ideal for assembling, training, and exporting structured instructions for review.",
      tags: [
        {
          name: "three.js",
          color: "blue-text-gradient",
        },
        {
          name: "3d-configurator",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_link: "https://drive.google.com/file/d/1fQ2xPInzjP1Tp0evCL4ROcUoRTmtFVUJ/view?usp=sharing",
    },
    {
      name: "3D Viewer",
      description:
        "Developed a 3D viewer to load and display models exported from the configurator with full support for steps, animations, materials, and annotations. Enables interactive exploration without editing capabilities—perfect for review and training use.",
      tags: [
        {
          name: "JSON",
          color: "blue-text-gradient",
        },
        {
          name: "WEB",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: yml,
      source_link: "https://drive.google.com/file/d/1tNYexHGfDH5JZVZP5bukwBuLHjwIy98l/view?usp=sharing",
    },
    {
      name: "BluePrint 3D",
      description:
        "This is a customizable application built on three.js that allows users to design an interior space such as a home or apartment.",
      tags: [
        {
          name: "Vue.js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Database",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_link: "https://drive.google.com/file/d/1-4ekAzny7yFyGfVEUbBakO6b7NxvXOPh/view?usp=sharing",
    },
    {
      name: "SnapGrid",
      description:
        "Built an interactive 2D/3D layout tool to place and configure parametric bodies using snapping, grids, and transform controls. Features include drag-and-drop, category-based rules, real-time configuration, and data export, with support for both 2D and 3D views.",
      tags: [
        {
          name: "three.js",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "web",
          color: "pink-text-gradient",
        },
      ],
      image: dwld,
      source_link: "https://drive.google.com/file/d/1W_MZegKTKecJVaJJmVB7zow7NAuFzPMn/view?usp=sharing",
    },
    {
      name: "Model IO",
      description:
        "Developed a real-time 3D customization tool allowing users to modify model parts using parametric inputs (e.g., dimensions, features, components). Users can preview changes instantly, switch parts, and save configurations for ordering",
      tags: [
        {
          name: "JS reports",
          color: "blue-text-gradient",
        },
        {
          name: "Inventor",
          color: "green-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
      ],
      image: onetomany,
      source_link: "https://drive.google.com/drive/folders/1O9OlMkyi-9YR3dxhu6Hcuv6rJLA8p03W?usp=sharing",
    },
    {
      name: "Rendering Templates",
      description:
        "Realtime Color and Texture Configurator on 3D Model Using Three.JS",
      tags: [
        {
          name: "JSON",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
        {
          name: "coding",
          color: "pink-text-gradient",
        },
      ],
      image: oop,
      source_link: "https://drive.google.com/file/d/1vPY5Q4_E8zisJyyvmbKkhzSvkn7cC-qy/view?usp=sharing",
    },
  ];

  
  const experiences = [
    {
      title: " Senior Software Developer",
      company_name: "Cad+t Solutions PVT LTD",
      icon: bny,
      iconBg: "#383E56",
      date: "Nov-2023 - Present",
      link: "",
      points: [
        "Implemented path tracing to enable detailed, physically-based rendering for enhanced visual accuracy",
        "Developed accurate measurement functionality,HDR environments, predefined material templates, and material UI for existing web software, improving precision in data representation",
        "Implemented partial loading and rendering of objects in the scene, optimizing performance and efficiency",
        "Lead the Three.js and JS Reports team, overseeing development efforts and ensuring high-quality project outcomes",
      ],
      link: "https://drive.google.com/drive/folders/13FK-YewFDv8ALmzKglPBmb6Z3oenuYoP",
    },
    {
      title: "Software Developer",
      company_name: "Prototech Solutions PVT LTD",
      icon: proto,
      iconBg: "#383E56",
      date: "May 2020 - Nov 2023",
      link: "",
      points: [
        "Successfully completed a 3D based web configurator using glTF files for a crane manufacturing organisation with options to update geometry, create realistic scene with texture, lights, reflections, environment map etc using Three.js",
        "Worked on several popular javascript libraries and SDK’s which includes: Three.js, Hoops communicator,CesiumJS, TerriaJS",
        "Developed Animation timeline with ability to view, edit, delete timeframes of animation",
        "Implemented programs in c++ to write custom step files using Open cascade technology",
        "Developed and Implemented Three js Rendering Templates",
        "Implemented clipping planes for complex geometries and positioning them using point parameters which is highly used in medical and surgery field to precisely manipulate intricate shapes",
        " Created UI and developed rotate by feature for gLTF Exporter for Inventor 2021"
      ],
      link: "https://github.com/codewithrathi",
    },
  ];
  
  const educations = [
    {
      degree: "Central Development of Advanced Computing (CDAC)",
      branch:
        "Computer Science",
      marks:
        "CGPA : 7.4 / 10",
      name: "Mumbai Educational Trust (MET BANDRA)",
      year: "(2019 - 2020)",
      image: clg,
    },
    {
      degree:
        "Bachelor of Engineering",
      branch : "Computer Science",
      marks:
        "CGPA : 7.4 / 10",
      name: "Institute of Technology and Management (ITM Universe)",
      year: "(2015 - 2019)",
      image: school,
    },
    {
      degree:
        "12th Grade",
      branch: "Science",
      marks:
        "CGPA : 7 / 10",
      name: "Vikram Higher Secondary School (Bhopal)",
      year: "2015",
      image: school,
    },
  ];
  
  export {  technologies, experiences, educations, achievements };

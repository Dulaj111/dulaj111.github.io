import blockDiagram from './images/braille-printer/block-diagram.png';
import circuitDiagram from './images/braille-printer/circuit-diagram.png';
import mechanicalDesign from './images/braille-printer/mechanical.png';
import pcbDesign from './images/braille-printer/pcb-design.png';
export const projectsData = [
    {
  id: "IOT",
  title: "Automated Braille Printer ('Touch the Words')",
  category: "IoT / Embedded Systems",
  year: "2025",
  description: "An IoT-enabled Braille printing system converting PDF, voice, and manual text into embossed Braille. Features dual ESP32 controllers, custom PCB architecture, and a wireless web interface.",
  techStack: ["Microcontrollers", "C++ / Arduino", "Custom PCB Design","Hardware Automation"],
  longdescription: "The Braille Printer ('Touch the Words') is a 1st year microcontroller based team project created to solve the high cost and accessibility barriers of traditional Braille equipment for visually impaired students. Designed to streamline inclusive education, the system allows educators to convert digital PDF documents, typed text, or voice input directly into physical embossed Braille through a responsive Wi-Fi web interface.The project utilizes a dual-microcontroller architecture combining an ESP32-S3 UNO for web hosting and translation with an ESP32 for mechanical execution. The system features a custom PCB driving NEMA 17 and 28BYJ-48 stepper motors, dual solenoid actuators, and sensor integration (Hall Effect, IR, and Limit switches) to ensure precise, automated embossing.",
  images: [
    { src: blockDiagram, label: "Block diagram" },
    { src: circuitDiagram, label: "Circuit diagram" },
    { src: mechanicalDesign, label: "Mechanical design" },
    { src: pcbDesign, label: "PCB design" },
  ],
},
    {
    id: "portfolio-site",
    title: "My Portfolio",
    category: "Web App",
    year: "2026",
    description: "Me project eka gana short introduction ekak.",
    techStack: ["React", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/oyage-username/project",
    liveUrl: "https://example.com",
  }
];
import Osiz from "../assets/osiz.png";
import ActiveDirectory from "../assets/activeDirectory.png";
import OrderEasy from "../assets/ordereasy.png";
import DisneyPlus from "../assets/disney.png";
import fim from "../assets/fim.png";

export const PROFILE_CONTENT = `Network Engineer with a strong passion for cybersecurity and solid system administration experience. Skilled in designing, securing, and maintaining IT infrastructures using technologies such as FortiGate, Cisco, Kali Linux, Windows Server, Active Directory, RHEL, Wazuh (SIEM), EVE-NG, and Docker.
Focused on network security, system hardening, threat detection, System Automation,containerazation and optimizing system performance while continuously learning and adapting to emerging technologies and threats.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "05/2024 - 08/2025",
    role: "Field Technician",
    company: "Ericsson",
    companyUrl: "https://www.ericsson.com/",
    description: `At Ericsson, I supported telecom network deployment and modernization projects for MTN Rwanda and Telma Madagascar. My work focused on installing and configuring network infrastructure including antennas, RRUs for 5G/4G/3G, baseband units, and backhaul routers, as well as fiber optic installation. I also provided remote support to the core network, performed network coverage testing, performance monitoring using itx, and handled alarm management to ensure network reliability and service efficiency.`,
    technologies: [
      "5GNR",
      "BaseBand Unit",
      "ROUTERS",
      "Remote Radio Unit",
    ],
  },
  {
    year: "05/2023 - 04/2023",
    role: "IT Support",
    company: "Pyramid Pharma Ltd",
    companyUrl: "https://www.pyramidpharma.com",
    description: `Managed end-user support for Windows, macOS, and Linux systems, resolving hardware, software, and network issues. Administered Active Directory, GPOs, Windows/Linux servers, file shares, DNS, and DHCP. Led LAN/WAN and Wi-Fi troubleshooting, implemented end-user security systems, and enforced cybersecurity best practices. Performed system log analysis, file integration monitoring, and application support to ensure service reliability.`,
    technologies: [
      "Windows Server",
      "Wazuh",
      "Linux",
      "Gpo",
      "NFS",
    ],
  },
  {
    year: "06/2022 - 02/2023",
    role: "Web Develop Intern",
    company: "KLAB",
    companyUrl: "http://klab.rw/",
    description: `During my internship at kLab, I contributed to real-world software development projects within a collaborative team environment. I worked on building responsive user interfaces using React.js and developed backend services using Laravel (PHP), where I designed, implemented, and documented RESTful APIs using Swagger/OpenAPI standards. I also used Git for source code management, including version control, branching, and collaboration workflows, and successfully completed my technical training with certification.`,
    technologies: ["React JS", "Laravel", "TailwindCSS", "Mysql","Git"],
  },
];

export const PROJECTS = [
  {
    title: "Active Directory - Administration",
    image: ActiveDirectory,
    description:
      "Built a virtualized Windows Server environment to replicate an enterprise domain infrastructure. Installed and configured Active Directory Domain Services (AD DS) for centralized identity and access management. Created and structured Organizational Units (OUs), users, and security groups, applying role-based access control (RBAC). Implemented and managed Group Policy Objects (GPOs) for security hardening, password policies, software restrictions, and desktop configurations. Configured DNS for domain name resolution and DHCP for automated IP assignment and scope management. Integrated Windows client machines into the domain, validated authentication workflows, and performed troubleshooting on replication, DNS resolution, and policy application using Event Viewer and Group Policy Management tools.",
    technologies: ["AD DS", "GPO", "DNS","DHCP"],
    companyUrl: "https://github.com/Mugemajames/MyCyberSecuritySkills",
    webUrl: "https://github.com/Mugemajames/MyCyberSecuritySkills",
    androidUrl: "",
    iosUrl: "",
    projectName: "AD DS REPOSITORY",
    isMobileApp: true,
    isReleased: false,
  },
  {
    title: "File Integration Monitor - Wazuh (SIEM)",
    image: fim,
    description:
      "Led the development of reusable UI components and completely revamped the Mobile Store Progressive Web App (PWA) for enhanced performance and scalability. Utilized React Native Web to ensure seamless functionality across devices. Focused on optimizing the app for better speed, responsiveness, and user experience. The improvements significantly boosted app performance and scalability for future updates.",
    technologies: ["WAZUH SIEM", "Ubuntu", "Windows10","Vmware","VirtualBox"],
    companyUrl: "https://github.com/Mugemajames/MyCyberSecuritySkills",
    webUrl: "https://github.com/Mugemajames/MyCyberSecuritySkills",
    androidUrl: "",
    iosUrl: "",
    projectName: "File Integrate Monitor",
    isMobileApp: false,
    isReleased: true,
  },
  // {
  //   title: "Docker Deployment - Containerization",
  //   image: OrderEasy,
  //   description:
  //     "Developed a cross-platform online ordering app integrated with the GoFrugal POS system. Built reusable UI components and implemented key features like Offers, Referral Programs, and Analytics to boost user engagement and improve reporting. The app enhanced overall customer experience and provided valuable insights for better decision-making.",
  //   technologies: ["React Native", "React Native Web", "Mobx", "Jenkins"],
  //   companyUrl: "https://www.gofrugal.com/online-ordering-app/",
  //   webUrl: "https://amulgreen.ordereasyapp.com/",
  //   androidUrl:
  //     "https://play.google.com/store/apps/details?id=com.gofrugal.ordereasy734023&hl=en_IN",
  //   iosUrl: "https://apps.apple.com/in/app/amul-green/id1602359988",
  //   projectName: "OrderEasy",
  //   isMobileApp: true,
  //   isReleased: true,
  // },
];

export const CONTACT = {
  address: "Kigali, Rwanda",
  phoneNo: "+250 782 176 661 5",
  email: "mugemajames2000@gmail.com",
};

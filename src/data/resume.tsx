import { Icons } from "@/components/icons";
import {
  Home,
  Notebook,
  Code2,
  FileText,
  Download,
  Pencil,
  FolderOpen,
  Cloud,
  LayoutDashboard,
  Database,
  GitBranch,
} from "lucide-react";
import { ACTIVE_PDF } from "@/data/resume-versions";
import { PHP } from "@/components/ui/svgs/php";
import { JavaScript } from "@/components/ui/svgs/javaScript";
import { RestApi } from "@/components/ui/svgs/api";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Python } from "@/components/ui/svgs/python";
import { Django } from "@/components/ui/svgs/django";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { MySQL } from "@/components/ui/svgs/mySQL";
import { MongoDB } from "@/components/ui/svgs/mongoDB";
import { Git } from "@/components/ui/svgs/git";

export const DATA = {
  name: "Virsing Vasava",
  initials: "VV",
  url: "https://www.linkedin.com/in/virsing-vasava/",
  location: "Ahmedabad, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/Ahmedabad",
  description:
    "Full Stack Developer specializing in Laravel, Python, Django, and scalable backend systems.",
  summary:
    "Experienced Full Stack Developer with 7+ years of expertise in backend development using PHP, Laravel, Python, and Django. Skilled in building scalable web applications, REST APIs, eCommerce platforms, and business management systems. Proficient in JavaScript, MySQL, and MongoDB with a strong focus on clean architecture, maintainable code, and high-performance applications. Currently expanding expertise in Python and Django backend development while seeking remote and international software engineering opportunities.",
  avatarUrl: "/me/Me01.png",

  skills: [
    { name: "PHP", icon: PHP },
    { name: "Laravel", icon: Laravel },
    { name: "Python", icon: Python },
    { name: "Django", icon: Django },
    { name: "JavaScript", icon: JavaScript },
    // { name: "Node.js", icon: Nodejs },
    { name: "Filament", icon: LayoutDashboard },
    { name: "Statamic CMS", icon: FileText },
    { name: "MySQL", icon: MySQL },
    { name: "MongoDB", icon: MongoDB },
    { name: "REST APIs", icon: RestApi },
    { name: "Docker", icon: Docker },
    { name: "Git (GitHub, GitLab)", icon: Git },
    { name: "Bitbucket", icon: GitBranch },
    { name: "AWS (EC2, S3, EB, CloudFront)", icon: Cloud },
  ],

  navbar: [
    { href: "/", icon: Home, label: "Home" },
    { href: "/projects", icon: Code2, label: "Projects" },
    { href: "/blog", icon: FileText, label: "Blog" },
    { href: "/notes", icon: Pencil, label: "Notes" },
    { href: "/resume", icon: FolderOpen, label: "Hire Me" },
  ],
  contact: {
    email: "virsing.vasava255@gmail.com",
    tel: "+91 9638601537",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/virsingvasava",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/virsing-vasava/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Email",
        url: "mailto:virsing.vasava255@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Acquaint Softtech Private Limited",
      href: "https://www.linkedin.com/company/13280481/",
      badges: ["Full-time"],
      location: "Ahmedabad, Gujarat, India",
      title: "Software Engineer",
      logoUrl: "/images/acquaint_softtech_logo.jpeg", // replace with actual logo if available
      start: "May 2025",
      end: "Apr 2026",
      description: "Software Engineer working with Statamic, Filament (Laravel UI Framework), and other technologies.",
    },
    {
      company: "DevRepublic India",
      href: "https://www.linkedin.com/company/80116427/",
      badges: ["Full-time"],
      location: "Ahmedabad, Gujarat, India",
      title: "Software Engineer",
      logoUrl: "/images/devrepublic_india_logo.jpeg",
      start: "Mar 2023",
      end: "Feb 2025",
      description: "Software Engineer specializing in Laravel, MySQL, and related web technologies.",
    },
    {
      company: "Seven Square Technosoft",
      href: "https://www.linkedin.com/company/75524975/",
      badges: ["Full-time"],
      location: "Ahmedabad, Gujarat, India",
      title: "Software Engineer",
      logoUrl: "/images/seven_square_technosoft_logo.jpeg",
      start: "Feb 2021",
      end: "Feb 2023",
      description: "Software Engineer working with Laravel, MySQL, and other backend technologies.",
    },
    {
      company: "Lembits Technolab Pvt. Ltd.",
      href: "https://www.linkedin.com/company/13697728/",
      badges: ["Full-time"],
      location: "Ahmedabad, Gujarat, India",
      title: "PHP Developer",
      logoUrl: "/images/lembits_technolab_logo.jpeg",
      start: "Oct 2019",
      end: "Oct 2020",
      description: "PHP Developer experienced with CodeIgniter, Yii, and other PHP frameworks.",
    },
    {
      company: "Kirti Technosoft",
      href: "https://www.linkedin.com/company/7789664/",
      badges: ["Full-time"],
      location: "Ahmedabad, Gujarat, India",
      title: "Web Developer",
      logoUrl: "/images/kirti_technosoft.jpeg",
      start: "Jul 2018",
      end: "Sep 2019",
      description: "Web Developer working with PHP, WordPress, and frontend/backend technologies.",
    },
  ],
  education: [
    {
      school: "Dharmsinh Desai University",
      href: "https://www.ddu.ac.in/",
      degree: "Master of Computer Applications - MCA, Computer Software Engineering",
      logoUrl: "/images/DDU.jpeg", // you can replace with actual logo
      start: "2016",
      end: "2018",
    },
    {
      school: "St. Xavier's College",
      href: "https://sxca.edu.in/",
      degree: "Bachelor Of Computer Application - BCA, Computer Science",
      logoUrl: "/images/XICA.jpeg",
      start: "2012",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "Modon Property Management",
      featured: true,
      category: "CMS",
      href: "https://property-management-dev-cms.modon-built-different.com/",
      dates: "Feb 2026 - Present",
      active: true,
      description:
        "Developed and maintained a property management CMS platform with dynamic content management, admin dashboards, and scalable backend architecture using Laravel and Statamic CMS.",
      technologies: [
        "Laravel",
        "Statamic",
        "Livewire",
        "MySQL",
        "PHP",
        'Statamic CMS',
      ],
      links: [
        {
          type: "Website",
          href: "https://property-management-dev-cms.modon-built-different.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/modon.webm",
    },
    {
      title: "Madico",
      featured: true,
      category: "CMS",
      href: "https://madico.com/",
      dates: "Jun 2025 - Oct 2025",
      active: true,
      description:
        "Contributed to the development and maintenance of a high-performance corporate website with custom CMS features, responsive UI components, and backend functionality for product and content management.",
      technologies: [
        "Laravel",
        "PHP",
        "JavaScript",
        "MySQL",
        "Bootstrap",
        'Statamic CMS',
      ],
      links: [
        {
          type: "Website",
          href: "https://madico.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/madico.webm",
    },
    {
      title: "Secret Atlas",
      featured: false,
      category: "Web Apps",
      href: "https://secretatlas.com/",
      dates: "Aug 2025 - Dec 2025",
      active: true,
      description:
        "Worked on backend development and platform enhancements for a luxury expedition travel platform, including booking workflows, content management, and scalable web features.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "REST API",
        'Statamic CMS',
      ],
      links: [
        {
          type: "Website",
          href: "https://secretatlas.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: '/videos/secretatlas.webm'
    },
    {
      title: "Choviet102 eCommerce Platform",
      featured: false,
      category: "eCommerce",
      href: "https://www.choviet102.com/",
      dates: "May 2025 - July 2025",
      active: true,
      description:
        "Developing and maintaining a multi-vendor eCommerce platform with seller management, order processing, refund handling, proposal systems, and payment integrations.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "jQuery",
        "Bootstrap",
        "REST API",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.choviet102.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/choviet102.webm"
    },
    {
      title: "Drukwerkmax",
      featured: false,
      category: "eCommerce",
      href: "https://www.drukwerkmax.nl/",
      dates: "March 2023 - Jan 2025",
      active: true,
      description:
        "Worked on a large-scale eCommerce printing platform with custom product management, order workflows, payment integration, and responsive frontend development.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "Bootstrap",
        "REST API",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.drukwerkmax.nl/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "videos/drukwerkmax.webm",
    },
    {
      title: "CountMee",
      featured: false,
      category: "SaaS",
      href: "https://countmee.in/",
      dates: "Nov 2020 - Feb 2023",
      active: true,
      description:
        "Developed and maintained a business and accounting management platform with invoice management, reporting modules, authentication, and scalable backend APIs.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "jQuery",
        "Bootstrap",
        "REST API",
      ],
      links: [
        {
          type: "Website",
          href: "https://countmee.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/countmee.webm",
    },
  ],
  notes: [
    {
      category: "Backend Development",
      items: [
        {
          title: "Laravel Advanced Architecture Patterns",
          href: "#",
          internal: false,
        },
        {
          title: "Building Scalable APIs with Django Rest Framework",
          href: "/blog/building-apis-with-django-rest-framework",
          internal: true,
        },
        {
          title: "Mastering MySQL Indexing for Faster Queries",
          href: "/blog/mastering-mysql-indexing",
          internal: true,
        },
      ],
    },
    {
      category: "Cloud Architecture",
      items: [
        {
          title: "AWS EC2 Deployment Guide",
          href: "/blog/deploying-django-aws-ec2",
          internal: true,
        },
        {
          title: "Managing Media Files with AWS S3",
          href: "/blog/managing-media-aws-s3-django",
          internal: true,
        },
        {
          title: "Dockerizing Applications for Production",
          href: "/blog/dockerizing-django-applications",
          internal: true,
        },
      ],
    },
  ],
  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    mlh: string;
    links: {
      title: string;
      icon?: React.ReactNode;
      href: string;
    }[];
  }[],
} as const;

export const RESUME_CONFIG = {
    laravel: false,
    django: false, // Python base
    europa: true,
} as const;

export type ResumeMode = keyof typeof RESUME_CONFIG;
export const ACTIVE_MODE = (Object.entries(RESUME_CONFIG).find(([_, isActive]) => isActive)?.[0] || "django") as ResumeMode;

export const RESUME_PDF_MAP: Record<ResumeMode, string> = {
    laravel: "/resume_pdf/Virsing_Vasava_Laravel_Developer_6+_Years.pdf",
    django: "/resume_pdf/Virsing_Vasava _ Python Backend_Developer.pdf",
    europa: "/resume_pdf/Virsing_Vasava_EU.pdf",
};

export const ACTIVE_PDF = RESUME_PDF_MAP[ACTIVE_MODE];

export const RESUME_VERSIONS = {
    laravel: {
        title: "Senior Laravel Backend Developer",
        summary: "Senior Laravel Backend Developer with 6.5+ years of experience in building scalable web applications and RESTful APIs using PHP and Laravel. Strong expertise in MVC architecture, database design, and backend system optimization. Experienced in developing eCommerce, logistics, and enterprise applications. Passionate about clean code, performance optimization, and modern backend best practices.",
        skills: [
            { label: "Languages", value: "PHP, JavaScript, Python" },
            { label: "Backend Frameworks", value: "Laravel, CodeIgniter, Django, Flask" },
            { label: "Laravel Ecosystem", value: "Filament (Admin Panel), Livewire, Statamic CMS, Blade" },
            { label: "Databases", value: "MySQL, PostgreSQL, MongoDB" },
            { label: "Backend Concepts", value: "REST APIs, CRUD Operations, MVC Architecture, Authentication & Authorization" },
            { label: "Tools & Platforms", value: "Git, GitHub, Linux (Ubuntu), Postman, Docker" },
            { label: "Cloud", value: "AWS (EC2, S3), Azure" },
        ],
    },
    django: {
        title: "Senior Python Django Developer",
        summary: "Senior Python Django Developer with 6.5+ years of experience in backend development, specializing in building scalable web applications and high-performance APIs using Python and Django. Expert in designing robust backend architectures, optimizing database performance, and implementing complex business logic. Experienced in integrating third-party services and ensuring application security.",
        skills: [
            { label: "Languages", value: "Python, PHP, JavaScript" },
            { label: "Backend Frameworks", value: "Django, Flask, Laravel, CodeIgniter" },
            { label: "Django Ecosystem", value: "Django Rest Framework (DRF), Celery, Redis, Django Templates" },
            { label: "Databases", value: "PostgreSQL, MySQL, MongoDB" },
            { label: "Backend Concepts", value: "REST APIs, Asynchronous Tasks, MVC/MVT Architecture, Security Best Practices" },
            { label: "Tools & Platforms", value: "Git, GitHub, Linux (Ubuntu), Postman, Docker" },
            { label: "Cloud", value: "AWS (EC2, S3), Azure" },
        ],
    },
    europa: {
        title: "Senior Software Engineer",
        summary: "Senior Software Engineer with extensive experience across multiple technology stacks including PHP/Laravel and Python/Django. Proven track record in European and international team environments, delivering scalable backend systems, RESTful APIs, and comprehensive enterprise solutions adhering to EU data standards.",
        skills: [
            { label: "Languages", value: "PHP, Python, JavaScript" },
            { label: "Frameworks", value: "Laravel, Django, Node.js" },
            { label: "Databases", value: "MySQL, PostgreSQL, MongoDB" },
            { label: "Architecture", value: "REST APIs, Microservices, MVC" },
            { label: "Tools & DevOps", value: "Git, Docker, Linux, CI/CD" },
            { label: "Cloud & Hosting", value: "AWS, Azure, VPS" },
        ],
    }
};

export const COMMON_DATA = {
    name: "Virsing Vasava",
    email: "virsing.vasava255@gmail.com",
    phone: "+91 9638601537",
    linkedin: "https://www.linkedin.com/in/virsing-vasava",
    github: "https://github.com/virsingvasava",
    location: "Ahmedabad, Gujarat, India",
    experience: [
        {
            title: "Senior Software Engineer",
            company: "Acquaint Softtech Private Limited, Gujarat, India",
            period: "May 2025 – Present",
            achievements: [
                "Developing scalable backend systems using Laravel (PHP) and modern architecture",
                "Admin Panel Development (Filament), CMS Development (Statamic), Reactive Components (Livewire)",
                "Building RESTful APIs and optimizing performance using Eloquent ORM and caching",
                "Implementing authentication & authorization (JWT / Laravel Sanctum)",
                "Developing admin dashboards using Filament for internal tools",
                "Building CMS-driven features using Statamic CMS",
                "Implementing dynamic UI components using Livewire"
            ]
        },
        {
            title: "Senior Software Engineer",
            company: "DevRepublic, Gujarat, India",
            period: "Mar 2023 – Jan 2025",
            achievements: [
                "Developed and maintained backend systems for international clients",
                "Built REST APIs and backend services for online printing platform (DrukwerkMAX)",
                "Implemented backend features for employee gifting and engagement platforms",
                "Handled database design, integrations, and backend performance optimization"
            ]
        },
        {
            title: "Senior Software Engineer",
            company: "Seven Square Technosoft Pvt. Ltd, Gujarat, India",
            period: "Nov 2020 – Feb 2023",
            achievements: [
                "Developed secure backend systems for cyber awareness and safety platforms (ISEA)",
                "Built backend solutions for logistics and same-day delivery platforms (CountMee)",
                "Designed APIs, authentication flows, and data-driven features"
            ]
        },
        {
            title: "Backend Developer",
            company: "Lembits Technolab Pvt. Ltd., Gujarat, India",
            period: "Oct 2019 – Oct 2020",
            achievements: [
                "Built backend applications using MVC architecture and REST APIs",
                "Worked on backend integrations and database-driven features"
            ]
        },
        {
            title: "Junior Backend Developer",
            company: "Kirti Technologies Pvt. Ltd., Gujarat, India",
            period: "Jul 2018 – Sep 2019",
            achievements: [
                "Worked on backend development using PHP and MySQL",
                "Developed and maintained CMS-based backend systems"
            ]
        }
    ],
    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            school: "Dharmsinh Desai Institute of Technology, Gujarat",
            period: "2016 – 2018"
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            school: "Xavier's Institute of Computer Application, Gujarat",
            period: "2012 – 2015"
        }
    ],
    personal: {
        dob: "25.05.1989",
        languages: "English, Hindi, Gujarati",
        residence: "Ahmedabad, Gujarat, India"
    }
};

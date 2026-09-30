import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import {
    ArrowLeft, Globe, MapPin, Briefcase, Calendar,
    Cpu, Code2, Heart, ExternalLink, Linkedin, GraduationCap, User, Star, Building2, Crown, Database, Cloud, Terminal, Users, Ruler
} from "lucide-react";

export const metadata = {
    title: "Virsing Vasava | Senior Full-Stack Software Engineer Profile",
    description: "Official professional profile and digital card of Virsing Vasava, Senior Software Engineer and Full-Stack Specialist based in Dubai, UAE. Expert in Laravel, PHP, Python, and Next.js.",
    keywords: ["Virsing Vasava", "Senior Software Engineer Dubai", "Full Stack Developer UAE", "Laravel Developer", "Virsing Vasava Profile"],
    authors: [{ name: "Virsing Vasava", url: "https://virsing.com" }],
    openGraph: {
        title: "Virsing Vasava | Senior Software Engineer",
        description: "Explore the professional background, skills, and projects of Virsing Vasava.",
        url: "https://virsing.com/profile",
        siteName: "Virsing Vasava Portfolio",
        images: [
            {
                url: "https://virsing.com/me/virsing-vasava.jpg",
                width: 800,
                height: 600,
                alt: "Virsing Vasava",
            },
        ],
        locale: "en_US",
        type: "profile",
    },
};

export default function ProfileCardPage() {
    return (
        <main className="min-h-screen bg-[#090b10] text-slate-100 py-10 px-4 flex flex-col items-center font-sans selection:bg-amber-500 selection:text-black rounded-2xl">

            {/* Back button header */}
            <div className="w-full max-w-md mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Portfolio
                </Link>
            </div>

            {/* Profile Card Container */}
            <div className="w-full max-w-md bg-[#10141d] border border-amber-500/30 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.15)] overflow-hidden">

                {/* Top Header Section */}
                <div className="relative pt-8 pb-6 px-6 bg-gradient-to-b from-[#182030] to-[#10141d] text-center border-b border-slate-800">
                    <div className="flex justify-center items-center gap-1 text-amber-400 mb-1">
                        <Crown className="w-5 h-5 fill-amber-400" />
                    </div>
                    <h1 className="text-2xl font-black text-amber-400 tracking-wider uppercase drop-shadow-md">
                        {DATA.name}
                    </h1>
                    <p className="text-[11px] text-slate-400 tracking-widest uppercase mt-1 font-semibold">
                        Senior Software Engineer • Full-Stack Specialist
                    </p>

                    {/* Avatar Image Frame */}
                    <div className="relative w-36 h-44 mx-auto mt-5 rounded-xl overflow-hidden border-2 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)] bg-slate-900">
                        <Image
                            src="/me/virsing-vasava.jpg"
                            alt={DATA.name}
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>

                {/* Detailed Attributes List */}
                <div className="p-5 divide-y divide-slate-800/80 text-xs sm:text-sm">

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <User className="w-4 h-4 text-amber-400 shrink-0" /> Full Name
                        </span>
                        <span className="font-semibold text-slate-100 text-right">Virsingbhai Chandubhai Vasava</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Star className="w-4 h-4 text-amber-400 shrink-0" /> Nickname
                        </span>
                        <span className="font-semibold text-amber-400 text-right">Veer, Viren</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-amber-400 shrink-0" /> Born
                        </span>
                        <span className="font-semibold text-blue-400 text-right">May 25, 1989</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-amber-400 shrink-0" /> Birth Place
                        </span>
                        <span className="font-semibold text-slate-200 text-right">Mathasar, Gujarat, India - 393040</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Ruler className="w-4 h-4 text-amber-400 shrink-0" /> Height
                        </span>
                        <span className="font-semibold text-slate-200 text-right">5 feet 9 inches (5.9)</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Users className="w-4 h-4 text-amber-400 shrink-0" /> Parents
                        </span>
                        <span className="font-semibold text-slate-200 text-right">Chandubhai L. Vasava & Jamna Vasava</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-amber-400 shrink-0" /> Spouse
                        </span>
                        <span className="font-semibold text-slate-200 text-right">Lalita Vasava</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Users className="w-4 h-4 text-amber-400 shrink-0" /> Children
                        </span>
                        <span className="font-semibold text-slate-200 text-right">Son – Agastya Vasava</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" /> Edu. Qualification
                        </span>
                        <span className="font-semibold text-emerald-400 text-right">MCA & BCA</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-amber-400 shrink-0" /> Organization
                        </span>
                        <span className="font-semibold text-slate-200 text-right">WH International Group FZE</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-amber-400 shrink-0" /> Location
                        </span>
                        <span className="font-semibold text-slate-200 text-right">Deira, Dubai, UAE</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-amber-400 shrink-0" /> Profession
                        </span>
                        <span className="font-semibold text-amber-400 text-right">Senior Software Engineer</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-amber-400 shrink-0" /> Languages
                        </span>
                        <span className="font-semibold text-slate-200 text-right">PHP, JavaScript, Python</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-amber-400 shrink-0" /> Frameworks
                        </span>
                        <span className="font-semibold text-slate-200 text-right">Laravel, CodeIgniter, Django, Flask</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Code2 className="w-4 h-4 text-amber-400 shrink-0" /> Ecosystem
                        </span>
                        <span className="font-semibold text-slate-200 text-right">Filament, Statamic CMS, Wordpress</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Database className="w-4 h-4 text-amber-400 shrink-0" /> Databases & DevOps
                        </span>
                        <span className="font-semibold text-slate-200 text-right">MySQL, PostgreSQL, MongoDB, Docker</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Cloud className="w-4 h-4 text-amber-400 shrink-0" /> Cloud Services
                        </span>
                        <span className="font-semibold text-slate-200 text-right">AWS (EC2, EBS, RDS, VPC, CloudFront, S3, IAM), Azure</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Globe className="w-4 h-4 text-amber-400 shrink-0" /> Spoken Languages
                        </span>
                        <span className="font-semibold text-slate-200 text-right">English, Hindi, Gujarati, German (Learning)</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-amber-400 shrink-0" /> Personal Hobbies
                        </span>
                        <span className="font-semibold text-slate-200 text-right">Reading, Traveling, Cultural Exploration</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Linkedin className="w-4 h-4 text-amber-400 shrink-0" /> Profiles
                        </span>
                        <div className="flex items-center gap-3 font-semibold">
                            <a href="https://www.linkedin.com/in/virsing-vasava/" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline inline-flex items-center gap-0.5">
                                LinkedIn <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://github.com/virsingvasava" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline inline-flex items-center gap-0.5">
                                GitHub <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Gold Highlight Box */}
                <div className="p-3 bg-gradient-to-r from-amber-950/40 via-amber-900/30 to-amber-950/40 border-t border-amber-500/40 text-center m-4 rounded-xl shadow-inner">
                    <a
                        href={DATA.url}
                        className="text-xs font-black tracking-widest text-amber-400 uppercase hover:text-amber-300 transition-colors flex items-center justify-center gap-2"
                    >
                        <span>🌐 VIRSING.COM</span>
                    </a>
                </div>

            </div>
        </main>
    );
}

<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
        __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Virsing Vasava",
            "jobTitle": "Senior Software Engineer",
            "url": "https://virsing.com/profile",
            "sameAs": [
                "https://www.linkedin.com/in/virsing-vasava/",
                "https://github.com/virsingvasava"
            ],
            "worksFor": {
                "@type": "Organization",
                "name": "WH International Group FZE"
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "UAE"
            }
        })
    }}
/>
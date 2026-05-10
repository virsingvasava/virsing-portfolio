"use client";

import { COMMON_DATA, RESUME_VERSIONS, ResumeMode } from "@/data/resume-versions";
import { Mail, Phone, Linkedin, MapPin, Github, Globe } from "lucide-react";

interface ResumeContentProps {
    mode?: ResumeMode;
}

export default function ResumeContent({ mode = "laravel" }: ResumeContentProps) {
    const content = RESUME_VERSIONS[mode];

    return (
        <div className="bg-card text-card-foreground font-sans leading-relaxed max-w-[820px] mx-auto p-8 shadow-lg print:shadow-none print:p-0 transition-all duration-300 print:bg-white print:text-black">
            {/* HEADER */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <div className="shrink-0">
                    <img
                        src="/me/Me01.png"
                        alt={COMMON_DATA.name}
                        className="w-[100px] h-[100px] rounded-md object-cover bg-transparent"
                    />
                </div>

                <div className="text-center sm:text-left flex-1">
                    <h1 className="text-[26px] font-bold text-primary print:text-[#1f3a8a] leading-tight mb-1">{COMMON_DATA.name}</h1>
                    <div className="text-[15px] text-muted-foreground print:text-[#444] font-medium mb-3">{content.title}</div>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-[13.5px]">
                        <div className="flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-primary print:text-[#1f3a8a]" />
                            <span>{COMMON_DATA.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-primary print:text-[#1f3a8a]" />
                            <span>{COMMON_DATA.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin className="w-3.5 h-3.5 text-primary print:text-[#1f3a8a]" />
                            <a href={COMMON_DATA.linkedin} target="_blank" className="text-primary print:text-[#1a73e8] hover:underline">LinkedIn</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-3.5 h-3.5 text-primary print:text-[#1f3a8a]" />
                            <a href={COMMON_DATA.website} target="_blank" className="text-primary print:text-[#1a73e8] hover:underline">virsing.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-t-2 border-border print:border-gray-100 my-6" />

            {/* SUMMARY */}
            <section className="mb-6">
                <h2 className="text-[14px] text-primary print:text-[#1f3a8a] border-b-2 border-border print:border-gray-100 pb-1 mb-3 uppercase tracking-wider font-semibold">Summary</h2>
                <p className="text-[13.5px] leading-relaxed">
                    {content.summary}
                </p>
            </section>

            {/* TECHNICAL SKILLS */}
            <section className="mb-6">
                <h2 className="text-[14px] text-primary print:text-[#1f3a8a] border-b-2 border-border print:border-gray-100 pb-1 mb-3 uppercase tracking-wider font-semibold">Technical Skills</h2>
                <div className="space-y-1.5">
                    {content.skills.map((skill, index) => (
                        <div key={index} className="text-[13.5px] flex flex-col sm:flex-row sm:gap-2">
                            <strong className="sm:w-[190px] shrink-0 font-semibold print:text-[#374151]">{skill.label}</strong>
                            <span className="text-muted-foreground print:text-black">{skill.value}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* WORK EXPERIENCE */}
            <section className="mb-6">
                <h2 className="text-[14px] text-primary print:text-[#1f3a8a] border-b-2 border-border print:border-gray-100 pb-1 mb-3 uppercase tracking-wider font-semibold">Work Experience</h2>
                <div className="space-y-5">
                    {COMMON_DATA.experience.map((job, index) => (
                        <div key={index} className="break-inside-avoid">
                            <div className="font-semibold text-[14px] mb-0.5">{job.title}</div>
                            <div className="text-[13px] text-muted-foreground print:text-[#4b5563] mb-2">{job.company} | {job.period}</div>
                            <ul className="list-none m-0 p-0 space-y-1.5">
                                {job.achievements.map((achievement, i) => (
                                    <li key={i} className="text-[13.5px] text-muted-foreground print:text-black relative pl-4 before:content-['•'] before:text-primary print:before:text-[#1f3a8a] before:absolute before:left-0">
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* QUALIFICATION */}
            <section className="mb-6">
                <h2 className="text-[14px] text-primary print:text-[#1f3a8a] border-b-2 border-border print:border-gray-100 pb-1 mb-3 uppercase tracking-wider font-semibold">Qualification</h2>
                <div className="space-y-3">
                    {COMMON_DATA.education.map((edu, index) => (
                        <div key={index} className="text-[13.5px]">
                            <strong className="block font-semibold print:text-[#374151] mb-0.5">{edu.degree}</strong>
                            <div className="text-muted-foreground print:text-black">{edu.school} — {edu.period}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PERSONAL DETAILS */}
            <section className="mb-6">
                <h2 className="text-[14px] text-primary print:text-[#1f3a8a] border-b-2 border-border print:border-gray-100 pb-1 mb-3 uppercase tracking-wider font-semibold">Personal Details</h2>
                <div className="flex flex-col gap-1 text-[13.5px]">
                    <div><strong className="inline-block w-32 font-semibold print:text-[#374151]">Date of Birth:</strong> <span className="text-muted-foreground print:text-black">{COMMON_DATA.personal.dob}</span></div>
                    <div><strong className="inline-block w-32 font-semibold print:text-[#374151]">Languages:</strong> <span className="text-muted-foreground print:text-black">{COMMON_DATA.personal.languages}</span></div>
                    <div><strong className="inline-block w-32 font-semibold print:text-[#374151]">Residence:</strong> <span className="text-muted-foreground print:text-black">{COMMON_DATA.personal.residence}</span></div>
                </div>
            </section>

            {/* PRINT STYLES */}
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 12mm 10mm;
                    }
                    body {
                        background: white !important;
                    }
                    .print\\:hidden {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
}
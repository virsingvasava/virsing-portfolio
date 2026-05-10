"use client";

import { ReactNode } from "react";
import ResumeModal from "@/components/resumeModal";

interface ResumeLayoutProps {
    children: ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
    return <ResumeModal>{children}</ResumeModal>;
}
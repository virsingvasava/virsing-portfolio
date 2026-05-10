"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    TooltipArrow,
} from "@/components/ui/tooltip";
import { ACTIVE_PDF } from "@/data/resume-versions";

export default function ResumeModal({ children }) {
    const router = useRouter();
    const fileName = ACTIVE_PDF.split("/").pop() || "Resume.pdf";

    return (
        <TooltipProvider>
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 print:p-0 print:bg-white print:block print:relative print:z-0">
            <div className="bg-background text-foreground w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:max-w-none print:rounded-none print:bg-white print:text-black">

                {/* Header - Hidden when printing */}
                <div className="flex items-center justify-between border-b border-border p-4 print:hidden">
                    <h2 className="text-xl font-semibold">Hire Me</h2>
                    <div className="flex items-center gap-1">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href={ACTIVE_PDF}
                                    download={fileName}
                                    className="inline-flex items-center justify-center h-9 w-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                                >
                                    <Download className="w-5 h-5" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent 
                                className="bg-primary text-primary-foreground font-semibold px-3 py-1.5 rounded-xl shadow-xl border border-primary/10"
                                side="bottom"
                                sideOffset={5}
                            >
                                <p>Download PDF</p>
                                <TooltipArrow className="fill-primary" />
                            </TooltipContent>
                        </Tooltip>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.back()}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <span className="text-xl">✕</span>
                        </Button>
                    </div>
                </div>

                {/* Resume Content */}
                <div className="p-6 max-h-[85vh] overflow-auto print:max-h-none print:overflow-visible print:p-0">
                    {children}
                </div>
            </div>
        </div>
        </TooltipProvider>
    );
}
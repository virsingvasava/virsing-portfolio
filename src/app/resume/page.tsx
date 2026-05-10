import ResumeContent from "@/components/ResumeContent";
import { ACTIVE_MODE } from "@/data/resume-versions";

export default function ResumePage() {
    return (
        <div className="space-y-6">
            <ResumeContent mode={ACTIVE_MODE} />
        </div>
    );
}
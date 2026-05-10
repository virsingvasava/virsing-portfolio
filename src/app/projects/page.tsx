import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";

export const metadata: Metadata = {
    title: "Projects",
    description: "A showcase of my recent work and side projects.",
};

const PAGE_SIZE = 4;
const BLUR_FADE_DELAY = 0.04;

export default async function ProjectsPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string; tab?: string }>;
}) {
    const { page: pageParam, tab: tabParam } = await searchParams;
    const currentTab = tabParam || "all";

    const TABS = [
        { label: "All", id: "all" },
        { label: "Web Apps", id: "Web Apps" },
        { label: "eCommerce", id: "eCommerce" },
        { label: "CMS", id: "CMS" },
        { label: "SaaS", id: "SaaS" },
    ];

    // Filter projects based on the active tab
    const filteredProjects = DATA.projects.filter((project) => {
        if (currentTab === "all") return true;
        // Check if category exists on the project (we added it to resume.tsx)
        const projectCategory = (project as any).category;
        return projectCategory === currentTab;
    });

    const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
    const currentPage = normalizePage(pageParam, totalPages);
    const { items: paginatedProjects, pagination } = paginate(filteredProjects, {
        page: currentPage,
        pageSize: PAGE_SIZE,
    });

    return (
        <main className="container mx-auto py-12 max-w-4xl min-h-[80vh] flex flex-col">
            <section id="projects-header" className="mb-12">
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <div className="flex flex-col gap-y-4 items-center justify-center">
                        <div className="flex items-center w-full">
                            <div
                                className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
                            />
                            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                                <span className="text-background text-sm font-medium">My Projects</span>
                            </div>
                            <div
                                className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3 items-center justify-center mt-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                I like building things
                            </h2>
                            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-2xl">
                                I&apos;ve built a variety of projects ranging from scalable web
                                applications, eCommerce platforms, CMS solutions, REST APIs,
                                and business management systems. Some of these projects are
                                actively used by businesses and real users worldwide. Here are
                                a few of my favorites.
                            </p>
                        </div>
                    </div>
                </BlurFade>
            </section>

            {/* Tabs */}
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
                {/* Mobile: full-width scrollable row; sm+: centered pill */}
                <div className="mb-12 w-full overflow-x-auto scrollbar-hide sm:flex sm:justify-center">
                    <div className="flex items-center gap-2 p-2 min-w-max sm:min-w-0 sm:w-fit mx-auto border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5 rounded-full">
                        {TABS.map((tab) => {
                            const isActive = currentTab === tab.id;
                            return (
                                <Link
                                    key={tab.id}
                                    href={`/projects?tab=${tab.id}`}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        isActive
                                            ? "bg-background text-foreground shadow-sm border border-border"
                                            : "hover:bg-muted text-muted-foreground"
                                    }`}
                                >
                                    {tab.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </BlurFade>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 flex-1 auto-rows-max">
                {paginatedProjects.length > 0 ? (
                    paginatedProjects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))
                ) : (
                    <BlurFade delay={BLUR_FADE_DELAY * 3} className="col-span-full">
                        <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
                            <p className="text-muted-foreground text-center">
                                No projects found for this category.
                            </p>
                        </div>
                    </BlurFade>
                )}
            </div>

            {/* Pagination Controls */}
            {pagination.totalPages > 1 && (
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <div className="flex gap-3 flex-row items-center justify-between mt-12 pt-8 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                            Page {pagination.page} of {pagination.totalPages}
                        </div>
                        <div className="flex gap-2 sm:justify-end">
                            {pagination.hasPreviousPage ? (
                                <Link
                                    href={`/projects?tab=${currentTab}&page=${pagination.page - 1}`}
                                    className="h-8 w-fit px-4 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                    Previous
                                </Link>
                            ) : (
                                <span className="h-8 w-fit px-4 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                                    Previous
                                </span>
                            )}
                            {pagination.hasNextPage ? (
                                <Link
                                    href={`/projects?tab=${currentTab}&page=${pagination.page + 1}`}
                                    className="h-8 w-fit px-4 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                    Next
                                </Link>
                            ) : (
                                <span className="h-8 w-fit px-4 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                                    Next
                                </span>
                            )}
                        </div>
                    </div>
                </BlurFade>
            )}
        </main>
    );
}
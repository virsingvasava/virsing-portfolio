import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";

export const metadata: Metadata = {
  title: "Notes",
  description: "A collection of my notes on software engineering, cloud architecture, and development.",
};

const PAGE_SIZE = 10;
const BLUR_FADE_DELAY = 0.04;

export default async function NotesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  // Flatten the notes for pagination
  const allNotes = DATA.notes.flatMap(category => 
    category.items.map(item => ({ ...item, category: category.category }))
  );

  const totalPages = Math.ceil(allNotes.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  
  const { items: paginatedNotes, pagination } = paginate(allNotes, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  // Group the paginated notes by category
  const groupedNotes = paginatedNotes.reduce((acc, note) => {
    if (!acc[note.category]) {
      acc[note.category] = [];
    }
    acc[note.category].push(note);
    return acc;
  }, {} as Record<string, typeof paginatedNotes>);

  return (
    <main className="container mx-auto py-12 max-w-4xl min-h-[80vh] flex flex-col">
      <section id="notes-header" className="mb-12">
        <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col gap-y-4 items-center justify-center">
                <div className="flex items-center w-full">
                    <div
                        className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
                    />
                    <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                        <span className="text-background text-sm font-medium">My Notes</span>
                    </div>
                    <div
                        className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
                    />
                </div>
                <div className="flex flex-col gap-y-3 items-center justify-center mt-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
                        i like to learn
                    </h2>
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-2xl">
                        A passionate developer who believes in continuous learning. I study software engineering concepts deeply, write structured notes, and share them to help other developers grow while strengthening my own understanding.
                    </p>
                </div>
            </div>
        </BlurFade>
      </section>

      {paginatedNotes.length > 0 ? (
        <>
          <div className="flex flex-col gap-10 flex-1">
            {Object.entries(groupedNotes).map(([category, notes], idx) => (
              <BlurFade delay={BLUR_FADE_DELAY * 2 + idx * 0.05} key={category}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold tracking-tight">{category}</h3>
                  <ul className="flex flex-col gap-3 pl-0 list-none">
                    {notes.map((note, noteIdx) => (
                      <li key={noteIdx} className="text-muted-foreground hover:text-foreground transition-colors">
                        {note.internal ? (
                          <Link href={note.href} className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">
                            {note.title}
                          </Link>
                        ) : (
                          <a 
                            href={note.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
                          >
                            {note.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
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
                      href={`/notes?page=${pagination.page - 1}`}
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
                      href={`/notes?page=${pagination.page + 1}`}
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
        </>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2} className="col-span-full">
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              No notes available yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </main>
  );
}

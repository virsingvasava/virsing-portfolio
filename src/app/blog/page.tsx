import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

const PAGE_SIZE = 4;
const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  const posts = allPosts;
  const sortedPosts = [...posts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  return (
    <main className="container mx-auto py-12 max-w-4xl min-h-[80vh] flex flex-col">
      <section id="blog-header" className="mb-12">
        <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col gap-y-4 items-center justify-center">
                <div className="flex items-center w-full">
                    <div
                        className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
                    />
                    <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                        <span className="text-background text-sm font-medium">My Blog</span>
                    </div>
                    <div
                        className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
                    />
                </div>
                <div className="flex flex-col gap-y-3 items-center justify-center mt-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Thoughts & Articles
                    </h2>
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-2xl">
                        My thoughts on software development, engineering best practices, scalable architecture, and tech exploration.
                    </p>
                </div>
            </div>
        </BlurFade>
      </section>

      {paginatedPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 flex-1 auto-rows-max">
            {paginatedPosts.map((post, id) => {
              const slug = post._meta.path.replace(/\.mdx$/, "");
              return (
                <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={slug} className="h-full">
                  <BlogCard
                    href={`/blog/${slug}`}
                    title={post.title}
                    description={post.summary}
                    date={post.publishedAt}
                    author={post.author}
                    image={post.image}
                  />
                </BlurFade>
              );
            })}
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
                      href={`/blog?page=${pagination.page - 1}`}
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
                      href={`/blog?page=${pagination.page + 1}`}
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
              No blog posts yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </main>
  );
}

"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Markdown from "react-markdown";

function BlogImage({ src, alt }: { src: string; alt: string }) {
  if (!src) return <div className="w-full h-48 bg-muted" />;
  return <img src={src} alt={alt} className="w-full h-48 object-cover" />;
}

interface Props {
  title: string;
  href: string;
  description: string;
  date: string;
  author?: string;
  image?: string;
  className?: string;
}

export function BlogCard({ title, href, description, date, author, image, className }: Props) {
  return (
    <Link href={href} className={cn("flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200 group", className)}>
      <div className="relative shrink-0">
        <BlogImage src={image || ""} alt={title} />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold group-hover:text-primary transition-colors">{title}</h3>
          <time className="text-xs text-muted-foreground">
            {date} {author && `| ${author}`}
          </time>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
          <div className="mt-4 text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Read more <ArrowRight className="size-3" />
          </div>
        </div>
      </div>
    </Link>
  );
}

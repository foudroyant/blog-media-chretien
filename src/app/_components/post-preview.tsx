import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <div className="aspect-video overflow-hidden">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Link href={`/posts/${slug}`}>
            {title}
          </Link>
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 flex-grow line-clamp-3">
          {excerpt}
        </p>
        {/*<div className="mt-auto">
          <Avatar name={author.name} picture={author.picture} />
        </div>*/}
      </div>
    </article>
  );
}

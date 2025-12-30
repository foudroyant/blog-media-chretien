import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
  title?: string;
};

export function MoreStories({ posts, title = "Extraits récents" }: Props) {
  return (
    <section className="px-4 py-8 md:py-12">
      <h2 className="mb-6 md:mb-8 text-2xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={"/og/"+post.slug+".png"/*post.coverImage*/}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

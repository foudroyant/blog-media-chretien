import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import DateFormatter from "@/app/_components/date-formatter";
import Link from "next/link";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Container>
        <article className="max-w-4xl mx-auto py-8 md:py-12">
          {/* En-tête de l'article */}
          <header className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <DateFormatter dateString={post.date} />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              {post.title}
            </h1>

            {/* Image de couverture */}
            {post.slug && (
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8 bg-gradient-to-br from-yellow-100 via-white to-green-100 dark:from-slate-700 dark:via-slate-800 dark:to-slate-700">
                <img
                  src={`/og/${post.slug}.png`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Tags ou métadonnées supplémentaires */}
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-slate-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Message
              </span>
            </div>
          </header>

          {/* Corps de l'article */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PostBody content={content} />
          </div>

          {/* Actions de partage et discussion */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/blogs"
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Retour aux articles</span>
              </Link>

              <a
                href="https://wa.me/message/PE63FQO747POH1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Discuter sur WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Articles suggérés */}
          {(() => {
            const allPosts = getAllPosts();
            const currentIndex = allPosts.findIndex(p => p.slug === post.slug);
            const suggestedPosts = allPosts
              .filter((_, index) => index !== currentIndex)
              .slice(0, 3);

            if (suggestedPosts.length > 0) {
              return (
                <div className="mt-16 pt-12 border-t border-gray-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    À lire également
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {suggestedPosts.map((suggestedPost) => (
                      <Link
                        key={suggestedPost.slug}
                        href={`/posts/${suggestedPost.slug}`}
                        className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-slate-700"
                      >
                        <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-yellow-100 via-white to-green-100 dark:from-slate-700 dark:via-slate-800 dark:to-slate-700">
                          <img
                            src={`/og/${suggestedPost.slug}.png`}
                            alt={suggestedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors line-clamp-2">
                          {suggestedPost.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          <DateFormatter dateString={suggestedPost.date} />
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
          })()}
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: `${post.title} | Media Chrétien`,
    description: post.excerpt || "Extrait du Message du prophète Kacou Philippe",
    openGraph: {
      title: post.title,
      images: [`/og/${post.slug}.png`],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

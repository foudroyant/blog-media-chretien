import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function BlogsPage() {
  const allPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tous les articles
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Découvrez tous les extraits du Message du prophète Kacou Philippe
          </p>
        </div>

        {allPosts.length > 0 ? (
          <MoreStories posts={allPosts} title="" />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Aucun article disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

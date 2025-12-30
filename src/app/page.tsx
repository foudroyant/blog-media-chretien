import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();

  // Afficher seulement les 6 premiers articles sur la page d'accueil
  const recentPosts = allPosts.slice(0, 6);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Intro />

      {recentPosts.length > 0 && (
        <div className="max-w-7xl mx-auto">
          <MoreStories posts={recentPosts} title="Derniers extraits" />

          {allPosts.length > 6 && (
            <div className="text-center pb-12 px-4">
              <Link
                href="/blogs"
                className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base"
              >
                Voir tous les articles →
              </Link>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

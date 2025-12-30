// scripts/generate-images.ts
import { generateOgImage } from '../src/lib/generate-og';
import { getAllPosts } from '../src/lib/api';

async function main() {
  console.log('🎨 Génération des images Open Graph...\n');

  try {
    const posts = getAllPosts();

    if (posts.length === 0) {
      console.log('⚠️  Aucun article trouvé dans _posts/');
      return;
    }

    console.log(`📝 ${posts.length} article(s) trouvé(s)\n`);

    for (const post of posts) {
      try {
        await generateOgImage(post.title, post.slug);
      } catch (error) {
        console.error(`✗ Erreur pour ${post.slug}:`, error);
      }
    }

    console.log('\n✅ Génération terminée !');
  } catch (error) {
    console.error('❌ Erreur fatale:', error);
    process.exit(1);
  }
}

main();

import Link from 'next/link';
import Layout from '@/components/Layout';
import { getPosts, WordPressPost } from '@/lib/wordpress';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const posts = await getPosts();

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Aaron Heine
          </h1>
          <p className="text-xl text-gray-600">
            Life and designs of a dad in Atlanta Georgia.
          </p>
        </div>

        <div className="space-y-12">
          {posts.length === 0 ? (
            <p className="text-center text-gray-600">No posts found.</p>
          ) : (
            posts.map((post: WordPressPost) => (
              <article key={post.id} className="border-b border-gray-200 pb-8">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                    {post.title.rendered}
                  </h2>
                </Link>
                <time className="text-sm text-gray-500 mb-4 block">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <div
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more &rarr;
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

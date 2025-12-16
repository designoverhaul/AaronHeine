import { notFound } from 'next/navigation';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { getPostBySlug, getPosts } from '@/lib/wordpress';

export const revalidate = 60;

// Generate static paths for all posts
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <article id={`post-${post.id}`} className="single-post">
        <header className="entry-header">
          {post._embedded?.['wp:featuredmedia']?.[0] && (
            <div className="single-featured-image">
              <Image
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={
                  post._embedded['wp:featuredmedia'][0].alt_text ||
                  post.title.rendered
                }
                width={950}
                height={600}
                className="featured-thumb"
              />
            </div>
          )}
        </header>

        <div className="entry-content">
          <h1 className="page-title">{post.title.rendered}</h1>

          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>
    </Layout>
  );
}

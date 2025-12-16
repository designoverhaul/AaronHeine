import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { getPosts, WordPressPost } from '@/lib/wordpress';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <Layout>
      {posts.map((post: WordPressPost) => (
        <article key={post.id} id={`item post-${post.id}`} className="hentry">
          <header className="entry-header">
            <h1 className="entry-title">
              <Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
            </h1>

            <p className="entry-date">
              <i
                style={{
                  marginTop: '3px',
                  marginRight: '5px',
                  float: 'left',
                }}
                className="fas fa-calendar"
              ></i>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>

            {post._embedded?.['wp:featuredmedia']?.[0] && (
              <Link href={`/blog/${post.slug}`}>
                <div className="featured-image">
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
              </Link>
            )}
          </header>

          <div
            className="entry-excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </article>
      ))}
    </Layout>
  );
}

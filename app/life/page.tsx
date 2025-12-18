import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { getPosts, WordPressPost } from '@/lib/wordpress';
import { decodeHtmlEntities } from '@/lib/htmlDecode';

export const revalidate = 60;

const POSTS_PER_PAGE = 8;

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1', 10);
  
  const allPosts = await getPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  
  // Calculate pagination
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const posts = allPosts.slice(startIndex, endIndex);

  return (
    <Layout>
      {posts.map((post: WordPressPost) => (
        <article key={post.id} id={`item post-${post.id}`} className="hentry">
          <header className="entry-header">
            <h1 className="entry-title">
              <Link href={`/blog/${post.slug}`}>
                <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
            </h1>

            <p className="entry-date">
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
                    alt={decodeHtmlEntities(
                      post._embedded['wp:featuredmedia'][0].alt_text ||
                      post.title.rendered
                    )}
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

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="pagination">
          {currentPage > 1 ? (
            <Link href={`/life?page=${currentPage - 1}`} className="pagination-link pagination-prev">
              ←
            </Link>
          ) : (
            <span className="pagination-link pagination-disabled">←</span>
          )}
          
          <span className="pagination-info">
            {currentPage} / {totalPages}
          </span>
          
          {currentPage < totalPages ? (
            <Link href={`/life?page=${currentPage + 1}`} className="pagination-link pagination-next">
              →
            </Link>
          ) : (
            <span className="pagination-link pagination-disabled">→</span>
          )}
        </nav>
      )}
    </Layout>
  );
}

import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || '';

// WordPress Post Type
export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

// WordPress Page Type
export interface WordPressPage {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

// Fetch all posts (handles pagination)
export async function getPosts(): Promise<WordPressPost[]> {
  try {
    const allPosts: WordPressPost[] = [];
    let page = 1;
    let totalPages = 1;
    let hasMore = true;

    do {
      const response = await axios.get(
        `${API_URL}/posts?_embed&per_page=100&page=${page}&orderby=date&order=desc`
      );
      
      if (response.data.length === 0) {
        hasMore = false;
        break;
      }
      
      allPosts.push(...response.data);
      
      // Get total pages from response headers
      const totalPagesHeader = response.headers['x-wp-totalpages'];
      const totalPostsHeader = response.headers['x-wp-total'];
      
      if (totalPagesHeader) {
        totalPages = parseInt(totalPagesHeader, 10);
      }
      
      // If we got fewer posts than requested, we've reached the end
      if (response.data.length < 100) {
        hasMore = false;
      }
      
      page++;
    } while (hasMore && page <= totalPages);

    // Sort by date descending (newest first) to ensure consistent ordering
    return allPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Get total count of posts
export async function getPostsCount(): Promise<number> {
  try {
    const response = await axios.get(`${API_URL}/posts?per_page=1`);
    const totalPostsHeader = response.headers['x-wp-total'];
    return totalPostsHeader ? parseInt(totalPostsHeader, 10) : 0;
  } catch (error) {
    console.error('Error fetching posts count:', error);
    return 0;
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await axios.get(`${API_URL}/posts?slug=${slug}&_embed`);
    return response.data[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Fetch all pages
export async function getPages(): Promise<WordPressPage[]> {
  try {
    const response = await axios.get(`${API_URL}/pages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

// Fetch a single page by slug
export async function getPageBySlug(slug: string): Promise<WordPressPage | null> {
  try {
    const response = await axios.get(`${API_URL}/pages?slug=${slug}`);
    return response.data[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

// Test WordPress API connection
export async function testConnection(): Promise<boolean> {
  try {
    const response = await axios.get(API_URL.replace('/wp/v2', ''));
    return response.status === 200;
  } catch (error) {
    console.error('WordPress API connection failed:', error);
    return false;
  }
}

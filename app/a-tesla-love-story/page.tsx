import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Tesla Love Story – A Caraoke Comic | Aaron Heine',
  description: 'Inspired by true events. Elaborated on through a collection of stock photography.',
};

export default function TeslaLoveStory() {
  return (
    <Layout>
      <article>
        <div className="featured-image">
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/10/tesla.jpg"
            alt="Tesla Love Story"
            width={1900}
            height={970}
            className="featured-thumb"
          />
        </div>

        <h1 className="page-title">Tesla Love Story – A Caraoke Comic</h1>

        <div className="catPills">
          <Link href="/life">Humor</Link>
          <Link href="/life">Tesla</Link>
        </div>

        <div className="entry-content">
          <p>
            Inspired by true events. Elaborated on through a collection of stock photography.
          </p>
          
          <p>
            What is{' '}
            <a
              href="https://www.notateslaapp.com/tesla-reference/587/everything-about-tesla-caraoke-karaoke"
              rel="noopener noreferrer"
              target="_blank"
            >
              Caraoke
            </a>
            ?
          </p>

          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2023/12/tesla-caraoke-comic.jpg"
            alt="Tesla Caraoke Comic"
            width={1900}
            height={2400}
            className="aligncenter size-full"
          />

          <Link href="/life">
            <button>Back to Writing</button>
          </Link>
        </div>
      </article>
    </Layout>
  );
}

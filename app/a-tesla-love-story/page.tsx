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
            src="/tesla-love-story/tesla.jpg"
            alt="Tesla Love Story"
            width={1000}
            height={511}
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

          <h2>What is Caraoke?</h2>

          <Image
            src="/tesla-love-story/tesla-caraoke-comic.jpg"
            alt="Tesla Caraoke Comic"
            width={903}
            height={9876}
            className="aligncenter size-full"
          />

          <p style={{ color: '#b8b8b8', marginTop: '40px', fontSize: '13px' }}>
            Aaron Heine - 2024
          </p>

          <Link href="/life">
            <button>Back to Writing</button>
          </Link>
        </div>
      </article>
    </Layout>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function BlueBayouBoats() {
  return (
    <Layout>
      <article>
      <div className="featured-image">
        <Image
          src="https://wp.wp.aaronheine.com/wp-content/uploads/2023/11/bayou.png"
          alt="Blue Bayou Boats - Three custom boat models"
          width={1900}
          height={715}
          className="featured-thumb"
        />
      </div>

      <h1 className="page-title">Blue Bayou Boats</h1>

      <div className="catPills">
        <Link href="/portfolio">Case Study</Link>
        <Link href="/portfolio">Marketing</Link>
        <Link href="/portfolio">UI</Link>
        <Link href="/portfolio">UX</Link>
        <Link href="/portfolio">Web Design</Link>
      </div>

      <div className="entry-content">
        <h2>The Challenge</h2>
        <p>
          How can we fit a tremendous amount of options and information into one screen? This was
          the core UX challenge for creating an intuitive boat configuration tool.
        </p>

        <h2>The Solution</h2>
        <p>
          I implemented a three-column layout as a way to organize extensive content, focusing on
          features, options, and selections without requiring excessive clicking or scrolling.
        </p>

        <h2>Design System</h2>
        <p>
          The wireframe demonstrates the three-column structure. A carefully selected color guide
          reinforces a "rugged, no-nonsense" aesthetic, with orange reserved specifically for
          e-commerce elements to drive conversions.
        </p>

        <h2>Brand Alignment & Homepage</h2>
        <p>
          The design uses a responsive, fluid approach with percentage-based widths to minimize
          the need for media queries, ensuring the experience works seamlessly across all devices.
        </p>

        <h2>Product Strategy</h2>
        <p>
          A comprehensive site map was developed to illustrate how boat models and marketing content
          align across the entire platform, creating a cohesive customer journey.
        </p>

        <h2>Configuration Features</h2>
        <p>
          To assist buyers in the decision-making process, I added Save Configuration functionality
          and created three pre-built models: fishing-optimized, hunting-ready, and budget-friendly
          options.
        </p>

        <Link href="/portfolio">
          <button>Back to Portfolio</button>
        </Link>
      </div>
    </article>
    </Layout>
  );
}

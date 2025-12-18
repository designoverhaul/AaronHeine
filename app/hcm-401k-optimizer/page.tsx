import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ImageLightbox from '@/components/ImageLightbox';

export default function The401kOptimizer() {
  return (
    <Layout>
      <article>
      <div className="featured-image">
        <Image
          src="https://aaronheine.com/wp-content/uploads/2023/11/UI-UX.jpg"
          alt="The 401k Optimizer - UI/UX Design"
          width={1107}
          height={370}
          className="featured-thumb"
        />
      </div>

      <h1 className="page-title">The 401k Optimizer</h1>

      <div className="catPills">
        <Link href="/portfolio">Case Study</Link>
        <Link href="/portfolio">UI</Link>
        <Link href="/portfolio">UX</Link>
        <Link href="/portfolio">Web Design</Link>
      </div>

      <div className="entry-content">
        <ImageLightbox>
          <h2>Product Overview</h2>
        <p>
          The Optimizer analyzes 401k portfolios and recommends rebalancing strategies using the
          proprietary "HCM BuyLine" algorithm. This tool helps individual investors make informed
          decisions during market volatility.
        </p>

        <h2>Business Context</h2>
        <p>
          The product transitioned from a B2B model serving financial advisors to a B2B-to-B2C
          platform, enabling individual investors to directly access sophisticated portfolio
          management tools.
        </p>

        <h2>The Challenge</h2>
        <p>
          Two critical pain points emerged during user research:
        </p>
        <ul>
          <li>Manual company plan submission created unnecessary friction</li>
          <li>Required quarterly rebalancing was unclear and confusing to users</li>
        </ul>

        <h2>User Research</h2>
        <p>
          Through discovery sessions, I identified key user misconceptions. Many users believed
          that connecting their account meant the system would automatically rebalance their
          portfolio. In reality, users still needed to manually execute the recommended changes.
        </p>

        <Image
          src="https://aaronheine.com/wp-content/uploads/2021/04/Journey-map-scaled.jpg"
          alt="Journey map"
          width={2560}
          height={1411}
          className="aligncenter size-full"
        />

        <h2>Design Solutions</h2>
        <p>
          Based on research findings, I implemented several iterative improvements:
        </p>
        <ul>
          <li><strong>Streamlined Navigation:</strong> Simplified the information architecture to reduce cognitive load</li>
          <li><strong>Direct Institution Links:</strong> Added quick links to popular financial institutions for faster rebalancing</li>
          <li><strong>Vocabulary Standardization:</strong> Simplified language and created a consistent taxonomy across the product</li>
          <li><strong>Dashboard Redesign:</strong> Prioritized critical information and surfaced key actions</li>
          <li><strong>Enhanced Risk Controls:</strong> Improved risk tolerance settings for better personalization</li>
        </ul>

        <Image
          src="https://aaronheine.com/wp-content/uploads/2021/04/login-1.jpeg"
          alt="Login screen"
          width={920}
          height={430}
          className="alignleft size-full"
        />

        <Image
          src="https://aaronheine.com/wp-content/uploads/2021/04/Screen-One.jpeg"
          alt="Screen one"
          width={1161}
          height={1621}
          className="aligncenter size-full"
        />

        <Image
          src="https://aaronheine.com/wp-content/uploads/2021/05/Recomendations.jpeg"
          alt="Recommendations"
          width={2236}
          height={1615}
          className="aligncenter size-full"
        />

        <Image
          src="https://aaronheine.com/wp-content/uploads/2021/04/SDBA.jpeg"
          alt="SDBA banner"
          width={527}
          height={351}
          className="size-full"
        />

        <Image
          src="https://aaronheine.com/wp-content/uploads/2021/04/Dashboard2.jpeg"
          alt="Dashboard version 2"
          width={1200}
          height={1968}
          className="alignleft size-full"
          style={{ marginBottom: '30px' }}
        />

        <Image
          src="https://aaronheine.com/wp-content/uploads/2021/04/iFrame.jpeg"
          alt="iFrame"
          width={1134}
          height={824}
          className="alignnone size-full"
        />

        <h2>Guided Retirement Product</h2>
        <p>
          The product continued to evolve with additional features including marketing dashboards
          and administrative tools, creating a more comprehensive retirement planning platform.
        </p>

        <Image
          src="https://aaronheine.com/wp-content/uploads/2021/05/Participants-1024x498.jpg"
          alt="Participants"
          width={1378}
          height={670}
          className="alignnone size-full"
        />

        <Image
          src="https://aaronheine.com/wp-content/uploads/2021/05/Record-Keepers-1024x498.jpg"
          alt="Record Keepers"
          width={1378}
          height={670}
          className="alignnone size-full"
        />

        <Image
          src="https://aaronheine.com/wp-content/uploads/2021/05/Single-Participant.jpg"
          alt="Single Participant"
          width={1378}
          height={670}
          className="alignnone size-full"
        />

          <Link href="/portfolio">
            <button>Back to Portfolio</button>
          </Link>
        </ImageLightbox>
      </div>
    </article>
    </Layout>
  );
}

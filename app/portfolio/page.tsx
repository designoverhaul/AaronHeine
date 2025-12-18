import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ImageGallery from '@/components/ImageGallery';

export default function Portfolio() {
  return (
    <Layout>
      <main>
      {/* Case Studies Section */}
      <div className="caseStudies">
        <h1>Case Studies</h1>
        <hr className="gradientLine" />
      </div>

      {/* The 401k Optimizer */}
      <div className="caseStudies">
        <div className="titleArea">
          <h3>The 401k Optimizer</h3>
        </div>
        <p>
          The Optimizer is a tool that advises users on how to rebalance their 401k during times of market turbulence.
          The first step in making improvements was realizing just how challenging it can be to rebalance.
        </p>
        <Link href="/hcm-401k-optimizer">
          <Image
            src="https://aaronheine.com/wp-content/uploads/2023/11/UI-UX.jpg"
            alt="Logo for 401k Optimizer"
            width={1200}
            height={800}
            className="aligncenter size-full"
          />
        </Link>
      </div>

      {/* Equip */}
      <div className="caseStudies">
        <div className="titleArea">
          <h3>Equip</h3>
        </div>
        <p>
          Equip is a collaboration between myself and Kim Yeun. It facilitates the creation of goals for parents and their kids to complete together!
        </p>
        <Link href="/equip">
          <Image
            src="https://aaronheine.com/wp-content/uploads/2021/05/goals.jpg"
            alt="Equip graphic. Make goals, discover goals, dominate your day."
            width={1200}
            height={800}
            className="aligncenter size-full"
          />
        </Link>
      </div>

      {/* Harmonia */}
      <div className="caseStudies">
        <div className="titleArea">
          <h3>Harmonia</h3>
        </div>
        <p>
          This is a refactoring and rebranding for music composition software and grading dashboard.
        </p>
        <Link href="/harmonia">
          <Image
            src="https://aaronheine.com/wp-content/uploads/2024/01/violin.png"
            alt="Photo of teacher"
            width={1200}
            height={800}
            className="aligncenter size-full"
          />
        </Link>
      </div>

      {/* Blue Bayou Boats */}
      <div className="caseStudies">
        <div className="titleArea">
          <h3>Blue Bayou Boats</h3>
        </div>
        <p>
          Follow along as we make a complex boat building process as easy and fun as possible!
        </p>
        <Link href="/blue-bayou-boats">
          <Image
            src="https://aaronheine.com/wp-content/uploads/2023/11/bayou.png"
            alt="Three custom boat models"
            width={1200}
            height={800}
            className="aligncenter size-full"
          />
        </Link>
      </div>

      {/* From the Vault Section */}
      <div className="caseStudies" style={{ marginBottom: '44px', marginTop: '74px' }}>
        <h1>From the vault</h1>
        <hr className="gradientLine" />
      </div>

      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <ImageGallery>
          <div className="grid-work">
          <div className="wide">
            <img
              src="https://aaronheine.com/wp-content/uploads/2024/08/stan2.jpg"
              className="image"
              alt="Portfolio work"
            />
          </div>
          <div className="wide">
            <img
              src="https://aaronheine.com/wp-content/uploads/2024/01/Twist-Locs-Coils.jpg"
              className="image"
              alt="Portfolio work"
            />
          </div>
          <div className="tall">
            <img
              src="https://aaronheine.com/wp-content/uploads/2023/11/Supershot-e1701442706221.jpg"
              className="image"
              alt="Portfolio work"
            />
          </div>
          <div className="wide">
            <img
              src="https://aaronheine.com/wp-content/uploads/2024/01/HoganTaylor-UI-1280x960-1.jpg"
              className="image"
              alt="Portfolio work"
            />
          </div>
          <div className="big">
            <img
              src="https://aaronheine.com/wp-content/uploads/2023/11/walden-scaled-e1701442551670.jpg"
              className="image"
              alt="Portfolio work"
            />
          </div>
          <div className="wide">
            <img
              src="https://aaronheine.com/wp-content/uploads/2024/08/Emory-e1701442914953.jpg"
              className="image"
              alt="Portfolio work"
            />
          </div>
          <div className="wide">
            <img
              src="https://aaronheine.com/wp-content/uploads/2023/11/ActionMoves-e1701442942712.jpg"
              className="image"
              alt="Portfolio work"
            />
          </div>
        </div>
        </ImageGallery>
      </div>

      {/* Landing Pages Section */}
      <div className="caseStudies" style={{ marginBottom: '44px', marginTop: '74px' }}>
        <h1>Landing Pages</h1>
        <hr className="gradientLine" />
      </div>

      <center>
        <iframe
          className="mobileLandingPages"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FkPskA4EPntQXt1sNHOYcYd%2FUntitled%3Fnode-id%3D0-1%26t%3DQwSPmi7Z0eVPUQxe-1"
          allowFullScreen
        />
      </center>

      <center>
        <iframe
          className="desktopLandingPages"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="80%"
          height="750"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FkPskA4EPntQXt1sNHOYcYd%2FUntitled%3Fnode-id%3D0-1%26t%3DQwSPmi7Z0eVPUQxe-1"
          allowFullScreen
        />
      </center>

      <Link href="/resume">
        <button style={{ margin: '0 auto', width: '20rem', marginTop: '40px', marginBottom: '8px' }}>
          Visit my résumé
        </button>
      </Link>
    </main>
    </Layout>
  );
}
